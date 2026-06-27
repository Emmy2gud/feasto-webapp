import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Camera, Plus, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Addon {
  id: number;
  name: string;
  price: string;
}

const CATEGORIES = ["Main Course", "Starters", "Desserts", "Beverages", "Sides", "Specials"];

const AddFoodItemPage: React.FC = () => {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [addons, setAddons] = useState<Addon[]>([
    { id: 1, name: "", price: "" },
    { id: 2, name: "", price: "" },
  ]);

  const margin = price ? (parseFloat(price) * 0.3).toFixed(2) : "0.00";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const updateAddon = (id: number, field: "name" | "price", value: string) => {
    setAddons((prev) => prev.map((a) => (a.id === id ? { ...a, [field]: value } : a)));
  };

  const removeAddon = (id: number) => {
    setAddons((prev) => prev.filter((a) => a.id !== id));
  };

  const addAddon = () => {
    setAddons((prev) => [...prev, { id: Date.now(), name: "", price: "" }]);
  };

  return (
    <div className="space-y-5 pb-8">
      {/* Breadcrumb */}
      <div>
        <nav className="text-sm text-gray-500 mb-2">
          <Link to="/dashboard/menu" className="hover:text-gray-800">Menu</Link>
          <span className="mx-1.5">›</span>
          <span className="text-gray-800 font-medium">Add New Food Item</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Left: Form */}
        <div className="xl:col-span-2 space-y-4">
          {/* Item Information */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Item Information</h2>
            <p className="text-sm text-gray-500 mt-1 mb-5">Details about the culinary masterpiece you're adding to your collection.</p>

            <div className="space-y-5">
              <div>
                <Label className="text-sm font-semibold text-gray-900 mb-2 block">Item Name</Label>
                <Input
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="e.g. Saffron Infused Biryani"
                  className="border-gray-200 bg-gray-50 focus:bg-white focus:border-[#E87C2A] rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-semibold text-gray-900 mb-2 block">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="border-gray-200 bg-gray-50 rounded-xl">
                      <SelectValue placeholder="Main Course" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-900 mb-2 block">Base Price ($)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00"
                    className="border-gray-200 bg-gray-50 focus:bg-white focus:border-[#E87C2A] rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-900 mb-2 block">Description</Label>
                <Textarea
                  value={description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                  placeholder="Briefly describe ingredients, cooking method, and spice levels..."
                  rows={4}
                  className="border-gray-200 bg-gray-50 focus:bg-white focus:border-[#E87C2A] rounded-xl resize-none"
                />
              </div>
            </div>
          </div>

          {/* Add-ons & Options */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Add-ons & Options</h2>
            <p className="text-sm text-gray-500 mt-1 mb-5">Offer customization like extra toppings, sides, or preparation styles.</p>

            <div className="grid grid-cols-[1fr_1fr_auto] gap-x-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-1">
              <span>Option Name</span>
              <span>Add. Price ($)</span>
              <span />
            </div>

            <div className="space-y-3">
              {addons.map((addon, idx) => (
                <div key={addon.id} className="grid grid-cols-[1fr_1fr_auto] gap-x-3 items-center">
                  <Input
                    value={addon.name}
                    onChange={(e) => updateAddon(addon.id, "name", e.target.value)}
                    placeholder={idx === 0 ? "e.g. Extra Cheese" : "e.g. Extra Chicken"}
                    className="border-gray-200 bg-gray-50 focus:bg-white focus:border-[#E87C2A] rounded-xl"
                  />
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={addon.price}
                    onChange={(e) => updateAddon(addon.id, "price", e.target.value)}
                    placeholder="0.00"
                    className="border-gray-200 bg-gray-50 focus:bg-white focus:border-[#E87C2A] rounded-xl"
                  />
                  <button
                    onClick={() => removeAddon(addon.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors p-1"
                    aria-label="Remove option"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={addAddon}
              className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#E87C2A] hover:text-[#d06e20] transition-colors"
            >
              <Plus size={16} className="border border-[#E87C2A] rounded-full" /> Add Another Option
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-[#E87C2A] hover:bg-[#d06e20] text-white font-semibold px-8 py-3.5 rounded-2xl text-sm transition-colors">
              Add Item to Menu
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3.5 rounded-2xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* Media & Visibility */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Media & Visibility</h3>

            {/* Image upload */}
            <div
              className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center text-center cursor-pointer transition-colors mb-4 ${
                dragging ? "border-[#E87C2A] bg-orange-50" : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded-lg" />
              ) : (
                <>
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
                    <Camera size={22} className="text-[#E87C2A]" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Upload Image</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, .JPG UP TO 10MB</p>
                </>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>

            {/* Featured toggle */}
            <div className="flex items-start justify-between gap-3 p-3 bg-gray-50 rounded-xl mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">Featured Item</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Featured items appear at the top of your digital storefront for campus customers.
                </p>
              </div>
              <Switch
                checked={featured}
                onCheckedChange={setFeatured}
                className="data-[state=checked]:bg-[#E87C2A] flex-shrink-0 mt-0.5"
              />
            </div>

            {/* Estimated Margin */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Margin</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">${margin}</span>
                <span className="text-sm font-semibold text-green-600">
                  {price ? "+30%" : "+0%"}
                </span>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D2233 100%)" }}>
            <p className="text-xs font-bold text-[#E87C2A] mb-2">Pro Tip</p>
            <p className="text-sm text-white leading-relaxed">
              High-quality photos increase orders by up to 30% on campus apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItemPage;

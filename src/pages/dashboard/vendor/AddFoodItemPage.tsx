import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Camera,ArrowLeft } from "lucide-react";
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



const CATEGORIES = ["Main Course", "Starters", "Desserts", "Beverages", "Sides", "Specials"];

const AddFoodItemPage: React.FC = () => {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Main Course");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);


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

  return (
    <div className="space-y-6 pb-8 max-w-5xl">
    
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Add Menu Item</h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Add a new dish or beverage to your digital campus storefront.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2 space-y-6">
       
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
              Item Details
            </h2>

            <div className="space-y-4">
              <div>
                <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Item Name</Label>
                <Input
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="e.g. Saffron Infused Biryani"
                  className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="border-slate-200 bg-slate-50/50 rounded-lg text-sm">
                      <SelectValue placeholder="Main Course" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg">
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c} className="text-sm">
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Base Price ($)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00"
                    className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Description</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe ingredients, cooking method, spice levels, allergen notes..."
                  rows={3}
                  className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm resize-none"
                />
              </div>
            </div>
          </div>



          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/dashboard/menu")}
              className="bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Save Menu Item
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Media Upload */}
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Item Photo</h3>

            <div
              className={`border-2 border-dashed rounded-lg p-5 flex flex-col items-center text-center cursor-pointer transition-colors ${
                dragging
                  ? "border-[#ee8c2b] bg-orange-50/50"
                  : "border-slate-200 hover:border-slate-300 bg-slate-50/40"
              }`}
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-36 object-cover rounded-md"
                />
              ) : (
                <>
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-2 text-[#ee8c2b]">
                    <Camera size={20} />
                  </div>
                  <p className="text-xs font-semibold text-slate-700">Click to upload photo</p>
                  <p className="text-[11px] text-slate-400 mt-1">PNG, JPG up to 5MB</p>
                </>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Visibility toggle & Margins */}
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">Featured on Menu</p>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Pin this item at the top of your digital storefront.
                </p>
              </div>
              <Switch
                checked={featured}
                onCheckedChange={setFeatured}
                className="data-[state=checked]:bg-[#ee8c2b]"
              />
            </div>

            <div className="pt-3 border-t border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Estimated Net Margin
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">${margin}</span>
                <span className="text-xs font-semibold text-emerald-600">
                  {price ? "+30% est." : "—"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItemPage;

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Plus, Trash2, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";


interface Addon {
  id: number;
  name: string;
  price: string;
}

export default function AddAddonsPage() {
   
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [addons, setAddons] = useState<Addon[]>([
    { id: 1, name: "Extra Cheddar Cheese", price: "1.50" },
    { id: 2, name: "Gluten-Free Bun", price: "2.00" },
  ]);


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
 <div className="space-y-6 pb-8 max-w-5xl">
    
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Add Item addons</h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
         Add extra addons for a particular Item menu.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2 space-y-6">

          {/* Customization & Add-ons */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Customization & Add-ons</h2>
                <p className="text-xs text-slate-500">Allow customers to choose extras, sides, or dressing.</p>
              </div>
              <button
                type="button"
                onClick={addAddon}
                className="flex items-center gap-1 text-xs font-semibold text-[#ee8c2b] hover:text-[#d6761f] cursor-pointer"
              >
                <Plus size={14} /> Add Option
              </button>
            </div>

            <div className="space-y-3">
              {addons.map((addon) => (
                <div key={addon.id} className="flex items-center gap-2">
                  <Input
                    value={addon.name}
                    onChange={(e) => updateAddon(addon.id, "name", e.target.value)}
                    placeholder="Option name (e.g. Extra Cheese)"
                    className="flex-1 border-slate-200 bg-slate-50/50 rounded-lg text-sm"
                  />
                  <div className="w-28 relative">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400">$</span>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={addon.price}
                      onChange={(e) => updateAddon(addon.id, "price", e.target.value)}
                      placeholder="0.00"
                      className="pl-6 border-slate-200 bg-slate-50/50 rounded-lg text-sm"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAddon(addon.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                    aria-label="Remove option"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
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
        </div>
      </div>
    </div>
  )
}

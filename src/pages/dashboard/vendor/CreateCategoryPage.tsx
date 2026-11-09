import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ImagePlus, Star, CircleCheck, ArrowLeft, ArrowRight, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CreateCategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

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
    <div className="space-y-6 pb-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Create Menu Category</h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Group your dishes into structured, appetizing collections for customers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div>
              <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Category Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Signature Bowls, Wood-Fired Pizzas, Cold Drinks"
                className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Description</Label>
              <Textarea
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                placeholder="Briefly describe what makes this category special..."
                rows={4}
                className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm resize-none"
              />
              <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
                <Info size={12} /> Visible under category section on the customer app.
              </p>
            </div>
          </div>

          {/* Visibility */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center text-[#ee8c2b]">
                <Star size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Featured Category</p>
                <p className="text-xs text-slate-500">Showcase this category at the top of your store menu.</p>
              </div>
            </div>
            <Switch
              checked={featured}
              onCheckedChange={setFeatured}
              className="data-[state=checked]:bg-[#ee8c2b]"
            />
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/dashboard/categories")}
              className="bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all shadow-xs cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <span>Save Category</span>
              <ArrowRight size={15} />
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
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Category Banner</h3>
            <div
              className={`border-2 border-dashed rounded-lg p-5 flex flex-col items-center text-center cursor-pointer transition-colors ${
                dragging ? "border-[#ee8c2b] bg-orange-50/50" : "border-slate-200 hover:border-slate-300 bg-slate-50/40"
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
                <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded-md" />
              ) : (
                <>
                  <ImagePlus size={24} className="text-slate-400 mb-2" />
                  <p className="text-xs font-semibold text-slate-700">Upload banner image</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">JPG or PNG up to 5MB</p>
                </>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Tips</p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CircleCheck size={14} className="text-[#ee8c2b] mt-0.5 shrink-0" />
                Keep category names short and familiar.
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck size={14} className="text-[#ee8c2b] mt-0.5 shrink-0" />
                Aim for 4–8 items per category for easy scrolling.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryPage;

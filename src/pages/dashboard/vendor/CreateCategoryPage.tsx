import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImagePlus, Star, CircleCheck, ArrowRight, Info } from "lucide-react";
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
    <div className="space-y-5 pb-8">
      {/* Breadcrumb + Header */}
      <div>
        <nav className="text-sm text-gray-500 mb-2">
          <Link to="/dashboard/categories" className="hover:text-gray-800">Categories</Link>
          <span className="mx-1.5">›</span>
          <span className="text-gray-800 font-medium">New Category</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">Create New Category</h1>
        <p className="text-sm text-gray-500 mt-1">Organize your menu offerings with detailed, appetizing categories.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Left: Form */}
        <div className="xl:col-span-2 space-y-4">
          {/* Basic Info Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="space-y-5">
              <div>
                <Label className="text-sm font-semibold text-gray-900 mb-2 block">Category Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Signature Bowls, Wood-Fired Pizzas"
                  className="border-gray-200 bg-gray-50 focus:bg-white focus:border-[#E87C2A] focus:ring-[#E87C2A]/20 rounded-xl"
                />
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-900 mb-2 block">Description</Label>
                <Textarea
                  value={description}
                   onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                  placeholder="Describe what makes this category special. This will be visible to customers."
                  rows={5}
                  className="border-gray-200 bg-gray-50 focus:bg-white focus:border-[#E87C2A] focus:ring-[#E87C2A]/20 rounded-xl resize-none"
                />
                <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                  <Info size={11} /> Recommended: 150–300 characters for optimal display.
                </p>
              </div>
            </div>
          </div>

          {/* Display Settings Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Display Settings</p>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <Star size={18} className="text-[#E87C2A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Featured Category</p>
                  <p className="text-xs text-gray-500">Promote this category at the top of your digital menu.</p>
                </div>
              </div>
              <Switch
                checked={featured}
                onCheckedChange={setFeatured}
                className="data-[state=checked]:bg-[#E87C2A]"
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* Image Upload */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Category Image</p>
            <div
              className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center text-center transition-colors cursor-pointer ${
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
                  <ImagePlus size={28} className="text-gray-300 mb-3" />
                  <p className="text-sm font-medium text-gray-700">Drop your image here</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                  <button
                    type="button"
                    className="mt-3 px-4 py-1.5 text-xs font-medium border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400"
                    onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}
                  >
                    Browse Files
                  </button>
                </>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>
            <p className="text-xs text-[#E87C2A] mt-3 flex items-start gap-1.5">
              <Info size={11} className="mt-0.5 flex-shrink-0" />
              High-quality photos of signature dishes increase conversion by up to 24%.
            </p>
          </div>

          {/* CTA Buttons */}
          <button className="w-full bg-[#E87C2A] hover:bg-[#d06e20] text-white font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm">
            Create Category <ArrowRight size={16} />
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-full py-3.5 rounded-2xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          {/* Quick Tips */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Quick Tips</p>
            <ul className="space-y-2.5">
              {[
                "Use clear, plural nouns (e.g. 'Entrees' instead of 'Food')",
                "Categorize by meal type or dietary restrictions",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-xs text-gray-600">
                  <CircleCheck size={14} className="text-[#E87C2A] mt-0.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryPage;

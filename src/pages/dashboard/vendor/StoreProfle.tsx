import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ImagePlus, CircleCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const StoreProfile: React.FC = () => {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [storeName, setStoreName] = useState("Campus Grill");
  const [cuisineType, setCuisineType] = useState("Burgers, Fries & Shakes");
  const [email, setEmail] = useState("vendor@campusgrill.com");
  const [phone, setPhone] = useState("+1 (555) 234-5678");
  const [address, setAddress] = useState("Student Activity Center, North Wing, Booth 4");
  const [description, setDescription] = useState(
    "Serving freshly smashed burgers, crispy loaded fries, and thick shakes to campus students and staff since 2022."
  );
  const [imagePreview, setImagePreview] = useState<string | null>(
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop"
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 pb-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Store Profile</h1>
        <p className="text-sm text-slate-500 font-normal mt-0.5">
          Manage your restaurant details, location, and customer-facing branding.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <CircleCheck className="w-4 h-4 text-emerald-600" />
          Store profile details have been saved successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
              Store Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Store Name</Label>
                <Input
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="e.g. Campus Grill"
                  className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm"
                />
              </div>

              <div>
                <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Cuisine Type</Label>
                <Input
                  value={cuisineType}
                  onChange={(e) => setCuisineType(e.target.value)}
                  placeholder="e.g. Burgers, Wings, Rice"
                  className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm"
                />
              </div>

              <div>
                <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Phone Number</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Business Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vendor@example.com"
                  className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">Kitchen / Campus Address</Label>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Building, Floor, Room or Booth Number"
                  className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <Label className="text-xs font-semibold text-slate-700 mb-1.5 block">About the Kitchen</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20 rounded-lg text-sm resize-none"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Save Profile Changes
            </button>
            <button
              type="button"
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
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Store Cover Photo</h3>
            <div
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-slate-200 hover:border-slate-300 rounded-lg p-3 text-center cursor-pointer transition-colors"
            >
              {imagePreview ? (
                <div className="relative group">
                  <img src={imagePreview} alt="Cover" className="w-full h-36 object-cover rounded-md" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center text-white text-xs font-semibold">
                    Change Photo
                  </div>
                </div>
              ) : (
                <div className="py-6">
                  <ImagePlus className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                  <p className="text-xs font-semibold text-slate-700">Upload store cover</p>
                </div>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-3 text-xs text-slate-600">
            <p className="font-bold uppercase tracking-wider text-slate-400">Store Status</p>
            <div className="flex items-center gap-2 text-emerald-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Store is currently Live & Open
            </div>
            <p className="text-slate-500 leading-relaxed">
              To pause incoming orders temporarily, toggle the Store Status button located in the top navigation bar.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StoreProfile;

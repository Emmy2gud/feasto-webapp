import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Star,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface Category {
  id: number;
  name: string;
  description: string;
  itemCount: number;
  featured: boolean;
  active: boolean;
  image?: string;
  color: string;
}

const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: "Main Course", description: "Hearty full meals and rice dishes.", itemCount: 8, featured: true, active: true, color: "bg-orange-100 text-orange-600" },
  { id: 2, name: "Starters", description: "Light bites, snacks and appetisers.", itemCount: 5, featured: false, active: true, color: "bg-amber-100 text-amber-600" },
  { id: 3, name: "Beverages", description: "Chilled drinks, juices and smoothies.", itemCount: 6, featured: true, active: true, color: "bg-sky-100 text-sky-600" },
  { id: 4, name: "Sides", description: "Perfect accompaniments for your meal.", itemCount: 4, featured: false, active: true, color: "bg-lime-100 text-lime-600" },
  { id: 5, name: "Desserts", description: "Sweet treats to finish your meal.", itemCount: 3, featured: false, active: true, color: "bg-pink-100 text-pink-600" },
  { id: 6, name: "Specials", description: "Limited-time and seasonal dishes.", itemCount: 2, featured: false, active: false, color: "bg-purple-100 text-purple-600" },
];

export default function CategoriesListingPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES);
  const [search, setSearch] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  const toggleFeatured = (id: number) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, featured: !c.featured } : c))
    );
  };

  const toggleActive = (id: number) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
    );
  };

  const deleteCategory = (id: number) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
    setDeleteConfirmId(null);
  };

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Categories</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Organise your menu into clear, browsable sections
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/categories/new")}
          className="inline-flex items-center gap-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-all shadow-xs active:scale-95 cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: "Total Categories", value: categories.length, color: "text-slate-900" },
          { label: "Active", value: categories.filter((c) => c.active).length, color: "text-emerald-600" },
          { label: "Featured", value: categories.filter((c) => c.featured).length, color: "text-[#ee8c2b]" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200/80 shadow-xs px-4 py-3">
            <p className="text-xs text-slate-500 font-medium">{s.label}</p>
            <p className={`text-xl font-bold mt-0.5 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
        />
      </div>

      {/* Category Cards */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-12 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-3">
            <LayoutGrid className="w-6 h-6 text-slate-400" />
          </div>
          <p className="text-sm font-semibold text-slate-700">No categories found</p>
          <p className="text-xs text-slate-400 mt-1">Create your first category to organise your menu.</p>
          <button
            onClick={() => navigate("/dashboard/categories/new")}
            className="mt-4 inline-flex items-center gap-1.5 bg-[#ee8c2b] text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[#d6761f] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Category
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="divide-y divide-slate-100">
            {filtered.map((cat) => (
              <div
                key={cat.id}
                className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50/60 ${!cat.active ? "opacity-60" : ""}`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cat.color}`}>
                  <LayoutGrid className="w-5 h-5" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-slate-900">{cat.name}</span>
                    {cat.featured && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-50 text-[#ee8c2b] border border-orange-100">
                        <Star className="w-2.5 h-2.5" /> Featured
                      </span>
                    )}
                    {!cat.active && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">{cat.description}</p>
                </div>

                {/* Item Count */}
                <button
                  onClick={() => navigate(`/dashboard/menu?category=${encodeURIComponent(cat.name)}`)}
                  className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#ee8c2b] transition-colors cursor-pointer shrink-0"
                >
                  {cat.itemCount} items <ArrowRight className="w-3 h-3" />
                </button>

                {/* Featured Toggle */}
                <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                  <span className="text-[11px] text-slate-400 font-medium">Featured</span>
                  <Switch
                    checked={cat.featured}
                    onCheckedChange={() => toggleFeatured(cat.id)}
                    className="data-[state=checked]:bg-[#ee8c2b] h-4 w-7"
                  />
                </div>

                {/* Visible Toggle */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="hidden sm:inline text-[11px] text-slate-400 font-medium">Visible</span>
                  <Switch
                    checked={cat.active}
                    onCheckedChange={() => toggleActive(cat.id)}
                    className="data-[state=checked]:bg-emerald-500 h-4 w-7"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => navigate("/dashboard/categories/new")}
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                    title="Edit category"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  {deleteConfirmId === cat.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => deleteCategory(cat.id)}
                        className="px-2 py-1 rounded-md bg-rose-600 text-white text-[10px] font-bold cursor-pointer hover:bg-rose-700 transition-colors"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(null)}
                        className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold cursor-pointer hover:bg-slate-200 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirmId(cat.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


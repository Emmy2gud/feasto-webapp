import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Plus,
  Search,
  MoreVertical,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  UtensilsCrossed,
  NotebookPen,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  available: boolean;
  featured: boolean;
  orders: number;
  image?: string;
  description: string;
}

const MOCK_ITEMS: MenuItem[] = [
  { id: 1, name: "Jollof Rice & Chicken", category: "Main Course", price: 8.5, available: true, featured: true, orders: 142, description: "Smoky party jollof with grilled chicken and coleslaw." },
  { id: 2, name: "Spicy Suya Wrap", category: "Starters", price: 5.0, available: true, featured: false, orders: 87, description: "Tender beef suya in a toasted wrap with pepper sauce." },
  { id: 3, name: "Chapman Cocktail", category: "Beverages", price: 2.5, available: true, featured: false, orders: 210, description: "Classic Nigerian fruit punch — chilled and refreshing." },
  { id: 4, name: "Egusi Soup & Eba", category: "Main Course", price: 7.0, available: false, featured: false, orders: 54, description: "Ground melon seed soup with fermented locust beans and eba." },
  { id: 5, name: "Chin Chin Snack Pack", category: "Sides", price: 1.5, available: true, featured: false, orders: 320, description: "Crunchy, lightly sweetened chin chin in a 100g pack." },
  { id: 6, name: "Puff Puff (6 pcs)", category: "Starters", price: 2.0, available: true, featured: true, orders: 198, description: "Soft, fluffy deep-fried dough balls — a campus favourite." },
  { id: 7, name: "Mango Smoothie", category: "Beverages", price: 3.0, available: false, featured: false, orders: 61, description: "Blended fresh mango with a hint of ginger." },
  { id: 8, name: "Vanilla Doughnut", category: "Desserts", price: 1.8, available: true, featured: false, orders: 90, description: "Glazed vanilla ring doughnut, baked fresh daily." },
];

const CATEGORIES = ["All", "Main Course", "Starters", "Beverages", "Sides", "Desserts", "Specials"];

function MenuItemCard({ item, onToggle, onDelete }: { item: MenuItem; onToggle: (id: number) => void; onDelete: (id: number) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`bg-white rounded-xl border shadow-xs overflow-hidden transition-all group ${item.available ? "border-slate-200/80" : "border-slate-200/50 opacity-70"}`}>
     
      <div className="relative h-32 bg-slate-100">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <UtensilsCrossed className="w-8 h-8 text-slate-300" />
          </div>
        )}
     
        {item.featured && (
          <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-500 text-white">
            Featured
          </span>
        )}
       
        {!item.available && (
          <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-700 text-white">
            Hidden
          </span>
        )}
      
        <div className="absolute top-2 right-2">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 bg-white/90 backdrop-blur-sm rounded-md text-slate-500 hover:text-slate-800 shadow-xs transition-colors cursor-pointer"
            >
              <MoreVertical className="w-3.5 h-3.5" />
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 top-7 z-20 w-36 bg-white rounded-lg border border-slate-200/80 shadow-lg py-1 overflow-hidden">
                  <Link
                  to={`/dashboard/addons/create/${item.id}`}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                   <NotebookPen className="w-3.5 h-3.5" /> Add Add-ons
                  </Link>
                  <Link
                  to={`/dashboard/menu/add${item.id}`}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <Pencil className="w-3.5 h-3.5" /> Edit Item
                  </Link>
                  <button
                    onClick={() => { setMenuOpen(false); onToggle(item.id); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {item.available ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    {item.available ? "Hide Item" : "Show Item"}
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <button
                    onClick={() => { setMenuOpen(false); onDelete(item.id); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>

                </div>
              </>
            )}
          </div>
        </div>
      </div>


      <div className="p-4 space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-slate-900 leading-tight">{item.name}</h3>
            <span className="text-sm font-bold text-[#ee8c2b] shrink-0">₦{item.price.toFixed(2)}</span>
          </div>
          <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">
            {item.category}
          </span>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">{item.description}</p>
        </div>

     
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-[11px] text-slate-400 font-medium">{item.orders} orders</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-500 font-medium">{item.available ? "Visible" : "Hidden"}</span>
            <Switch
              checked={item.available}
              onCheckedChange={() => onToggle(item.id)}
              className="data-[state=checked]:bg-emerald-500 h-4 w-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuListingPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<MenuItem[]>(MOCK_ITEMS);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleAvailability = (id: number) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, available: !item.available } : item));
  };

  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filtered = items.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || item.category === activeCategory;
    return matchSearch && matchCat;
  });

  const availableCount = items.filter((i) => i.available).length;
  const hiddenCount = items.filter((i) => !i.available).length;

  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Menu Items</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Manage your digital menu — {availableCount} visible, {hiddenCount} hidden
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/menu/add")}
          className="inline-flex items-center gap-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-all shadow-xs active:scale-95 cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          Add Menu Item
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Items", value: items.length, color: "text-slate-900" },
          { label: "Visible", value: availableCount, color: "text-emerald-600" },
          { label: "Hidden", value: hiddenCount, color: "text-slate-500" },
          { label: "Featured", value: items.filter((i) => i.featured).length, color: "text-[#ee8c2b]" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200/80 shadow-xs px-4 py-3">
            <p className="text-xs text-slate-500 font-medium">{s.label}</p>
            <p className={`text-xl font-bold mt-0.5 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1.5 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#ee8c2b] text-white shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-12 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-3">
            <UtensilsCrossed className="w-6 h-6 text-slate-400" />
          </div>
          <p className="text-sm font-semibold text-slate-700">No items found</p>
          <p className="text-xs text-slate-400 mt-1">Try adjusting your search or category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onToggle={toggleAvailability}
              onDelete={deleteItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}


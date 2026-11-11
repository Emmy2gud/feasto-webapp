import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Search,
  Trash2,
  Pencil,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  Check,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface Addon {
  id: number;
  name: string;
  price: number;
  required: boolean;
}

interface AddonGroup {
  id: number;
  menuItem: string;
  category: string;
  addons: Addon[];
}

const MOCK_GROUPS: AddonGroup[] = [
  {
    id: 1,
    menuItem: "Jollof Rice & Chicken",
    category: "Main Course",
    addons: [
      { id: 101, name: "Extra Chicken", price: 2.5, required: false },
      { id: 102, name: "Extra Sauce", price: 0.5, required: false },
      { id: 103, name: "No Pepper", price: 0, required: false },
    ],
  },
  {
    id: 2,
    menuItem: "Spicy Suya Wrap",
    category: "Starters",
    addons: [
      { id: 201, name: "Extra Suya", price: 1.5, required: false },
      { id: 202, name: "Gluten-Free Wrap", price: 1.0, required: false },
    ],
  },
  {
    id: 3,
    menuItem: "Chapman Cocktail",
    category: "Beverages",
    addons: [
      { id: 301, name: "Extra Sweet", price: 0, required: false },
      { id: 302, name: "Less Ice", price: 0, required: false },
      { id: 303, name: "Large Cup", price: 0.8, required: false },
    ],
  },
  {
    id: 4,
    menuItem: "Puff Puff (6 pcs)",
    category: "Starters",
    addons: [
      { id: 401, name: "Extra 3 Pcs", price: 1.0, required: false },
      { id: 402, name: "Chocolate Dip", price: 0.75, required: false },
    ],
  },
];

function AddonRow({
  addon,
  onDelete,
  onSave,
}: {
  addon: Addon;
  onDelete: (id: number) => void;
  onSave: (id: number, name: string, price: number) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(addon.name);
  const [editPrice, setEditPrice] = useState(String(addon.price));

  const handleSave = () => {
    onSave(addon.id, editName, parseFloat(editPrice) || 0);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditName(addon.name);
    setEditPrice(String(addon.price));
    setEditing(false);
  };

  return (
    <div className="flex items-center gap-3 py-2.5 px-4 hover:bg-slate-50/60 group transition-colors">
      {editing ? (
        <>
          <Input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="flex-1 h-7 text-xs border-slate-200 bg-white rounded-md focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20"
          />
          <div className="w-24 relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[11px] text-slate-400">₦</span>
            <Input
              type="number"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              className="pl-6 h-7 text-xs border-slate-200 bg-white rounded-md focus:border-[#ee8c2b] focus:ring-[#ee8c2b]/20"
              min="0"
              step="0.01"
            />
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleSave}
              className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-md transition-colors cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleCancel}
              className="p-1.5 bg-slate-100 text-slate-500 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      ) : (
        <>
          <span className="flex-1 text-sm text-slate-700 font-medium">{addon.name}</span>
          <span className="text-sm font-semibold text-slate-900 w-20 text-right">
            {addon.price === 0 ? <span className="text-slate-400 font-normal text-xs">Free</span> : `₦${addon.price.toFixed(2)}`}
          </span>
          <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setEditing(true)}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onDelete(addon.id)}
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function AddonGroupCard({ group, onDeleteAddon, onSaveAddon, onAddAddon }: {
  group: AddonGroup;
  onDeleteAddon: (groupId: number, addonId: number) => void;
  onSaveAddon: (groupId: number, addonId: number, name: string, price: number) => void;
  onAddAddon: (groupId: number) => void;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
      {/* Group Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50/60 transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-[#ee8c2b]" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">{group.menuItem}</p>
            <p className="text-xs text-slate-400">{group.category} · {group.addons.length} option{group.addons.length !== 1 ? "s" : ""}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
            {group.addons.length} add-ons
          </span>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </button>

      {/* Addon Rows */}
      {expanded && (
        <div className="border-t border-slate-100">
          {/* Column headers */}
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-50/60 border-b border-slate-100">
            <span className="flex-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Option Name</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 w-20 text-right">Price</span>
            <span className="w-16" />
          </div>

          {group.addons.length === 0 ? (
            <div className="px-5 py-6 text-center">
              <p className="text-xs text-slate-400">No add-ons yet. Add an option below.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100/80">
              {group.addons.map((addon) => (
                <AddonRow
                  key={addon.id}
                  addon={addon}
                  onDelete={(id) => onDeleteAddon(group.id, id)}
                  onSave={(id, name, price) => onSaveAddon(group.id, id, name, price)}
                />
              ))}
            </div>
          )}

          {/* Add Addon */}
          <div className="px-4 py-3 border-t border-slate-100">
            <button
              onClick={() => onAddAddon(group.id)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ee8c2b] hover:text-[#d6761f] transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Option
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AddonsListingPage() {
  const navigate = useNavigate();
  const [groups, setGroups] = useState<AddonGroup[]>(MOCK_GROUPS);
  const [search, setSearch] = useState("");

  const filteredGroups = groups.filter((g) =>
    g.menuItem.toLowerCase().includes(search.toLowerCase()) ||
    g.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalAddons = groups.reduce((sum, g) => sum + g.addons.length, 0);

  const handleDeleteAddon = (groupId: number, addonId: number) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? { ...g, addons: g.addons.filter((a) => a.id !== addonId) }
          : g
      )
    );
  };

  const handleSaveAddon = (groupId: number, addonId: number, name: string, price: number) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? { ...g, addons: g.addons.map((a) => (a.id === addonId ? { ...a, name, price } : a)) }
          : g
      )
    );
  };

  const handleAddAddon = (groupId: number) => {
    const newAddon: Addon = { id: Date.now(), name: "New Option", price: 0, required: false };
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId ? { ...g, addons: [...g.addons, newAddon] } : g
      )
    );
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Add-ons & Options</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Manage customisation options for each menu item
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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: "Items with Add-ons", value: groups.length, color: "text-slate-900" },
          { label: "Total Options", value: totalAddons, color: "text-[#ee8c2b]" },
          { label: "Free Options", value: groups.flatMap((g) => g.addons).filter((a) => a.price === 0).length, color: "text-emerald-600" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200/80 shadow-xs px-4 py-3">
            <p className="text-xs text-slate-500 font-medium">{s.label}</p>
            <p className={`text-xl font-bold mt-0.5 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Tip Banner */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-3.5 flex items-start gap-3">
        <SlidersHorizontal className="w-4 h-4 text-[#ee8c2b] mt-0.5 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-slate-800">Add-ons are grouped by menu item</p>
          <p className="text-xs text-slate-500 mt-0.5">
            To add customisation options to a new item, first create the item via{" "}
            <button onClick={() => navigate("/dashboard/menu")} className="text-[#ee8c2b] font-semibold hover:underline cursor-pointer">
              Menu Items
            </button>
            , then manage its add-ons here.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search by item or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
        />
      </div>

      {/* Groups */}
      {filteredGroups.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-12 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-3">
            <SlidersHorizontal className="w-6 h-6 text-slate-400" />
          </div>
          <p className="text-sm font-semibold text-slate-700">No add-on groups found</p>
          <p className="text-xs text-slate-400 mt-1">Add menu items first, then configure their options here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredGroups.map((group) => (
            <AddonGroupCard
              key={group.id}
              group={group}
              onDeleteAddon={handleDeleteAddon}
              onSaveAddon={handleSaveAddon}
              onAddAddon={handleAddAddon}
            />
          ))}
        </div>
      )}
    </div>
  );
}


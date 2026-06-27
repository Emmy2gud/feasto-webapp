import { useState } from "react";
import {
  Utensils,
  Coffee,
  Pizza,
  Soup,
  MapPin,
  Clock,
  Filter,
  SlidersHorizontal,
  Flame,
  CheckCircle
} from "lucide-react";

interface Order {
  id: string;
  restaurant: string;
  orderRef: string;
  earnings: string;
  surge?: string;
  pickup: string;
  dropoff: string;
  distance: string;
  estTime: string;
  isUrgent: boolean;
  iconBg: string;
  icon: typeof Utensils;
  iconColor: string;
}

const initialOrders: Order[] = [
  {
    id: "o1",
    restaurant: "The Spice Tavern",
    orderRef: "#SF-8821",
    earnings: "$12.50",
    surge: "+ $2.00 Surge",
    pickup: "Central Dining Hall, Block B",
    dropoff: "Engineering Research Park, Room 402",
    distance: "1.2 miles",
    estTime: "~15 mins",
    isUrgent: true,
    iconBg: "bg-orange-50",
    icon: Utensils,
    iconColor: "text-[#ee8c2b]"
  },
  {
    id: "o2",
    restaurant: "Saffron Brews",
    orderRef: "#SF-8845",
    earnings: "$6.75",
    surge: "Standard Fare",
    pickup: "West Gate Bakery",
    dropoff: "Library Plaza, Entrance North",
    distance: "0.5 miles",
    estTime: "~8 mins",
    isUrgent: false,
    iconBg: "bg-sky-50",
    icon: Coffee,
    iconColor: "text-sky-500"
  },
  {
    id: "o3",
    restaurant: "Campus Kitchen",
    orderRef: "#SF-8856",
    earnings: "$9.25",
    surge: "Standard Fare",
    pickup: "Science Block Cafeteria",
    dropoff: "Student Sports Center",
    distance: "0.8 miles",
    estTime: "~12 mins",
    isUrgent: false,
    iconBg: "bg-green-50",
    icon: Soup,
    iconColor: "text-green-600"
  },
  {
    id: "o4",
    restaurant: "Slice & Dice",
    orderRef: "#SF-8861",
    earnings: "$15.00",
    surge: "+ $3.50 Surge",
    pickup: "East Campus Food Court",
    dropoff: "Law School, Annex C",
    distance: "2.1 miles",
    estTime: "~22 mins",
    isUrgent: true,
    iconBg: "bg-red-50",
    icon: Pizza,
    iconColor: "text-red-500"
  }
];

export default function AvailableOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState<"All" | "Nearby" | "High Value">("All");

  const acceptOrder = (id: string) => {
    setOrders(prev => prev.filter(o => o.id !== id));
  };

  const filteredOrders = orders.filter(o => {
    if (filter === "Nearby") return parseFloat(o.distance) < 1.0;
    if (filter === "High Value") return parseFloat(o.earnings.replace("$", "")) >= 10;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Ready for Pickup</h2>
            <span className="px-3 py-1 bg-orange-50 text-[#ee8c2b] text-xs font-bold rounded-full">
              {filteredOrders.length} Available
            </span>
          </div>
          <p className="text-slate-500 font-medium">Accept orders within 2 miles for maximum efficiency.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-500 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm cursor-pointer">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-500 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm cursor-pointer">
            <SlidersHorizontal className="w-4 h-4" />
            Sort
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex bg-slate-100 p-1 rounded-xl w-fit gap-1">
        {(["All", "Nearby", "High Value"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
              filter === tab ? "bg-white text-[#ee8c2b] shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Order Cards Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredOrders.length === 0 && (
          <div className="xl:col-span-2 text-center py-16 text-slate-400 font-medium bg-white rounded-2xl border border-slate-100">
            <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
            <p className="font-bold text-slate-600">All orders accepted!</p>
            <p className="text-sm mt-1">Check back shortly for new available orders.</p>
          </div>
        )}

        {filteredOrders.map(order => {
          const Icon = order.icon;
          return (
            <div
              key={order.id}
              className={`bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                order.isUrgent
                  ? "border-2 border-[#ee8c2b]/50"
                  : "border border-slate-100"
              }`}
            >
              {/* Urgent Badge */}
              {order.isUrgent && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    High Demand
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl ${order.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${order.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-800">{order.restaurant}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase">{order.orderRef}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#ee8c2b]">{order.earnings}</span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{order.surge}</p>
                </div>
              </div>

              {/* Route */}
              <div className="space-y-1 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center gap-1 pt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ee8c2b]"></div>
                    <div className="w-0.5 h-8 bg-slate-200"></div>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-400"></div>
                  </div>
                  <div className="flex-grow space-y-5">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pickup</p>
                      <p className="text-sm font-bold text-slate-800">{order.pickup}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Drop-off</p>
                      <p className="text-sm font-bold text-slate-800">{order.dropoff}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex gap-6 border-t border-slate-100 pt-4 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-bold text-slate-700">{order.distance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-bold text-slate-700">{order.estTime}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => acceptOrder(order.id)}
                  className="flex-grow bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-extrabold py-3 rounded-xl transition-all active:scale-95 shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  Accept Order
                </button>
                <button
                  onClick={() => acceptOrder(order.id)}
                  className="px-6 py-3 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Decline
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

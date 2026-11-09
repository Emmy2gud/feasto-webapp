import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Utensils,
  Coffee,
  Pizza,
  Soup,
  MapPin,
  Clock,
  CheckCircle,
  Flame,
  ArrowRight,
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
    surge: "+$2.00 Surge",
    pickup: "Central Dining Hall, Block B",
    dropoff: "Engineering Research Park, Room 402",
    distance: "1.2 miles",
    estTime: "~15 mins",
    isUrgent: true,
    iconBg: "bg-orange-50",
    icon: Utensils,
    iconColor: "text-[#ee8c2b]",
  },
  {
    id: "o2",
    restaurant: "Saffron Brews & Bakery",
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
    iconColor: "text-sky-600",
  },
  {
    id: "o3",
    restaurant: "Campus Kitchen",
    orderRef: "#SF-8856",
    earnings: "$9.25",
    surge: "Standard Fare",
    pickup: "Science Block Cafeteria",
    dropoff: "Student Sports Center, Court 1",
    distance: "0.8 miles",
    estTime: "~12 mins",
    isUrgent: false,
    iconBg: "bg-emerald-50",
    icon: Soup,
    iconColor: "text-emerald-600",
  },
  {
    id: "o4",
    restaurant: "Slice & Dice Woodfire Pizza",
    orderRef: "#SF-8861",
    earnings: "$15.00",
    surge: "+$3.50 Surge",
    pickup: "East Campus Food Court",
    dropoff: "Law School, Annex C",
    distance: "2.1 miles",
    estTime: "~22 mins",
    isUrgent: true,
    iconBg: "bg-rose-50",
    icon: Pizza,
    iconColor: "text-rose-600",
  },
];

export default function AvailableOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState<"All" | "Nearby" | "High Value">("All");
  const [acceptedOrderId, setAcceptedOrderId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAcceptOrder = (id: string) => {
    setAcceptedOrderId(id);
    setTimeout(() => {
      setOrders((prev) => prev.filter((o) => o.id !== id));
      navigate("/rider/active-delivery");
    }, 600);
  };

  const handleDecline = (id: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const filteredOrders = orders.filter((o) => {
    if (filter === "Nearby") return parseFloat(o.distance) <= 1.0;
    if (filter === "High Value") return parseFloat(o.earnings.replace("$", "")) >= 10;
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Available Deliveries</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Accept campus orders nearby to begin your delivery dispatch.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200/60 self-start sm:self-center">
          {(["All", "Nearby", "High Value"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === tab
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Available Order Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredOrders.length === 0 ? (
          <div className="md:col-span-2 text-center py-16 bg-white rounded-xl border border-slate-200/80 p-8 shadow-xs">
            <CheckCircle className="w-12 h-12 mx-auto mb-3 text-emerald-500" />
            <h3 className="text-base font-bold text-slate-800">All available orders claimed</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              New kitchen tickets appear automatically. Keep your status online to receive first priority notifications.
            </p>
            <button
              onClick={() => setOrders(initialOrders)}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Refresh Orders
            </button>
          </div>
        ) : (
          filteredOrders.map((order) => {
            const Icon = order.icon;
            const isAccepting = acceptedOrderId === order.id;

            return (
              <div
                key={order.id}
                className={`bg-white rounded-xl p-5 border shadow-xs flex flex-col justify-between transition-all duration-150 hover:shadow-sm ${
                  order.isUrgent
                    ? "border-orange-200 bg-orange-50/10"
                    : "border-slate-200/80"
                }`}
              >
                <div>
                  {/* Top Bar with Restaurant & Earnings */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${order.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${order.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-slate-900">{order.restaurant}</h3>
                        <p className="text-xs font-mono text-slate-400">{order.orderRef}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xl font-bold text-[#ee8c2b]">{order.earnings}</span>
                      <p className="text-[10px] font-semibold text-slate-500">{order.surge}</p>
                    </div>
                  </div>

                  {/* Route Steps */}
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-100 space-y-2.5 my-3">
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#ee8c2b] mt-1 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pickup</p>
                        <p className="text-xs font-semibold text-slate-800">{order.pickup}</p>
                      </div>
                    </div>

                    <div className="ml-1 w-0.5 h-3 bg-slate-200" />

                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-slate-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Drop-off</p>
                        <p className="text-xs font-semibold text-slate-800">{order.dropoff}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-600 mb-4 px-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{order.distance}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{order.estTime}</span>
                    </div>
                    {order.isUrgent && (
                      <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        <Flame className="w-3 h-3" /> High Demand
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => handleAcceptOrder(order.id)}
                    disabled={isAccepting}
                    className="flex-1 bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-semibold py-2.5 rounded-lg text-xs transition-all shadow-xs active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>{isAccepting ? "Accepting Trip..." : "Accept Order"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDecline(order.id)}
                    className="px-4 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-semibold rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Pass
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

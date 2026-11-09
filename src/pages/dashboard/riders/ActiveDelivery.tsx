import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  DollarSign,
  Clock,
  CheckCircle,
  Package,
  Phone,
  Navigation,
  Check,
  MapPin,
} from "lucide-react";

export default function ActiveDelivery() {
  const [order1Status, setOrder1Status] = useState<"on_way" | "delivered">("on_way");
  const [order2Status, setOrder2Status] = useState<"pickup" | "picked_up">("pickup");

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Active Delivery Trip</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Real-time delivery progress, customer contact, and dropoff directions.
          </p>
        </div>
        <Link
          to="/rider/orders"
          className="text-xs font-semibold text-[#ee8c2b] hover:underline self-start sm:self-center"
        >
          View queue of available orders →
        </Link>
      </div>

      {/* Stats KPI Header */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Packages</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {order1Status !== "delivered" ? "02 Active" : "01 Active"}
            </h3>
          </div>
          <div className="w-10 h-10 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Trip Earnings</p>
            <h3 className="text-2xl font-bold text-emerald-600 mt-1">$24.50</h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Est. Time Remaining</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">18 mins</h3>
          </div>
          <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Active Orders List */}
      <section className="space-y-6">
        {/* Order 1: On the Way */}
        {order1Status !== "delivered" ? (
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="p-6 flex flex-col lg:flex-row gap-6">
              {/* Info Column */}
              <div className="flex-1 space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
                      On the Way to Customer
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 mt-2">Order #SH-8291</h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Picked up from <span className="font-semibold text-slate-700">Gourmet Garden Bistro</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-800">Sarah Jenkins</span>
                      <div className="w-8 h-8 rounded-full bg-orange-100 text-[#ee8c2b] flex items-center justify-center text-xs font-bold">
                        SJ
                      </div>
                    </div>
                    <p className="text-xs text-slate-500">Science Center, Room 402</p>
                    <a
                      href="tel:+15552345678"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#ee8c2b] hover:underline mt-1"
                    >
                      <Phone className="w-3 h-3" /> Call Customer
                    </a>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2 font-medium text-slate-600">
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Picked up
                      </span>
                      <span>›</span>
                      <span className="text-sky-700 font-semibold">En route to Hall</span>
                    </div>
                    <span className="font-bold text-slate-900">0.4 miles away</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ee8c2b] rounded-full transition-all duration-500" style={{ width: "75%" }} />
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => setOrder1Status("delivered")}
                    className="flex items-center justify-center gap-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white py-2.5 px-4 rounded-lg font-semibold text-xs transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Confirm Handed to Customer</span>
                  </button>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 px-4 rounded-lg font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-sky-600" />
                    <span>Open in Campus Maps</span>
                  </a>
                </div>
              </div>

              {/* Map Preview Container */}
              <div className="lg:w-72 h-44 lg:h-auto rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex flex-col items-center justify-center relative p-4 text-center">
                <MapPin className="w-8 h-8 text-[#ee8c2b] mb-1" />
                <p className="text-xs font-semibold text-slate-700">Dropoff: Science Center</p>
                <p className="text-[11px] text-slate-500">3rd Floor North Elevator</p>
                <div className="mt-3 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-md shadow-xs text-[11px] font-bold text-slate-800">
                  ETA: 6 mins
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 text-emerald-800 text-xs font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Order #SH-8291 delivered successfully to Sarah Jenkins!</span>
            </div>
            <button
              onClick={() => setOrder1Status("on_way")}
              className="text-emerald-700 hover:underline text-xs"
            >
              Undo
            </button>
          </div>
        )}

        {/* Order 2: At Merchant / Ready for Pickup */}
        <div
          className={`bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-4 transition-all ${
            order2Status === "picked_up" ? "opacity-80" : ""
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-[#ee8c2b] border border-orange-200">
                {order2Status === "picked_up" ? "Picked Up ✓ En Route" : "Stop 2: At Kitchen Counter"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Order #SH-8304</h3>
              <p className="text-xs text-slate-500">
                Collect from <span className="font-semibold text-slate-700">Saffron Grill Express</span> (West Gate)
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold text-slate-800">Marcus Turner</p>
              <p className="text-xs text-slate-400">Student Union, East Wing</p>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 flex items-center gap-3 text-xs text-slate-700">
            <Package className="w-4 h-4 text-[#ee8c2b] shrink-0" />
            <span>3 Items Packed (2 Meal Boxes, 1 Beverage in sealed bag). Handle upright.</span>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() =>
                setOrder2Status(order2Status === "pickup" ? "picked_up" : "pickup")
              }
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-xs ${
                order2Status === "picked_up"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-slate-900 hover:bg-slate-800 text-white"
              }`}
            >
              {order2Status === "picked_up" ? "Picked Up ✓ Proceed to Dropoff" : "Confirm Food Collected from Counter"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

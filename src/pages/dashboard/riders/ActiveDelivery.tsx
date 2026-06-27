import { useState } from "react";
import {
  Truck,
  DollarSign,
  Clock,
  Map,
  CheckCircle,
  Handshake,
  CloudRain,
  Battery,
  Package,
  Phone
} from "lucide-react";

export default function ActiveDelivery() {
  const [order1Status, setOrder1Status] = useState<"on_way" | "delivered">("on_way");
  const [order2Status, setOrder2Status] = useState<"pickup" | "picked_up">("pickup");

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#ee8c2b]">
          <div className="flex justify-between items-start mb-3">
            <p className="text-slate-400 font-semibold text-sm">Active Orders</p>
            <div className="p-2 bg-orange-50 text-[#ee8c2b] rounded-xl">
              <Truck className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">02</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-sky-500">
          <div className="flex justify-between items-start mb-3">
            <p className="text-slate-400 font-semibold text-sm">Estimated Payout</p>
            <div className="p-2 bg-sky-50 text-sky-500 rounded-xl">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">$24.50</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-slate-400">
          <div className="flex justify-between items-start mb-3">
            <p className="text-slate-400 font-semibold text-sm">Time Remaining</p>
            <div className="p-2 bg-slate-100 text-slate-500 rounded-xl">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">32m</h3>
        </div>
      </section>

      {/* Active Deliveries */}
      <section className="space-y-6">
        {/* Order 1: On the Way */}
        {order1Status !== "delivered" && (
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">
              {/* Info Column */}
              <div className="flex-1 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="px-3 py-1 bg-sky-50 text-sky-600 text-xs font-bold rounded-full uppercase tracking-wider">On the Way</span>
                    <h3 className="text-2xl font-extrabold text-slate-800 mt-2">Order #SH-8291</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Picked up from <span className="font-bold text-slate-700">Gourmet Garden Hall</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-800">Sarah J.</span>
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#ee8c2b] font-bold">SJ</div>
                    </div>
                    <p className="text-xs text-slate-400">Science Center, Room 402</p>
                    <button className="flex items-center gap-1 text-xs font-bold text-[#ee8c2b] hover:underline cursor-pointer">
                      <Phone className="w-3 h-3" /> Call Customer
                    </button>
                  </div>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-2">
                      <span className="text-[10px] font-bold px-2 py-1 uppercase rounded-full text-[#ee8c2b] bg-orange-50">Pickup Done</span>
                      <span className="text-[10px] font-bold px-2 py-1 uppercase rounded-full text-sky-600 bg-sky-50">Navigation Active</span>
                    </div>
                    <span className="text-xs font-bold text-sky-600">75% Complete</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ee8c2b] transition-all duration-500" style={{ width: "75%" }}></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-2xl font-extrabold text-base active:scale-[0.98] transition-all shadow-lg cursor-pointer">
                    <Map className="w-5 h-5" />
                    Open Map
                  </button>
                  <button
                    onClick={() => setOrder1Status("delivered")}
                    className="flex items-center justify-center gap-3 bg-[#ee8c2b] hover:bg-[#d6761f] text-white py-4 rounded-2xl font-extrabold text-base active:scale-[0.98] transition-all shadow-lg cursor-pointer"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Mark as Delivered
                  </button>
                </div>
              </div>

              {/* Map Preview */}
              <div className="lg:w-1/3 h-56 lg:h-auto rounded-2xl overflow-hidden relative border border-slate-100">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+ee8c2b(-122.4194,37.7749)/-122.4194,37.7749,14,0/600x400@2x?access_token=pk.placeholder')" }}
                >
                  {/* Fallback map placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                    <div className="text-center">
                      <Map className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                      <p className="text-xs font-bold text-slate-400">Live Map View</p>
                    </div>
                    {/* Grid overlay to suggest map */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
                    {/* Route line */}
                    <div className="absolute bottom-8 left-0 right-0 px-4">
                      <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 w-fit mx-auto shadow">
                        <div className="w-2 h-2 rounded-full bg-[#ee8c2b]"></div>
                        0.4 miles remaining
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order 2: At Merchant */}
        <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all ${order2Status === "picked_up" ? "opacity-60" : ""}`}>
          <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-3 py-1 bg-orange-50 text-[#ee8c2b] text-xs font-bold rounded-full uppercase tracking-wider">
                    {order2Status === "picked_up" ? "Heading to Customer" : "Ready for Pickup"}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-800 mt-2">Order #SH-8304</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Pickup from <span className="font-bold text-slate-700">Saffron Grill Express</span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-800">Marcus T.</span>
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">MT</div>
                  </div>
                  <p className="text-xs text-slate-400">Student Union, East Wing</p>
                </div>
              </div>

              {/* Merchant Notes */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">Merchant Notes</p>
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-[#ee8c2b] shrink-0" />
                  <p className="text-sm font-medium text-slate-700">3 Items • 2 Drinks • Fragile handling required</p>
                </div>
              </div>

              {/* Confirm Pickup CTA */}
              <button
                onClick={() => setOrder2Status("picked_up")}
                className="w-full flex items-center justify-center gap-4 bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-2xl font-extrabold text-lg active:scale-[0.98] transition-all shadow-xl cursor-pointer"
              >
                <Handshake className="w-6 h-6" />
                {order2Status === "picked_up" ? "Picked Up ✓" : "Confirm Picked Up"}
              </button>
            </div>

            {/* Bag visual */}
            <div className="lg:w-1/3 h-56 lg:h-auto rounded-2xl overflow-hidden border border-slate-100 bg-amber-50 flex items-center justify-center">
              <div className="text-center">
                <Package className="w-16 h-16 text-[#ee8c2b] mx-auto mb-3" />
                <p className="text-sm font-bold text-slate-600">3 Items Packed</p>
                <p className="text-xs text-slate-400 mt-1">Handle with care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather / Status Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-sky-50 rounded-xl">
            <CloudRain className="w-6 h-6 text-sky-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Light Rain Incoming</p>
            <p className="text-xs text-slate-400">Drive safe! Weather bonus active <span className="text-green-600 font-bold">(+ $1.50/trip)</span></p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Session Time</p>
            <p className="text-sm font-bold text-slate-700">04h 22m</p>
          </div>
          <div className="h-10 w-px bg-slate-200"></div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Battery</p>
            <p className="text-sm font-bold text-red-500 flex items-center gap-1">
              <Battery className="w-4 h-4" /> 12% — Low
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

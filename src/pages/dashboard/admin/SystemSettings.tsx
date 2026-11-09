import { useState } from "react";
import {
  DollarSign,
  Shield,
  Check,
  AlertTriangle,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function SystemSettings() {
  const [commission, setCommission] = useState("12.5");
  const [serviceFee, setServiceFee] = useState("0.99");
  const [baseDelivery, setBaseDelivery] = useState("4.50");
  const [surcharge, setSurcharge] = useState("0.75");

  const [autoPayouts, setAutoPayouts] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const [currency, setCurrency] = useState("USD ($) - US Dollar");
  const [timezone, setTimezone] = useState("(GMT-05:00) Eastern Time");

  const [toastMessage, setToastMessage] = useState("");

  const handleSave = () => {
    setToastMessage("Settings updated successfully!");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleDiscard = () => {
    setCommission("12.5");
    setServiceFee("0.99");
    setBaseDelivery("4.50");
    setSurcharge("0.75");
    setAutoPayouts(true);
    setTwoFactor(true);
    setMaintenanceMode(false);
    setToastMessage("Settings reset to defaults.");
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 z-50 text-xs font-semibold animate-slide-in">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Platform Settings</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Configure commission rates, delivery charges, security requirements, and system maintenance.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-center">
          <button
            onClick={handleDiscard}
            className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
          >
            Reset
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer active:scale-95"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Form Sections */}
        <div className="lg:col-span-2 space-y-6">
          {/* Financial Configuration */}
          <section className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ee8c2b] flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900">Platform Fee Schedule</h2>
                <p className="text-xs text-slate-500">Take-rates applied to vendor payouts and customer checkouts.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Vendor Commission Rate (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={commission}
                    onChange={(e) => setCommission(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">%</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Customer Technology Fee ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={serviceFee}
                    onChange={(e) => setServiceFee(e.target.value)}
                    className="w-full pl-7 pr-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Base Delivery Fare ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={baseDelivery}
                    onChange={(e) => setBaseDelivery(e.target.value)}
                    className="w-full pl-7 pr-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Peak Surge Multiplier ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={surcharge}
                    onChange={(e) => setSurcharge(e.target.value)}
                    className="w-full pl-7 pr-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Regional & System Config */}
          <section className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
              Regional & Currency Configuration
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Platform Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] outline-none"
                >
                  <option value="USD ($) - US Dollar">USD ($) - US Dollar</option>
                  <option value="GBP (£) - British Pound">GBP (£) - British Pound</option>
                  <option value="EUR (€) - Euro">EUR (€) - Euro</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Campus Timezone</label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] outline-none"
                >
                  <option value="(GMT-05:00) Eastern Time">(GMT-05:00) Eastern Time</option>
                  <option value="(GMT-06:00) Central Time">(GMT-06:00) Central Time</option>
                  <option value="(GMT-08:00) Pacific Time">(GMT-08:00) Pacific Time</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar: Security & Operational Toggles */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Shield className="w-4 h-4 text-sky-600" />
              <h3 className="text-sm font-semibold text-slate-900">Security & Operational Gates</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-800">Auto Payouts on Friday</p>
                  <p className="text-[11px] text-slate-400">Automate weekly bank clearing</p>
                </div>
                <Switch
                  checked={autoPayouts}
                  onCheckedChange={setAutoPayouts}
                  className="data-[state=checked]:bg-[#ee8c2b]"
                />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-800">Mandatory Courier 2FA</p>
                  <p className="text-[11px] text-slate-400">SMS code required on login</p>
                </div>
                <Switch
                  checked={twoFactor}
                  onCheckedChange={setTwoFactor}
                  className="data-[state=checked]:bg-[#ee8c2b]"
                />
              </div>

              <div className="flex items-start justify-between gap-3 pt-2 border-t border-slate-100">
                <div>
                  <p className="text-xs font-semibold text-rose-700 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Maintenance Mode
                  </p>
                  <p className="text-[11px] text-slate-400">Halts all incoming order dispatches</p>
                </div>
                <Switch
                  checked={maintenanceMode}
                  onCheckedChange={setMaintenanceMode}
                  className="data-[state=checked]:bg-rose-600"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Audit Compliance</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              All financial rate updates take effect at 00:00 midnight and are logged in the admin transaction audit trail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

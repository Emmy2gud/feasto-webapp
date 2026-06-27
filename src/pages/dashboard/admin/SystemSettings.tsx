import React, { useState } from "react";
import {
  Settings,
  DollarSign,
  ShieldAlert,
  Wallet,
  Globe,
  Plus,
  Shield,
  FileText,
  AlertTriangle,
  Check
} from "lucide-react";

export default function SystemSettings() {
  const [commission, setCommission] = useState("12.5");
  const [serviceFee, setServiceFee] = useState("0.99");
  const [baseDelivery, setBaseDelivery] = useState("4.50");
  const [surcharge, setSurcharge] = useState("0.75");
  
  const [autoPayouts, setAutoPayouts] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const [currency, setCurrency] = useState("USD ($) - US Dollar");
  const [language, setLanguage] = useState("English (US)");
  const [timezone, setTimezone] = useState("(GMT-05:00) Eastern Time");

  const [toastMessage, setToastMessage] = useState("");

  const handleSave = () => {
    setToastMessage("Changes saved successfully!");
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
    setCurrency("USD ($) - US Dollar");
    setLanguage("English (US)");
    setTimezone("(GMT-05:00) Eastern Time");

    setToastMessage("Changes discarded.");
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div className="space-y-8 animate-fade-in relative pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-2 z-50 animate-slide-in">
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-2">
            <span className="hover:text-[#ee8c2b] cursor-pointer">Dashboard</span>
            <span>&gt;</span>
            <span className="text-slate-800">System Settings</span>
          </nav>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">System Settings</h2>
          <p className="text-slate-500 mt-1">Configure global platform parameters, financial rates, and security protocols.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDiscard}
            className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
          >
            Discard
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-sm font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Settings Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Section 1: Financial Configuration (Commission & Fees) */}
        <section className="col-span-12 lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#ee8c2b]">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Financial Configuration</h3>
              <p className="text-sm text-slate-400 font-semibold">Manage revenue sharing and transaction structures.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Platform Commission */}
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-bold text-slate-700 block mb-1.5">Platform Commission (%)</span>
                <div className="relative">
                  <input
                    value={commission}
                    onChange={e => setCommission(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-transparent transition-all"
                    type="number"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block px-1">Global commission applied to every vendor transaction.</span>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700 block mb-1.5">Fixed Service Fee ($)</span>
                <div className="relative">
                  <input
                    value={serviceFee}
                    onChange={e => setServiceFee(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-transparent transition-all"
                    type="number"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                </div>
              </label>
            </div>

            {/* Delivery Fees */}
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-bold text-slate-700 block mb-1.5">Base Delivery Fee</span>
                <div className="relative">
                  <input
                    value={baseDelivery}
                    onChange={e => setBaseDelivery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-transparent transition-all"
                    type="number"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700 block mb-1.5">Per km Surcharge</span>
                <div className="relative">
                  <input
                    value={surcharge}
                    onChange={e => setSurcharge(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-transparent transition-all"
                    type="number"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                </div>
              </label>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-800">Auto-Payouts to Vendors</p>
              <p className="text-xs text-slate-400 font-semibold">Enable daily automatic clearing of funds.</p>
            </div>
            <button
              type="button"
              onClick={() => setAutoPayouts(!autoPayouts)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                autoPayouts ? "bg-[#ee8c2b]" : "bg-slate-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoPayouts ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </button>
          </div>
        </section>

        {/* Section 2: Account Management */}
        <section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Subscription status card */}
          <div className="bg-[#ee8c2b] p-6 rounded-2xl text-white shadow-lg shadow-orange-500/20 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider opacity-85">Subscription Status</h4>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-extrabold">Enterprise Plus</p>
                  <p className="text-[10px] opacity-80 mt-1">Next billing: Oct 24, 2026</p>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Account Access controls */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex-1 space-y-4">
            <h3 className="font-bold text-slate-800">Account Access</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">2-Factor Auth</p>
                    <p className="text-[10px] text-slate-400 font-semibold">Recommended</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors cursor-pointer ${
                    twoFactor ? "bg-green-500" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                      twoFactor ? "translate-x-5" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">System Logs</p>
                    <p className="text-[10px] text-slate-400 font-semibold">Audit tracking</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Viewed 2h ago</span>
              </div>

              <button className="w-full mt-2 py-3 rounded-xl border border-dashed border-slate-300 text-xs font-bold text-slate-500 hover:border-[#ee8c2b] hover:text-[#ee8c2b] transition-all cursor-pointer">
                Add New Administrator
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Payment Gateways */}
        <section className="col-span-12 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Payment Gateways</h3>
                <p className="text-sm text-slate-400 font-semibold">Connect and prioritize active payment providers.</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer">
              <Plus className="w-4 h-4" />
              Connect Gateway
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stripe Card */}
            <div className="p-5 border border-slate-200/80 rounded-2xl hover:shadow-md transition-shadow relative">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#635BFF] rounded-lg flex items-center justify-center text-white font-black text-[10px] uppercase tracking-tighter">
                  stripe
                </div>
                <span className="text-[9px] px-2.5 py-0.5 bg-green-100 text-green-700 font-bold rounded-full">CONNECTED</span>
              </div>
              <h4 className="font-bold text-slate-800 text-sm">Stripe Payments</h4>
              <p className="text-xs text-slate-400 font-medium mb-6 mt-1">Primary gateway for card processing and Apple Pay.</p>
              <button className="text-xs font-bold text-[#ee8c2b] hover:underline cursor-pointer">Configure API</button>
            </div>

            {/* PayPal Card */}
            <div className="p-5 border border-slate-200/80 rounded-2xl hover:shadow-md transition-shadow relative">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#003087] rounded-lg flex items-center justify-center text-white font-black text-[10px] italic">
                  PayPal
                </div>
                <span className="text-[9px] px-2.5 py-0.5 bg-green-100 text-green-700 font-bold rounded-full">CONNECTED</span>
              </div>
              <h4 className="font-bold text-slate-800 text-sm">PayPal Commerce</h4>
              <p className="text-xs text-slate-400 font-medium mb-6 mt-1">Global checkout and automated vendor disbursements.</p>
              <button className="text-xs font-bold text-[#ee8c2b] hover:underline cursor-pointer">Configure API</button>
            </div>

            {/* Square Card (Inactive) */}
            <div className="p-5 border border-dashed border-slate-300 rounded-2xl bg-slate-50 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 mb-3 border border-slate-200">
                <Wallet className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-400 text-sm">Square POS</h4>
              <p className="text-[10px] text-slate-400 mt-1 max-w-[150px] font-semibold">Connect for offline inventory and payment syncing.</p>
              <button className="mt-4 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[9px] font-extrabold text-slate-500 shadow-sm hover:bg-[#ee8c2b] hover:text-white transition-all cursor-pointer">
                ENABLE
              </button>
            </div>
          </div>
        </section>

        {/* Section 4: General System Preferences */}
        <section className="col-span-12 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-800">General System Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Platform Currency</label>
              <select
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:bg-white text-slate-700 font-semibold"
              >
                <option>USD ($) - US Dollar</option>
                <option>EUR (€) - Euro</option>
                <option>GBP (£) - British Pound</option>
                <option>AED (د.إ) - UAE Dirham</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Default Language</label>
              <select
                value={language}
                onChange={e => setLanguage(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:bg-white text-slate-700 font-semibold"
              >
                <option>English (US)</option>
                <option>Spanish (ES)</option>
                <option>French (FR)</option>
                <option>Arabic (SA)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">System Timezone</label>
              <select
                value={timezone}
                onChange={e => setTimezone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:bg-white text-slate-700 font-semibold"
              >
                <option>(GMT-05:00) Eastern Time</option>
                <option>(GMT+00:00) UTC</option>
                <option>(GMT+04:00) Gulf Standard</option>
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <div
                onClick={() => setMaintenanceMode(!maintenanceMode)}
                className="flex items-center gap-3 h-[46px] px-4 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={maintenanceMode}
                  readOnly
                  className="rounded text-[#ee8c2b] focus:ring-[#ee8c2b] w-4 h-4 cursor-pointer"
                />
                <span className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                  Maintenance Mode <AlertTriangle className="w-4 h-4 text-amber-500" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

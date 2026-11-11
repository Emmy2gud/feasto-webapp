import Home from "@/pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import VendorLandingPage from "./pages/VendorLandingPage";
import VendorsPage from "./pages/vendors/VendorsPage";
import AppLayout from "./components/layout/AppLayout";
import { RiderLandingPage } from "./pages/RiderLandingPage";
import VendorPage from "./pages/vendors/VendorPage";
import SignupPage from "./pages/auth/SignupPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrderTrackingPage from "./pages/checkout/OrderTrackingPage";
import UserProfile from "./pages/UserProfile";
import AccountSettings from "./pages/AccountSettings";
import SecondLayout from "./components/layout/SecondLayout";
import AuthLayout from "./components/layout/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import RiderFormPage from "./pages/auth/RiderFormPage";
import VendorFormPage from "./pages/auth/VendorFormPage";
import DashBoardLayout from "./components/layout/dashboard/DashBoardLayout";
import VendorDashboard from "./pages/dashboard/vendor/VendorDashboard";
import EarningsPage from "./pages/dashboard/vendor/EarningsPage";
import WalletPayoutsPage from "./pages/dashboard/vendor/WalletPayoutsPage";
import CreateCategoryPage from "./pages/dashboard/vendor/CreateCategoryPage";
import AddFoodItemPage from "./pages/dashboard/vendor/AddFoodItemPage";
import VendorOrdersPage from "./pages/dashboard/vendor/VendorOrdersPage";
import MenuListingPage from "./pages/dashboard/vendor/MenuListingPage";
import CategoriesListingPage from "./pages/dashboard/vendor/CategoriesListingPage";
import AddonsListingPage from "./pages/dashboard/vendor/AddonsListingPage";

import SystemOverview from "./pages/dashboard/admin/SystemOverview";
import UsersManagement from "./pages/dashboard/admin/UsersManagement";
import VendorsManagement from "./pages/dashboard/admin/VendorsManagement";
import RidersManagement from "./pages/dashboard/admin/RidersManagement";
import OrdersManagement from "./pages/dashboard/admin/OrdersManagement";
import TransactionsLog from "./pages/dashboard/admin/TransactionsLog";
import PayoutsWalletHub from "./pages/dashboard/admin/PayoutsWalletHub";
import ReportsAnalytics from "./pages/dashboard/admin/ReportsAnalytics";
import PromotionsHub from "./pages/dashboard/admin/PromotionsHub";
import DisputesCenter from "./pages/dashboard/admin/DisputesCenter";
import SystemSettings from "./pages/dashboard/admin/SystemSettings";

import RiderDashboard from "./pages/dashboard/riders/RiderDashboard";
import DeliveryHistory from "./pages/dashboard/riders/DeliveryHistory";
import RiderProfile from "./pages/dashboard/riders/RiderProfile";
import AvailableOrders from "./pages/dashboard/riders/AvailableOrders";
import EarningsAnalytics from "./pages/dashboard/riders/EarningsAnalytics";
import WalletTransactions from "./pages/dashboard/riders/WalletTransactions";
import ActiveDelivery from "./pages/dashboard/riders/ActiveDelivery";
import StoreProfile from "./pages/dashboard/vendor/StoreProfle";
import { CartProvider } from "./context/CartProvider";
import AddAddonsPage from "./pages/dashboard/vendor/AddAddonsPage";


function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about-vendors" element={<VendorLandingPage />} />

            <Route path="about-rider" element={<RiderLandingPage />} />

          </Route>


          <Route element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>

          <Route path="" element={<SecondLayout />}>
            <Route path="vendors" element={<VendorsPage />} />
            <Route path="vendor/:id" element={<VendorPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="tracking" element={<OrderTrackingPage />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="settings" element={<AccountSettings />} />
            <Route path="rider-form" element={<RiderFormPage />} />
            <Route path="vendor-form" element={<VendorFormPage />} />
          </Route>

          <Route path="/dashboard" element={<DashBoardLayout role="vendor" />}>
            <Route index element={<VendorDashboard />} />
            <Route path="orders" element={<VendorOrdersPage />} />
            <Route
              path="reviews"
              element={
                <div className="space-y-4 max-w-4xl">
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">Customer Reviews</h1>
                  <p className="text-sm text-slate-500 font-normal">Customer feedback and ratings for Campus Grill.</p>
                  <div className="bg-white rounded-xl border border-slate-200/80 p-8 text-center text-slate-500 shadow-xs">
                    <p className="text-sm font-semibold text-slate-800">No new reviews pending moderation</p>
                    <p className="text-xs text-slate-400 mt-1">Overall Store Rating: 4.8 / 5.0 (24 reviews this week)</p>
                  </div>
                </div>
              }
            />
            <Route path="profile" element={<StoreProfile />} />
            <Route
              path="settings"
              element={
                <div className="space-y-4 max-w-4xl">
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">Store Settings</h1>
                  <p className="text-sm text-slate-500 font-normal">Operational preferences, notification rules, and order dispatch times.</p>
                  <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Kitchen Preparation Window</p>
                        <p className="text-xs text-slate-500">Estimated order prep time shown to campus customers.</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-slate-100 rounded-md text-slate-800">15-20 Mins</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Audible Kitchen Ticket Bell</p>
                        <p className="text-xs text-slate-500">Play alert sound whenever a new order arrives.</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200">Enabled</span>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="earnings" element={<EarningsPage />} />
            <Route path="payouts" element={<WalletPayoutsPage />} />
           
            <Route path="categories" element={<CategoriesListingPage />} />
            <Route path="categories/new" element={<CreateCategoryPage />} />

            <Route path="menu" element={<MenuListingPage />} />
            <Route path="menu/add" element={<AddFoodItemPage />} />
            <Route path="addons/create/:id" element={<AddAddonsPage />} /> 
            <Route path="addons" element={<AddonsListingPage />} />
          </Route>

          <Route path="/admin" element={<DashBoardLayout  role="admin"  />}>
            <Route index element={<SystemOverview />} />
            <Route path="users" element={<UsersManagement />} />
            <Route path="vendors" element={<VendorsManagement />} />
            <Route path="riders" element={<RidersManagement />} />
            <Route path="orders" element={<OrdersManagement />} />
            <Route path="transactions" element={<TransactionsLog />} />
            <Route path="payouts" element={<PayoutsWalletHub />} />
            <Route path="reports" element={<ReportsAnalytics />} />
            <Route path="promotions" element={<PromotionsHub />} />
            <Route path="disputes" element={<DisputesCenter />} />
            <Route path="settings" element={<SystemSettings />} />
          </Route>    

          <Route path="/rider"  element={<DashBoardLayout  role="rider" />}>
            <Route index element={<RiderDashboard />} />
            <Route path="dashboard" element={<RiderDashboard />} />
            <Route path="orders" element={<AvailableOrders />} />
            <Route path="active-delivery" element={<ActiveDelivery />} /> 
            <Route path="delivery-history" element={<DeliveryHistory />} />
            <Route path="earnings" element={<EarningsAnalytics />} />
            <Route path="wallet" element={<WalletTransactions />} />
            <Route path="profile" element={<RiderProfile />} />
            <Route
              path="settings"
              element={
                <div className="space-y-4 max-w-4xl">
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">Rider Preferences</h1>
                  <p className="text-sm text-slate-500 font-normal">Delivery notifications and navigation settings.</p>
                  <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Auto-Navigation</p>
                        <p className="text-xs text-slate-500">Open navigation automatically when order is accepted.</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">High-Demand Surge Alerts</p>
                        <p className="text-xs text-slate-500">Receive push alerts when lunch rush multiplier activates.</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200">Enabled</span>
                    </div>
                  </div>
                </div>
              }
            />
          </Route>

        </Routes>





      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

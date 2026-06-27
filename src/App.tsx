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

import AdminLayout from "./pages/dashboard/admin/AdminLayout";
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
import RiderLayout from "./pages/dashboard/riders/RiderLayout";
import RiderDashboard from "./pages/dashboard/riders/RiderDashboard";
import DeliveryHistory from "./pages/dashboard/riders/DeliveryHistory";
import RiderProfile from "./pages/dashboard/riders/RiderProfile";
import AvailableOrders from "./pages/dashboard/riders/AvailableOrders";
import EarningsAnalytics from "./pages/dashboard/riders/EarningsAnalytics";
import WalletTransactions from "./pages/dashboard/riders/WalletTransactions";
import ActiveDelivery from "./pages/dashboard/riders/ActiveDelivery";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about-vendors" element={<VendorLandingPage />} />

            <Route path="about-rider" element={<RiderLandingPage />} />

          </Route>


          <Route path="" element={<SecondLayout />}>
            <Route path="signup" element={<SignupPage />} />
            <Route path="vendors" element={<VendorsPage />} />
            <Route path="vendor/:id" element={<VendorPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="tracking" element={<OrderTrackingPage />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="settings" element={<AccountSettings />} />
            <Route path="rider-form" element={<RiderFormPage />} />
            <Route path="vendor-form" element={<VendorFormPage />} />
          </Route>

          <Route path="/dashboard" element={<DashBoardLayout />}>

            <Route path="orders" element={<VendorOrdersPage/>} />
  
            <Route path="reviews" element={<div className="p-8"><h1 className="text-2xl font-bold">Reviews</h1></div>} />
            <Route path="profile" element={<div className="p-8"><h1 className="text-2xl font-bold">Profile</h1></div>} />
            <Route path="settings" element={<div className="p-8"><h1 className="text-2xl font-bold">Settings</h1></div>} />
            <Route path="" element={<VendorDashboard />} />
            <Route path="earnings" element={<EarningsPage />} />
            <Route path="payouts" element={<WalletPayoutsPage />} />
            <Route path="categories" element={<CreateCategoryPage />} />

            <Route path="menu" element={<AddFoodItemPage />} />

          </Route>

          <Route path="/admin" element={<AdminLayout />}>
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

          <Route path="/rider" element={<RiderLayout />}>
            <Route path="dashboard" element={<RiderDashboard />} />
            <Route path="orders" element={<AvailableOrders/>} />
            <Route path="delivery-history" element={<DeliveryHistory />} />
            <Route path="earnings" element={<EarningsAnalytics />} />
            <Route path="wallet" element={<WalletTransactions  />} />
            <Route path="profile" element={<RiderProfile />} />
            <Route path="active-delivery" element={<ActiveDelivery />} />
            {/* <Route path="settings" element={< />} /> */}
          </Route>

        </Routes>





      </BrowserRouter>
    </div>
  );
}

export default App;

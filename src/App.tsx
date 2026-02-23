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
        </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;

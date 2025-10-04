import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductByBrand from "./pages/ProductByBrand";
import ProductByCategory from "./pages/ProductByCategory";
import ProductByKeyword from "./pages/ProductByKeyword";
import ProductDetails from "./pages/ProductDetails";
import AboutPage from "./pages/AboutPage";
import RefundPage from "./pages/RefundPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import HowtoBuyPage from "./pages/HowtoBuyPage";
import ContactPage from "./pages/ContactPage";
import ComplainPage from "./pages/ComplainPage";
import LogInPage from "./pages/LogInPage";
import OTPpage from "./pages/OTPpage";
import ProfilePage from "./pages/ProfilePage";
import WishPage from "./pages/WishPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import InvoicePage from "./pages/InvoicePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BrandProduct/:id" element={<ProductByBrand />} />
        <Route path="/CategoryProduct/:id" element={<ProductByCategory />} />
        <Route path="/ByKeyword/:keyword" element={<ProductByKeyword />} />
        <Route path="/Details/:id" element={<ProductDetails />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/how-to-buy" element={<HowtoBuyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/complain" element={<ComplainPage />} />

        <Route path="/login" element={<LogInPage />} />
        <Route path="/otp" element={<OTPpage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/orders" element={<OrderPage />} />
        <Route path="/invoice/:id" element={<InvoicePage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

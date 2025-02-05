import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import Addproduct from "./pages/AddProduct";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

function App() {
  const location = useLocation();
  const auth = location.pathname === "/login";
  if (auth) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-100 overflow-hidden">
        <Login />
      </div>
    );
  }
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        {/* <div className="absolute inset-0 backdrop-blur-sm" /> */}
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/add-products" element={<Addproduct />} />
      </Routes>
    </div>
  );
}

export default App;

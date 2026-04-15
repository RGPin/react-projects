import { Route, Routes } from "react-router-dom";
import "./ShoppingCartApp.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/header";

export default function ShoppingCartApp() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

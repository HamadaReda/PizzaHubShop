import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navigation/Header";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import Recipes from "./pages/Recipes";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

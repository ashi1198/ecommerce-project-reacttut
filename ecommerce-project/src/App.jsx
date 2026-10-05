import { HomePage } from "./pages/home/HomePage";
import "./App.css";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { OrdersPage } from "./pages/orders/OrdersPage";
import axios from "axios";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //used query parameters api/cart-items? this is a query parameter backend will add extra details pf cart items matching product
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage cart={cart} />} />
      </Routes>
    </>
    //if path is / then u can write Route index element =instead of the =
    //routing is used to navigate between different pages in the application. The Routes component defines the different routes and their corresponding components. The Route component specifies the path and the element to render when that path is accessed. In this case, the HomePage component is rendered when the root path ("/") is accessed, and a simple heading is rendered for the "/checkout" path .
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import TotalContext1 from "./context/TotalContext";
import ProductsList from "./products/ProductsList";
import Product from "./navigateEachProduct/Product";
import CartLists from "./cart/CartLists";
import OrdersList from "./orders/OrderList";
import NavigateEachOrder from "./navigateEachOrder/NavigateEachOrders";
import UsersList from "./users/UsersList";
import NavigateEachUser from "./navigateEachUser/NavigateEachUser";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AppContent() {
  const location = useLocation();
  const [side, setSide] = useState<string>("Dashboard");

  const handleSideBar = (str: string) => {
    setSide(str);
  };

  useEffect(() => {}, [location]);

  return (
    <div className="App">
      <TotalContext1>
        <div className="header-class">
          <p>{side}</p>
        </div>
        <div className="main-class">
          {(location.pathname === "/Dashboard" ||
            location.pathname === "/Users" ||
            location.pathname === "/Orders" ||
            location.pathname === "/Products" ||
            location.pathname === "/" ||
            location.pathname === "/carts") && (
            <Sidebar handleSideBar={handleSideBar}></Sidebar>
          )}
          <Routes>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route
              path="/Products"
              element={<ProductsList></ProductsList>}
            ></Route>
            <Route path="/Product/:id" element={<Product></Product>}></Route>
            <Route path="/carts" element={<CartLists></CartLists>}></Route>
            <Route path="/Orders" element={<OrdersList></OrdersList>}></Route>
            <Route
              path="/each-order/:index1"
              element={<NavigateEachOrder></NavigateEachOrder>}
            ></Route>
            <Route path="/Users" element={<UsersList></UsersList>}></Route>
            <Route
              path="/each-user/:index1"
              element={<NavigateEachUser></NavigateEachUser>}
            ></Route>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
          </Routes>
        </div>
      </TotalContext1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent></AppContent>
    </BrowserRouter>
  );
}

export default App;

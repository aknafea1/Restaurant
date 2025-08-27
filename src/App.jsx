import { Fragment, useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Products from "./components/Products";
import Toast from "./components/Toast";
import Product from "./components/Product";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AAbout from "./components/aAbout";
import Menus from "./components/Menus";
function App() {
  const dataFetched = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [apiFetched, setApiData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    if (!dataFetched.current) {
      dataFetched.current = true;
      (async () => {
         await new Promise((r) => setTimeout(r, Math.random() * 3000 + 600)); //Making sure U See Loading 😂
        const res = await fetch(
          "https://cdn.jsdelivr.net/gh/aknafeado/RestaurantApi@main/Menu.json"
        );
        const data = await res.json();
        setApiData(data);
        setIsLoading(false);
      })();
    }
  }, []);

  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <>
          <BrowserRouter basename="/Restaurant">
            <Nav></Nav>
            <Routes>
              <Route
                path="/"
                element={<Home fetchedData={apiFetched}></Home>}></Route>
              <Route
                path="/Reservation"
                element={<Reservation></Reservation>}></Route>
              <Route path="/aAbout" element={<AAbout></AAbout>}></Route>
              <Route
                path="/Reservation"
                element={<Reservation></Reservation>}></Route>
              <Route
                path="/Menu"
                element={<Menus fetchedData={apiFetched}></Menus>}></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;

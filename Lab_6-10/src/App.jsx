import './App.css';

import Home from "./components/Home.jsx";
import StadiumsCatalog from "./components/StadiumsCatalog.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import StadiumDetails from "./components/StadiumDetails.jsx";
import Cart from "./components/Cart.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stadiums" element={<StadiumsCatalog />} />
                <Route path="/stadium/:id" element={<StadiumDetails />} />
                <Route path="/stadiums/cart" element={<Cart />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

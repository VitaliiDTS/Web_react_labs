// App.js
import './App.css';

import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stadiums" element={<div>Stadiums list page</div>} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

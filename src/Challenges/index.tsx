import { Navigate, Route, Routes } from "react-router";
import Navigation from "./Navigation";
import "./styles.css";
import Circles from "./Circles";
import Checkout from "./Checkout";



export default function Challenges() {

    return (
        <div >
            <Navigation />
            <div className="content-offset">
                <Routes>
                    <Route path="/" element={<Navigate to="Circles" />} />
                    <Route path="Circles" element={<Circles />} />
                    <Route path="Checkout" element={<Checkout />} />
                </Routes>
            </div>
        </div >
    );
}
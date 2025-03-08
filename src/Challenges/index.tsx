import { Navigate, Route, Routes } from "react-router";
import Navigation from "./Navigation";
import "./styles.css";
import Circles from "./Circles";
import Counter from "./Counter";
import Shopping from "./Shopping";
import Colors from "./Colors";
import Thesaurus from "./Thesaurus";
import Checkout from "./Checkout";
import Countries from "./Countries";
import Passcode from "./Passcode";



export default function Challenges() {

    return (
        <div >
            <Navigation />
            <div className="content-offset">
                <Routes>
                    <Route path="/" element={<Navigate to="Circles" />} />
                    <Route path="Circles" element={<Circles />} />
                    <Route path="Counter" element={<Counter />} />
                    <Route path="Shopping" element={<Shopping />} />
                    <Route path="Colors" element={<Colors />} />
                    <Route path="Thesaurus" element={<Thesaurus />} />
                    <Route path="Checkout" element={<Checkout />} />
                    <Route path="Countries" element={<Countries />} />
                    <Route path="PassCode" element={<Passcode />} />
                </Routes>
            </div>
        </div >
    );
}
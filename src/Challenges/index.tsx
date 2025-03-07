import { Navigate, Route, Routes } from "react-router";
import Navigation from "./Navigation";
import "./styles.css";
import Circles from "./Circles";
import Counter from "./Counter";
import Shopping from "./Shopping";
import Colors from "./Colors";



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
                </Routes>
            </div>
        </div >
    );
}
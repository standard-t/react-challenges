import { HashRouter, Navigate, Route, Routes } from "react-router";
import Challenges from "./Challenges";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Challenges" />} />
          <Route path="/Challenges/*" element={<Challenges />} />
        </Routes>
      </div>
    </HashRouter >
  )
}

export default App

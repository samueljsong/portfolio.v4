// Dependencies
import { Route, Routes, useLocation } from "react-router-dom";

//Pages
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";

//Styles
import "./App.css";
import "./index.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;

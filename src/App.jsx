// Dependencies
import { Route, Routes, useLocation } from "react-router-dom";

//Pages
import { LandingPage } from "./pages/LandingPage";

//Styles
import "./App.css";
import "./index.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </>
    );
}

export default App;

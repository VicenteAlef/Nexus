import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen grid grid-rows-[1fr_auto]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

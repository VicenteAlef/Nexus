import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen grid grid-rows-[1fr_auto]">
      <NavBar
        logo={"/logo.png"}
        name={"Nexus"}
        links={[
          { route: "home", label: "Home" },
          { route: "plans", label: "Planos" },
          { route: "turbo", label: "Turbine sua conexão" },
          { route: "app", label: "Baixe o App" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

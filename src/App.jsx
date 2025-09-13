import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsApp";
import { color } from "framer-motion";

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
      <WhatsAppBtn
        image={"/logo.png"}
        name={"Nexus"}
        message={"Olá 👋 Seja bem-vindo a Nexus! Como podemos ajudar você?"}
        href={[
          {
            url: "https://wa.me/+5561982070086?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+planos+de+internet+da+Nexus+por+favor.",
            label: "Contratar plano",
          },
          {
            url: "https://wa.me/+5561982070086?text=Ol%C3%A1%2C+gostaria+de+falar+com+o+suporte+técnico+da+Nexus+por+favor.",
            label: "Suporte Técnico",
          },
          {
            url: "https://www.instagram.com/vicente__developer?igsh=M2JrZTR6enMyc3Nu",
            label: "Ir para o Instagram",
          },
        ]}
      />
    </div>
  );
}

export default App;

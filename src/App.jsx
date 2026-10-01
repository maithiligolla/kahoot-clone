import { useState } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import KidsApp from "./components/KidsApp";
import Faq from "./components/Faq";
import Celebrations from "./components/Celebrations";
import Footer from "./components/Footer";
import StickyPromo from "./components/StickyPromo";
import SettingsModal from "./components/SettingsModal";

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-20 font-['Montserrat',sans-serif] text-[#333]">
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Features />
        <Downloads />
        <KidsApp />
        <Faq />
        <Celebrations />
      </main>
      <Footer onOpenSettings={() => setSettingsOpen(true)} />
      <StickyPromo />
      {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}
    </div>
  );
}

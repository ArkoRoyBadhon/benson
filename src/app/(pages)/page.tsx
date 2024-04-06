import AboutSection from "@/components/About";
import BuySection from "@/components/Buy";
import DexSection from "@/components/DexSection";
import FooterSection from "@/components/Footer";
import HeaderSection from "@/components/Header";
import NoteSection from "@/components/Note";
import TokenomicSection from "@/components/Tokenomics";

export default function Home() {
  return ( 
    <main className="bg-primary">
      <div className="custom-container custom_spacing">
        <HeaderSection />
        <AboutSection />
        <NoteSection />
        <BuySection />
        <TokenomicSection />
        <DexSection />
        <FooterSection />
      </div>
    </main>
  );
}

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";

const Index = () => {
  const [activeSection, setActiveSection] = useState("introduccion");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} />
      <Sidebar
        activeSection={activeSection}
        onSectionChange={(id) => {
          setActiveSection(id);
          setMenuOpen(false);
        }}
        isOpen={menuOpen}
      />
      <ContentArea activeSection={activeSection} />
    </div>
  );
};

export default Index;

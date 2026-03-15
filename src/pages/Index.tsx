import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";

const Index = () => {
  const [searchParams] = useSearchParams();
  const initialSection = searchParams.get("seccion") || "introduccion";
  const [activeSection, setActiveSection] = useState(initialSection);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const seccion = searchParams.get("seccion");
    if (seccion) setActiveSection(seccion);
  }, [searchParams]);

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

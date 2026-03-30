import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";
import { ChevronUp } from "lucide-react";

const allSections = [
  "introduccion",
  "institucion",
  "agradecimiento",
  "mantenimiento",
  "mantenimiento-general",
  "video-mantenimiento",
  "mantenimiento-preventivo",
  "mantenimiento-correctivo",
  "herramientas",
  "seguridad",
  "pasos",
  "pitidos-error",
  "equipos",
  "componentes",
  "equipos-institucion",
  "equipo-desarrollo",
  "involucrados",
  "extras",
  "preguntas-frecuentes",
  "glosario",
  "conclusion",
];

const sectionLabels: Record<string, string> = {
  "introduccion": "Introducción",
  "institucion": "U.P.T.A. 'Federico Brito Figueroa'",
  "agradecimiento": "Agradecimiento",
  "mantenimiento": "Mantenimiento",
  "mantenimiento-general": "Mantenimiento general",
  "video-mantenimiento": "Video de mantenimiento",
  "mantenimiento-preventivo": "Mantenimiento preventivo",
  "mantenimiento-correctivo": "Mantenimiento correctivo",
  "herramientas": "Herramientas necesarias",
  "seguridad": "Medidas de seguridad",
  "pasos": "Pasos para el mantenimiento",
  "pitidos-error": "Pitidos de error",
  "equipos": "Equipos",
  "componentes": "Componentes",
  "equipos-institucion": "Equipos de la institución",
  "equipo-desarrollo": "Equipo de desarrollo",
  "involucrados": "Involucrados",
  "extras": "Extras",
  "preguntas-frecuentes": "Preguntas frecuentes",
  "glosario": "Glosario de términos",
  "conclusion": "Conclusión",
};

const Index = () => {
  const [searchParams] = useSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("introduccion");

  // Scroll to section from URL param on mount
  useEffect(() => {
    const seccion = searchParams.get("seccion");
    if (seccion) {
      setTimeout(() => {
        const el = document.getElementById(seccion);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [searchParams]);

  // Show/hide back-to-top button & track active section
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Determine which section is currently in view
      for (let i = allSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(allSections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(allSections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} />
      <Sidebar
        activeSection={activeSection}
        onSectionChange={scrollToSection}
        isOpen={menuOpen}
      />

      {/* Table of Contents - sticky bar below header */}
      <div className="fixed top-20 left-0 right-0 z-20 bg-secondary border-b border-border overflow-x-auto">
        <div className="flex gap-1 px-4 py-2" style={{ scrollbarWidth: "none" }}>
          {allSections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                activeSection === id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {sectionLabels[id]}
            </button>
          ))}
        </div>
      </div>

      {/* All sections rendered sequentially */}
      <div className="mt-32">
        {allSections.map((sectionId, idx) => (
          <div key={sectionId}>
            <ContentArea activeSection={sectionId} asSection />
            {idx < allSections.length - 1 && (
              <div className="max-w-5xl mx-auto px-8">
                <hr className="border-t-2 border-border/50" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6 text-center">
        <p className="text-sm opacity-80">
          Manual Técnico para Mantenimiento de Equipos Computacionales
        </p>
        <p className="text-sm opacity-60 mt-1">
          Universidad Politécnica Territorial del Estado Aragua "Federico Brito Figueroa"
        </p>
      </footer>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-accent transition-colors"
          aria-label="Ir arriba"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;

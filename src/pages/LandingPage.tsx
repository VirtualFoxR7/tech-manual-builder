import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import estudiante1 from "@/assets/estudiante-1.jpg";
import estudiante2 from "@/assets/estudiante-2.jpg";
import estudiante3 from "@/assets/estudiante-3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const interestPoints = [
  { label: "Mantenimiento general", section: "mantenimiento-general" },
  { label: "Pasos para el mantenimiento", section: "pasos" },
  { label: "Medidas de seguridad", section: "seguridad" },
  { label: "Equipos", section: "equipos-institucion" },
  { label: "Video de mantenimiento", section: "video-mantenimiento" },
  { label: "Involucrados", section: "involucrados" },
  { label: "Preguntas frecuentes", section: "preguntas-frecuentes" },
];

const involucrados = [
  { nombre: "José Palencia", foto: estudiante1 },
  { nombre: "Amilkar Gutiérrez", foto: estudiante2 },
  { nombre: "Diana Altamirano", foto: estudiante3 },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    navigate(`/manual?seccion=${section}`);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-landing-gradient text-white">
      {/* Logo */}
      <div className="pt-6 pl-6">
        <img
          src={logo}
          alt="UPTAEB Logo"
          className="w-16 h-16 object-contain cursor-pointer"
          onClick={() => navigate("/manual")}
        />
      </div>

      {/* Title */}
      <div className="px-6 pt-8 pb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Manual Técnico para Mantenimiento de Equipos Computacionales
        </h1>

        {/* Synopsis */}
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
          El presente manual técnico tiene como objetivo proporcionar una guía completa y detallada
          para el mantenimiento de equipos computacionales en entornos institucionales. Elaborado
          considerando las mejores prácticas de la industria y las necesidades específicas de nuestra
          comunidad educativa, busca establecer procedimientos estandarizados que permitan mantener
          en óptimas condiciones el equipamiento tecnológico, prolongar su vida útil y garantizar su
          funcionamiento eficiente.
        </p>
      </div>

      {/* Interest Points */}
      <div className="px-6 py-8">
        <p className="font-bold text-lg mb-4">Puntos de interés</p>
        <div className="relative flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Desplazar izquierda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {interestPoints.map((point) => (
              <button
                key={point.section}
                onClick={() => handleNavigate(point.section)}
                className="flex-shrink-0 snap-start px-5 py-2.5 bg-white rounded-full text-primary font-bold text-sm whitespace-nowrap hover:bg-white/90 transition-colors"
              >
                {point.label}
              </button>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="flex-shrink-0 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Desplazar derecha"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Involucrados */}
      <div className="px-6 py-8">
        <p className="font-bold text-lg mb-6">Involucrados</p>
        <div className="flex gap-6 justify-center flex-wrap">
          {involucrados.map((persona) => (
            <div
              key={persona.nombre}
              onClick={() => handleNavigate("involucrados")}
              className="cursor-pointer flex flex-col items-center gap-3 transition-transform hover:scale-105"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/40">
                <img
                  src={persona.foto}
                  alt={persona.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-center">{persona.nombre}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enter button */}
      <div className="text-center py-10">
        <button
          onClick={() => navigate("/manual")}
          className="px-8 py-3 bg-white text-primary font-bold rounded-full text-lg hover:bg-white/90 transition-colors"
        >
          Entrar al manual
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

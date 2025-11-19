import { ImageIcon } from "lucide-react";

interface ContentAreaProps {
  activeSection: string;
}

const ContentArea = ({ activeSection }: ContentAreaProps) => {
  const getContent = () => {
    switch (activeSection) {
      case "introduccion":
        return {
          title: "INTRODUCCIÓN AL MANUAL",
          content: [
            "El presente manual técnico tiene como objetivo proporcionar una guía completa y detallada para el mantenimiento de equipos computacionales en entornos institucionales. Este documento ha sido elaborado considerando las mejores prácticas de la industria y las necesidades específicas de nuestra comunidad educativa.",
            "A través de este manual, se busca establecer procedimientos estandarizados que permitan mantener en óptimas condiciones el equipamiento tecnológico, prolongar su vida útil y garantizar su funcionamiento eficiente.",
            "El manual está dirigido tanto a personal técnico especializado como a usuarios que requieran conocimientos básicos sobre el cuidado y mantenimiento preventivo de equipos computacionales.",
          ],
        };

      case "institucion":
        return {
          title: "INSTITUCIÓN (COMUNIDAD)",
          content: [
            "La Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa' es una institución de educación superior comprometida con la formación integral de profesionales en diversas áreas del conocimiento tecnológico y científico.",
            "Nuestra comunidad universitaria cuenta con modernos laboratorios de computación y equipamiento tecnológico de última generación, los cuales requieren un mantenimiento adecuado para garantizar su funcionamiento óptimo.",
          "Este manual surge como respuesta a la necesidad de establecer protocolos claros para el cuidado del patrimonio tecnológico institucional, involucrando a toda la comunidad en el proceso de preservación de estos recursos.",
        ],
      };

      case "mantenimiento":
        return {
          title: "MANTENIMIENTO",
          content: [
            "El mantenimiento de equipos computacionales es un conjunto de actividades sistemáticas orientadas a mantener o restablecer el funcionamiento óptimo de los sistemas informáticos. Estas actividades incluyen inspección, limpieza, ajustes, reparaciones y reemplazo de componentes.",
            "Un programa de mantenimiento adecuado no solo prolonga la vida útil de los equipos, sino que también reduce costos operativos, minimiza tiempos de inactividad y mejora el rendimiento general del sistema.",
            "Existen diferentes tipos de mantenimiento, cada uno con objetivos y procedimientos específicos, que serán detallados en las siguientes secciones.",
          ],
        };

      case "mantenimiento-general":
        return {
          title: "MANTENIMIENTO GENERAL",
          content: [
            "El mantenimiento general comprende todas las actividades básicas y rutinarias necesarias para mantener los equipos en condiciones operativas estables. Incluye tareas como la limpieza externa, verificación de conexiones, actualización de software y respaldo de información.",
            "Este tipo de mantenimiento debe realizarse de manera regular y puede ser ejecutado por usuarios capacitados o personal técnico, dependiendo de la complejidad de las tareas.",
            "Las principales actividades incluyen: limpieza de superficies, revisión de cables y conexiones, verificación de ventilación adecuada, actualización de sistemas operativos y aplicaciones, y respaldo periódico de datos importantes.",
          ],
        };

      case "mantenimiento-preventivo":
        return {
          title: "MANTENIMIENTO PREVENTIVO",
          content: [
            "El mantenimiento preventivo consiste en un conjunto de acciones planificadas y programadas que se realizan antes de que ocurran fallas en los equipos. Su objetivo principal es anticipar y prevenir problemas potenciales.",
            "Este tipo de mantenimiento incluye inspecciones periódicas, limpieza profunda de componentes internos, verificación del estado de hardware, actualización de firmware y BIOS, pruebas de rendimiento y diagnóstico de posibles fallas.",
            "Se recomienda realizar mantenimiento preventivo cada 3 a 6 meses, dependiendo del uso y las condiciones ambientales en las que operan los equipos. La frecuencia puede ajustarse según las necesidades específicas de cada área.",
          ],
        };

      case "mantenimiento-correctivo":
        return {
          title: "MANTENIMIENTO CORRECTIVO",
          content: [
            "El mantenimiento correctivo se realiza cuando un equipo ha presentado una falla o mal funcionamiento. Su objetivo es restaurar la funcionalidad del sistema mediante la identificación y corrección del problema.",
            "Este tipo de mantenimiento puede ser planificado (cuando se detecta un problema que no requiere atención inmediata) o no planificado (cuando ocurre una falla inesperada que requiere intervención urgente).",
            "Las actividades incluyen: diagnóstico de fallas, reparación o reemplazo de componentes defectuosos, reinstalación de software, recuperación de datos y pruebas de funcionamiento post-reparación.",
          ],
        };

      case "herramientas":
        return {
          title: "HERRAMIENTAS NECESARIAS",
          content: [
            "Para realizar un mantenimiento adecuado de equipos computacionales, es fundamental contar con las herramientas apropiadas. Estas herramientas facilitan el trabajo y ayudan a prevenir daños durante los procedimientos.",
            "Herramientas básicas indispensables: Destornilladores de precisión (Phillips y planos), pinzas antiestáticas, pulsera antiestática, kit de limpieza (aire comprimido, paños de microfibra, alcohol isopropílico), multímetro digital, pasta térmica, linternas LED, organizadores de tornillos.",
            "Herramientas avanzadas recomendadas: Probadores de fuentes de poder, lectores de diagnóstico POST, software de diagnóstico (CPU-Z, HWMonitor, CrystalDiskInfo), cables de prueba, aspiradora especializada para electrónicos.",
          ],
        };

      case "seguridad":
        return {
          title: "MEDIDAS DE SEGURIDAD",
          content: [
            "La seguridad durante el mantenimiento de equipos computacionales es primordial tanto para proteger al personal técnico como para preservar la integridad de los equipos. Siempre se deben seguir protocolos estrictos de seguridad.",
            "Medidas básicas de seguridad: Siempre desconectar los equipos de la corriente eléctrica antes de iniciar cualquier intervención. Usar pulsera antiestática para prevenir descargas electrostáticas. Trabajar en un área bien ventilada e iluminada. No usar imanes cerca de discos duros o medios de almacenamiento. Evitar consumir alimentos o bebidas cerca de los equipos.",
            "Protección de datos: Realizar respaldos completos antes de cualquier mantenimiento mayor. Etiquetar cables y componentes antes de desconectarlos. Documentar todas las configuraciones importantes. Usar herramientas adecuadas para evitar daños físicos. Mantener un área de trabajo ordenada y libre de estática.",
          ],
        };

      case "equipos":
        return {
          title: "EQUIPOS",
          content: [
            "Esta sección proporciona información detallada sobre los equipos computacionales que forman parte del patrimonio tecnológico de la institución. Se describen sus componentes principales y características técnicas.",
            "Los equipos computacionales modernos están compuestos por diversos elementos de hardware y software que trabajan de manera integrada para proporcionar funcionalidad. Es importante conocer cada componente para realizar un mantenimiento efectivo.",
            "En las siguientes subsecciones se detallan los componentes individuales y el inventario específico de equipos disponibles en la institución.",
          ],
        };

      case "componentes":
        return {
          title: "COMPONENTES",
          content: [
            "UNIDAD CENTRAL DE PROCESAMIENTO (CPU): Es el cerebro del computador, responsable de ejecutar instrucciones y procesar datos. Requiere mantenimiento de su sistema de refrigeración y reaplicación periódica de pasta térmica.",
            "MEMORIA RAM: Almacenamiento temporal de datos en uso. Debe mantenerse limpia y asegurada en sus ranuras. Es importante verificar su correcto funcionamiento mediante pruebas de diagnóstico.",
            "DISCO DURO / SSD: Dispositivos de almacenamiento permanente. Los discos duros mecánicos requieren más cuidado debido a sus partes móviles. Los SSD, aunque más resistentes, también necesitan monitoreo de su salud y vida útil.",
            "PLACA MADRE (MOTHERBOARD): Circuito principal que interconecta todos los componentes. Requiere limpieza cuidadosa y verificación de condensadores y conexiones.",
            "FUENTE DE PODER: Suministra energía eléctrica a todos los componentes. Debe mantenerse limpia y verificarse su correcto funcionamiento regularmente.",
            "TARJETA GRÁFICA: Procesa información visual. En equipos con uso intensivo gráfico, requiere limpieza frecuente de sus ventiladores y verificación de temperatura.",
          ],
        };

      case "equipos-institucion":
        return {
          title: "EQUIPOS DE LA INSTITUCIÓN (COMUNIDAD)",
          content: [
            "La institución cuenta con un inventario diverso de equipos computacionales distribuidos en diferentes áreas: laboratorios, aulas, oficinas administrativas y biblioteca.",
            "LABORATORIOS DE COMPUTACIÓN: Equipados con estaciones de trabajo de última generación, con procesadores Intel Core i5/i7 o AMD Ryzen equivalentes, 16GB de RAM, discos SSD de 256GB o superior, y monitores LED de 24 pulgadas.",
            "EQUIPOS ADMINISTRATIVOS: Computadores de escritorio y portátiles para gestión administrativa, con especificaciones medias adecuadas para tareas ofimáticas y sistemas de gestión institucional.",
            "SERVIDORES: Equipos de alto rendimiento para servicios web, bases de datos y aplicaciones institucionales. Requieren mantenimiento especializado y monitoreo constante.",
            "Todos los equipos están registrados en un sistema de inventario con códigos de identificación únicos y cronogramas de mantenimiento específicos.",
          ],
        };

      case "equipo-desarrollo":
        return {
          title: "EQUIPO DE DESARROLLO DEL PROYECTO",
          content: [
            "Este manual técnico ha sido desarrollado por un equipo multidisciplinario de estudiantes y docentes de la Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa', con el objetivo de proporcionar una herramienta útil para la comunidad universitaria.",
            "El equipo ha trabajado en la investigación, recopilación y sistematización de información técnica relevante, consultando diversas fuentes especializadas y aplicando conocimientos adquiridos durante la formación académica.",
            "COORDINACIÓN TÉCNICA: Responsable de la estructura general del manual y validación técnica de procedimientos.",
            "INVESTIGACIÓN Y CONTENIDO: Encargado de la recopilación y redacción de información técnica actualizada.",
            "DISEÑO Y FORMATO: Responsable de la presentación visual y organización del contenido para facilitar su consulta.",
            "Agradecemos a todos los miembros del equipo por su dedicación y compromiso en la elaboración de este importante recurso para nuestra comunidad universitaria.",
            "Los Desarrolladore son: Jose Palencia",
          ],
        };

      default:
        return {
          title: "INTRODUCCIÓN AL MANUAL",
          content: [
            "Seleccione una sección del menú lateral para visualizar su contenido.",
          ],
        };
    }
  };

  const content = getContent();

  return (
    <main className="ml-72 mt-20 p-8 bg-background min-h-screen">
      <article className="max-w-5xl">
        {/* Title - Uppercase and left-aligned */}
        <h2 className="text-3xl font-bold text-foreground mb-6 uppercase">
          {content.title}
        </h2>

        {/* Content Area */}
        <div className="space-y-6">
          {/* Image Placeholder - Left side */}
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0 w-48 h-48 bg-muted rounded-lg flex items-center justify-center border border-border">
              <ImageIcon className="w-16 h-16 text-muted-foreground" />
            </div>
            
            {/* First paragraph alongside image */}
            <div className="flex-1">
              <p className="text-foreground leading-relaxed text-justify">
                {content.content[0]}
              </p>
            </div>
          </div>

          {/* Remaining paragraphs */}
          {content.content.slice(1).map((paragraph, index) => (
            <p key={index} className="text-foreground leading-relaxed text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground italic">
            Manual Técnico para Mantenimiento de Equipos Computacionales - Universidad Politécnica Territorial del Estado Aragua "Federico Brito Figueroa"
          </p>
        </div>
      </article>
    </main>
  );
};

export default ContentArea;

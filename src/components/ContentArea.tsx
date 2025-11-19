import labIntroduccion from "@/assets/lab-introduccion.jpg";
import universidadJardin from "@/assets/universidad-jardin.jpg";
import universidadEntrada from "@/assets/universidad-entrada.jpg";
import mantenimientoGeneral from "@/assets/mantenimiento-general.jpg";
import mantenimientoPreventivo from "@/assets/mantenimiento-preventivo.jpg";
import mantenimientoCorrectivo from "@/assets/mantenimiento-correctivo.jpg";
import herramientas from "@/assets/herramientas.jpg";
import seguridad from "@/assets/seguridad.jpg";
import equipos from "@/assets/equipos.jpg";
import componentes from "@/assets/componentes.jpg";
import equiposInstitucion from "@/assets/equipos-institucion.jpg";
import equipoDesarrollo from "@/assets/equipo-desarrollo.jpg";

interface ContentAreaProps {
  activeSection: string;
}

// Mapping of sections to their corresponding images
const sectionImages: Record<string, string> = {
  introduccion: labIntroduccion,
  institucion: universidadJardin,
  mantenimiento: mantenimientoGeneral,
  "mantenimiento-general": mantenimientoGeneral,
  "mantenimiento-preventivo": mantenimientoPreventivo,
  "mantenimiento-correctivo": mantenimientoCorrectivo,
  herramientas: herramientas,
  seguridad: seguridad,
  equipos: equipos,
  componentes: componentes,
  "equipos-institucion": equiposInstitucion,
  "equipo-desarrollo": equipoDesarrollo,
};

// Special sections with multiple images
const institutionImages = [universidadJardin, universidadEntrada];

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
            "Reseña Historica",
            "Universidad Politécnica Territorial de Aragua “Federico Brito Figueroa” — Antes conocida como “Instituto Universitario Experimental De Tecnología De La Victoria” — es una institución académica de grado universitario cuya cede principal está localizada en La Victoria estado Aragua, en la Avenida Universidad junto al comando de la Fuerza Armada Nacional (FAN)",
            "El Instituto Universitario Experimental de tecnología de La Victoria fue fundado por Decreto Presidencial N° 1.959 del 14 de Diciembre del 1976, y en conformidad con la Ley De Universidades y el Reglamento de los Institutos y Colegios Universitarios según se hace constar en la Gaceta Oficial de La República De Venezuela N° 31.139, expedida el 27 de Diciembre de 1976, dependiendo de la Dirección Sectorial de Educación Superior del Ministerio de Educación. inició sus actividades Académicas de Técnico Superior en Enero del 1978 con las especialidades de Mecánica y Electricidad, junto a las menciones de Electrotecnia, Instrumentación y Control, además de Telecomunicaciones. Posteriormente el Ministerio de Educación determina la integración progresiva de las demás especiales aprobadas por el Consejo Nacional de Universidades. Desde la fecha existió trabajo corporativo entre la institución y las empresas, lo que en su momento permitió un autofinanciamiento parcial para esta casa de estudios, misma que contaba con un repertorio de profesores tanto venezolanos como franceses ",
            "Durante la década de los noventa, el instituto amplió su repertorio de especialidades disponibles, siendo el año 1992 en el que se integró la especialidad de Informática, seguida por Administración Mención Costos en el 1993, además desde ese año se imparten estudios de postgrado para Técnicos Superiores Universitarios de las especialidades de Electricidad, Mecánica y Gerencia en Sistemas, y Educación",
            "Con la llegada del año 2010, y según consta en la Gaceta Oficial Extraordinaria N° 5987, decreto 7566, el Instituto Universitario Experimental de Tecnología de La Victoria fue rebautizado como Universidad Politécnica Territorial del Estado Aragua “Federico Brito Figueroa” dentro del marco de la misión Alma Mater del Gobierno Venezolano, con la finalidad de transformar la educación universitaria en el gobierno de Venezuela",
            "Mención Honorifica Para U.E.P. Colegio Brito",
            "Reseña Historica",
            "El Colegio Brito surge como Institución en el año 1.965, bajo los auspicios de la familia Brito la Sra. Marta y el Sr. Carlos. Comienza solo como preescolar y se van incorporando año tras años los grados subsiguientes hasta diversificado. Desde el año 1986 hasta 2009 se graduaron bachilleres; desde el año 2010 se gradúan en Educación Media General mención Ciencias.",
            "Actualmente contamos con dos sedes: la pionera en la Urb. Bolívar Norte donde funciona 4to. y 5to. año de Educación Media General,  contando con aulas espaciosas con aires acondicionados, auditórium, Gimnasio Cubierto, canchas múltiples, Laboratorios de Física, Química, Biología y Ciencias de la Tierra, Cantina espaciosa. La otra, en la Urb. Morichal, donde funciona desde Maternal hasta 3er. año, en modernas y confortables Instalaciones, con una arquitectura novedosa,  aulas con baños para los más pequeños y aire acondicionado.  Laboratorios de Computación, Física, Química, Biología; además canchas deportivas, cantina y una proveeduría con Fotocopiado.  Adicionalmente a las actividades curriculares, el colegio Brito brinda a sus estudiantes sin costo adicional clases de Inglés, computación, también tenemos clubes de Futbolito, Baloncesto, Voleibol, Promoción y Recepción.",
            "Como ha sido tradición de nuestro colegio, el principio que nos guía es la formación integral de los estudiantes, por tal motivo contamos con un servicio de Psicólogo y una Psicopedagoga que ofrece atención personalizada para dificultades de aprendizaje,  adaptación de grupos, técnicas de estudio y orientación vocacional.",
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
            "El mantenimiento consiste en una serie de practicas, acciones, métodos y procedimientos cuya finalidad es restaurar, re-potenciar, reajustar o simplemente cuidar de un objeto mecánico, electrónico, informático, o en lineas generales, de cualquier conjunto formado por mas de una pieza. En este caso concreto hablamos del mantenimiento dirigido a equipos computacionales",
            "Mantenimiento De Un Sistema Informático",
            "Es un conjunto de acciones técnicas destinadas a garantizar el correcto funcionamiento, la seguridad y el rendimiento óptimo de los equipos y sistemas informáticos. Este servicio incluye tanto tareas preventivas como correctivas, y puede realizarse de forma presencial o remota para el caso del mantenimiento de software.",
            "¿Razón Del Porque Hacerle Mantenimiento?",
            "Un computador debe cuidarse y mantenerse para prevenir problemas. Haciendo mantenimiento regular y arreglos cuando algo falla en la computadora, se logra que las partes físicas duren más tiempo y que los sistemas y programas siempre estén actualizados, para asegurar su correcto funcionamiento y prolongando su vida útil.",
          ],
        };

      case "mantenimiento-preventivo":
        return {
          title: "MANTENIMIENTO PREVENTIVO",
          content: [
            "El mantenimiento preventivo consiste en un conjunto de acciones planificadas y programadas que se realizan antes de que ocurran fallas en los equipos. Su objetivo principal es anticipar y prevenir problemas potenciales.",
            "Este tipo de mantenimiento incluye inspecciones periódicas, limpieza profunda de componentes internos, verificación del estado de hardware, actualización de firmware y BIOS, pruebas de rendimiento y diagnóstico de posibles fallas.",
            "Se recomienda realizar mantenimiento preventivo cada 3 a 6 meses, dependiendo del uso y las condiciones ambientales en las que operan los equipos. La frecuencia puede ajustarse según las necesidades específicas de cada área.",
            "Consiste en realizar labores programadas periódicamente para conservar equipos, instalaciones o sistemas en óptimas condiciones y evitar fallos inesperados. Implicando variedad de enfoques para supervisar y programar inspecciones y reparaciones. El mantenimiento de prevención suele consistir en limpiezas de las maquinas, donde se procura entre otras cosas remover el polvo del sistema de refrigeración, cambiar la pasta térmica según sea necesario, actualizar los programas que lo requieran, y demás practicas de la misma índole.",
            "Mantenimiento Preventivo Hardware",
            "Comúnmente involucra procedimientos de limpieza, partiendo desde lo mas simple como es la limpieza del case a base de un paño y tal vez una brocha o cepillo, hasta limpiar el polvo del disipador para liberar los canales obstruidos, también puede ser incluido el ajuste de tornillos sueltos, cables mal conectados, la correcta distribución del cableado, e incluso la correcta ubicación del equipo en un lugar adecuadamente ventilado. En esencia, este tipo de mantenimiento consiste en mantener en orden los aspectos menores del equipo con el fin de evitar de que evolucionen en problemas mas graves y notorios",
            "Mantenimiento Preventivo Software",
            "Corroborar el desempeño del sistema, incluye actualización regular del sistema operativo, aplicaciones y antivirus, etc, además de la integridad de los datos almacenados y/o verificar la velocidad posible del procesamiento de datos dentro de la configuración óptima del sistema.,",
          ],
        };

      case "mantenimiento-correctivo":
        return {
          title: "MANTENIMIENTO CORRECTIVO",
          content: [
            "El mantenimiento correctivo se realiza cuando un equipo ha presentado una falla o mal funcionamiento. Su objetivo es restaurar la funcionalidad del sistema mediante la identificación y corrección del problema.",
            "Este tipo de mantenimiento puede ser planificado (cuando se detecta un problema que no requiere atención inmediata) o no planificado (cuando ocurre una falla inesperada que requiere intervención urgente).",
            "Las actividades incluyen: diagnóstico de fallas, reparación o reemplazo de componentes defectuosos, reinstalación de software, recuperación de datos y pruebas de funcionamiento post-reparación.",
            "Se basa en corregir los defectos observados en los equipamientos o instalaciones, es la forma más básica de mantenimiento la cual consiste en la corrección de problemas críticos que puedan o no estar comprometiendo el funcionamiento del equipo. Suele recurrirse a esta clase de mantenimiento cuando el mantenimiento de prevención no ha sido hecho de forma correcta, llevando al daño y posterior colapso del equipo. Las practicas comunes en este mantenimiento van desde el cambio de los componentes dañados por parte del hardware, hasta desinstalación y posterior reinstalación del software afectado, incluso involucrando la reinstalación completa del sistema operativo en los casos mas graves.",
            "Mantenimiento Correctivo De Hardware",
            "En contraste con el mantenimiento preventivo, el mantenimiento de corrección se fundamenta en el reajuste, reparación o cambio completo de componentes que presenten fallos mayores que pueden o no haber causado el colapso del equipo. Estos fallos pueden ser parte de los siguientes ejemplos:",
            " * Reemplazo de una o mas memorias RAM dañada(s)",
            " * Desmonte y mantenimiento/cambio de la fuente de poder",
            " * Desmonte y mantenimiento/cambio de la tarjeta gráfica",
            " * Cambio de disco duro HDD a SSD o M.2",
            " * Cambio de procesador",
            " * Cambio de disipador ",
            " * Cambio de refrigeración tradicional a refrigeración liquida",
            "En lineas generales, este mantenimiento busca arreglar todo aquello que el mantenimiento preventivo no pudo evitar, corregir fallos graves y críticos, y dar solución a los problemas críticos que amenazan la funcionalidad del equipo.",
            "Mantenimiento Correctivo Software",
            "Consiste en detectar y corregir errores o fallos que aparecen durante el uso, realizar restauraciones, reinstalaciones o aplicar parches y actualizaciones para resolver los problemas específicos.",
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
          {/* Image(s) - Special handling for institution section */}
          {activeSection === "institucion" ? (
            <>
              {/* Two images grid for institution */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {institutionImages.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`${content.title} - Imagen ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-lg border border-border shadow-sm"
                  />
                ))}
              </div>
              {/* First paragraph below images */}
              <p className="text-foreground leading-relaxed text-justify mb-6">
                {content.content[0]}
              </p>
            </>
          ) : (
            /* Single image - Left side */
            <div className="flex items-start gap-6 mb-6">
              <img 
                src={sectionImages[activeSection]} 
                alt={content.title}
                className="flex-shrink-0 w-48 h-48 object-cover rounded-lg border border-border shadow-sm"
              />
              
              {/* First paragraph alongside image */}
              <div className="flex-1">
                <p className="text-foreground leading-relaxed text-justify">
                  {content.content[0]}
                </p>
              </div>
            </div>
          )}

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

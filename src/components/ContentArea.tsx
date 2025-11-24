import { useState } from "react";
import GlosarioTerminos from "./GlosarioTerminos";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
//import labIntroduccion from "@/assets/lab-introduccion.jpg";
import universidadJardin from "@/assets/universidad-jardin.jpg";
import universidadEntrada from "@/assets/universidad-entrada.jpg";
import mantenimientoGeneral from "@/assets/mantenimiento-general.jpg";
import mantenimientoPreventivo from "@/assets/mantenimiento-preventivo.jpg";
import mantenimientoCorrectivo from "@/assets/mantenimiento-correctivo.jpg";
import herramientas from "@/assets/herramientas.jpg";
import seguridad from "@/assets/seguridad.jpg";
import equipos from "@/assets/equipos.jpg";
//import componentes from "@/assets/componentes-1.jpg";
import componentes1 from "@/assets/componentes-1.jpg";
import equipoInstitucion1 from "@/assets/equipo-institucion-1.jpg";
import equipoInstitucion2 from "@/assets/equipo-institucion-2.jpg";
import equipoInstitucion3 from "@/assets/equipo-institucion-3.jpg";
import equipoInstitucion4 from "@/assets/equipo-institucion-4.jpg";
import equipoInstitucion5 from "@/assets/equipo-institucion-5.jpg";
import equipoInstitucion6 from "@/assets/equipo-institucion-6.jpg";
import equipoInstitucion7 from "@/assets/equipo-institucion-7.jpg";
import agradecimiento from "@/assets/logo-brito.jpg";
import header from "@/assets/logo.jpg";

import equipoDesarrollo from "@/assets/equipo-desarrollo.jpg";
import estudiante1 from "@/assets/estudiante-1.jpg";
import estudiante2 from "@/assets/estudiante-2.jpg";
import estudiante3 from "@/assets/estudiante-3.jpg";

// Componentes individuales
import gabinete from "@/assets/componentes/gabinete.jpg";
import placaMadre from "@/assets/componentes/placa-madre.jpg";
import fuentePoder from "@/assets/componentes/fuente-poder.jpg";
import tarjetaExpansion from "@/assets/componentes/tarjeta-expansion.jpg";
import memoriaRam from "@/assets/componentes/memoria-ram.jpg";
import procesador from "@/assets/componentes/procesador.jpg";
import discoDuro from "@/assets/componentes/disco-duro.jpg";
import puertosRanuras from "@/assets/componentes/puertos-ranuras.jpg";
import componentesElectricos from "@/assets/componentes/componentes-electricos.jpg";
import unidadCdDvd from "@/assets/componentes/unidad-cd-dvd.jpg";
import cablesBuses from "@/assets/componentes/cables-buses.jpg";
import carcasaGabinete from "@/assets/componentes/carcasa-gabinete.jpg";
import ensambleCase from "@/assets/componentes/ensamble-case.jpg";
import monitor from "@/assets/componentes/monitor.jpg";

import { ImageModal } from "./ImageModal";
import { ZoomIn } from "lucide-react";

interface ContentAreaProps {
  activeSection: string;
}

// Mapping of sections to their corresponding images
const sectionImages: Record<string, string> = {
 // introduccion: labIntroduccion,
  institucion: universidadJardin,
  mantenimiento: mantenimientoGeneral,
  "mantenimiento-general": mantenimientoGeneral,
  "mantenimiento-preventivo": mantenimientoPreventivo,
  "mantenimiento-correctivo": mantenimientoCorrectivo,
  herramientas: herramientas,
  seguridad: seguridad,
  equipos: equipos,
  componentes: componentes1,
  "equipos-institucion": equipoInstitucion1,
  "equipo-desarrollo": equipoDesarrollo,
  agradecimiento: agradecimiento,
};

// Special sections with multiple images
const institutionImages = [universidadJardin, universidadEntrada];
const equiposInstitucionImages = [equipoInstitucion1, equipoInstitucion4, equipoInstitucion3, equipoInstitucion7];
const componentesImages = [componentes1, componentes1];

// Mapping de componentes a sus imágenes
const componenteImageMap: Record<string, string> = {
  "gabinete": gabinete,
  "placa-madre": placaMadre,
  "fuente-poder": fuentePoder,
  "tarjeta-expansion": tarjetaExpansion,
  "memoria-ram": memoriaRam,
  "procesador": procesador,
  "disco-duro": discoDuro,
  "puertos-ranuras": puertosRanuras,
  "componentes-electricos": componentesElectricos,
  "unidad-cd-dvd": unidadCdDvd,
  "cables-buses": cablesBuses,
  "carcasa-gabinete": carcasaGabinete,
  "ensamble-case": ensambleCase,
  "monitor": monitor
};
const ContentArea = ({ activeSection }: ContentAreaProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");
  const [selectedInvolucrado, setSelectedInvolucrado] = useState(0);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedImageAlt(alt);
    setIsModalOpen(true);
  };

  const getContent = () => {
    switch (activeSection) {
      case "introduccion":
        return {
          title: "INTRODUCCIÓN AL MANUAL",
          objetivoManual: "Servir como guía para enseñar y facilitar el proceso y la ejecución del mantenimiento tanto correctivo como preventivo a una computadora, dando pasos claros y prácticos para mantener el funcionamiento y optimización del equipo.",
          objetivosEspecificos: [
            "Conocer la arquitectura y estructura de las computadoras y diferenciar las configuraciones existentes entre hardware y software.",
            "Identificar fallos tanto internos como externos en la estructura del equipo.",
            "Identificar las herramientas requeridas para realizar mantenimiento, además de guiar en su correcto uso y aplicación.",
            "Proporcionar conocimiento técnico respecto a las piezas y componentes tanto físicos como partes del sistema operativo.",
            "Guiar paso a paso en el proceso de mantenimiento para así cometer la mínima cantidad de errores a la hora de aplicar el mantenimiento."
          ],
          razonManual: "La Universidad Politécnica Territorial del Estado Aragua Federico Brito Figueroa cuenta con un valioso patrimonio tecnológico que requiere cuidado constante y profesional. Este manual surge ante la necesidad de democratizar el conocimiento técnico, permitiendo que estudiantes, docentes y personal administrativo participen activamente en la preservación de nuestros equipos computacionales. La ausencia de protocolos estandarizados genera deterioro prematuro, costos elevados de reparación y pérdida de tiempo académico. Por ello, esta guía no solo busca enseñar procedimientos técnicos, sino cultivar una cultura de responsabilidad compartida hacia los recursos institucionales, garantizando que nuestra comunidad universitaria cuente con herramientas tecnológicas funcionales y duraderas que impulsen la excelencia educativa.",
          content: [
            "El presente manual técnico tiene como objetivo proporcionar una guía completa y detallada para el mantenimiento de equipos computacionales en entornos institucionales. Este documento ha sido elaborado considerando las mejores prácticas de la industria y las necesidades específicas de nuestra comunidad educativa.",
            "A través de este manual, se busca establecer procedimientos estandarizados que permitan mantener en óptimas condiciones el equipamiento tecnológico, prolongar su vida útil y garantizar su funcionamiento eficiente.",
            "El manual está dirigido tanto a personal técnico especializado como a usuarios que requieran conocimientos básicos sobre el cuidado y mantenimiento preventivo de equipos computacionales.",
            "Con el avance de la tecnología en el ultimo tiempo las computadoras de uso personal o PC por sus siglas en inglés han dejado de ser solamente un lujo, a convertirse en una herramienta indispensable  para el desarrollo laboral y académico, desplegando consigo un abanico de posibilidades en muchos ámbitos, desde en lo laboral hasta lo académico y en el entretenimiento. Sin embargo, y al igual que cualquier máquina, una computadora necesita el respectivo mantenimiento para poder funcionar de manera optima, además de alargar la vida útil de sus componentes. Con esto en mente, esta es una guía orientada al cuidado y mantenimiento de equipos informáticos la cual busca ofrecerse como una herramienta técnica que facilite el proceso de mantenimiento preventivo y correctivo tanto en el hardware como en el software.",
          ],
        };

      case "institucion":
        return {
          title: "U.P.T.A. 'Federico Brito Figueroa'",
          content: [
            "La Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa' es una institución de educación superior comprometida con la formación integral de profesionales en diversas áreas del conocimiento tecnológico y científico.",
            "Nuestra comunidad universitaria cuenta con modernos laboratorios de computación y equipamiento tecnológico de última generación, los cuales requieren un mantenimiento adecuado para garantizar su funcionamiento óptimo.",
            "Este manual surge como respuesta a la necesidad de establecer protocolos claros para el cuidado del patrimonio tecnológico institucional, involucrando a toda la comunidad en el proceso de preservación de estos recursos.",
          ],
          reseñaHistorica: "El Instituto Universitario Experimental de tecnología de La Victoria fue fundado por Decreto Presidencial N° 1.959 del 14 de Diciembre del 1976, y en conformidad con la Ley De Universidades y el Reglamento de los Institutos y Colegios Universitarios según se hace constar en la Gaceta Oficial de La República De Venezuela N° 31.139, expedida el 27 de Diciembre de 1976, dependiendo de la Dirección Sectorial de Educación Superior del Ministerio de Educación. inició sus actividades Académicas de Técnico Superior en Enero del 1978 con las especialidades de Mecánica y Electricidad, junto a las menciones de Electrotecnia, Instrumentación y Control, además de Telecomunicaciones. Posteriormente el Ministerio de Educación determina la integración progresiva de las demás especiales aprobadas por el Consejo Nacional de Universidades. Desde la fecha existió trabajo corporativo entre la institución y las empresas, lo que en su momento permitió un autofinanciamiento parcial para esta casa de estudios, misma que contaba con un repertorio de profesores tanto venezolanos como franceses. Durante la década de los noventa, el instituto amplió su repertorio de especialidades disponibles, siendo el año 1992 en el que se integró la especialidad de Informática, seguida por Administración Mención Costos en el 1993, además desde ese año se imparten estudios de postgrado para Técnicos Superiores Universitarios de las especialidades de Electricidad, Mecánica y Gerencia en Sistemas, y Educación. Con la llegada del año 2010, y según consta en la Gaceta Oficial Extraordinaria N° 5987, decreto 7566, el Instituto Universitario Experimental de Tecnología de La Victoria fue rebautizado como Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa' dentro del marco de la misión Alma Mater del Gobierno Venezolano, con la finalidad de transformar la educación universitaria en el gobierno de Venezuela",
          misionVision: {
            mision: "Contribuir activamente al desarrollo endógeno integral y sustentable en nuestra área de influencia territorial, con la participación activa y permanente del Poder Popular, abarcando múltiples campos de estudios, bajo enfoques inter y transdisciplinarios, para abordar los problemas y retos de su contexto territorial, de acuerdo con las necesidades del pueblo.",
            vision: "Desarrollar capacidades científico-tecnológicas vinculadas con las necesidades del pueblo, en el marco de la transformación del sistema de educación universitaria, hacia un nuevo modelo de relación entre el sector productivo y la Universidad, que sea funcional al desarrollo humanístico, social y económico de la nación."
          }
        };

      case "agradecimiento":
        return {
          title: "AGRADECIMIENTO ESPECIAL A LA U.E.P. 'COLEGIO BIRTO'",
          content: [
"Mención Honorifica Para U.E.P. Colegio Brito",
            "RESEÑA HISTORICA",
            "El Colegio Brito surge como Institución en el año 1.965, bajo los auspicios de la familia Brito la Sra. Marta y el Sr. Carlos. Comienza solo como preescolar y se van incorporando año tras años los grados subsiguientes hasta diversificado. Desde el año 1986 hasta 2009 se graduaron bachilleres; desde el año 2010 se gradúan en Educación Media General mención Ciencias.",
            "Actualmente contamos con dos sedes: la pionera en la Urb. Bolívar Norte donde funciona 4to. y 5to. año de Educación Media General,  contando con aulas espaciosas con aires acondicionados, auditórium, Gimnasio Cubierto, canchas múltiples, Laboratorios de Física, Química, Biología y Ciencias de la Tierra, Cantina espaciosa. La otra, en la Urb. Morichal, donde funciona desde Maternal hasta 3er. año, en modernas y confortables Instalaciones, con una arquitectura novedosa,  aulas con baños para los más pequeños y aire acondicionado.  Laboratorios de Computación, Física, Química, Biología; además canchas deportivas, cantina y una proveeduría con Fotocopiado.  Adicionalmente a las actividades curriculares, el colegio Brito brinda a sus estudiantes sin costo adicional clases de Inglés, computación, también tenemos clubes de Futbolito, Baloncesto, Voleibol, Promoción y Recepción.",
            "Como ha sido tradición de nuestro colegio, el principio que nos guía es la formación integral de los estudiantes, por tal motivo contamos con un servicio de Psicólogo y una Psicopedagoga que ofrece atención personalizada para dificultades de aprendizaje,  adaptación de grupos, técnicas de estudio y orientación vocacional.",
  ],
          agradecimientoEspecial: "Queremos expresar nuestro más sincero agradecimiento al U.E.P Colegio Brito por su ayuda y donación de los equipos de informática. Gracias por ser el único lugar en recibirnos con todo el apoyo, después de algunas lastimas e inconvenientes, aún así quisieron ayudarnos y con la donación pudimos continuar avanzando en nuestro proyecto, algo que antes resultaba difícil por la falta de recursos. Muchas gracias y agradecemos por a vernos escogidos como nuestra primera comunidad."
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
            "En aspectos básicos se trata de mantener al día las actualizaciones del sistema operativo, programas de ofimática, de compresión, programación, seguridad y todo software dedicado para evitar las posibles vulnerabilidades, bugs, o bloqueos causados por la obsolescencia del software.",
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
            "Al igual que en el hardware, el mantenimiento correctivo del software toma lugar para corregir fallos críticos que el mantenimiento de prevención no pudo evitar, consiste en procesos simples como la desinstalación del programa afectado para su posterior reinstalación o reemplazo por un programa distinto. Sin embargo, también engloba prácticas más complejas o invasivas como reinstalación del sistema operativo, formateo de disco duro, y configuración o actualización de la BIOS.",
          ],
        };

      case "herramientas":
        return {
          title: "HERRAMIENTAS NECESARIAS",
          content: [
            "Para llevar a cabo las tareas antes mencionadas en el punto anterior, las herramientas requeridas serán:",

              "* Set de destornilladores de precisión",
              "* Juego de brochas de tamaños distintos",
              "* Alcohol isopropílico/Limpiador de contactos electrónicos",
              "* Paño suave",
              "* Mascarilla",
              "* Pulsera anti-estática",
              "* Guantes",
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

case "pasos":
     return{ title: "PASOS PARA EL MANTENIMIENTO",
content: [

"Realizar pruebas pertinentes para ubicar los fallos a tratar: Se debe encender y probar el equipo, con la finalidad de encontrar fallos de arranque, fallas de software, fallas en los dispositivos de entrada, y/o fallos en puertos de entrada como los puertos USB.",

"Apagar y desconectar el equipo: Con la finalidad de prevenir cualquier posible incidente eléctrico, se debe estar seguro de que el equipo fue desconectado y que sus capacitores se han descargado.",

"Desarmar con cuidado la tapa/cubierta del case: El procedimiento varía según la marca y el modelo del case, sin embargo, el primer paso siempre es ubicar y extraer los tornillos de la tapa/cubierta antes de retirarla.",


"Inspeccionar el estado de los componentes a simple vista: Antes de empezar a desmontar cualquier cosa, se debe realizar una inspección visual preliminar en búsqueda de daño visible a simple vista, como recomendación, tomar notas y fotos será útil.",

"Proceder con la limpieza de los componentes: Con ayuda de un set de brochas, paños, aire comprimido, y alcohol isopropílico, o en su defecto limpiador de contactos electrónicos, se debe realizar una limpieza a los componentes del equipo, manipulando el hardware con cautela para evitar daños, asimismo, aunque el limpiador de contactos suele ser dieléctrico, se deben tener en consideración los componentes que no deben ser sometidos a líquidos, como la lectora DVD.",

"Verificar las conexiones de los cables y componentes: Antes de proceder a desarmar, y con una visión mas clara sin todo el polvo, el siguiente paso es realizar una inspección de las conexiones de los cables y los componentes para determinar sí esa era o no la fuente del fallo en cuestión.",

"Extraer los componentes según sea necesario: Ya con una limpieza superficial hecha y las conexiones revisadas, el siguiente paso es extraer los componentes según lo requiera el mantenimiento, siempre teniendo cuidado de posibles tornillos que aun sigan en la pieza.",

"Realizar los cambios de hardware según sea necesario: Si algún componente se encuentra irremediablemente dañado, no queda más que reemplazarlo, teniendo en cuenta las especificaciones de la motherboard, el consumo del componente y la capacidad de la fuente de poder, la compatibilidad con los puertos y los conectores, e incluso el tamaño en caso de la tarjeta gráfica.",

"Reensamblar el equipo: Tras haber completado la anterior lista de tareas, es hora de reensamblar el equipo, siempre teniendo cuidado y atención a la hora de conectar los componentes y los cables, como recomendación, lo mejor es realizar todos los cambios y mantenimientos del equipo en solo un desarmado.",

"Realizar nuevas pruebas de funcionamiento: Con el equipo nuevamente armado, es hora de probar el funcionamiento, desde el arranque correcto, hasta la correcta funcionalidad de la imagen en pantalla y los dispositivos de entrada.",

   ],

};

      case "pitidos-error":
        return {
          title: "PITIDOS DE ERROR",
          content: [],
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
    content: [],
    componentes: [
      {
        nombre: "GABINETE (CASE)",
        imagen: "gabinete",
        definicion: "¿QUÉ ES?: Es una carcasa que contiene y protege físicamente los componentes internos de una computadora. Proporciona estructura y soporte, además de permitir la ventilación adecuada para el equipo.",
        limpieza: "MODO DE LIMPIEZA: Apagar y desconectar el equipo. Abrir la carcasa con cuidado. Usar aire comprimido para eliminar polvo en zonas internas, ventiladores y componentes. Limpieza con paño de micro-fibra para superficies sin contacto eléctrico. Evitar tocar circuitos directamente."
      },
      {
        nombre: "PLACA MADRE",
        imagen: "placa-madre",
        definicion: "¿QUÉ ES?: Tarjeta principal que conecta y permite la comunicación entre todos los componentes internos del computador, incluyendo CPU, memoria, tarjetas de expansión y dispositivos de almacenamiento. Contiene circuitos, chips y conectores esenciales para el funcionamiento del equipo.",
        limpieza: "MODO DE LIMPIEZA: Retirar cuidadosamente la placa madre del case. Usar aire comprimido para remover polvo de circuitos y ranuras. Limpieza con cepillo suave para áreas difíciles. Limpiar contactos con goma de borrar blanca. Evitar humedad y golpes."
      },
      {
        nombre: "FUENTE DE PODER",
        imagen: "fuente-poder",
        definicion: "¿QUÉ ES?: Componente que suministra energía eléctrica a todos los demás componentes del computador, transformando la electricidad de la red en voltajes adecuados y estables para cada parte. Suele incluir ventilador y rejillas por donde puede acumularse polvo.",
        limpieza: "MODO DE LIMPIEZA: Apagar, desconectar y no abrir la fuente. Usar aire comprimido para eliminar polvo de ventilador y rejillas. Limpiar exterior con paño seco o ligeramente humedecido."
      },
      {
        nombre: "TARJETA DE EXPANSIÓN",
        imagen: "tarjeta-expansion",
        definicion: "¿QUÉ ES?: Placas adicionales que se instalan en la placa madre para agregar funcionalidades como audio, video, o redes, usando ranuras especiales.",
        limpieza: "MODO DE LIMPIEZA: Retirar la tarjeta con cuidado. Usar aire comprimido para polvo. Limpiar contactos con goma de borrar. Cepillar suavemente zonas con suciedad. Volver a instalar con firmeza."
      },
      {
        nombre: "MEMORIA RAM",
        imagen: "memoria-ram",
        definicion: "¿QUÉ ES?: Módulos de memoria temporal que almacenan datos de trabajo para acceso rápido por la CPU.",
        limpieza: "MODO DE LIMPIEZA: Extraer los módulos. Limpiar contactos con goma de borrar blanca. Soplar el polvo con aire comprimido. Evitar tocar los 'dientes' del chips con los dedos."
      },
      {
        nombre: "PROCESADOR (CPU)",
        imagen: "procesador",
        definicion: "¿QUÉ ES?: Unidad central de procesamiento que ejecuta las instrucciones y procesos del sistema operativo y programas.",
        limpieza: "MODO DE LIMPIEZA: Retirar disipador y ventilador con cuidado. Limpiar con aire comprimido. Cambiar pasta térmica para mejorar disipación. Evitar tocar la superficie del chip."
      },
      {
        nombre: "DISCO DURO",
        imagen: "disco-duro",
        definicion: "¿QUÉ ES?: Dispositivo de almacenamiento permanente donde se guardan datos, programas y el sistema operativo. Existen varios tipos, el HDD (Hard Disk Drive) SSD (Solid State Drive) y M.2 o NGFF (Next Generation Form Factor)",
        limpieza: "MODO DE LIMPIEZA: Limpiar solo el exterior con paño suavemente humedecido. Usar aire comprimido en conectores externos. (No abrir el disco duro)."
      },
      {
        nombre: "PUERTOS Y RANURAS",
        imagen: "puertos-ranuras",
        definicion: "¿QUÉ SON?: Conectores externos (puertos) y slots internos (ranuras) que permiten la conexión de dispositivos periféricos y tarjetas de expansión a la computadora.",
        limpieza: "MODO DE LIMPIEZA: Usar aire comprimido y cepillo fino para polvo incrustado. Evitar humedad directa."
      },
      {
        nombre: "COMPONENTES ELÉCTRICOS",
        imagen: "componentes-electricos",
        definicion: "¿QUÉ SON?: Elementos físicos dentro del computador, como resistencias, transistores y circuitos integrados, que controlan y procesan señales eléctricas para el funcionamiento del equipo.",
        limpieza: "MODO DE LIMPIEZA: Soplar con aire comprimido a distancia segura. (No usar líquidos)."
      },
      {
        nombre: "UNIDAD CD Y DVD",
        imagen: "unidad-cd-dvd",
        definicion: "¿QUÉ ES?: Dispositivos ópticos que leen y/o graban datos en discos compactos (CD) y discos digitales versátiles (DVD), usados para almacenar y acceder a información.",
        limpieza: "MODO DE LIMPIEZA: Limpiar exterior con paño humedecido. Aire comprimido en el interior si se abre. Evitar líquidos dentro."
      },
      {
        nombre: "CABLES Y BUSES",
        imagen: "cables-buses",
        definicion: "¿QUÉ SON?: Medios físicos (cables) y vías de comunicación internas (buses) que transmiten datos y energía entre los componentes del ordenador.",
        limpieza: "MODO DE LIMPIEZA: Paño seco o ligeramente humedecido. Verificar conexiones sin polvo."
      },
      {
        nombre: "CARCASA DEL GABINETE (CASE)",
        imagen: "carcasa-gabinete",
        definicion: "¿QUÉ ES?: Estructura externa que protege y da forma al equipo. Puede ser de metal o plástico.",
        limpieza: "MODO DE LIMPIEZA: Paño humedecido para exterior. Aire comprimido en rejillas y ventiladores."
      },
      {
        nombre: "ENSAMBLE INTERNO Y EXTERNO DEL CASE",
        imagen: "ensamble-case",
        definicion: "¿QUÉ ES?: Conjunto físico de piezas internas y externas del gabinete.",
        limpieza: "MODO DE LIMPIEZA: Aire comprimido interno y paño húmedo externo. Revisión y ajuste de tornillos."
      },
      {
        nombre: "MONITOR",
        imagen: "monitor",
        definicion: "¿Que es?Dispositivo de salida que muestra información visual generada por una computadora u otros dispositivos electrónicos.",
        limpieza: "Modo de limpieza: limpiar con paño suave con limpiador especial o alcohol isopropílico diluido, sin humedecer directamente la pantalla. Limpiar marco con paño seco."
      }
    ],
  };


      case "equipos-institucion":
        return {
          title: "EQUIPOS DE LA INSTITUCIÓN (COMUNIDAD)",
          content: [
            "La institución cuenta con un inventario diverso de equipos computacionales distribuidos en diferentes áreas: laboratorios, aulas, oficinas administrativas y biblioteca.",
          ],
          hardwareTable: [
            { tipo: "Gabinete", marca: "DELL", modelo: "DCSLF", capacidad: "-" },
            { tipo: "Memoria RAM", marca: "ProMos", modelo: "PC2-5300U", capacidad: "1GB (512MB x2)" },
            { tipo: "Disco Duro", marca: "Western Digital", modelo: "WD800JD75", capacidad: "80GB" },
            { tipo: "Tarjeta Madre", marca: "Foxconn", modelo: "G33M02", capacidad: "-" },
            { tipo: "Unidad CD/DVD", marca: "-", modelo: "DVD", capacidad: "-" },
            { tipo: "Fuente de Poder", marca: "Delta Electronics", modelo: "DPS250AB-28", capacidad: "250W" },
            { tipo: "Procesador", marca: "Intel", modelo: "Celeron 430", capacidad: "1.80 GHz" },
            { tipo: "Monitor", marca: "DELL", modelo: "E157FPb", capacidad: "-" },
          ],
          softwareTable: [
            { tipo: "Sistema Operativo", nombre: "Windows 7 Ultimate", version: "-" },
            { tipo: "Sistema Ofimático", nombre: "Microsoft Office 2013", version: "15.0.4420.101" },
            { tipo: "Compresor", nombre: "WinRAR", version: "3.90" },
            { tipo: "Lector PDF", nombre: "Adobe Reader XI", version: "11.0.10.32" },
            { tipo: "Navegador", nombre: "Firefox Quantum", version: "58.0.2 32 bits" },
          ],
        };

      case "equipo-desarrollo":
        return {
          title: "EQUIPO DE DESARROLLO DEL PROYECTO",
          content: [ 
            "El equipo ha trabajado en la investigación, recopilación y sistematización de información técnica relevante, consultando diversas fuentes especializadas y aplicando conocimientos adquiridos durante la formación académica.",
            "MODIFICACIÓN MANUAL: Responsable de la edición y ajuste del manual - José Palencia.",
            "INVESTIGACIÓN Y CONTENIDO: Encargado de la recopilación y redacción de información técnica actualizada - Diana Altamirano",
            "DISEÑO Y FORMATO: Responsable de la presentación visual y organización del contenido para facilitar su consulta - Amilkar Gutiérrez",            
            
          ],
        };

      case "involucrados":
        return {
          title: "INVOLUCRADOS",
          content: [],
          isInvolucrados: true,
        };

      case "extras":
        return {
          title: "EXTRAS",
          content: [
            "En esta sección encontrará recursos adicionales complementarios al manual técnico, incluyendo respuestas a preguntas comunes y un glosario de términos especializados.",
          ],
        };

      case "preguntas-frecuentes":
        return {
          title: "PREGUNTAS FRECUENTES",
          content: [],
          preguntas: [
            {
              pregunta: "¿Por qué mi computadora está lenta?",
              problema: "Programas pesados, demasiadas apps abiertas o falta de mantenimiento.",
              solucion: "Cierra programas no usados, elimina archivos basura, desinstala software innecesario, aumenta la RAM o usa un SSD."
            },
            {
              pregunta: "¿Por qué mi PC se calienta demasiado?",
              problema: "Ventiladores sucios, mala ventilación o uso intenso.",
              solucion: "Limpia el polvo, mejora el flujo de aire, usa base refrigerante (laptops) y evita usarla sobre superficies blandas."
            },
            {
              pregunta: "¿Por qué mi computadora no enciende?",
              problema: "Fallo de energía, cargador dañado, batería agotada o problemas internos.",
              solucion: "• Verifica cables y enchufes.\n• Cambia de toma eléctrica.\n• Quita batería (si es posible) y reinicia hardware.\n• Si nada funciona, revisar fuente de poder o placa madre."
            },
            {
              pregunta: "¿Por qué no tengo internet?",
              problema: "Error del router, mala configuración, drivers desactualizados.",
              solucion: "• Reinicia modem/router.\n• Verifica que el WiFi esté activado.\n• Ejecuta el solucionador de Windows.\n• Actualiza el controlador de red."
            },
            {
              pregunta: "¿Por qué mi pantalla está en negro?",
              problema: "Fallo de conexión o problemas de tarjeta gráfica.",
              solucion: "• Revisa el cable de pantalla.\n• Conecta la PC a otro monitor.\n• Actualiza o reinstala los drivers gráficos."
            },
            {
              pregunta: "¿Por qué mi computadora hace ruidos extraños?",
              problema: "Ventiladores sucios, disco duro dañado o piezas flojas.",
              solucion: "• Limpia el interior.\n• Asegura tornillos y cables.\n• Si el ruido viene del disco duro, respalda la información de inmediato."
            },
            {
              pregunta: "¿Por qué aparecen virus o ventanas emergentes?",
              problema: "Navegación insegura, descargas sospechosas o antivirus desactivado.",
              solucion: "• Ejecuta un análisis completo con un antivirus.\n• Elimina apps desconocidas.\n• Activa firewall y actualiza el sistema."
            },
            {
              pregunta: "¿Por qué mis programas se cierran solos?",
              problema: "Archivos corruptos, falta de memoria o software incompatible.",
              solucion: "• Actualiza el programa.\n• Reinstala los programas.\n• Cierra otros programas para liberar memoria."
            },
            {
              pregunta: "¿Por qué mi impresora no imprime desde la computadora?",
              problema: "Cable desconectado, falta de drivers, papel atascado.",
              solucion: "• Revisa las conexiones.\n• Verifica que tenga papel y tinta.\n• Actualiza los controladores de la impresora."
            },
            {
              pregunta: "¿Por qué mi PC se reinicia sola?",
              problema: "Sobrecalentamiento, actualizaciones o fallas de hardware.",
              solucion: "• Limpia ventiladores.\n• Revisa actualizaciones pendientes.\n• Verifica fuente de poder y memoria RAM."
            },
            {
              pregunta: "¿Con qué frecuencia debo realizar mantenimiento preventivo?",
              problema: "Desconocimiento sobre la periodicidad adecuada para el mantenimiento",
              solucion: "Se recomienda realizar mantenimiento preventivo cada 3 a 6 meses, dependiendo del uso y las condiciones ambientales del equipo."
            },
            {
              pregunta: "¿Qué herramientas básicas necesito para mantenimiento?",
              problema: "Falta de conocimiento sobre las herramientas necesarias",
              solucion: "Las herramientas básicas incluyen: destornilladores de precisión, brochas, alcohol isopropílico, paño suave, mascarilla y pulsera anti-estática."
            },
            {
              pregunta: "¿Puedo realizar mantenimiento yo mismo o necesito un técnico?",
              problema: "Dudas sobre la capacidad técnica requerida",
              solucion: "El mantenimiento general y preventivo básico puede ser realizado por usuarios capacitados siguiendo las instrucciones de este manual. Para mantenimiento correctivo complejo, se recomienda consultar con personal técnico especializado."
            },
            {
              pregunta: "¿Cada cuánto debo actualizar el sistema operativo?",
              problema: "Incertidumbre sobre la frecuencia de actualización del software",
              solucion: "Se recomienda instalar actualizaciones de seguridad tan pronto estén disponibles. Las actualizaciones mayores del sistema operativo pueden realizarse de 1 a 2 veces al año, según las necesidades institucionales."
            },
            {
              pregunta: "¿Cómo sé cuándo cambiar la pasta térmica del procesador?",
              problema: "Desconocimiento sobre el mantenimiento del sistema de refrigeración",
              solucion: "La pasta térmica debe cambiarse cada 1-2 años, o antes si nota temperaturas elevadas constantes en el procesador (superiores a 70°C en uso normal)."
            },
            {
              pregunta: "¿Es necesario formatear el disco duro regularmente?",
              problema: "Confusión sobre la necesidad de formateo periódico",
              solucion: "No es necesario formatear regularmente. Solo se recomienda formatear cuando hay problemas graves de rendimiento o infecciones de malware que no se pueden eliminar de otra manera."
            },
            {
              pregunta: "¿Qué hacer con los componentes electrónicos que ya no funcionan?",
              problema: "Desconocimiento sobre el manejo adecuado de residuos electrónicos",
              solucion: "Los componentes electrónicos deben ser desechados en puntos de recolección especializados para residuos electrónicos, nunca en la basura común, ya que contienen materiales que pueden contaminar el medio ambiente."
            }
          ]
        };

      case "glosario":
        return {
          title: "GLOSARIO DE TÉRMINOS",
          content: [],
          isGlosario: true,
        };

      case "conclusion":
        return {
          title: "CONCLUSIÓN",
          content: [
            "A lo largo de este manual hemos visto como está estructurada una computadora, así mismo se han brindado las bases para la realización del mantenimiento a las mismas. Aún así, este tema no debería ser tomado a la ligera, las computadoras son maquinas muy potentes que lo largo de la historia nos han ayudado a agilizar e incluso automatizar procesos que antes tomaban mucho más tiempo, sin embargo también son máquinas frágiles que pueden sufrir daños graves si son manipuladas sin el debido cuidado.",
            "Con esto en mente, por parte de los desarrolladores involucrados detrás de este proyecto instamos a quien lea este manual con el propósito de efectuar un mantenimiento a su equipo por mano propia a mantener toda precaución necesaria para garantizar el bienestar no solo de tu equipo, sino tu bienestar y seguridad propios, muchas suertes en tu mantenimiento, y gracias por leer este manual 🍪",
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

  // Helper function to parse content into structured blocks
  const parseContentBlocks = (contentArray: string[]) => {
    const blocks: Array<{ type: 'subtitle-paragraph' | 'paragraph' | 'list'; subtitle?: string; content: string | string[] }> = [];
    let i = 0;

    while (i < contentArray.length) {
      const current = contentArray[i];
      
      // Check if it's a list item
      if (current.trim().startsWith('*')) {
        const listItems: string[] = [];
        while (i < contentArray.length && contentArray[i].trim().startsWith('*')) {
          listItems.push(contentArray[i].trim().substring(1).trim());
          i++;
        }
        blocks.push({ type: 'list', content: listItems });
        continue;
      }

      // Check if it looks like a subtitle (shorter, no period at end, not a question)
      const isSubtitle = current.length < 150 && 
                        !current.endsWith('.') && 
                        !current.endsWith('?') &&
                        !current.includes('¿') &&
                        current.length > 10;

      if (isSubtitle && i + 1 < contentArray.length) {
        // Get the next paragraph(s) until we hit another subtitle or list
        const paragraphs: string[] = [];
        let j = i + 1;
        
        while (j < contentArray.length) {
          const next = contentArray[j];
          const isNextSubtitle = next.length < 150 && 
                                !next.endsWith('.') && 
                                !next.endsWith('?') &&
                                !next.includes('¿') &&
                                next.length > 10;
          const isNextList = next.trim().startsWith('*');
          
          if (isNextSubtitle || isNextList) break;
          
          paragraphs.push(next);
          j++;
        }

        if (paragraphs.length > 0) {
          blocks.push({ 
            type: 'subtitle-paragraph', 
            subtitle: current,
            content: paragraphs.join(' ')
          });
          i = j;
        } else {
          blocks.push({ type: 'paragraph', content: current });
          i++;
        }
      } else {
        blocks.push({ type: 'paragraph', content: current });
        i++;
      }
    }

    return blocks;
  };

  // Special render for Glosario
  if (activeSection === "glosario") {
    return (
      <main className="ml-72 mt-20 p-8 bg-background min-h-screen">
        <article className="max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 uppercase">
            {content.title}
          </h2>
          <GlosarioTerminos />
          
          {/* Footer note */}
          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Manual Técnico para Mantenimiento de Equipos Computacionales - Universidad Politécnica Territorial del Estado Aragua "Federico Brito Figueroa"
            </p>
          </div>
        </article>
      </main>
    );
  }

  // Special render for Preguntas Frecuentes with Accordion
  if (activeSection === "preguntas-frecuentes" && 'preguntas' in content) {
    return (
      <main className="ml-72 mt-20 p-8 bg-background min-h-screen">
        <article className="max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 uppercase">
            {content.title}
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {content.preguntas.map((item: any, idx: number) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-4 hover:no-underline">
                  {item.pregunta}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="space-y-4">
                    <div className="bg-muted/30 rounded-md p-4">
                      <p className="text-foreground">
                        <strong className="text-primary">Problema:</strong> {item.problema}
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 rounded-md p-4">
                      <p className="text-foreground whitespace-pre-line">
                        <strong className="text-primary">Solución:</strong> {item.solucion}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Footer note */}
          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Manual Técnico para Mantenimiento de Equipos Computacionales - Universidad Politécnica Territorial del Estado Aragua "Federico Brito Figueroa"
            </p>
          </div>
        </article>
      </main>
    );
  }

  // Special render for Pitidos de Error
  if (activeSection === "pitidos-error") {
    return (
      <main className="ml-72 mt-20 p-8 bg-background min-h-screen">
        <article className="max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 uppercase">
            PITIDOS DE ERROR
          </h2>
          
          <div className="space-y-6 animate-fade-in">
            {/* Full width accordion: ¿Qué son? */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem 
                value="que-son"
                className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-4 hover:no-underline">
                  ¿Qué son?
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="bg-muted/30 rounded-md p-4 space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Los códigos de pitidos en PC son señales acústicas que el equipo emite al encenderse durante la autoprueba POST (Power-On Self-Test) ó (autocomprobación de encendido) para indicar el estado y posibles problemas del hardware. Estos pitidos permiten diagnosticar fallos que impiden el arranque normal del ordenador.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Cada patrón de pitidos (cantidad y duración) corresponde a un error específico según el fabricante del BIOS de la placa base.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Side by side accordions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* BIOS AMI */}
              <Accordion type="single" collapsible>
                <AccordionItem 
                  value="bios-ami"
                  className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-4 hover:no-underline">
                    BIOS AMI
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <div className="bg-muted/30 rounded-md p-4 space-y-4">
                      <p className="text-foreground leading-relaxed">
                        Las AMIBIOS es el fabricante más común y popular en equipos de empresas como Apple, Asus, Acer, Dell, Huawei o Microsoft entre muchas otras. Sus códigos de pitidos pueden ser interpretados para diagnosticar problemas específicos en el hardware.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li><strong>1 pitido corto:</strong> Fallo en el refresco de la RAM, lo que puede indicar que los módulos de RAM no están correctamente instalados o están defectuosos.</li>
                        <li><strong>2 pitidos cortos:</strong> Problema en la paridad del circuito, sugiriendo un error de configuración o un fallo en la RAM.</li>
                        <li><strong>3 pitidos cortos:</strong> Fallo en los primeros 64 Kbs de la RAM, que puede implicar un módulo de memoria defectuoso.</li>
                        <li><strong>4 pitidos cortos:</strong> Error en el System Timer, indicando un posible problema en la placa base.</li>
                        <li><strong>5 pitidos cortos:</strong> Fallo de proceso, que puede ser causado por un fallo en la CPU o en la placa base.</li>
                        <li><strong>6 pitidos cortos:</strong> Error en Gate A20 de la controladora del teclado, sugiriendo un problema en el controlador de la CPU o en el teclado.</li>
                        <li><strong>7 pitidos cortos:</strong> Error de excepción en la memoria virtual, generalmente relacionado con un fallo en la CPU o en la RAM.</li>
                        <li><strong>8 pitidos cortos:</strong> Fallo en el test de escritura/lectura de memoria, indicando un posible problema en los módulos de RAM.</li>
                        <li><strong>9 pitidos cortos:</strong> Fallo en la suma de comprobación de la ROM de la BIOS, lo que puede requerir una actualización o reemplazo del chip de la BIOS.</li>
                        <li><strong>10 pitidos cortos:</strong> Error en el apagado de la escritura/lectura de CMOS, sugiriendo un fallo en la placa base.</li>
                        <li><strong>11 pitidos cortos:</strong> Error en la memoria cache, lo que puede indicar un problema en la CPU o en la placa base.</li>
                        <li><strong>1 pitido largo y 2 cortos:</strong> Error con la memoria que forma parte de la tarjeta de vídeo.</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* BIOS Phoenix-Award */}
              <Accordion type="single" collapsible>
                <AccordionItem 
                  value="bios-phoenix"
                  className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-4 hover:no-underline">
                    BIOS Phoenix-Award
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <div className="bg-muted/30 rounded-md p-4 space-y-4">
                      <p className="text-foreground leading-relaxed">
                        Los códigos utilizados por las BIOS de Award y Phoenix, que también llevan años pudiéndose encontrar en varios equipos.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li><strong>1 pitido corto:</strong> Se ha iniciado el ordenador sin encontrar errores en su diagnóstico inicial.</li>
                        <li><strong>2 pitidos cortos:</strong> Error que no está especificado por el pitido. La información sobre lo que falla se muestra en pantalla.</li>
                        <li><strong>Pitido continuo:</strong> No se encuentra o no se reconoce tu memoria RAM o la tarjeta gráfica.</li>
                        <li><strong>Pitidos cortos que se repiten:</strong> Fallo en la alimentación del sistema.</li>
                        <li><strong>1 pitido largo y 3 cortos:</strong> Fallo en la memoria RAM, concretamente en los primeros 64 KB de memoria.</li>
                        <li><strong>1 pitido largo y 8 cortos:</strong> Fallo en el test del adaptador de vídeo, quizá por falta de energía en la tarjeta de vídeo.</li>
                        <li><strong>Una especie de sirena de dos tonos:</strong> Un problema en el nivel del voltaje o con unos ventiladores de CPU que van demasiado lentos.</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Full width accordion: Diagnóstico y Solución */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem 
                value="diagnostico"
                className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-4 hover:no-underline">
                  Diagnóstico y Solución De Problemas
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="bg-muted/30 rounded-md p-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li><strong>1 pitido largo:</strong> Error en la memoria RAM.</li>
                      <li><strong>1 pitido largo y 1 corto:</strong> Error en el funcionamiento de la placa base memoria DRAM.</li>
                      <li><strong>1 pitido largo y 2 cortos:</strong> Error en la tarjeta gráfica, la tarjeta de vídeo o el monitor.</li>
                      <li><strong>1 pitido largo y 3 cortos:</strong> Error en el teclado o su controlador, aunque en versiones posteriores puede ser también error por una gráfica no detectada.</li>
                      <li><strong>3 pitidos largos:</strong> Error de conexión entre la placa base y el teclado.</li>
                      <li><strong>1 pitido largo y 9 cortos:</strong> Error en la BIOS.</li>
                      <li><strong>Pitidos de tonos fuertes y bajos:</strong> Un error en el procesador, posiblemente en el sobrecalentamiento.</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-border/20">
                      <p className="text-foreground leading-relaxed font-semibold mb-2">Verificación física:</p>
                      <p className="text-foreground leading-relaxed mb-4">
                        Al escuchar códigos de pitido, es importante verificar físicamente las conexiones del hardware. Comprueba que todos los componentes estén bien conectados y que no haya polvo ni suciedad en los conectores.
                      </p>
                      <p className="text-foreground leading-relaxed font-semibold mb-2">Consulta del manual:</p>
                      <p className="text-foreground leading-relaxed">
                        Siempre consulta el manual de tu placa base o el sitio web del fabricante para obtener información específica sobre los códigos de pitido, ya que pueden variar entre diferentes modelos.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
  }

  // Special render for Involucrados
  if (activeSection === "involucrados") {
    interface Involucrado {
      nombre: string;
      nombreCorto: string;
      ci?: string;
      edad: string;
      correo: string;
      foto: string;
      resena: string;
    }
    
    const involucrados: Involucrado[] = [
      {
        nombre: "José Alejandro Palencia Herrera",
        nombreCorto: "José Palencia",
        edad: "19",
        correo: "Josealeph2006@gmail.com",
        foto: estudiante1,
        resena: "Estudiante de Trayecto I sección 1 en Informática de la Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa' (UPTA Federico Brito Figueroa), participando activamente en el desarrollo de este manual técnico como parte de su formación académica en el área de tecnología."
      },
      {
        nombre: "Amilkar José Gutiérrez Ramírez",
        nombreCorto: "Amilkar Gutiérrez",
        edad: "20",
        correo: "amilkargutierrez88@gmail.com",
        foto: estudiante2,
        resena: "Estudiante del PNF en Informática de la Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa' (UPTA Federico Brito Figueroa), cursante de Trayecto I con preferencias hacia la programación y pensamiento lógico, contribuyendo con sus conocimientos para la elaboración de este proyecto comunitario."
      },
      {
        nombre: "Diana José Altamirano Coraspe",
        nombreCorto: "Diana Altamirano",
        edad: "18",
        correo: "dianaaltamirano740@gmail.com",
        foto: estudiante3,
        resena: "Estudiante de Informática I sección 1 ubicado en la Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa', La Victoria. Participante regular en clases y actividades contando con un rendimiento promedio, empeñada en mejorar. Aún en proceso de desarrollar habilidades técnicas."
      }
    ];

    return (
      <main className="ml-72 mt-20 p-8 bg-background min-h-screen">
        <article className="max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 uppercase">
            INVOLUCRADOS
          </h2>
          
          {/* Grid de involucrados */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {involucrados.map((persona, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedInvolucrado(idx)}
                className={`cursor-pointer transition-all duration-300 p-6 rounded-lg border ${
                  selectedInvolucrado === idx 
                    ? 'bg-[hsl(210,100%,25%)] border-[hsl(210,100%,25%)]' 
                    : 'bg-background border-border hover:border-primary'
                }`}
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={persona.foto}
                    alt={persona.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-center text-lg font-bold ${
                  selectedInvolucrado === idx ? 'text-white' : 'text-foreground'
                }`}>
                  {persona.nombreCorto || persona.nombre}
                </h3>
              </div>
            ))}
          </div>

          {/* Cuadro de texto con información del seleccionado */}
          <div className="bg-muted/50 border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Información Académica
            </h3>
            <div className="space-y-2 mb-4">
              <p className="text-foreground"><strong>Nombre:</strong> {involucrados[selectedInvolucrado].nombre}</p>
              {involucrados[selectedInvolucrado].ci && (
                <p className="text-foreground"><strong>C.I.:</strong> {involucrados[selectedInvolucrado].ci}</p>
              )}
              {involucrados[selectedInvolucrado].edad && (
                <p className="text-foreground"><strong>Edad:</strong> {involucrados[selectedInvolucrado].edad}</p>
              )}
              {involucrados[selectedInvolucrado].correo && (
                <p className="text-foreground"><strong>Correo:</strong> {involucrados[selectedInvolucrado].correo}</p>
              )}
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Reseña Académica</h4>
            <p className="text-foreground leading-relaxed text-justify">
              {involucrados[selectedInvolucrado].resena}
            </p>
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
  }

  // Special render for Componentes
  if (activeSection === "componentes" && 'componentes' in content) {
    return (
      <main className="ml-72 mt-20 p-8 bg-background min-h-screen">
        <article className="max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 uppercase">
            {content.title}
          </h2>
          
          <div className="space-y-8">
            {content.componentes.map((componente: any, idx: number) => (
              <div key={idx} className="border-b border-border pb-8 last:border-b-0">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {componente.nombre}
                </h3>
                
                <div 
                  className="relative group cursor-pointer mb-4 inline-block"
                  onClick={() => handleImageClick(componenteImageMap[componente.imagen], componente.nombre)}
                >
                  <img 
                    src={componenteImageMap[componente.imagen]}
                    alt={componente.nombre}
                    className="w-full max-w-md h-64 object-cover rounded-lg border border-border shadow-sm transition-all group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/90 rounded-full p-3 shadow-lg">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed text-justify mb-3">
                  {componente.definicion}
                </p>
                
                <p className="text-foreground leading-relaxed text-justify">
                  {componente.limpieza}
                </p>
              </div>
            ))}
          </div>
          
          {/* Footer note */}
          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Manual Técnico para Mantenimiento de Equipos Computacionales - Universidad Politécnica Territorial del Estado Aragua "Federico Brito Figueroa"
            </p>
          </div>
        </article>

        {/* Image Modal */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={selectedImage}
          imageAlt={selectedImageAlt}
        />
      </main>
    );
  }

  return (
    <main className="ml-72 mt-20 p-8 bg-background min-h-screen">
      <article className="max-w-5xl">
        {/* Title - Uppercase and left-aligned */}
        {activeSection !== "introduccion" && (
          <h2 className="text-3xl font-bold text-foreground mb-6 uppercase">
            {content.title}
          </h2>
        )}

        {/* Content Area */}
        <div className="space-y-6">
          {/* Image(s) - Special handling for sections with multiple images */}
          {activeSection === "institucion" ? (
            <>
              {/* Two images grid for institution */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {institutionImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative group cursor-pointer"
                    onClick={() => handleImageClick(img, `${content.title} - Imagen ${idx + 1}`)}
                  >
                    <img 
                      src={img} 
                      alt={`${content.title} - Imagen ${idx + 1}`}
                      className="w-full h-64 object-cover rounded-lg border border-border shadow-sm transition-all group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-background/90 rounded-full p-3 shadow-lg">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* First three paragraphs in one frame */}
              <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                {content.content.slice(0, 3).map((paragraph, idx) => (
                  <p key={idx} className="text-foreground leading-relaxed text-justify mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Reseña Histórica - Full width accordion */}
              {content.reseñaHistorica && (
                <Accordion type="single" collapsible className="w-full mb-4">
                  <AccordionItem 
                    value="resena"
                    className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-xl font-bold text-primary hover:text-primary/80 py-4 hover:no-underline justify-center">
                      Reseña Histórica
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2">
                      <p className="text-foreground leading-relaxed text-justify">
                        {content.reseñaHistorica}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}

              {/* Misión y Visión - Side by side accordions */}
              {content.misionVision && (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem 
                      value="mision"
                      className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-xl font-bold text-primary hover:text-primary/80 py-4 hover:no-underline justify-center">
                        Misión
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2">
                        <p className="text-foreground leading-relaxed text-justify">
                          {content.misionVision.mision}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem 
                      value="vision"
                      className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-xl font-bold text-primary hover:text-primary/80 py-4 hover:no-underline justify-center">
                        Visión
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2">
                        <p className="text-foreground leading-relaxed text-justify">
                          {content.misionVision.vision}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </>
          ) : activeSection === "equipos-institucion" ? (
            <>
              {/* Two images grid for equipos institucion */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {equiposInstitucionImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative group cursor-pointer"
                    onClick={() => handleImageClick(img, `${content.title} - Imagen ${idx + 1}`)}
                  >
                    <img 
                      src={img} 
                      alt={`${content.title} - Imagen ${idx + 1}`}
                      className="w-full h-64 object-cover rounded-lg border border-border shadow-sm transition-all group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-background/90 rounded-full p-3 shadow-lg">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* First paragraph below images */}
              <p className="text-foreground leading-relaxed text-justify mb-6">
                {content.content[0]}
              </p>

              {/* Hardware Table */}
              <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-foreground mb-4 text-left text-lg">Especificaciones de Hardware</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Tipo de Componente</TableHead>
                        <TableHead className="font-bold">Marca</TableHead>
                        <TableHead className="font-bold">Modelo</TableHead>
                        <TableHead className="font-bold">Capacidad</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {content.hardwareTable?.map((item: any, idx: number) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{item.tipo}</TableCell>
                          <TableCell>{item.marca}</TableCell>
                          <TableCell>{item.modelo}</TableCell>
                          <TableCell>{item.capacidad}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Software Table */}
              <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-foreground mb-4 text-left text-lg">Especificaciones de Software</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Tipo de Software</TableHead>
                        <TableHead className="font-bold">Nombre</TableHead>
                        <TableHead className="font-bold">Versión</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {content.softwareTable?.map((item: any, idx: number) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{item.tipo}</TableCell>
                          <TableCell>{item.nombre}</TableCell>
                          <TableCell>{item.version}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </>
          ) : activeSection === "introduccion" ? (
            /* Introduction section - with accordions after content */
            <>
              {/* Portada de la sección */}
              <div className="px-8 py-12 mb-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
                  Manual Técnico Interactivo
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 tracking-wide">
                  Mantenimiento Correctivo y Preventivo
                </h2>
              </div>

              {/* Contenido de introducción */}
              <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                {content.content.map((paragraph, idx) => (
                  <p key={idx} className="text-foreground leading-relaxed text-justify mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Objetivo del Manual */}
              {content.objetivoManual && (
                <Accordion type="single" collapsible className="w-full mb-4">
                  <AccordionItem 
                    value="objetivo"
                    className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-xl font-bold text-primary hover:text-primary/80 py-4 hover:no-underline justify-center">
                      Objetivo del Manual
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2">
                      <p className="text-foreground leading-relaxed text-justify">
                        {content.objetivoManual}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}

              {/* Objetivos Específicos */}
              {content.objetivosEspecificos && (
                <Accordion type="single" collapsible className="w-full mb-4">
                  <AccordionItem 
                    value="objetivos-especificos"
                    className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-xl font-bold text-primary hover:text-primary/80 py-4 hover:no-underline justify-center">
                      Objetivos Específicos
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2">
                      <ol className="list-decimal list-inside space-y-2">
                        {content.objetivosEspecificos.map((objetivo: string, index: number) => (
                          <li key={index} className="text-foreground leading-relaxed text-justify">
                            {objetivo}
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}

              {/* Razón de este Manual */}
              {content.razonManual && (
                <Accordion type="single" collapsible className="w-full mb-4">
                  <AccordionItem 
                    value="razon-manual"
                    className="bg-content-frame border border-border/30 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-xl font-bold text-primary hover:text-primary/80 py-4 hover:no-underline justify-center">
                      Razón de este Manual
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2">
                      <p className="text-foreground leading-relaxed text-justify">
                        {content.razonManual}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </>
          ) : activeSection === "conclusion" || activeSection === "extras" ? (
            /* Conclusion and Extras sections - all content in one frame without image */
            <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
              {content.content.map((paragraph, idx) => (
                <p key={idx} className="text-foreground leading-relaxed text-justify mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : activeSection === "mantenimiento-general" ? (
            /* Mantenimiento general - first 4 paragraphs in one frame, no image */
            <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
              {content.content.slice(0, 4).map((paragraph, idx) => (
                <p key={idx} className="text-foreground leading-relaxed text-justify mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : activeSection === "mantenimiento-preventivo" || activeSection === "mantenimiento-correctivo" ? (
            <>
              {/* Single image - Left side */}
              <div className="flex items-start gap-6 mb-6">
                <div 
                  className="relative group cursor-pointer flex-shrink-0"
                  onClick={() => handleImageClick(sectionImages[activeSection], content.title)}
                >
                  <img 
                    src={sectionImages[activeSection]} 
                    alt={content.title}
                    className="w-48 h-48 object-cover rounded-lg border border-border shadow-sm transition-all group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/90 rounded-full p-2 shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                {/* First paragraph alongside image */}
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed text-justify">
                    {content.content[0]}
                  </p>
                </div>
              </div>
              {/* Initial paragraphs in one frame (paragraphs 2-4 for preventivo/correctivo) */}
              <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                {content.content.slice(1, 4).map((paragraph, idx) => (
                  <p key={idx} className="text-foreground leading-relaxed text-justify mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </>
          ) : activeSection === "pasos" ? (
            /* Pasos section - first paragraph in frame, no image */
            <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
              <p className="text-foreground leading-relaxed text-justify">
                {content.content[0]}
              </p>
            </div>
          ) : (
            /* Single image - Left side */
            <div className="flex items-start gap-6 mb-6">
              <div 
                className="relative group cursor-pointer flex-shrink-0"
                onClick={() => handleImageClick(sectionImages[activeSection], content.title)}
              >
                <img 
                  src={sectionImages[activeSection]} 
                  alt={content.title}
                  className="w-48 h-48 object-cover rounded-lg border border-border shadow-sm transition-all group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background/90 rounded-full p-2 shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* First paragraph alongside image */}
              <div className="flex-1">
                <p className="text-foreground leading-relaxed text-justify">
                  {content.content[0]}
                </p>
              </div>
            </div>
          )}

          {/* Remaining content - parsed into blocks */}
          {activeSection !== "introduccion" && activeSection !== "conclusion" && (() => {
            const remainingContent = activeSection === "institucion"
              ? content.content.slice(3)
              : activeSection === "equipos-institucion" 
              ? content.content.slice(1)
              : (activeSection === "mantenimiento-preventivo" || activeSection === "mantenimiento-correctivo")
              ? content.content.slice(4)
              : activeSection === "mantenimiento-general"
              ? content.content.slice(4)
              : activeSection === "pasos"
              ? content.content.slice(1)
              : activeSection === "agradecimiento"
              ? content.content.slice(1)
              : content.content.slice(1);
            
            const blocks = parseContentBlocks(remainingContent);
            
            return blocks.map((block, index) => {
              if (block.type === 'subtitle-paragraph') {
                return (
                  <div key={index} className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                    <h3 className="font-bold text-foreground mb-3 text-left">
                      {block.subtitle}:
                    </h3>
                    <p className="text-foreground leading-relaxed text-justify">
                      {block.content}
                    </p>
                  </div>
                );
              } else if (block.type === 'list') {
                return (
                  <div key={index} className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      {(block.content as string[]).map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              } else {
                // Format step titles in bold for pasos-mantenimiento section
                const content = block.content as string;
                if (activeSection === "pasos" && content.includes(":")) {
                  const colonIndex = content.indexOf(":");
                  const title = content.substring(0, colonIndex);
                  const description = content.substring(colonIndex + 1);
                  return (
                    <div key={index} className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                      <p className="text-foreground leading-relaxed text-justify">
                        <strong>{title}:</strong>{description}
                      </p>
                    </div>
                  );
                }
                return (
                  <div key={index} className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
                    <p className="text-foreground leading-relaxed text-justify">
                      {content}
                    </p>
                  </div>
                );
              }
            });
          })()}

          {/* Special frame for agradecimiento */}
          {activeSection === "agradecimiento" && content.agradecimientoEspecial && (
            <div className="bg-content-frame border border-border/30 rounded-lg p-6 mb-4">
              <h3 className="font-bold text-foreground mb-3 text-left">
                Agradecimiento:
              </h3>
              <p className="text-foreground leading-relaxed text-justify">
                {content.agradecimientoEspecial}
              </p>
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground italic">
            Manual Técnico para Mantenimiento de Equipos Computacionales - Universidad Politécnica Territorial del Estado Aragua "Federico Brito Figueroa"
          </p>
        </div>
      </article>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage}
        imageAlt={selectedImageAlt}
      />
    </main>
  );
};

export default ContentArea;

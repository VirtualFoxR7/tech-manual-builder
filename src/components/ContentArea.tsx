import { useState } from "react";
import GlosarioTerminos from "./GlosarioTerminos";
import labIntroduccion from "@/assets/lab-introduccion.jpg";
import universidadJardin from "@/assets/universidad-jardin.jpg";
import universidadEntrada from "@/assets/universidad-entrada.jpg";
import mantenimientoGeneral from "@/assets/mantenimiento-general.jpg";
import mantenimientoPreventivo from "@/assets/mantenimiento-preventivo.jpg";
import mantenimientoCorrectivo from "@/assets/mantenimiento-correctivo.jpg";
import herramientas from "@/assets/herramientas.jpg";
import seguridad from "@/assets/seguridad.jpg";
import equipos from "@/assets/equipos.jpg";
import componentes from "@/assets/componentes-1.jpg";
import componentes1 from "@/assets/componentes-2.jpg";
import equipoInstitucion1 from "@/assets/equipo-institucion-1.jpg";
import equipoInstitucion2 from "@/assets/equipo-institucion-2.jpg";
import equipoInstitucion3 from "@/assets/equipo-institucion-3.jpg";
import equipoInstitucion4 from "@/assets/equipo-institucion-4.jpg";
import equipoInstitucion5 from "@/assets/equipo-institucion-5.jpg";
import equipoInstitucion6 from "@/assets/equipo-institucion-6.jpg";
import equipoInstitucion7 from "@/assets/equipo-institucion-7.jpg";

import equipoDesarrollo from "@/assets/equipo-desarrollo.jpg";
import { ImageModal } from "./ImageModal";
import { ZoomIn } from "lucide-react";

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
  "equipos-institucion": equipoInstitucion1,
  "equipo-desarrollo": equipoDesarrollo,
};

// Special sections with multiple images
const institutionImages = [universidadJardin, universidadEntrada];
const equiposInstitucionImages = [equipoInstitucion1, equipoInstitucion4, equipoInstitucion3, equipoInstitucion7];
  const componentesImages = [componentes,componentes1];
const ContentArea = ({ activeSection }: ContentAreaProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");

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
            "Reseña Historica",
            "Universidad Politécnica Territorial de Aragua “Federico Brito Figueroa” — Antes conocida como “Instituto Universitario Experimental De Tecnología De La Victoria” — es una institución académica de grado universitario cuya cede principal está localizada en La Victoria estado Aragua, en la Avenida Universidad junto al comando de la Fuerza Armada Nacional (FAN)",
            "El Instituto Universitario Experimental de tecnología de La Victoria fue fundado por Decreto Presidencial N° 1.959 del 14 de Diciembre del 1976, y en conformidad con la Ley De Universidades y el Reglamento de los Institutos y Colegios Universitarios según se hace constar en la Gaceta Oficial de La República De Venezuela N° 31.139, expedida el 27 de Diciembre de 1976, dependiendo de la Dirección Sectorial de Educación Superior del Ministerio de Educación. inició sus actividades Académicas de Técnico Superior en Enero del 1978 con las especialidades de Mecánica y Electricidad, junto a las menciones de Electrotecnia, Instrumentación y Control, además de Telecomunicaciones. Posteriormente el Ministerio de Educación determina la integración progresiva de las demás especiales aprobadas por el Consejo Nacional de Universidades. Desde la fecha existió trabajo corporativo entre la institución y las empresas, lo que en su momento permitió un autofinanciamiento parcial para esta casa de estudios, misma que contaba con un repertorio de profesores tanto venezolanos como franceses ",
            "Durante la década de los noventa, el instituto amplió su repertorio de especialidades disponibles, siendo el año 1992 en el que se integró la especialidad de Informática, seguida por Administración Mención Costos en el 1993, además desde ese año se imparten estudios de postgrado para Técnicos Superiores Universitarios de las especialidades de Electricidad, Mecánica y Gerencia en Sistemas, y Educación",
            "Con la llegada del año 2010, y según consta en la Gaceta Oficial Extraordinaria N° 5987, decreto 7566, el Instituto Universitario Experimental de Tecnología de La Victoria fue rebautizado como Universidad Politécnica Territorial del Estado Aragua “Federico Brito Figueroa” dentro del marco de la misión Alma Mater del Gobierno Venezolano, con la finalidad de transformar la educación universitaria en el gobierno de Venezuela",
            
        ],
      };

      case "agradecimiento":
        return {
          title: "AGRADECIMIENTO ESPECIAL A LA U.E.P. 'COLEGIO BIRTO'",
          content: [
"Mención Honorifica Para U.E.P. Colegio Brito",
            "Reseña Historica",
            "El Colegio Brito surge como Institución en el año 1.965, bajo los auspicios de la familia Brito la Sra. Marta y el Sr. Carlos. Comienza solo como preescolar y se van incorporando año tras años los grados subsiguientes hasta diversificado. Desde el año 1986 hasta 2009 se graduaron bachilleres; desde el año 2010 se gradúan en Educación Media General mención Ciencias.",
            "Actualmente contamos con dos sedes: la pionera en la Urb. Bolívar Norte donde funciona 4to. y 5to. año de Educación Media General,  contando con aulas espaciosas con aires acondicionados, auditórium, Gimnasio Cubierto, canchas múltiples, Laboratorios de Física, Química, Biología y Ciencias de la Tierra, Cantina espaciosa. La otra, en la Urb. Morichal, donde funciona desde Maternal hasta 3er. año, en modernas y confortables Instalaciones, con una arquitectura novedosa,  aulas con baños para los más pequeños y aire acondicionado.  Laboratorios de Computación, Física, Química, Biología; además canchas deportivas, cantina y una proveeduría con Fotocopiado.  Adicionalmente a las actividades curriculares, el colegio Brito brinda a sus estudiantes sin costo adicional clases de Inglés, computación, también tenemos clubes de Futbolito, Baloncesto, Voleibol, Promoción y Recepción.",
            "Como ha sido tradición de nuestro colegio, el principio que nos guía es la formación integral de los estudiantes, por tal motivo contamos con un servicio de Psicólogo y una Psicopedagoga que ofrece atención personalizada para dificultades de aprendizaje,  adaptación de grupos, técnicas de estudio y orientación vocacional.",
            "Queremos expresar nuestro más sincero agradecimiento al U.E.P Colegio Brito por su ayuda y donación de los equipos de informática. Gracias por ser el único lugar en recibirnos con todo el apoyo, después de algunas lastimas e inconvenientes, aún así quisieron ayudarnos y con la donación pudimos continuar avanzando en nuestro proyecto, algo que antes resultaba difícil por la falta de recursos. Muchas gracias y agradecemos por a vernos escogidos como nuestra primera comunidad.",

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
      "GABINETE (CASE)",
      "¿QUÉ ES?: Es una carcasa que contiene y protege físicamente los componentes internos de una computadora. Proporciona estructura y soporte, además de permitir la ventilación adecuada para el equipo.",
      "MODO DE LIMPIEZA: Apagar y desconectar el equipo. Abrir la carcasa con cuidado. Usar aire comprimido para eliminar polvo en zonas internas, ventiladores y componentes. Limpieza con paño de micro-fibra para superficies sin contacto eléctrico. Evitar tocar circuitos directamente.",

      "PLACA MADRE",
      "¿QUÉ ES?: Tarjeta principal que conecta y permite la comunicación entre todos los componentes internos del computador, incluyendo CPU, memoria, tarjetas de expansión y dispositivos de almacenamiento. Contiene circuitos, chips y conectores esenciales para el funcionamiento del equipo.",
      "MODO DE LIMPIEZA: Retirar cuidadosamente la placa madre del case. Usar aire comprimido para remover polvo de circuitos y ranuras. Limpieza con cepillo suave para áreas difíciles. Limpiar contactos con goma de borrar blanca. Evitar humedad y golpes.",

      "FUENTE DE PODER",
      "¿QUÉ ES?: Componente que suministra energía eléctrica a todos los demás componentes del computador, transformando la electricidad de la red en voltajes adecuados y estables para cada parte. Suele incluir ventilador y rejillas por donde puede acumularse polvo.",
      "MODO DE LIMPIEZA: Apagar, desconectar y no abrir la fuente. Usar aire comprimido para eliminar polvo de ventilador y rejillas. Limpiar exterior con paño seco o ligeramente humedecido.",

      "TARJETA DE EXPANSIÓN",
      "¿QUÉ ES?: Placas adicionales que se instalan en la placa madre para agregar funcionalidades como audio, video, o redes, usando ranuras especiales.",
      "MODO DE LIMPIEZA: Retirar la tarjeta con cuidado. Usar aire comprimido para polvo. Limpiar contactos con goma de borrar. Cepillar suavemente zonas con suciedad. Volver a instalar con firmeza.",

      "MEMORIA RAM",
      "¿QUÉ ES?: Módulos de memoria temporal que almacenan datos de trabajo para acceso rápido por la CPU.",
      "MODO DE LIMPIEZA: Extraer los módulos. Limpiar contactos con goma de borrar blanca. Soplar el polvo con aire comprimido. Evitar tocar los 'dientes' del chips con los dedos.",

      "PROCESADOR (CPU)",
      "¿QUÉ ES?: Unidad central de procesamiento que ejecuta las instrucciones y procesos del sistema operativo y programas.",
      "MODO DE LIMPIEZA: Retirar disipador y ventilador con cuidado. Limpiar con aire comprimido. Cambiar pasta térmica para mejorar disipación. Evitar tocar la superficie del chip.",

      "DISCO DURO",
      "¿QUÉ ES?: Dispositivo de almacenamiento permanente donde se guardan datos, programas y el sistema operativo. Existen varios tipos, el HDD (Hard Disk Drive) SSD (Solid State Drive) y M.2 o NGFF (Next Generation Form Factor)",
      "MODO DE LIMPIEZA: Limpiar solo el exterior con paño suavemente humedecido. Usar aire comprimido en conectores externos. (No abrir el disco duro).",

      "PUERTOS Y RANURAS",
      "¿QUÉ SON?: Conectores externos (puertos) y slots internos (ranuras) que permiten la conexión de dispositivos periféricos y tarjetas de expansión a la computadora.",
      "MODO DE LIMPIEZA: Usar aire comprimido y cepillo fino para polvo incrustado. Evitar humedad directa.",

      "COMPONENTES ELÉCTRICOS",
      "¿QUÉ SON?: Elementos físicos dentro del computador, como resistencias, transistores y circuitos integrados, que controlan y procesan señales eléctricas para el funcionamiento del equipo.",
      "MODO DE LIMPIEZA: Soplar con aire comprimido a distancia segura. (No usar líquidos).",

      "UNIDAD CD Y DVD",
      "¿QUÉ ES?: Dispositivos ópticos que leen y/o graban datos en discos compactos (CD) y discos digitales versátiles (DVD), usados para almacenar y acceder a información.",
      "MODO DE LIMPIEZA: Limpiar exterior con paño humedecido. Aire comprimido en el interior si se abre. Evitar líquidos dentro.",

      "CABLES Y BUSES",
      "¿QUÉ SON?: Medios físicos (cables) y vías de comunicación internas (buses) que transmiten datos y energía entre los componentes del ordenador.",
      "MODO DE LIMPIEZA: Paño seco o ligeramente humedecido. Verificar conexiones sin polvo.",

      "CARCASA DEL GABINETE (CASE)",
      "¿QUÉ ES?: Estructura externa que protege y da forma al equipo. Puede ser de metal o plástico.",
      "MODO DE LIMPIEZA: Paño humedecido para exterior. Aire comprimido en rejillas y ventiladores.",

      "ENSAMBLE INTERNO Y EXTERNO DEL CASE",
      "¿QUÉ ES?: Conjunto físico de piezas internas y externas del gabinete.",
      "MODO DE LIMPIEZA: Aire comprimido interno y paño húmedo externo. Revisión y ajuste de tornillos."
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
            "Los Desarrolladores De Este Manual Técnico ha sido desarrollado por un equipo multidisciplinario de estudiantes y docentes de la Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa', con el objetivo de proporcionar una herramienta útil para la comunidad universitaria. ",
            "El equipo ha trabajado en la investigación, recopilación y sistematización de información técnica relevante, consultando diversas fuentes especializadas y aplicando conocimientos adquiridos durante la formación académica.",
            "COORDINACIÓN TÉCNICA: Responsable de la estructura general del manual y validación técnica de procedimientos.",
            "INVESTIGACIÓN Y CONTENIDO: Encargado de la recopilación y redacción de información técnica actualizada.",
            "DISEÑO Y FORMATO: Responsable de la presentación visual y organización del contenido para facilitar su consulta.",
            " * Jose Palencia",
            " * Amilkar Gutierrez",
            " * Diana Altamirano",
            "Agradecemos a todos los miembros del equipo por su dedicación y compromiso en la elaboración de este importante recurso para nuestra comunidad universitaria.",
            
            
          ],
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
          content: [
            "¿Con qué frecuencia debo realizar mantenimiento preventivo?",
            "Se recomienda realizar mantenimiento preventivo cada 3 a 6 meses, dependiendo del uso y las condiciones ambientales del equipo.",
            "¿Qué herramientas básicas necesito para mantenimiento?",
            "Las herramientas básicas incluyen: destornilladores de precisión, brochas, alcohol isopropílico, paño suave, mascarilla y pulsera anti-estática.",
            "¿Puedo realizar mantenimiento yo mismo o necesito un técnico?",
            "El mantenimiento general y preventivo básico puede ser realizado por usuarios capacitados siguiendo las instrucciones de este manual. Para mantenimiento correctivo complejo, se recomienda consultar con personal técnico especializado.",
            "¿Qué debo hacer si mi computadora no enciende?",
            "Primero verifique las conexiones de energía, luego revise que el interruptor de la fuente de poder esté en la posición correcta. Si el problema persiste, puede ser necesario revisar la fuente de poder o la placa madre.",
            "¿Cada cuánto debo actualizar el sistema operativo?",
            "Se recomienda instalar actualizaciones de seguridad tan pronto estén disponibles. Las actualizaciones mayores del sistema operativo pueden realizarse de 1 a 2 veces al año, según las necesidades institucionales.",
            "¿Cómo sé cuándo cambiar la pasta térmica del procesador?",
            "La pasta térmica debe cambiarse cada 1-2 años, o antes si nota temperaturas elevadas constantes en el procesador (superiores a 70°C en uso normal).",
            "¿Es necesario formatear el disco duro regularmente?",
            "No es necesario formatear regularmente. Solo se recomienda formatear cuando hay problemas graves de rendimiento o infecciones de malware que no se pueden eliminar de otra manera.",
            "¿Qué hacer con los componentes electrónicos que ya no funcionan?",
            "Los componentes electrónicos deben ser desechados en puntos de recolección especializados para residuos electrónicos, nunca en la basura común, ya que contienen materiales que pueden contaminar el medio ambiente.",
          ],
        };

      case "glosario":
        return {
          title: "GLOSARIO DE TÉRMINOS",
          content: [],
          isGlosario: true,
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

  return (
    <main className="ml-72 mt-20 p-8 bg-background min-h-screen">
      <article className="max-w-5xl">
        {/* Title - Uppercase and left-aligned */}
        <h2 className="text-3xl font-bold text-foreground mb-6 uppercase">
          {content.title}
        </h2>

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
              {/* First paragraph below images */}
              <p className="text-foreground leading-relaxed text-justify mb-6">
                {content.content[0]}
              </p>
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
            </>
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

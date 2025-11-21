import { useState } from "react";

// Alphabet including Ñ
const alphabet = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ',
  'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

// Glossary terms by letter
const glossaryTerms: Record<string, Array<{ term: string; definition: string }>> = {
  'A': [
    {
      term: "ANTIVIRUS",
      definition: "Software diseñado para detectar, prevenir y eliminar virus y otros tipos de malware de los sistemas informáticos."
    },
    {
      term: "ACTUALIZACION",
      definition: "Proceso de instalar versiones más recientes de software, firmware o sistemas operativos para mejorar funcionalidad, seguridad o rendimiento."
    },
    {
      term: "ACTUALIZACIONES ",
      definition: "Mejoras o correcciones instaladas en un sistema operativo o programa para mejorar su rendimiento o seguridad."
    },
    {
      term: "ADAPTADOR",
      definition: "Dispositivo que permite la conexión entre componentes con interfaces diferentes o incompatibles."
    },
    {
      term: "APAGAR",
      definition: "Proceso de cerrar todos los programas y cortar el suministro eléctrico del equipo de forma segura."
    },
    {
      term: "Almacenamiento",
      definition: "Espacio físico o digital donde se guardan datos, archivos o programas para su uso posterior."
    }
  ],
  'B': [
    {
      term: "BIOS",
      definition: "Basic Input/Output System. Firmware que inicializa el hardware del sistema durante el proceso de arranque y proporciona servicios de tiempo de ejecución."
    },
    {
      term: "Backup",
      definition: "Copia de seguridad de datos almacenada en un medio secundario para proteger contra pérdida de información."
    },
    {
      term: "Bus",
      definition: "Sistema de comunicación que transfiere datos entre componentes dentro de una computadora o entre computadoras."
    },
    {
      term: "Buses",
      definition: "Canales de comunicación internos que permiten el intercambio de datos entre los componentes de una computadora."
    }
  ],
  'C': [
    {
      term: "CPU",
      definition: "Central Processing Unit (Unidad Central de Procesamiento). Componente principal que ejecuta las instrucciones de los programas."
    },
    {
      term: "Caché",
      definition: "Memoria de alta velocidad que almacena datos frecuentemente accedidos para reducir tiempos de acceso."
    },
    {
      term: "Componente",
      definition: "Parte física o módulo individual que forma parte de un sistema informático completo."
    },
    {
      term: "Computadora",
      definition: "Dispositivo electrónico capaz de procesar datos siguiendo instrucciones de programas."
    },
    {
      term: "Correctivo",
      definition: "Tipo de mantenimiento que repara fallas ya existentes en el equipo o sistema."
    },
    {
      term: "Case o carcasa",
      definition: "Estructura que protege los componentes internos del computador."
    },
    {
      term: "Circuitos",
      definition: "Conjuntos de componentes electrónicos interconectados que permiten el flujo de corriente."
    },
    {
      term: "Chips",
      definition: "Pequeños componentes de silicio que contienen circuitos integrados para procesar información."
    },
    {
      term: "Conectores",
      definition: "Piezas que unen cables o dispositivos para transmitir datos o energía."
    },
    {
      term: "CD",
      definition: "Disco óptico usado para almacenar información, música o programas."
    },
    {
      term: "Cables",
      definition: "Conductores físicos que transportan energía o señales electrónicas entre componentes."
    },
    {
      term: "Códigos de pitido",
      definition: "Sonidos emitidos por la placa base al iniciar, que indican errores o procesos."
    },
    {
      term: "Capacitores",
      definition: "Componentes que almacenan carga eléctrica temporalmente en un circuito."
    }
  ],
  'D': [
    {
      term: "Disco Duro",
      definition: "Dispositivo de almacenamiento de datos que utiliza grabación magnética para almacenar y recuperar información digital."
    },
    {
      term: "Driver",
      definition: "Software que permite al sistema operativo comunicarse con dispositivos de hardware específicos."
    },
    {
      term: "Diagnóstico",
      definition: "Proceso de identificación de problemas o fallas en un sistema informático mediante pruebas y análisis."
    },
    {
      term: "Desarmar",
      definition: "Separar las piezas de un equipo para revisarlo, repararlo o limpiarlo."
    },
    {
      term: "Desinstalar",
      definition: "Eliminar un programa o controlador del sistema operativo."
    },
    {
      term: "Desconectar",
      definition: "Interrumpir una conexión eléctrica o de datos entre dispositivos."
    },
    {
      term: "Disipador",
      definition: "Elemento que aleja el calor generado por componentes como el procesador."
    },
    {
      term: "DVD",
      definition: "Disco óptico con mayor capacidad que el CD, usado para videos o datos."
    },
    {
      term: "Dispositivos",
      definition: "Elementos de hardware que cumplen funciones específicas, como entrada, salida o almacenamiento."
    },
    {
      term: "Dieléctrico",
      definition: "Material aislante que no conduce electricidad y se usa para separar o proteger componentes eléctricos."
    }
  ],
  'E': [
    {
      term: "Electricidad Estática",
      definition: "Acumulación de carga eléctrica en la superficie de objetos que puede dañar componentes electrónicos sensibles."
    },
    {
      term: "Ethernet",
      definition: "Tecnología de red de área local (LAN) que permite la comunicación entre dispositivos conectados."
    },
    {
      term: "Equipo",
      definition: "Conjunto completo de hardware que conforma una computadora funcional."
    },
    {
      term: "Energía",
      definition: "Fuerza eléctrica que alimenta los componentes del sistema."
    }
  ],
  'F': [
    {
      term: "Firmware",
      definition: "Software permanente programado en memoria de solo lectura que proporciona control de bajo nivel para el hardware del dispositivo."
    },
    {
      term: "Fuente de Poder",
      definition: "Componente que convierte la corriente alterna en corriente continua para alimentar los componentes de la computadora."
    },
    {
      term: "Funcionamiento",
      definition: "Modo en que los componentes trabajan de manera coordinada para ejecutar tareas."
    },
    {
      term: "Fallas",
      definition: "Errores o defectos que impiden el correcto funcionamiento del sistema."
    }
  ],
  'G': [
    {
      term: "GPU",
      definition: "Graphics Processing Unit. Procesador especializado diseñado para acelerar la creación y renderizado de gráficos."
    },
    {
      term: "Gabinete",
      definition: "Caja metálica o plástica donde se instalan todos los componentes del hardware."
    },
    {
      term: "Gráfica",
      definition: "Parte del sistema encargada de generar y mostrar imágenes, normalmente gestionada por la GPU."
    }
  ],
  'H': [
    {
      term: "Hardware",
      definition: "Componentes físicos tangibles de un sistema informático, incluyendo dispositivos electrónicos y mecánicos."
    },
    {
      term: "HDD",
      definition: "Hard Disk Drive. Dispositivo de almacenamiento que utiliza discos magnéticos giratorios para almacenar datos."
    },
    {
      term: "Herramientas",
      definition: "Instrumentos usados para montaje, reparación o mantenimiento de equipos."
    }
  ],
  'I': [
    {
      term: "Interno",
      definition: "Componente o parte que se encuentra dentro del gabinete o sistema."
    },
    {
      term: "Instalaciones o instalar",
      definition: "Proceso de colocar hardware o software para que funcione correctamente."
    },
    {
      term: "Isopropílico",
      definition: "Tipo de alcohol utilizado para limpiar componentes electrónicos por su rápida evaporación y bajo riesgo de daño."
    }
  ],
  'L': [
    {
      term: "Limpieza",
      definition: "Mantenimiento regular para eliminar polvo y residuos que afectan el rendimiento del equipo."
    }
  ],
  'M': [
    {
      term: "Mantenimiento Preventivo",
      definition: "Conjunto de acciones planificadas para prevenir fallas antes de que ocurran, incluyendo limpieza y actualizaciones regulares."
    },
    {
      term: "Mantenimiento Correctivo",
      definition: "Acciones realizadas para reparar o corregir fallas y problemas existentes en equipos o sistemas."
    },
    {
      term: "Malware",
      definition: "Software malicioso diseñado para dañar, interrumpir o obtener acceso no autorizado a sistemas informáticos."
    },
    {
      term: "Mantenimiento",
      definition: "Conjunto de acciones que aseguran el buen estado y funcionamiento de un sistema."
    },
    {
      term: "Memoria",
      definition: "Dispositivo que almacena temporal o permanentemente datos para el procesamiento."
    },
    {
      term: "Módulos",
      definition: "Unidades de memoria o componentes que se integran en la placa base."
    },
    {
      term: "Motherboard",
      definition: "Tarjeta principal que conecta y comunica todos los componentes del sistema."
    }
  ],
  'O': [
    {
      term: "Operativo",
      definition: "Relativo al funcionamiento del sistema o al sistema operativo que gestiona los recursos."
    }
  ],
  'P': [
    {
      term: "Pasta Térmica",
      definition: "Compuesto conductor de calor aplicado entre el procesador y el disipador para mejorar la transferencia térmica."
    },
    {
      term: "Periférico",
      definition: "Dispositivo externo conectado a una computadora para proporcionar entrada, salida o almacenamiento adicional."
    },
    {
      term: "Preventivo",
      definition: "Mantenimiento realizado para evitar fallas y alargar la vida útil del equipo."
    },
    {
      term: "Programar",
      definition: "Crear o modificar código que permite ejecutar tareas automáticas en un sistema."
    },
    {
      term: "Programas",
      definition: "Conjuntos de instrucciones que indican a la computadora qué acciones realizar."
    },
    {
      term: "Placas",
      definition: "Tarjetas electrónicas que soportan y conectan componentes específicos, como de red o sonido."
    },
    {
      term: "Procesador",
      definition: "Chip central encargado de ejecutar las operaciones y cálculos del sistema."
    },
    {
      term: "Periféricos",
      definition: "Dispositivos externos conectados a la computadora para entrada o salida de datos."
    }
  ],
  'R': [
    {
      term: "RAM",
      definition: "Random Access Memory. Memoria de acceso aleatorio volátil utilizada para almacenar datos temporalmente mientras el sistema está en funcionamiento."
    },
    {
      term: "Refrigeración",
      definition: "Sistema de enfriamiento que disipa el calor generado por componentes electrónicos para mantener temperaturas operativas seguras."
    },
    {
      term: "Restaurar",
      definition: "Devolver un sistema o software a un estado anterior o predeterminado."
    },
    {
      term: "Ranuras",
      definition: "Espacios físicos en la placa base donde se insertan tarjetas o módulos."
    },
    {
      term: "ROM",
      definition: "Memoria de solo lectura que contiene información esencial para el arranque y funcionamiento básico del sistema."
    }
  ],
  'S': [
    {
      term: "SSD",
      definition: "Solid State Drive. Dispositivo de almacenamiento sin partes móviles que utiliza memoria flash para almacenar datos de forma permanente."
    },
    {
      term: "Software",
      definition: "Conjunto de programas, instrucciones y datos que indican a la computadora cómo realizar tareas específicas."
    },
    {
      term: "Sistema Operativo",
      definition: "Software fundamental que gestiona el hardware y proporciona servicios para programas de aplicación."
    },
    {
      term: "Sistema o sistemas",
      definition: "Conjunto de programas que gestionan los recursos y funciones de un computador."
    },
    {
      term: "Seguridad",
      definition: "Conjunto de medidas para proteger la información y los sistemas de daños o accesos no autorizados."
    },
    {
      term: "SATA",
      definition: "Interfaz de conexión que permite comunicar discos duros y unidades ópticas con la placa base mediante cables delgados y rápidos."
    }
  ],
  'T': [
    {
      term: "Tarjetas",
      definition: "Placas que contienen circuitos y permiten ampliar funciones del equipo."
    },
    {
      term: "Transistores",
      definition: "Componentes electrónicos que amplifican o conmutan señales."
    },
    {
      term: "Teclado",
      definition: "Dispositivo de entrada usado para introducir datos mediante teclas."
    }
  ],
  'U': [
    {
      term: "Unidades",
      definition: "Dispositivos de almacenamiento o lectura, como discos duros o unidades ópticas."
    },
    {
      term: "USB",
      definition: "Estándar de conexión que permite transferencia de datos y energía entre dispositivos."
    }
  ],
  'V': [
    {
      term: "Ventilador",
      definition: "Componente que mueve aire para enfriar las partes internas del equipo."
    },
    {
      term: "Voltaje",
      definition: "Medida de la diferencia de potencial eléctrico que impulsa la corriente en un circuito."
    }
  ],
  'W': [
    {
      term: "Windows",
      definition: "Sistema operativo de Microsoft que gestiona recursos y ofrece una interfaz gráfica para el usuario."
    }
  ],
};

const GlosarioTerminos = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  return (
    <div className="space-y-6">
      {/* Alphabetical Index */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Índice Alfabético</h3>
        <div className="grid grid-cols-5 gap-2">
          {alphabet.map((letter) => {
            const hasTerms = glossaryTerms[letter] !== undefined;
            const isSelected = selectedLetter === letter;
            
            return (
              <button
                key={letter}
                onClick={() => hasTerms && setSelectedLetter(letter)}
                disabled={!hasTerms}
                className={`
                  h-12 rounded-md font-semibold text-base transition-all duration-200
                  ${isSelected 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : hasTerms 
                      ? 'bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                  }
                `}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Terms Display Area */}
      <div className="bg-card border border-border rounded-lg p-6 min-h-[400px]">
        <h3 className="text-xl font-bold text-primary mb-6 border-b border-border pb-3">
          Letra: {selectedLetter}
        </h3>
        
        {glossaryTerms[selectedLetter] ? (
          <div className="space-y-4">
            {glossaryTerms[selectedLetter].map((item, index) => (
              <div key={index} className="pb-4 border-b border-border last:border-0">
                <h4 className="font-bold text-foreground text-lg mb-2">
                  {item.term}
                </h4>
                <p className="text-foreground leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground italic text-center py-8">
            No hay términos disponibles para la letra {selectedLetter}.
          </p>
        )}
      </div>
    </div>
  );
};

export default GlosarioTerminos;

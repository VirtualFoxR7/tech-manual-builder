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
      term: "Antivirus",
      definition: "Software diseñado para detectar, prevenir y eliminar virus y otros tipos de malware de los sistemas informáticos."
    },
    {
      term: "Actualización",
      definition: "Proceso de instalar versiones más recientes de software, firmware o sistemas operativos para mejorar funcionalidad, seguridad o rendimiento."
    },
    {
      term: "Adaptador",
      definition: "Dispositivo que permite la conexión entre componentes con interfaces diferentes o incompatibles."
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
    }
  ],
  'G': [
    {
      term: "GPU",
      definition: "Graphics Processing Unit. Procesador especializado diseñado para acelerar la creación y renderizado de gráficos."
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

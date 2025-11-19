import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  id: string;
  title: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: "introduccion",
    title: "Introducción al manual",
  },
  {
    id: "institucion",
    title: "U.P.T.A. 'Federico Brito Figueroa'",

children: [
{ id: "agradecimiento", title: "Agradecimiento" }, ]
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    children: [
      { id: "mantenimiento-general", title: "Mantenimiento general" },
      { id: "mantenimiento-preventivo", title: "Mantenimiento preventivo" },
      { id: "mantenimiento-correctivo", title: "Mantenimiento correctivo" },
      { id: "herramientas", title: "Herramientas necesarias" },
      { id: "seguridad", title: "Medidas de seguridad" },
      { id: "pasos", title: "Pasos Para El Mantenimiento" },
    ],
  },
  {
    id: "equipos",
    title: "Equipos",
    children: [
      { id: "componentes", title: "Componentes" },
      { id: "equipos-institucion", title: "Equipos de la institución (comunidad)" },
    ],
  },
  {
    id: "equipo-desarrollo",
    title: "Equipo de desarrollo del proyecto",
  },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(["mantenimiento", "equipos"]);

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const isActive = activeSection === item.id;

    return (
      <li key={item.id} className="w-full">
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.id);
            }
            onSectionChange(item.id);
          }}
          className={`
            w-full text-left px-4 py-2.5 flex items-center justify-between
            transition-colors duration-200
            ${level > 0 ? "pl-8" : ""}
            ${isActive 
              ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
              : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            }
          `}
        >
          <span className="text-sm">{item.title}</span>
          {hasChildren && (
            <span className="text-muted-foreground">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </span>
          )}
        </button>

        {hasChildren && isExpanded && (
          <ul className="border-l-2 border-border ml-4">
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside className="fixed left-0 top-20 bottom-0 w-72 bg-sidebar-background border-r border-sidebar-border overflow-y-auto">
      <nav className="py-4">
        <h2 className="px-4 mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Contenido del Manual
        </h2>
        <ul className="space-y-1">
          {menuItems.map((item) => renderMenuItem(item))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

interface HeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
}

const Header = ({ menuOpen, onToggleMenu }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-primary z-50 border-b border-primary">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center flex-1 gap-3">
          <button
            onClick={onToggleMenu}
            className="text-primary-foreground p-1 rounded hover:bg-primary-foreground/10 transition-colors flex-shrink-0"
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
          <h1 className="text-primary-foreground text-lg md:text-xl font-semibold leading-tight">
            UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL ESTADO ARAGUA<br />
            <span className="text-base md:text-lg">"FEDERICO BRITO FIGUEROA"</span>
          </h1>
        </div>

        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center w-20 h-20 ml-4 flex-shrink-0 cursor-pointer"
        >
          <img src={logo} alt="UPTAEB Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </header>
  );
};

export default Header;

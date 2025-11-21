import { Building2 } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-primary z-50 border-b border-primary">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Institution Name - Left Side */}
        <div className="flex-1">
          <h1 className="text-primary-foreground text-lg md:text-xl font-semibold leading-tight">
            UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL ESTADO ARAGUA<br />
            <span className="text-base md:text-lg">"FEDERICO BRITO FIGUEROA"</span>
          </h1>
        </div>

        {/* Institution Logo - Right Side */}
        <div className="flex items-center justify-center w-16 h-16 bg-background rounded-lg ml-4 flex-shrink-0">
          <Building2 className="w-10 h-10 text-primary" />
          <img src="logo.jpg" alt="logo" className="logo-header" />
        </div>
      </div>
    </header>
  );
};

export default Header;

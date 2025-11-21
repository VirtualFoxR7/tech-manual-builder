import logo from "@/assets/logo.png";

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
        <div className="flex items-center justify-center w-20 h-20 ml-4 flex-shrink-0">
          <img src={logo} alt="UPTAEB Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </header>
  );
};

export default Header;

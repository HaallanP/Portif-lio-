
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isContactPage = location.pathname === "/contact";

  return (
    <header className="w-full py-4 border-b border-border bg-background/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-theme-purple">
          <span className="text-theme-blue">Dev</span>Portfolio
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-theme-purple transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-theme-purple transition-colors">
            Sobre
          </Link>
          <Link to="/portfolio" className="text-foreground hover:text-theme-purple transition-colors">
            Portfólio
          </Link>
          
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg py-4">
            <nav className="flex flex-col container gap-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-theme-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-theme-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/portfolio" 
                className="text-foreground hover:text-theme-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </Link>
             
              {!isContactPage && (
                <Button asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Entre em Contato
                  </Link>
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

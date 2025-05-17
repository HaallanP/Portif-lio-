
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-theme-blue">Dev</span>
              <span className="text-theme-purple">Portfolio</span>
            </h3>
            <p className="text-gray-300 mt-2">
              Portfólio profissional desenvolvido com React, destacando projetos e habilidades em desenvolvimento web e desktop.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-theme-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-theme-purple transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-theme-purple transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-theme-purple transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:hallan.dev.app@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-theme-purple transition-colors">
                 hallan.dev.app@gmail.com
              </a>
            </li>

              <li className="flex items-center gap-2">
                <Github size={16} />
                <a href="https://github.com/HaallanP?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-theme-purple transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="https://www.linkedin.com/in/hallan-franco-071b7b297" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-theme-purple transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} DevPortfolio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

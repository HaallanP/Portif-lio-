
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contato</h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato através dos canais abaixo
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-theme-purple/10 p-3 rounded-full flex-shrink-0 mr-4">
              <Mail className="text-theme-purple h-6 w-6" />
            </div>
           
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-theme-blue/10 p-3 rounded-full flex-shrink-0 mr-4">
              <Github className="text-theme-blue h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-1">GitHub</h4>
              <p className="text-muted-foreground mb-2">Confira meus repositórios</p>
              <a href="https://github.com/HaallanP?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline block">
                github.com/HaallanP
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-theme-purple/10 p-3 rounded-full flex-shrink-0 mr-4">
              <Linkedin className="text-theme-purple h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-1">LinkedIn</h4>
              <p className="text-muted-foreground mb-2">Perfil profissional</p>
              <a href="https://www.linkedin.com/in/hallan-franco-071b7b297" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline block">
                linkedin.com/in/hallan-franco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

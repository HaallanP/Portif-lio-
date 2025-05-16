
import { Code, MousePointerClick, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg text-muted-foreground">
            Profissional em transição de carreira combinando visão de negócios e desenvolvimento de software
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-theme-purple/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Code className="text-theme-purple" />
            </div>
            <h3 className="text-xl font-medium mb-2">Desenvolvimento Front-end</h3>
            <p className="text-muted-foreground">
              Criação de interfaces modernas e responsivas utilizando React, TypeScript e TailwindCSS.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-theme-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MousePointerClick className="text-theme-blue" />
            </div>
            <h3 className="text-xl font-medium mb-2">Aplicações Web</h3>
            <p className="text-muted-foreground">
              Desenvolvimento de aplicações web modernas com React e TailwindCSS.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-theme-purple/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Database className="text-theme-purple" />
            </div>
            <h3 className="text-xl font-medium mb-2">Gestão e Análise</h3>
            <p className="text-muted-foreground">
              Visão de negócios, análise financeira e controle de dados para tomada de decisões.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/about">Saiba Mais Sobre Mim</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

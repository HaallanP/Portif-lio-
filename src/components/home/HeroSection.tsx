
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Olá, eu sou <span className="text-theme-purple">Hallan Franco</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Desenvolvedor em Transição com Olhar Analítico e Inovador.
              Transformando ideias em aplicações com propósito. Da análise ao código, construindo soluções que fazem a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/portfolio">
                  Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Entre em Contato</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-theme-blue to-theme-purple opacity-20 blur-3xl absolute -z-10 inset-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
              alt="Desenvolvedor" 
              className="rounded-2xl shadow-xl max-w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

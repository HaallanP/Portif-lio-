
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/ProjectCard";
import { ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const featuredProjects = [
    {
      id: "f-body-medidas",
      title: "F-Body Medidas",
      description: "Projeto em andamento para gerenciamento de medidas corporais e acompanhamento de evolução física.",
      image: "/lovable-uploads/badcfd5e-d2c3-42ee-926b-b1b7e3e3d74c.png",
      tags: ["React", "TypeScript", "Electron"],
      link: "/portfolio/f-body-medidas"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meu Projeto</h2>
          <p className="text-lg text-muted-foreground">
            Conheça o projeto que desenvolvi com foco em solução prática e eficiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 mb-12 max-w-2xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/portfolio">
              Ver Detalhes do Projeto <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

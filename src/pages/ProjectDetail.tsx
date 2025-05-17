
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Code, 
  Download, 
  Github,
  X
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Projetos de exemplo
const projectsData = {
  "f-body-medidas": {
    title: "F-Body Medidas",
    description: "Projeto em andamento para gerenciamento de medidas corporais e acompanhamento de evolução física.",
    fullDescription: `O F-Body Medidas é um aplicativo em desenvolvimento focado no acompanhamento de medidas corporais e evolução física para profissionais de educação física e seus alunos.

Este projeto permitirá o registro e visualização da evolução de medidas corporais ao longo do tempo, com gráficos de progresso, comparações de antes e depois, e recomendações personalizadas.

O aplicativo está sendo desenvolvido com React, TypeScript , permitindo uma experiência desktop completa com a flexibilidade das tecnologias web.
\n
www.fbodymedidas.com.br`,
    image: "/lovable-uploads/badcfd5e-d2c3-42ee-926b-b1b7e3e3d74c.png",
    screenshots: [
      "/lovable-uploads/1862efd1-4e17-4263-af6c-181eb893911e.png",
      "/lovable-uploads/a6ecb74c-c9cb-4631-8882-6303892049c4.png",
      "/lovable-uploads/1cd28793-d836-446b-9c34-27488802f141.png"
    ],
    tags: ["React", "TypeScript", "Em Desenvolvimento"],
    demoUrl: "",
    siteUrl: "https://fbodymedidas.com",
    repoUrl: "https://github.com/HaallanP/f-body-medidas",
    downloadUrl: "",
    technologies: [
      { name: "React", description: "Biblioteca JavaScript para construção de interfaces." },
      { name: "TypeScript", description: "Superset de JavaScript com tipagem estática." },
      { name: "Vite", description: "Ferramenta de build rápida para projetos modernos." },
      { name: "TailwindCSS", description: "Framework CSS para estilização rápida e consistente." },
      { name: "Shadcn UI", description: "Componentes de UI acessíveis e personalizáveis." },
      { name: "Electron", description: "Framework para criar aplicativos desktop com tecnologias web." },
      { name: "Lucide Icons", description: "Biblioteca de ícones moderna e personalizável." },
      { name: "React Router", description: "Biblioteca para gerenciamento de rotas no React." },
      { name: "Recharts", description: "Biblioteca para criação de gráficos interativos." },
      { name: "@tanstack/react-query", description: "Biblioteca para gerenciamento de estados e requisições." }
    ],
    features: [
      "Registro de medidas corporais",
      "Gráficos de evolução",
      "Comparação visual de progresso",
      "Cadastro de alunos",
      "Exportação de relatórios",
      "Interface responsiva e moderna",
      "Cálculos automáticos de IMC e composição corporal"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  if (!id || !projectsData[id as keyof typeof projectsData]) {
    return (
      <PageLayout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <p className="mb-6">O projeto que você está procurando não existe.</p>
          <Button asChild>
            <Link to="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Portfólio
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }
  
  const project = projectsData[id as keyof typeof projectsData];
  
  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Portfólio
              </Link>
            </Button>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-md mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto" 
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {project.screenshots.map((screenshot, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(screenshot)}
                  >
                    <img 
                      src={screenshot} 
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Links</h3>
                
                <div className="space-y-3">
                  {project.downloadUrl && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </a>
                    </Button>
                  )}
                  
                  {project.repoUrl && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Repositório
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Recursos</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-theme-purple mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Descrição do Projeto</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
                <p className="whitespace-pre-line text-muted-foreground">{project.fullDescription}</p>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <Code className="text-theme-purple mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog para exibir imagem ampliada */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-1 bg-transparent border-none">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white rounded-full" 
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5" />
            </Button>
            <img 
              src={selectedImage || ''} 
              alt="Screenshot ampliado" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default ProjectDetail;


import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Projetos
const allProjects = [
  {
    id: "f-body-medidas",
    title: "F-Body Medidas",
    description: "Projeto em andamento para gerenciamento de medidas corporais e acompanhamento de evolução física.",
    image: "/lovable-uploads/badcfd5e-d2c3-42ee-926b-b1b7e3e3d74c.png",
    tags: ["React", "TypeScript", "Electron"],
    link: "/portfolio/f-body-medidas"
  }
];

// Extrair todas as tags únicas
const allTags = Array.from(new Set(allProjects.flatMap(project => project.tags)));

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Filtrar projetos com base na pesquisa e tags selecionadas
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => project.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });
  
  // Alternar seleção de tag
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-4">Meu Portfólio</h1>
          <p className="text-lg text-muted-foreground">
            Conheça o projeto que desenvolvi e as tecnologias utilizadas
          </p>
        </div>
        
        {/* Filtros e Pesquisa */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Pesquisar projeto..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge 
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
            {selectedTags.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedTags([])}
                className="text-xs"
              >
                Limpar filtros
              </Button>
            )}
          </div>
        </div>
        
        {/* Listagem de Projetos */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              Nenhum projeto encontrado com os filtros selecionados.
            </p>
            <Button onClick={() => {setSearchTerm(""); setSelectedTags([])}}>
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Portfolio;

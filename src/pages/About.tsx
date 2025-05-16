import PageLayout from "@/components/layout/PageLayout";
import HallanCV from "@/components/cv/HallanCV";
import { 
  Code, 
  Database, 
  FileCode, 
  Github, 
  Globe, 
  Laptop, 
  LayoutDashboard, 
  Linkedin, 
  Monitor, 
  PanelRight,
  BrainCircuit,
  FileSpreadsheet,
  Server,
  Terminal,
  PieChart,
  Layers,
  Smartphone
} from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Sobre Mim</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Desenvolvedor" 
                  className="rounded-lg shadow-md w-full mb-6" 
                />
                
                <div className="flex gap-3 mb-6">
                  <a 
                    href="https://github.com/HaallanP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white p-2 rounded-full"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/hallan-franco-071b7b297" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2 rounded-full"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                
                <HallanCV />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Quem Sou</h2>
                <p className="text-muted-foreground mb-4">
                  Sou Hallan Franco, um profissional em transição de carreira para o desenvolvimento de software, atualmente cursando 
                  Gestão Financeira e focado em tecnologia e inovação.
                </p>
                <p className="text-muted-foreground mb-4">
                  Minha trajetória me ensinou a unir visão de negócios com pensamento analítico, criando soluções que realmente funcionam. 
                  Já atuei com controle financeiro, análise de comportamento do cliente e estratégias de vendas.
                </p>
                <p className="text-muted-foreground">
                  Hoje, desenvolvo aplicações web e desktop com foco na usabilidade, performance e design limpo. 
                  Estou preparado para novos desafios, trazendo comigo criatividade, curiosidade e o desejo constante de evoluir como desenvolvedor.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Experiência</h2>
                <div className="border-l-2 border-muted pl-6 space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-3 w-3 bg-theme-purple rounded-full"></span>
                      <h3 className="text-xl font-medium">Desenvolvedor Front-end</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Projetos Independentes • 2023 - Presente</p>
                    <p className="text-muted-foreground">
                      Desenvolvimento de aplicações web e desktop utilizando React, TypeScript e Electron.
                      Criação de interfaces modernas e responsivas com foco na experiência do usuário.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-3 w-3 bg-theme-blue rounded-full"></span>
                      <h3 className="text-xl font-medium">Análise Financeira e Atendimento</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Experiência Prévia</p>
                    <p className="text-muted-foreground">
                      Atuação com controle financeiro, análise de comportamento do cliente e estratégias de vendas.
                      Desenvolvimento de habilidades analíticas e de resolução de problemas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Habilidades Técnicas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <Code className="text-theme-purple mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Front-end</h3>
                      <p className="text-sm text-muted-foreground">
                        React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <Laptop className="text-theme-blue mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Desktop</h3>
                      <p className="text-sm text-muted-foreground">
                        React Desktop
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <Database className="text-theme-purple mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Bancos de Dados</h3>
                      <p className="text-sm text-muted-foreground">
                        SQL, MySQL
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <FileCode className="text-theme-blue mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Back-end</h3>
                      <p className="text-sm text-muted-foreground">
                        Node.js (básico), APIs REST
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <Github className="text-theme-purple mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Ferramentas</h3>
                      <p className="text-sm text-muted-foreground">
                        Git, GitHub, VS Code
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <PieChart className="text-theme-blue mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Visualização</h3>
                      <p className="text-sm text-muted-foreground">
                        Power BI, Excel Avançado
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <Layers className="text-theme-purple mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">UI/UX</h3>
                      <p className="text-sm text-muted-foreground">
                        Design Responsivo, Componentização
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <FileSpreadsheet className="text-theme-blue mr-3 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Documentação</h3>
                      <p className="text-sm text-muted-foreground">
                        jsPDF, html2canvas, Documentação de Projetos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Formação</h2>
                <div className="border-l-2 border-muted pl-6 space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-3 w-3 bg-theme-purple rounded-full"></span>
                      <h3 className="text-xl font-medium">Graduação em Gestão Financeira</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Centro Universitário de Valença – UNIFAA</p>
                    <p className="text-muted-foreground">
                      Formação em andamento com foco em análise financeira e gestão de negócios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;

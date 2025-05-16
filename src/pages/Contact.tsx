
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Enviar dados para o Supabase
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });
      
      if (error) throw error;
      
      // Mostrar toast de sucesso
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      });
      
      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Tem um projeto em mente ou deseja discutir oportunidades de colaboração? 
            Entre em contato comigo por meio do formulário abaixo ou use minhas informações de contato.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Motivo do contato"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Enviando..." : (
                    <>
                      Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                  <CardDescription>Use estes canais para entrar em contato diretamente</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-theme-purple/10 p-3 rounded-full mr-4">
                      <Mail className="text-theme-purple h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a 
                        href="mailto:hallan.dev.app@gmail.com" 
                        className="text-theme-blue hover:underline"
                      >
                        hallan.dev.app@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-theme-purple/10 p-3 rounded-full mr-4">
                      <Phone className="text-theme-purple h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <a 
                        href="https://wa.me/5524992018231" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-blue hover:underline"
                      >
                        +55 (24) 99201-8231
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                  <CardDescription>Me encontre nas redes sociais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://github.com/HaallanP?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:bg-muted p-2 rounded-md transition-colors"
                  >
                    <div className="bg-black text-white p-2 rounded-full mr-3">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-sm text-muted-foreground">
                        github.com/HaallanP
                      </p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/hallan-franco-071b7b297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:bg-muted p-2 rounded-md transition-colors"
                  >
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">
                        linkedin.com/in/hallan-franco-071b7b297
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;

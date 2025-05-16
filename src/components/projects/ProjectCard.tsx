
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <Link to={project.link}>
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <CardHeader>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold group-hover:text-theme-purple transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-theme-purple transition-colors" />
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </CardContent>
        
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProjectCard;

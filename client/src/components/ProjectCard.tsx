import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`}>
      <Card className="card-sci-fi h-full flex flex-col md:flex-row overflow-hidden group cursor-pointer border-l-4">
        <div className="relative w-full md:w-1/2 lg:w-3/5 h-64 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-border flex-shrink-0">
          <div className="absolute inset-0 bg-transparent opacity-20 z-10 pointer-events-none mix-blend-overlay" />
          <div className="absolute inset-0 bg-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <CardHeader className="space-y-1">
            <CardTitle className="font-sans text-2xl font-extrabold uppercase tracking-tight flex justify-between items-center text-foreground group-hover:text-accent-cyan transition-colors">
              {project.title}
              <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 text-accent-cyan" />
            </CardTitle>
            <CardDescription className="font-mono text-xs text-muted-foreground uppercase">
              Project 0{project.id}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="font-mono text-base md:text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 pt-0 pb-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="badge-sci-fi text-sm md:text-base py-1.5 px-4 border-2 font-bold bg-accent-cyan/10"
              >
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}

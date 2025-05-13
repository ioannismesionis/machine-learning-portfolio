import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectCard = ({
  category = "",
  title = "",
  description = "",
  techstacks = [],
  link = "#",
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Card className="flex flex-col w-full h-[380px] sm:w-[300px]">
        <CardHeader>
          <Skeleton className="mb-2 h-4 w-20" />
          <Skeleton className="h-7 w-48" />
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden pb-10">
          <Skeleton className="mb-4 h-4 w-full" />
          <Skeleton className="mb-4 h-4 w-5/6" />
          <Skeleton className="mb-4 h-4 w-4/6" />
          <div className="flex flex-wrap gap-2 mt-4">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} className="h-6 w-16 " />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-end justify-end mt-auto">
          <Skeleton className="h-10 w-32 rounded-md" />
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col w-full h-[380px] sm:w-[300px]">
      <CardHeader>
        <code className="text-xs">{category}</code>
        <h1 className="text-xl font-RobotoMono line-clamp-1">{title}</h1>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden pb-10">
        <p className="mb-4 text-sm line-clamp-3 font-WorkSans text-justify">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techstacks &&
            techstacks.map((tech, index) => (
              <Badge
                key={index}
                className="flex justify-center whitespace-nowrap text-center"
              >
                {tech}
              </Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-end justify-end mt-auto">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button>
            Learn More <FaArrowRight className="ml-2" size="14px" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

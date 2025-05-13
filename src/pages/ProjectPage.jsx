import ProjectCard from "@/components/ui/ProjectCard";
import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let { data, error } = await supabase.from("projects").select("*");
        if (data) {
          data = data.reverse(); // reverses in-place
        }
        console.log("Supabase response:", data, error);

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          // Transform data if needed to match the expected format
          const formattedProjects = data.map((project) => ({
            id: project.id,
            category: project.category,
            title: project.title,
            description: project.description,
            techstacks: project.techstacks || [], // Ensure it's an array
            link: project.link || "#",
          }));

          setProjects(formattedProjects);
        } else {
          // Use sample data if no projects found
          console.log("No data found, using sample projects");
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
        // Fallback to sample data
        console.log("Error occurred, using sample projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-RobotoMono mb-6">My Projects</h1>

      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
          role="alert"
        >
          <p>Failed to load projects: {error}</p>
          <p className="text-sm">Showing sample projects instead.</p>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                category={project.category}
                title={project.title}
                description={project.description}
                techstacks={project.techstacks}
                link={project.link}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No projects found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectPage;

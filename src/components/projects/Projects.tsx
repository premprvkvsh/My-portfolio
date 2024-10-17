import { useEffect, useRef, useState } from "react";
import { createSwapy } from "swapy";
import { motion } from "framer-motion";

import paytmPng from "../../assets/paytm.png";


import easyPng from "../../assets/EasyInvoice.png";
import portfolioPng from "../../assets/portfolio.png";

import Alert from "../Alert";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import { useNavigate } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    id: "a",
    title: "EasyInvoice",
    image: easyPng,
    alt: "Invoice app",
  },
  {
    id: "b",
    title: "Paytm-main",
    image: paytmPng,
    alt: "Transaction app",
  },
  {
    id: "c",
    title: "My-portfolio",
    image: portfolioPng,
    alt: "personal website",
  },
];

const highlightedProjects: React.FC = () => {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState<string>("a");
  const navigate = useNavigate();

  useEffect(() => {
    if (containerRef.current) {
      const swapy = createSwapy(containerRef.current);
      swapy.onSwap(({ data }) => {
        setActiveProject(data.object.one!);
      });
      swapy.enable(true);
    }
  }, []);

  return (
    <section
      id="highlighted-projects"
      className="flex flex-col-reverse md:flex-row md:h-screen h-[120vh] overflow-hidden bg-zinc-100"
    >
      <div className="md:w-1/2 w-full h-[60%] md:h-full flex-col flex items-center md:justify-around justify-evenly p-2 md:p-4 lg:p-10">
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg"
        >
          <ProjectDetails projectId={activeProject} />
        </motion.div>
        <button
          onClick={() => {
            navigate("/all-projects");
            window.scrollTo({ top: 0, behavior: "auto" });
          }}
          className="p-2 sm:p-3 rounded-lg border border-viloet-950 mt-4 sm:mt-6 bg-zinc-200 text-zinc-900 font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out text-xs sm:text-sm"
        >
        All projects
        </button>
      </div>
      <div
        ref={containerRef}
        className="md:w-1/2 w-full h-[40%] md:h-full flex flex-col justify-around items-center p-2 md:p-4 lg:p-10 text-xs sm:text-sm md:text-base lg:text-xl"
      >
        <Alert
          title="Project Showcase"
          description="Drag and swap items below to view detailed project information."
        />
        <div
          className="h-1/2 md:h-1/3 w-3/4 md:w-1/2 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out text-base sm:text-xl md:text-2xl lg:text-4xl border-2 border-dashed border-black flex items-center justify-center"
          data-swapy-slot="one"
        >
          <ProjectCard project={projects[0]} />
        </div>
        <div className="flex h-1/3 w-full items-center justify-evenly space-x-4 sm:space-x-8">
          <div
            className="h-3/4 md:h-1/2 w-[45%] md:w-1/3 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            data-swapy-slot="two"
          >
            <ProjectCard project={projects[1]} />
          </div>
          <div
            className="h-3/4 md:h-1/2 w-[45%] md:w-1/3 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            data-swapy-slot="three"
          >
            <ProjectCard project={projects[2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default highlightedProjects;

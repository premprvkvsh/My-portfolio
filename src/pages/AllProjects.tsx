import React from "react";
import { ExternalLink, Github } from "lucide-react";
import easyPng from "../assets/EasyInvoice.png";
import paytmPng from "../assets/paytm.png";
import portfolioPng from "../assets/portfolio.png";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  sourceCodeUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EasyInvoice",
    description:
      "EasyInvoice is a user-friendly invoice generator application.",
    imageUrl: easyPng,
    sourceCodeUrl: "https://github.com/premprvkvsh/EasyInvoice",
    demoUrl: "https://easy-invoice-one.vercel.app",
  },
  {
    id: 2,
    title: "Paytm-main",
    description:
      "Transaction can take place after a user signup, signin and update and the data.",
    imageUrl:paytmPng ,
    sourceCodeUrl: "https://github.com/premprvkvsh/paytm-main",
    demoUrl: "",
  },
  {
    id: 3,
    title: "My-portfolio website",
    description: "Personalised portfolio website showcasing my skills and projects",
    imageUrl: portfolioPng,
    sourceCodeUrl: " https://github.com/premprvkvsh/My-portfolio",
    demoUrl: "",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
    <div className="relative pb-[56.25%] overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="absolute top-0 left-0 w-full h-full object-contain"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors duration-300"
        >
          <Github className="mr-2" size={18} />
          Source Code
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-[#844dbf] text-white rounded hover:bg-[#844dbf] transition-colors duration-300"
        >
          <ExternalLink className="mr-2" size={18} />
          View Demo
        </a>
      </div>
    </div>
  </div>
);

const AllProjects: React.FC = () => (
  <div className="flex justify-center items-center flex-col container mx-auto px-4 py-8 pt-24 bg-gray-100">
    <h1 className="mb-16 text-5xl  font-sans font-semibold">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-32 max-w-6xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default AllProjects;

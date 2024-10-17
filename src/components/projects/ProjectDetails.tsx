import React from "react";

type TechTool = {
  name: string;
  color: string;
};

type ProjectData = {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: TechTool[];
  tools: TechTool[];
  github: string;
  demo: string;
};

const colors = {
  primary: "#ff8c00",
  secondary: "#000000",
  text: "#000000",
  background: "#ffffff",
};

const projectsData: ProjectData[] = [
  {
    id: "a",
    title: "EasyInvoice",
    description:
      "EasyInvoice is a user-friendly invoice generator application.",
    features: [
      'Let you create a invoice with receivers and senders address"',
      "Minimal theme with eye pleasing UI",
      "You can add items and their price and add discount rate too",
      "The final price is being calculated and shown in the form of receipt",
    ],
    tech: [
      { name: "ReactJS", color: colors.primary },
      { name: "Tailwind CSS", color: colors.primary },
      { name: "NodeJS", color: colors.primary },
    ],
    tools: [{ name: "JWT", color: colors.primary }],
    github: "https://github.com/premprvkvsh/EasyInvoic",
    demo: "https://easy-invoice-one.vercel.app",
  },
  {
    id: "b",
    title: "Paytm-main",
    description:
      "A application mimicking basic transaction behaviours like Paytm",
    features: [
      "It lets user to signup, signin and update",
      "User authentication with JWT",
      "Implemented input validation with Zod",
      "Access the local database with the help pf mongoose library",
    ],
    tech: [
      { name: "MongoDB", color: colors.primary },
     
      { name: "Reactjs", color: colors.primary },
      { name: "NodeJS", color: colors.primary },
      { name: "Axios", color: colors.primary },
    ],
    tools: [
      { name: "Docker", color: colors.primary },
      { name: "Postman", color: colors.primary },
      { name: "Zod", color: colors.primary },
      { name: "JWT", color: colors.primary },
      { name: "React Context API", color: colors.primary },
    ],
    github: "https://github.com/premprvkvsh/paytm-main",
    demo: "",
  },
  {
    id: "c",
    title: "My-portfolio",
    description: "Personalised portfolio website.",
    features: [
      "Showcase my skills what i have learned",
      "Implementation of those skills through various projects",
      "Intractive terminal page to display various interesting aspects about me",
     
    ],
    tech: [
      { name: "Typescipt", color: colors.primary },
      { name: "Tailwind CSS", color: colors.primary },
      { name: "Reactjs", color: colors.primary },
    
    ],
    tools: [
      { name: "Zod", color: colors.primary },
      
    ],
    github: "https://github.com/premprvkvsh/My-portfolio",
    demo: "",
  },
];

const TechToolList: React.FC<{ items: TechTool[]; label: string }> = ({
  items,
  label,
}) => (
  <p className="text-black text-xs sm:text-sm">
    {label}:{" "}
    {items.map((item, index) => (
      <span key={index} style={{ color: item.color }}>
        {item.name}
        {index < items.length - 1 ? ", " : ""}
      </span>
    ))}
  </p>
);

const Button: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <a
    target="_blank"
    href={`${link}`}
    className=" cursor-pointer p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm"
  >
    {text}
  </a>
);

interface ProjectDetailsProps {
  projectId: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <div className="space-y-2">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
        {project.title}
      </h2>
      <p className="text-sm sm:text-base">{project.description}</p>
      <ul className="list-disc list-inside space-y-1 sm:space-y-2.5 text-sm sm:text-base">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <TechToolList items={project.tech} label="Tech used" />
      <TechToolList items={project.tools} label="Tools used" />
      <div className="flex gap-3 sm:gap-5 items-center">
        <Button text="View Demo" link={project.demo} />
        <Button text="Source Code" link={project.github} />
      </div>
    </div>
  );
};

export default ProjectDetails;

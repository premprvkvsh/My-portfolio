// import chalk from "chalk";

interface Project {
  id: number;
  name: string;
  description: string;
}

const projects: Project[] = [  
  {
    id: 1,
    name: "Pytm-main",
    description:
      "Transaction can take place after a user signup, signin and update and the data is being verified from the database.",
  },
  {
    id: 2,
    name: "EasyInvoice",
    description: "User-friendly invoice generator application designed to streamline the process of creating, managing, and sending invoices.",
  },
  {
    id: 3,
    name: "Networking-Simulator-GUI-",
    description:
      "Demonstrate the message transmission between different end devices in the domain of Data link layer.",
  },
  {
    id: 4,
    name: "MERN Todo App",
    description:
      "Just a simple todo app.",
  },
  {
    id: 5,
    name: "My-portfolio",
    description:
      "My portfolio website",
  }
];

export const handleCommand = (cmd: string): string => {
  const trimmedCmd = cmd.trim().toLowerCase();

switch (true) {
  case trimmedCmd === "help":
    return [
      "type: ",
      "→ help               ".padEnd(65) + "Show this help message",
      "→ about              ".padEnd(65) + "About me",
      "→ education          ".padEnd(65) + "My Education",
      "→ skills             ".padEnd(65) + "My Tech Skills",
      "→ proj               ".padEnd(65) + "My Tech Projects",
      "→ proj info [id]     ".padEnd(65) + "Project details",
      "→ resume             ".padEnd(65) + "My Resume",
      "→ contact            ".padEnd(65) + "Contact Me",
      "→ date               ".padEnd(65) + "Display date and time",
      "→ clear              ".padEnd(65) + "Clear terminal",
    ].join("\n");





  case trimmedCmd === "proj":
    return projects.map((p) => `${p.id}. ${p.name}`).join("\n");

  case /^proj info \d+$/.test(trimmedCmd):
    const id = parseInt(trimmedCmd.split(" ")[2]);
    const project = projects.find((p) => p.id === id);
    return project
      ? `Project: ${project.name}\nDescription: ${project.description}`
      : "Project not found";

  case trimmedCmd === "about":
    // return "Hey there! I'm Prem, a passionate full-stack developer with expertise in the MERN stack and a growing interest in DevOps. I've built a variety of projects and I'm always excited to learn new things, collaborate with like-minded individuals, and contribute to the tech community.";
    window.location.href = "about"
    return "About me";


  case trimmedCmd === "education":
    return "I am currently in my final year at GL Bajaj Institute of Technology & Management, Greater Noida. I completed my high school education in Madhubani, which is my hometown.";

  case trimmedCmd === "date":
    return new Date().toLocaleString();

  case trimmedCmd === "skills":
    return `Languages: JavaScript, TypeScript, Java, C, C++, Python\n
Frontend: HTML, Tailwind CSS, Next.js, React.js, Recoil, Redux\n
Backend: Node.js, Express.js, MongoDB, TypeScript, APIs, RESTful APIs, gRPC, ORM, Postgres, Prisma, Postman, Cloudflare, AWS\n
Tools: Git/GitHub, Linux, Monorepos, CI/CD, Docker`;

  case trimmedCmd === "proj":
    window.location.href = "/all-projects";
    return "Have fun!";

  case trimmedCmd === "resume":
    window.location.href = "https://rb.gy/xick7w"; 
    return "Opening resume...";

    case trimmedCmd === "contact":
      window.location.href = "#contact"
      return "thank you for connecting";

  default:
    if (trimmedCmd.startsWith("cat ")) {
      return "Can't find file. Please mention a file that exists.";
    }
    return `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
}
};

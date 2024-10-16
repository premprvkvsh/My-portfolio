import React from "react";
import { MailPlus } from "lucide-react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
// {
//   name: "Autumn Leaf",
//   primary: ""#5a2d8a,
//   secondary: "#844dbf",
//   gradient: ["#5a2d8a", "#844dbf"],
// },

interface SocialButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  link: string;
  color: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  ariaLabel,
  link,
  color,
}) => (
  <motion.a
    initial={{ y: 0 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-${color} transition-colors duration-300 hover:text-${color}`}
    aria-label={ariaLabel}
  >
    {icon}
  </motion.a>
);

const HeroSection: React.FC = () => {
  const texts = ["Full Stack Developer","DevOps Practitioner", "Open Source Contributer", "GenAI enthusiast" ];
  const colorSet = {
    primary: "#844dbf",
    secondary: "#bb9af7",
    gradient: ["#844dbf", "#bb9af7"],
  };

  // #bb9af7
  // #5a2d8a
  // #844dbf


  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black font-sans"
      id="home"
    >
      <div
        className="relative z-10 flex h-screen flex-col items-center justify-center px-4 w-full"
        style={{ color: colorSet.primary }}
      >
        <div className="text-center md:text-left md:w-5/12">
          <p className="text-2xl flex md:justify-start justify-center items-center">
          Welcome, I'm
          </p>
          <h1 className="mb-4 text-6xl font-bold text-violet-400 md:text-8xl">
          Prem Prakash
          </h1>
        
          <p className="my-4 text-violet-300 text-4xl font-semibold">
           <TypeWriter texts={texts} color={colorSet.primary} />
          </p>
         <br />
         
          <p className="my-4 text-2xl break-words text-pretty text-violet-300">
          I build{" "} <span style={{ color: colorSet.secondary }}>Full-stack</span> web applications, currently focused on{" "} <span style={{ color: colorSet.secondary }}>DevOps</span> and open-source contributions.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <button
              onClick={() => {
                const element = document.querySelector("#highlighted-projects");
                console.log(element);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-full px-8 py-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                // background: `linear-gradient(to right, ${colorSet.gradient[0]}, ${colorSet.gradient[1]})`,

                background: `${colorSet.gradient[0]}`,
// background: `linear-gradient(to right, rgba(0,0,0,0.5), ${colorSet.gradient[1]})`,
// background: `repeating-linear-gradient(to right, ${colorSet.gradient[0]}, ${colorSet.gradient[1]} 20%)`,
// background: `linear-gradient(to bottom right, ${colorSet.gradient[0]}, ${colorSet.gradient[1]})`,


              }}
            >
              View Projects
            </button>
            <div className="flex gap-6 items-center">
              <SocialButton
                icon={<GitHubLogoIcon className="w-10 h-10" />}
                ariaLabel="GitHub"
                link="https://github.com/premprvkvsh"
                color={colorSet.primary}
              />
              <SocialButton
                icon={<TwitterLogoIcon className="w-10 h-10" />}
                ariaLabel="Twitter"
                link="https://x.com/premprvkvsh"
                color={colorSet.primary}
              />
              <SocialButton
                icon={<MailPlus className="w-10 h-10" />}
                ariaLabel="Email"
                link="mailto:premprakash369t@gmail.com"
                color={colorSet.primary}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

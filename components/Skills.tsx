import React from "react";
import { useTheme } from "next-themes";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  const { theme } = useTheme();
  let darkModeImg = false;

  if (theme === "dark") {
    darkModeImg = true;
  }

  return (
    <div id="skills" className="w-full  p-2 py-24">
      <div className="mx-auto max-w-4xl flex flex-col justify-center ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Technical Skills
        </p>
        <h2 className="py-4 font-semibold">Languages</h2>
        {/* Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-7">
          <SkillsItem
            imageSrc="/../public/assets/skills/typescript-logo.png"
            name="TypeScript"
            bgGradient="from-[#88caf7]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/javascript-logo.png"
            name="JavaScript"
            bgGradient="from-[#f5e798]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/graphql-logo.png"
            name="GraphQL"
            bgGradient="from-[#f89ad9]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/cpp-logo.png"
            name="C++"
            bgGradient="from-[#6db1f1]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/c-logo.png"
            name="C"
            bgGradient="from-[#7d8df5]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/java-logo.png"
            name="Java"
            bgGradient="from-[#87b2cc]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/golang-logo.png"
            name="Go"
            bgGradient="from-[#86e0f7]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/csharp-logo.png"
            name="C#"
            bgGradient="from-[#e37af3]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/html-logo.png"
            name="HTML"
            bgGradient="from-[#e49883]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/css-logo.png"
            name="CSS"
            bgGradient="from-[#7dade4]"
          />
        </div>
        <h2 className="py-7 font-semibold">Technologies</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <SkillsItem
            imageSrc="/../public/assets/skills/nodejs-logo.png"
            name="NodeJS"
            bgGradient="from-[#74ac72]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/apollo-logo.png"
            name="Apollo"
            bgGradient="from-[#ab9aec]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/linux-logo.png"
            name="Linux"
            bgGradient="from-[#fce589]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/postgreSQL-logo.png"
            name="PostgreSQL"
            bgGradient="from-[#89baeb]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/mongodb-logo.png"
            name="MongoDB"
            bgGradient="from-[#9ce48f]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/docker-logo.png"
            name="Docker"
            bgGradient="from-[#89ccff]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/redis-logo.png"
            name="Redis"
            bgGradient="from-[#f39690]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/react-logo.png"
            name="React"
            bgGradient="from-[#9eeefc]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/tailwindcss-logo.png"
            name="Tailwind CSS"
            bgGradient="from-[#85e0f0]"
          />
          <SkillsItem
            imageSrc={
              darkModeImg
                ? "/../public/assets/skills/AWS-logo-white.png"
                : "/../public/assets/skills/AWS-logo-dark.png"
            }
            name="AWS"
            bgGradient="from-[#92acda]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/heroku-logo.png"
            name="Heroku"
            bgGradient="from-[#b2aeeb]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/git-logo.png"
            name="Git"
            bgGradient="from-[#f19f90]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/vim-logo.png"
            name="Vim"
            bgGradient="from-[#74cf92]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/angular-logo.png"
            name="Angular"
            bgGradient="from-[#fa8c88]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/azure-logo.png"
            name="Azure"
            bgGradient="from-[#88cff5]"
          />
          <SkillsItem
            imageSrc="/../public/assets/skills/jenkins-logo.png"
            name="Jenkins"
            bgGradient="from-[#7898ac]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

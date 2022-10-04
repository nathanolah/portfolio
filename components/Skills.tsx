import React from "react";
import { useTheme } from "next-themes";
import SkillsItem from "./SkillsItem";
import typescriptImg from "../public/assets/skills/typescript-logo.png";
import javascriptImg from "../public/assets/skills/javascript-logo.png";
import graphqlImg from "../public/assets/skills/graphql-logo.png";
import cppImg from "../public/assets/skills/cpp-logo.png";
import cImg from "../public/assets/skills/c-logo.png";
import javaImg from "../public/assets/skills/java-logo.png";
import goImg from "../public/assets/skills/golang-logo.png";
import csharpImg from "../public/assets/skills/csharp-logo.png";
import htmlImg from "../public/assets/skills/html-logo.png";
import cssImg from "../public/assets/skills/css-logo.png";
import nodejsImg from "../public/assets/skills/nodejs-logo.png";
import apolloImg from "../public/assets/skills/apollo-logo.png";
import linuxImg from "../public/assets/skills/linux-logo.png";
import postgreSqlImg from "../public/assets/skills/postgreSQL-logo.png";
import mongodbImg from "../public/assets/skills/mongodb-logo.png";
import dockerImg from "../public/assets/skills/docker-logo.png";
import redisImg from "../public/assets/skills/redis-logo.png";
import reactImg from "../public/assets/skills/react-logo.png";
import tailwindcssImg from "../public/assets/skills/tailwindcss-logo.png";
import awsWhiteImg from "../public/assets/skills/AWS-logo-white.png";
import awsDarkImg from "../public/assets/skills/AWS-logo-dark.png";
import herokuImg from "../public/assets/skills/heroku-logo.png";
import gitImg from "../public/assets/skills/git-logo.png";
import vimImg from "../public/assets/skills/vim-logo.png";
import angularImg from "../public/assets/skills/angular-logo.png";
import azureImg from "../public/assets/skills/azure-logo.png";
import jenkinsImg from "../public/assets/skills/jenkins-logo.png";
import pythonImg from "../public/assets/skills/python-logo.png";
import solidityImg from "../public/assets/skills/solidity-logo.png";
import truffleImg from "../public/assets/skills/truffle-logo.png";
import terraformImg from "../public/assets/skills/terraform-logo.png";
import awsCCPImg from "../public/assets/certs/aws-certified-cloud-practitioner.png";

const Skills = () => {
  const { theme } = useTheme();
  let darkModeImg = false;

  if (theme === "dark") {
    darkModeImg = true;
  }

  return (
    <div id="skills" className="w-full  p-2 py-24">
      <div className="mx-auto max-w-4xl flex flex-col justify-center ">
        <p className="text-xl tracking-widest uppercase text-[#6858ff]">
          Technical Skills
        </p>
        <h2 className="py-4 font-semibold">Languages</h2>
        {/* Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-7">
          <SkillsItem
            imageSrc={typescriptImg}
            name="TypeScript"
            bgGradient="from-[#88caf7]"
          />
          <SkillsItem
            imageSrc={javascriptImg}
            name="JavaScript"
            bgGradient="from-[#f5e798]"
          />
          <SkillsItem
            imageSrc={graphqlImg}
            name="GraphQL"
            bgGradient="from-[#f89ad9]"
          />
          <SkillsItem
            imageSrc={cppImg}
            name="C++"
            bgGradient="from-[#6db1f1]"
          />
          <SkillsItem imageSrc={cImg} name="C" bgGradient="from-[#7d8df5]" />
          <SkillsItem
            imageSrc={javaImg}
            name="Java"
            bgGradient="from-[#87b2cc]"
          />
          <SkillsItem imageSrc={goImg} name="Go" bgGradient="from-[#86e0f7]" />
          <SkillsItem
            imageSrc={solidityImg}
            name="Solidity"
            bgGradient="from-[#a1a1a1]"
          />
          <SkillsItem
            imageSrc={csharpImg}
            name="C#"
            bgGradient="from-[#e37af3]"
          />
          <SkillsItem
            imageSrc={pythonImg}
            name="Python"
            bgGradient="from-[#7db8e9]"
          />
          <SkillsItem
            imageSrc={htmlImg}
            name="HTML"
            bgGradient="from-[#e49883]"
          />
          <SkillsItem
            imageSrc={cssImg}
            name="CSS"
            bgGradient="from-[#7dade4]"
          />
        </div>
        <h2 className="py-7 font-semibold">Technologies</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <SkillsItem
            imageSrc={nodejsImg}
            name="NodeJS"
            bgGradient="from-[#74ac72]"
          />
          <SkillsItem
            imageSrc={apolloImg}
            name="Apollo"
            bgGradient="from-[#ab9aec]"
          />
          <SkillsItem
            imageSrc={linuxImg}
            name="Linux"
            bgGradient="from-[#fce589]"
          />
          <SkillsItem
            imageSrc={postgreSqlImg}
            name="PostgreSQL"
            bgGradient="from-[#89baeb]"
          />
          <SkillsItem
            imageSrc={mongodbImg}
            name="MongoDB"
            bgGradient="from-[#9ce48f]"
          />
          <SkillsItem
            imageSrc={dockerImg}
            name="Docker"
            bgGradient="from-[#89ccff]"
          />
          <SkillsItem
            imageSrc={redisImg}
            name="Redis"
            bgGradient="from-[#f39690]"
          />
          <SkillsItem
            imageSrc={reactImg}
            name="React"
            bgGradient="from-[#9eeefc]"
          />
          <SkillsItem
            imageSrc={tailwindcssImg}
            name="Tailwind CSS"
            bgGradient="from-[#85e0f0]"
          />
          <SkillsItem
            imageSrc={darkModeImg ? awsWhiteImg : awsDarkImg}
            name="AWS"
            bgGradient="from-[#92acda]"
          />
          <SkillsItem
            imageSrc={herokuImg}
            name="Heroku"
            bgGradient="from-[#b2aeeb]"
          />
          <SkillsItem
            imageSrc={gitImg}
            name="Git"
            bgGradient="from-[#f19f90]"
          />
          <SkillsItem
            imageSrc={terraformImg}
            name="Terraform"
            bgGradient="from-[#8577ff]"
          />
          <SkillsItem
            imageSrc={truffleImg}
            name="Truffle"
            bgGradient="from-[#8f6c75]"
          />
          <SkillsItem
            imageSrc={vimImg}
            name="Vim"
            bgGradient="from-[#74cf92]"
          />
          <SkillsItem
            imageSrc={angularImg}
            name="Angular"
            bgGradient="from-[#fa8c88]"
          />

          <SkillsItem
            imageSrc={azureImg}
            name="Azure"
            bgGradient="from-[#88cff5]"
          />
          <SkillsItem
            imageSrc={jenkinsImg}
            name="Jenkins"
            bgGradient="from-[#7898ac]"
          />
        </div>
        <h2 className="py-7 font-semibold">Certifications</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <SkillsItem
            imageSrc={awsCCPImg}
            name="AWS Cloud Practitioner"
            bgGradient="from-[#90a3bd]"
            url="https://www.credly.com/badges/16d30b4f-a7a2-4154-b902-8227f6996869/public_url"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

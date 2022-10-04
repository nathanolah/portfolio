import React from "react";
import Image from "next/image";
import codingImg from "../public/assets/coding.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-24">
      <div className="mx-auto max-w-4xl md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 font-semibold">Who I Am</h2>
          <p className="py-2 text-gray-700 dark:text-gray-400">
            I am a highly motivated individual with a strong passion for
            software development. I would describe myself as a great team
            player, with strong problem-solving skills, a self-learner, and
            independently driven.
          </p>
          <p className="py-2 text-gray-700 dark:text-gray-400">
            What I enjoy most about software development are the problem-solving
            and creativity aspects as this constantly pushes me to learn and
            think critically throughout the development process.
          </p>
          <p className="py-2 text-gray-700 dark:text-gray-400">
            I am also a graduate of the 3-year Computer Programming and Analysis
            program at Seneca College.
          </p>
        </div>

        <div className="relative -bottom-11 w-full h-auto m-auto shadow-2xl shadow-gray-500 dark:shadow-[#0b0d25fb] rounded-full flex items-center justify-center my-7 bg-[#9494c0] dark:bg-[#1D1D55]">
          <Image
            className="opacity-80"
            src={codingImg}
            alt="/"
            width={300}
            height={300}
            quality={100}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;

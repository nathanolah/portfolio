import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="mx-auto max-w-4xl w-full h-full p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700 dark:text-gray-400">
            Greetings
          </p>
          <h1 className="py-4 text-gray-800 dark:text-gray-100">
            I'm Nathan Olah
          </h1>
          <h1 className="py-4 text-gray-800 dark:text-gray-100">
            A Full Stack Web Developer
          </h1>
          <p className="m-auto max-w-[70%] py-4 text-gray-700 dark:text-gray-400">
            I'm a junior software developer specializing in building and
            deploying full stack web applications. Currently I'm focused on
            learning about new technologies and further refining my skills as a
            developer.
          </p>
          <div className="flex items-center justify-between py-4 m-auto max-w-[330px]">
            <div className="rounded-full">
              <a href="https://www.linkedin.com/in/nathan-olah-622567216/">
                <div className="rounded-full drop-shadow-md shadow-gray-400 dark:shadow-gray-700 p-7 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                  <FaLinkedinIn size={28} />
                </div>
              </a>
            </div>
            <div className="rounded-full">
              <a href="https://github.com/nathanolah">
                <div className="rounded-full drop-shadow-md shadow-gray-400 dark:shadow-gray-700 p-7 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                  <FaGithub size={28} />
                </div>
              </a>
            </div>
            <div className="rounded-full">
              <a href="mailto:nathanolah5@gmail.com">
                <div className="rounded-full drop-shadow-md shadow-gray-400 dark:shadow-gray-700 p-7 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                  <AiOutlineMail size={28} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

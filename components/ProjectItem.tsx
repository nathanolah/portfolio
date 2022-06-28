import React from "react";
import Image from "next/image";

const ProjectItem = (props: any) => {
  let app = false;

  if (props.projectUrl !== "") {
    app = true;
  }

  return (
    <div
      className="relative flex justify-center items-center h-auto w-full bg-[#f2f2fd] dark:bg-[#0000] shadow-xl dark:shadow-lg shadow-gray-300 dark:shadow-[#0b0d25fb] rounded-xl p-2.5 
                    group hover:bg-[#d0d0ff] dark:hover:bg-[#1E1E3A] border border-slate-200 dark:border-slate-900 hover:border-slate-400 dark:hover:border-slate-700 ease-in duration-500"
    >
      <Image
        className="rounded-xl opacity-90 group-hover:opacity-20 duration-500"
        src={props.imageSrc}
        alt="/"
        width="400px"
        height="220px"
        quality={100}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-gray-900 dark:text-white tracking-wider text-center font-semibold">
          {props.projectTitle}
        </h3>
        <p className="pb-4 pt-2 text-gray-900 dark:text-white text-center font-light">
          {props.projectDesc}
        </p>
        <div className="flex justify-center items-center md:grid-cols-3 lg:grid-cols-4">
          {app ? (
            <div className="">
              <a href={props.projectUrl}>
                <div
                  className="rounded-xl py-3.5 px-4 mb-2 text-gray-800 dark:text-[#d6d5ee] border border-slate-700 dark:border-slate-500 bg-[#ffff] dark:bg-[#5454f159]
                 font-semibold text-md cursor-pointer hover:bg-[#8e8ef7] hover:dark:bg-[#5e5efd] opacity-90 duration-300"
                >
                  <p className="text-center ">Deployed App</p>
                </div>
              </a>

              <a href={props.projectRepo}>
                <div
                  className="rounded-xl py-3.5 px-4 mb-2 text-gray-800 dark:text-[#d6d5ee] border border-slate-700 dark:border-slate-500 bg-[#ffff] dark:bg-[#5454f159]
                 font-semibold text-md cursor-pointer hover:bg-[#8e8ef7] hover:dark:bg-[#5e5efd] opacity-90 duration-300"
                >
                  <p className="text-center ">Code</p>
                </div>
              </a>
            </div>
          ) : (
            <div>
              <a href={props.projectRepo}>
                <div
                  className="rounded-xl py-3.5 px-9 text-gray-800 dark:text-[#d6d5ee] border border-slate-700 dark:border-slate-500 bg-[#ffff] dark:bg-[#5454f159]
                 font-semibold text-md cursor-pointer hover:bg-[#8e8ef7] hover:dark:bg-[#5e5efd] opacity-90 duration-300"
                >
                  <p className="text-center ">Code</p>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

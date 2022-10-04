import React from "react";
import Image from "next/image";
import Link from "next/link";

const SkillsItem = ({ imageSrc, name, bgGradient, url = "" }: any) => {
  let isUrl = url != "" ? true : false;
  const styling = bgGradient
    ? `rounded-xl bg-gradient-to-t ${bgGradient} dark:bg-none dark:bg-[#121226] border border-slate-100 dark:border-slate-900
     drop-shadow-md dark:shadow-md shadow-gray-400 dark:shadow-[#0b0d25fb] hover:scale-95 ease-in duration-200`
    : "";

  return (
    <div className={styling}>
      {isUrl ? (
        <a href={url}>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={imageSrc}
                  alt="/"
                  width="64px"
                  height="64px"
                  className=""
                  quality={100}
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-md font-semibold">{name}</h3>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div className="p-6 rounded-xl hover:scale-110 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center ">
            <div className="m-auto">
              <Image
                src={imageSrc}
                alt="/"
                width="64px"
                height="64px"
                className=""
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-md font-semibold">{name}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsItem;

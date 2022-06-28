import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ColorModeToggle } from "./ColorModeToggle";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 99) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-2xl shadow-gray-300 dark:shadow-[#0b0d25fb] z-[100] bg-transparent backdrop-blur-sm duration-300 ease-in"
          : "fixed w-full h-20 z-[100] bg-transparent backdrop-blur-sm ease-out duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2x:px-16 mx-auto max-w-4xl">
        <div className="flex items-center px-2 2x:px-16">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold pb-1 font-mono">
                {"<Nathan />"}
              </h3>
            </div>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase">Contact</li>
            </Link>
            <li className="ml-10">
              <ColorModeToggle />
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* moblie menu */}
      {/* overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* side menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FFFFFF] dark:bg-[#04020e] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full items-center justify-start space-x-20">
                <div onClick={handleNav}>
                  <Link href="/">
                    <div className="flex cursor-pointer ">
                      <h3 className="text-xl sm:text-xl font-bold pb-1 font-mono">
                        {"<Nathan />"}
                      </h3>
                    </div>
                  </Link>
                </div>
                <div className="flex justify-end items-center space-x-6">
                  <div>
                    <ColorModeToggle />
                  </div>
                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-sm shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 dark:border-gray-600 my-4 py-1"></div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-normal">
              <li className="py-4">
                <div className="flex">
                  <Link href="/">
                    <p
                      onClick={() => setNav(false)}
                      className="text-sm hover:text-[#6b67e6] ease-in duration-100"
                    >
                      Home
                    </p>
                  </Link>
                </div>
              </li>
              <li className="py-4">
                <div className="flex">
                  <Link href="/#about">
                    <p
                      onClick={() => setNav(false)}
                      className="text-sm hover:text-[#6b67e6] ease-in duration-100"
                    >
                      About
                    </p>
                  </Link>
                </div>
              </li>
              <li className="py-4">
                <div className="flex">
                  <Link href="/#skills">
                    <p
                      onClick={() => setNav(false)}
                      className="text-sm hover:text-[#6b67e6] ease-in duration-100"
                    >
                      Skills
                    </p>
                  </Link>
                </div>
              </li>
              <li className="py-4">
                <div className="flex">
                  <Link href="/#projects">
                    <p
                      onClick={() => setNav(false)}
                      className="text-sm hover:text-[#6b67e6] ease-in duration-100"
                    >
                      Projects
                    </p>
                  </Link>
                </div>
              </li>
              <li className="py-4">
                <div className="flex">
                  <Link href="/#contact">
                    <p
                      onClick={() => setNav(false)}
                      className="text-sm hover:text-[#6b67e6] ease-in duration-100"
                    >
                      Contact
                    </p>
                  </Link>
                </div>
              </li>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#6b67e6] py-2">
                Connect with me
              </p>
              <div className="flex items-center justify-between my-5 w-full sm:w-[80%]">
                <div className="rounded-full">
                  <a href="https://www.linkedin.com/in/nathan-olah-622567216/">
                    <div className="rounded-full drop-shadow-md shadow-gray-400 dark:shadow-gray-700 p-5 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                      <FaLinkedinIn size={27} />
                    </div>
                  </a>
                </div>
                <div className="rounded-full">
                  <a href="https://github.com/nathanolah">
                    <div className="rounded-full drop-shadow-md shadow-gray-400 dark:shadow-gray-700 p-5 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                      <FaGithub size={27} />
                    </div>
                  </a>
                </div>
                <div className="rounded-full">
                  <a href="mailto:nathanolah5@gmail.com">
                    <div className="rounded-full drop-shadow-md shadow-gray-400 dark:shadow-gray-700 p-5 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                      <AiOutlineMail size={27} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

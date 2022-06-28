import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen py-10">
      <div className="mx-auto max-w-4xl px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4"></h2>
        <div className="grid md:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 md:col-span-2 w-full h-full drop-shadow-md dark:shadow-md shadow-gray-400 dark:shadow-[#0b0d25fb] bg-[#F6F6FF] dark:bg-[#121226] rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="flex justify-center rounded-xl mt-3 mb-4 p-5 ">
                <BsFillPersonLinesFill size="80" className="opacity-90" />
              </div>
              <div className="rounded-lg p-5 bg-[#ebebf7] dark:bg-[#1e1e3a] border border-slate-200 dark:border-slate-900 mb-4">
                <h2 className="py-4 font-semibold ">Nathan Olah</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Software Developer
                </p>
                <p className="py-4 text-gray-700 dark:text-gray-300">
                  I am available for full-time positions. Contact me and let's
                  talk!
                </p>
              </div>

              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full">
                    <a href="https://www.linkedin.com/in/nathan-olah-622567216/">
                      <div className="rounded-full shadow-sm shadow-gray-400 dark:shadow-gray-700 p-5 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                        <FaLinkedinIn size="35" />
                      </div>
                    </a>
                  </div>
                  <div className="rounded-full">
                    <a href="https://github.com/nathanolah">
                      <div className="rounded-full shadow-sm shadow-gray-400 dark:shadow-gray-700 p-5 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                        <FaGithub size="35" />
                      </div>
                    </a>
                  </div>
                  <div className="rounded-full">
                    <a href="mailto:nathanolah5@gmail.com">
                      <div className="rounded-full shadow-sm shadow-gray-400 dark:shadow-gray-700 p-5 cursor-pointer bg-[#d4d4f1] dark:bg-[#242450] opacity-70 hover:scale-105 hover:opacity-100 ease-in duration-200">
                        <AiOutlineMail size="35" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto drop-shadow-md dark:shadow-md shadow-gray-400 dark:shadow-[#0b0d25fb] bg-[#F6F6FF] dark:bg-[#121226] rounded-xl lg:p-4">
            <div className="p-4">
              <form action="https://formspree.io/f/mjvldrqp" method="POST">
                <div className="grid md:grid-cols w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-normal">
                        Full Name
                      </span>
                    </label>
                    <input
                      name="fullName"
                      className=" rounded-lg p-3 flex dark:bg-[#1d1d55] border border-[#121226] outline-none focus:ring-offset-2 focus:border-[#706EFF] hover:border-slate-700 ease-in duration-200"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-normal">
                      Email
                    </span>
                  </label>
                  <input
                    name="email"
                    className="rounded-lg p-3 flex dark:bg-[#1d1d55] border border-[#121226] outline-none focus:ring-offset-2 focus:border-[#706EFF] hover:border-slate-700 ease-in duration-200"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-normal">
                      Subject
                    </span>
                  </label>
                  <input
                    name="subject"
                    className="rounded-lg p-3 flex dark:bg-[#1d1d55] border border-[#121226] outline-none focus:ring-offset-2 focus:border-[#706EFF] hover:border-slate-700 ease-in duration-200"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-normal">
                      Message
                    </span>
                  </label>
                  <textarea
                    name="message"
                    className="rounded-lg p-3 flex dark:bg-[#1d1d55] border border-[#121226] outline-none focus:ring-offset-2 focus:border-[#706EFF] hover:border-slate-700 ease-in duration-200"
                    rows={7}
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col mt-2 mx-7 py-2">
                  <button
                    type="submit"
                    className="w-full p-3 font-medium text-[#706EFF] dark:text-[#9f9dd3] bg-[#dbdbf8] dark:bg-[#6e6ea759] opacity-70 hover:opacity-100 ease-in duration-200 rounded-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-sm shadow-gray-400 dark:shadow-gray-700 p-5 cursor-pointer bg-[#d4d4f1] dark:bg-[#11113d] opacity-70 hover:scale-110 hover:opacity-100 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

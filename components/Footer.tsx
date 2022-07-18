import React from "react";

const Footer = () => {
  return (
    // Footer is now at the bottom of the Contact component
    <div className="w-full content-center md:my-16 lg:my-32">
      {/* <div className="mx-auto w-full">
        <hr />
        <div className="flex justify-center items-center text-center text-sm font-medium py-3 text-[#4F4F5E]">
          Copyright &copy; {new Date().getFullYear()} - Nathan Olah{" "}
        </div>
      </div> */}

      <div className="w-full">
        <div className="mx-auto w-full py-16">
          <hr />
          <div className="flex justify-center items-center text-center text-sm font-medium py-3 text-[#4F4F5E]">
            Copyright &copy; {new Date().getFullYear()} - Nathan Olah{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

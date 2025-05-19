import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Toggle from "./toggle";
import { motion, AnimatePresence } from "motion/react";
import { NavLink } from "react-router"; // Correct import
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Ensure state toggles correctly
  };

  return (
    <div className="w-full flex lg:justify-center lg:items-center">
      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "0%" }}
            exit={{ translateX: "-100%" }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeInOut",
            }}
            className="min-h-screen absolute flex flex-col w-[300px] justify-center items-center gap-8 lg:hidden z-100 border-r-2 bg-background"
          >
            <NavLink
              className="cursor-pointer"
              to={"/project"}
              onClick={toggleMenu}
            >
              Project
            </NavLink>
            {/* <NavLink
              className="cursor-pointer"
              to={"/experience"}
              onClick={toggleMenu}
            >
              Experience
            </NavLink> */}
            <NavLink className="cursor-pointer" to={"/"} onClick={toggleMenu}>
              About
            </NavLink>
            <Button onClick={toggleMenu}>Resume</Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----- */}

      <div className="text-[14px] font-Roboto flex flex-row justify-between items-center w-full max-w-[1440px] p-4 my-4 mx-8">
        <div className="flex justify-center items-center">
          <a className="cursor-pointer">
            <Toggle />
          </a>
        </div>
        <div className="hidden lg:flex flex-row gap-12 justify-center items-center">
          <NavLink
            className="cursor-pointer hover:underline hover:underline-offset-4"
            to={"/project"}
            onClick={toggleMenu}
          >
            Project
          </NavLink>
          {/* <NavLink
            className="cursor-pointer"
            to={"/experience"}
            onClick={toggleMenu}
          >
            Experience
          </NavLink> */}
          <NavLink
            className="cursor-pointer hover:underline hover:underline-offset-4
            "
            to={"/"}
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "../../assets/resume.pdf";
              link.setAttribute("download", "resume.pdf");
              link.style.display = "none";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Resume
          </Button>
        </div>
        <AiOutlineMenu className="lg:hidden mx-8 size-5" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;

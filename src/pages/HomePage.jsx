import { Button } from "@/components/ui/button";
import profileImage from "../assets/pf.svg";
import React from "react";
import { FaArrowRightLong, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiWakatime } from "react-icons/si";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Profile Image */}
          <div className="flex justify-center md:order-2 ">
            <div className="overflow-hidden rounded-full h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 shadow-2xl">
              <img
                src={profileImage}
                alt="Profile"
                className="h-full w-full bg-main-foreground rounded-full object-cover transform transition-all duration-500 ease-in-out scale-155"
              />
            </div>
          </div>

          {/* Personal Info */}
          <div className="flex flex-col items-center md:items-start md:order-1 space-y-4">
            <h1 className="font-bold font-RobotoMono text-3xl sm:text-4xl text-center md:text-left">
              Shaon An Nafi
            </h1>
            <h2 className="font-bold font-RobotoMono text-lg sm:text-xl text-center md:text-left">
              Software Engineer
            </h2>
            <p className="text-center md:text-left font-PublicSans max-w-md">
              I am passionate about integrating functionality and design in
              applications to create intuitive, user-friendly experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full max-w-sm mt-4">
              <Button
                onClick={() =>
                  window.open("https://discord.com/users/_sakuno", "_blank")
                }
                className="w-full"
              >
                Contact Me <FaArrowRightLong className="ml-2" />
              </Button>
              <Button
                onClick={() =>
                  window.open("https://calendly.com/sarkarnafe", "_blank")
                }
                className="w-full"
              >
                Schedule a Meeting <FaArrowRightLong className="ml-2" />
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row gap-6 mt-4">
              <a
                href="https://github.com/Nafisarkar"
                className="hover:transform hover:scale-110 transition-all"
              >
                <FaGithub className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/nafi-sarkar/"
                className="hover:transform hover:scale-110 transition-all"
              >
                <FaLinkedin className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors" />
              </a>
              <a
                href="https://discord.com/users/_sakuno"
                className="hover:transform hover:scale-110 transition-all"
              >
                <FaDiscord className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/_blindfox_/"
                className="hover:transform hover:scale-110 transition-all"
              >
                <FaInstagram className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors" />
              </a>
              <a
                href="https://wakatime.com/@Nafisarkar"
                target="_blank"
                className="hover:transform hover:scale-110 transition-all"
              >
                <SiWakatime className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="w-full  px-4 mb-8 md:px-0">
          <h2 className="font-bold font-RobotoMono text-[1.2rem] md:text-2xl mb-2">
            About Me
          </h2>
          <div className="space-y-4 font-PublicSans text-gray-400 ">
            <p className="text-justify">
              I'm a computer science student passionate about creating seamless,
              user-friendly experiences through thoughtful design and efficient
              code. I love working at the intersection of frontend and backend
              development, ensuring that applications are not only aesthetically
              pleasing but also robust and scalable.
            </p>
            <p className="text-justify">
              Currently, I'm focused on expanding my skills in web development,
              with particular interest in React and Node.js. Through my
              coursework and personal projects, I've gained experience in UI/UX
              design principles, responsive layouts, and modern JavaScript
              frameworks. I enjoy tackling complex problems and finding elegant
              solutions that prioritize user experience while maintaining code
              quality.
            </p>
            <p className="text-justify">
              When I'm not coding, you'll find me exploring new technologies, or
              expanding my knowledge through online courses. Beyond tech, I
              enjoy photography in my free time, playing video games, reading
              books, and occasionally traveling to experience different cultures
              and perspectives. I'm always looking for opportunities to
              collaborate on projects that can make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

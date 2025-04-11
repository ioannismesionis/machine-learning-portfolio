import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { MorphingText } from "../ui/morphing-text";
import { MorphingTextDescription } from "../ui/morphing-text_description";
import { Particles } from "../ui/particles";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { SparklesText } from "../ui/sparkles-text";
import { TypingAnimation } from "../ui/typing-animation";
import { WordRotate } from "../ui/word-rotate";
import { IconCloud } from "../ui/icon-cloud";
import { useToast } from "@/hooks/use-toast";
import { Spotify } from "react-spotify-embed";
import { CgDarkMode } from "react-icons/cg";
import { useEffect, useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const slugs = [
  "javascript",
  "dart",
  "react",
  "flutter",
  "androidstudio",
  "mongodb",
  "nodedotjs",
  "firebase",
  "vercel",
  "Jellyfin",
  "tailwindcss",
  "typescript",
  "githubcopilot",
  "gitkraken",
  "prettier",
  "shadcnui",
  "codeium",
  "vite",
  "flutter",
  "c",
  "python",
  "html5",
  "css3",
  "tailwindcss",
  "chakraui",
  "postman",
  "cplusplus",
  "vscodium",
  "docker",
  "git",
  "gitlab",
  "jetbrains",
  "figma",
];

// --- Centralized Project Data ---
const projectData = [
  {
    title: "Solaris-Frontend",
    description:
      "A robust front-end project designed for seamless management and organization of digital posters. Solaris provides features such as user registration, login with JWT-based authentication, form validation, and fluid UI/UX using Shadcn UI + Tailwind CSS",
    link: "https://github.com/Nafisarkar/Solaris-Frontend",
    livestatus: true,
    liveurl: "https://solarisposter.vercel.app/",
  },

  {
    title: "Typo-WordRush",
    description:
      "Test and improve your typing speed and accuracy with this sleek, timed typing challenge built using React, Vite, Tailwind CSS, and Shadcn UI",
    link: "https://github.com/Nafisarkar/Typo-WordRush",
    livestatus: true,
    liveurl: "https://typo-word-rush.vercel.app/",
  },
  {
    title: "Movilog_Move_Info_Finder",
    description:
      "Moviepedia is a web application designed to provide detailed information about movies. Users can explore trending movies, search for specific movies, and filter results by year, language, and genre.",
    link: "https://github.com/Nafisarkar/Movilog_Move_Info_Finder",
    livestatus: true,
    liveurl: "https://movilog.vercel.app/",
  },
  {
    title: "MemeWall",
    description:
      "This project, built with React, Tailwind CSS, and Shadcn UI, displays the top 100 trending memes from the internet.",
    link: "https://github.com/Nafisarkar/MemeWall",
    livestatus: true,
    liveurl: "https://meme-wall.vercel.app/",
  },
  {
    title: "Pdf Maker",
    description:
      "The PDF Maker App is a Flutter-based mobile application that lets users convert images into PDF files effortlessly.",
    link: "https://github.com/Nafisarkar/Pdf_Maker_Flutter",
    livestatus: true,
    liveurl:
      "https://github.com/Nafisarkar/Pdf_Maker_Flutter/releases/tag/Releasev1.0.0",
  },
  {
    title: "Rice Leaf Disease Detector",
    description:
      "This application uses the TFLite plugin for Flutter to execute a cnn model. It detects diseases directly on the device with accuracy.",
    link: "https://github.com/Nafisarkar/Rice_Leaf_Disease_Detector",
    livestatus: false,
    liveurl: "",
  },
  {
    title: "Pdf Converter OCR",
    description:
      "This is a graphical tool for Optical Character Recognition on images, converting PDFs to images, and merging text files in a selected folder.",
    link: "https://github.com/Nafisarkar/Pdf_Converter_OCR",
    livestatus: false,
    liveurl: "",
  },
  {
    title: "iamCracked",
    description:
      "The software provides a framework for developers to create and include their own hacking modules, allowing for extensibility and customization.",
    link: "https://github.com/Nafisarkar/iamCracked",
    livestatus: false,
    liveurl: "",
  },

  // --- ADD NEW PROJECTS HERE ---
  // Example:
  // {
  //   title: "New Awesome Project",
  //   description: "A brief description of what this new project does.",
  //   link: "https://github.com/yourusername/new-awesome-project"
  // },
  // -----------------------------
];
// --- End of Centralized Project Data ---

const homepage = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  const { toast } = useToast();
  const [backgrounddotcolor, setBackground] = useState("#ffffff");

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  // Extract data needed for components and onClick handler
  const projectTitles = projectData.map((p) => p.title);
  const projectDescriptions = projectData.map((p) => p.description);
  const projectliveurls = projectData.map((p) => p.liveurl);
  const projectStatuses = projectData.map((p) => p.livestatus);
  const projectLinks = projectData.reduce((acc, project) => {
    acc[project.title] = project.link;
    return acc;
  }, {}); // Create a lookup map { title: link }

  return (
    <div>
      <div className="fixed inset-0 -z-10 min-h-screen h-screen w-full overflow-hidden">
        <Particles
          quantity={800}
          staticity={20}
          color={backgrounddotcolor}
          className="w-full h-full"
        />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <BentoGrid>
          {/* --- Profile Card --- */}
          <BentoCard
            name={"Shoan An Nafi"}
            description={
              <WordRotate
                className={"text-white font-sourceCodePro font-light "}
                duration={3000}
                words={[
                  "Software Engineer",
                  "Student",
                  "Photographer",
                  "Gamer",
                ]}
              />
            }
            Icon={() => <div></div>}
            background={
              <>
                <img
                  src="/ProfileBlue.jpg"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div
                  className="absolute top-4 right-4 cursor-pointer" // Added cursor-pointer
                  onClick={() => {
                    document.documentElement.classList.toggle("dark");
                    setBackground(
                      document.documentElement.classList.contains("dark")
                        ? "#ffffff"
                        : "#000000"
                    );
                    toast({
                      title: "Theme changed",
                      duration: 2000,
                      description: "Theme has been changed",
                    });
                  }}
                >
                  <CgDarkMode className="w-6 h-6" />
                </div>
              </>
            }
            borderBeamProps={{
              show: false,
            }}
            className={
              "md:block md:col-span-1 md:row-span-2 font-mono font-extrabold cursor-pointer transition-transform duration-500 hover:scale-105"
            }
          />

          {/* --- Typing Animation Card --- */}
          <BentoCard
            name=""
            description=""
            Icon={() => <div></div>}
            // href="#" // Removed href as it's not used
            background={
              <div className="absolute inset-0 flex items-center justify-center bg-black/90 p-4">
                <pre className="text-xs text-white/80 overflow-hidden">
                  <code className="font-sourceCodePro text-green-600">
                    <TypingAnimation
                      className="whitespace-pre"
                      duration={100}
                      startOnView={true}
                    >{`Aspiring software engineer
with a passion for creating
innovative and efficient
solutions using cutting-edge
technologies.`}</TypingAnimation>
                  </code>
                </pre>
              </div>
            }
            className={
              "md:block md:col-span-1 md:row-span-1 cursor-pointer transition-transform duration-500 hover:scale-105"
            }
            borderBeamProps={{
              show: true,
              size: 100,
              colorFrom: "#000000",
              colorTo: "#008000",
              borderWidth: 1,
            }}
          />

          {/* --- Links Card --- */}
          <BentoCard
            name=""
            description=""
            isTransparent={true}
            opacity={10}
            useAuroraText={true}
            borderBeamProps={{
              show: false,
            }}
            className={"md:block md:col-span-1 md:row-span-1"}
          >
            <div className="h-full w-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-fit">
                <div
                  className="cursor-pointer "
                  onClick={() =>
                    window.open("https://github.com/Nafisarkar", "_blank")
                  }
                >
                  <AiFillGithub className="w-12 h-12 rounded-lg hover:opacity-80 cursor-pointer transition-transform duration-500 hover:scale-105" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href = "mailto:sarkarnafe@gmail.com")
                  }
                >
                  <SiGmail className="w-12 h-12 rounded-lg hover:opacity-80 cursor-pointer transition-transform duration-500 hover:scale-105" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    window.open("https://discord.com/users/_sakuno", "_blank")
                  }
                >
                  <FaDiscord className="w-12 h-12 rounded-lg hover:opacity-80 transition-opacity" />
                </div>
                <div
                  className="cursor-pointer transition-transform duration-500 hover:scale-105"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/_blindfox_/",
                      "_blank"
                    )
                  }
                >
                  <BsInstagram className="w-12 h-12 rounded-lg hover:opacity-80 transition-opacity" />
                </div>
                <div
                  className="cursor-pointer col-span-2 text-center transition-transform duration-500 hover:scale-105"
                  onClick={() => {
                    toast({
                      title: "CV Downloaded",
                      description: "Check your downloads folder.",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });

                    const link = document.createElement("a");
                    link.href =
                      "https://drive.google.com/uc?export=download&id=14fNIOzVJM3NuK12fKCHRpYD-h1igLp2A";
                    link.setAttribute("download", "");
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                  }}
                >
                  <p className="font-jetbriansMono text-4xl font-extrabold pt-1 hover:underline cursor-pointer transition-transform duration-500 hover:scale-105">
                    LINKS.
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* --- Recent Projects Card --- */}
          <BentoCard
            name="Recent Projects"
            isTransparent={true}
            opacity={10}
            projectTitle={
              // Pass the extracted titles array
              <span className="text-[#9E7AFF]">
                <MorphingText texts={projectTitles} />
              </span>
            }
            liveurl={projectliveurls}
            livestatus={<MorphingText texts={projectStatuses} />}
            projectDescription={
              // Pass the extracted descriptions array
              <MorphingTextDescription texts={projectDescriptions} />
            }
            borderBeamProps={{
              show: false,
            }}
            className="md:block md:col-span-2 md:row-span-1 cursor-pointer transition-transform duration-500 hover:scale-105"
            onClick={() => {
              // Use the same DOM query logic for now, but look up in the generated map
              const projectTitleElement = document.querySelector(
                ".project-title-text" // Assuming MorphingText renders the text within an element with this class
              );

              const currentProjectName = projectTitleElement
                ? projectTitleElement.textContent?.trim() // Add trim() just in case
                : undefined;

              if (currentProjectName && projectLinks[currentProjectName]) {
                const link = projectLinks[currentProjectName];
                navigator.clipboard.writeText(link);
                toast({
                  duration: 2000,
                  title: `Link Copied: ${currentProjectName}`,
                  description: link,
                });
              } else {
                console.warn(
                  "Could not find link for project:",
                  currentProjectName
                );
                // Optional: Show a toast indicating an error
                // toast({
                //   title: "Error",
                //   description: "Could not copy link for the current project.",
                //   variant: "destructive", // If your toast system supports variants
                // });
              }
            }}
          />

          {/* --- Skills Velocity Scroll Card --- */}
          <BentoCard
            name=""
            description=""
            Icon={() => <div></div>}
            // href="#" // Removed href
            // cta="Learn More" // Removed cta
            background={
              <div className="absolute inset-0 flex items-center justify-center bg-black/90 p-4">
                <div className="text-xs text-white/80 overflow-hidden w-full">
                  {" "}
                  {/* Added w-full for better layout */}
                  <VelocityScroll
                    className="font-mono"
                    defaultVelocity={0.5} // Slightly slower might look smoother
                  >{`C C++ Python Flutter Dart JavaScript React Java HTML CSS MongoDB Firebase Git Github Figma TailwindCSS ChakraUI ShadcnUI Photoshop Node.js Express Docker Vercel `}</VelocityScroll>{" "}
                  {/* Added more skills, removed duplicates, better spacing */}
                </div>
              </div>
            }
            className={
              "md:block md:col-span-2 md:row-span-1 cursor-pointer transition-transform duration-500 hover:scale-105"
            }
          />

          {/* --- Tech Stack Icon Cloud Card --- */}
          <BentoCard
            name="{ TECH } STACK"
            description={
              <WordRotate
                className={" font-sourceCodePro font-bold "}
                duration={3000}
                words={[
                  "javascript",
                  "dart",
                  "java",
                  "react",
                  "flutter",
                  "androidstudio",
                  "mongodb",
                  "nodedotjs",
                  "express",
                  "firebase",
                  "vercel",
                  "c",
                  "python",
                  "html5",
                  "css3",
                  "photoshop",
                  "tailwindcss",
                  "chakraui",
                  "shadcn",
                  "magicui",
                  "postman",
                  "cplusplus",
                  "vscode",
                  "docker",
                  "git",
                  "github",
                  "gitlab",
                  "jetbrains",
                  "figma",
                ]}
              />
            }
            isTransparent={true}
            borderBeamProps={{
              show: false,
            }}
            className={
              "md:block md:col-span-1 md:row-span-2 align-center justify-center"
            }
            background={
              <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg ">
                <IconCloud images={images} />
              </div>
            }
          />

          {/* --- Learning Card --- */}
          <BentoCard
            name=""
            description=""
            Icon={() => <div></div>}
            isTransparent={true}
            borderBeamProps={{
              show: false,
            }}
            background={
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url(https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif)",
                  backgroundSize: "cover",
                  backgroundPosition: "fixed",
                }}
              >
                <div className="absolute top-1 left-1 md:flex md:flex-wrap lg:flex ">
                  <SparklesText
                    sparklesCount={3}
                    text="Learning"
                    className="font-jetbriansMono text-sm md:w-full lg:w-full align-start"
                  />
                  <SparklesText
                    sparklesCount={3}
                    text="Express"
                    className="font-jetbriansMono text-xs md:w-full lg:pl-0 lg:w-auto align-start"
                  />
                </div>
              </div>
            }
            className={"md:block md:col-span-1 md:row-span-1"}
          />

          {/* --- Spotify / Availability Card --- */}
          <BentoCard
            name=""
            description=""
            Icon={() => <div></div>}
            isTransparent={true}
            borderBeamProps={{
              show: false,
            }}
            className={"md:block md:col-span-1 md:row-span-1"}
            background={
              <div>
                <p
                  className=" text-start font-mono text-xs  opacity-60 hover:underline"
                  onClick={() =>
                    window.open("https://discord.com/users/_sakuno", "_blank")
                  }
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 "></span>
                  Available for work
                </p>
                <p className=" text-start font-mono text-xs pt-0 pb-2 opacity-60 ">
                  <span className=""></span>
                  {new Intl.DateTimeFormat("en-US", {
                    weekday: "short",
                    year: "2-digit",
                    month: "short",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(new Date())}
                </p>
                <Spotify
                  link="https://open.spotify.com/track/4R8VBRb5nKbEfi1EIA2B7p?si=9d410c535c3c4bde"
                  width={"100%"}
                  height={"100%"}
                  frameBorder={0}
                />
              </div>
            }
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default homepage;

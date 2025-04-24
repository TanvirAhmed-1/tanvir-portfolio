import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/Tanvir/hiker-going-up-aiguille-du-midi.jpg";

const roles = ["Web Designer", "Web Developer", "MERN Stack Developer"];

const Banner = () => {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Hi, I’m TANVIR AHMED
        </h1>
        <div className="text-lg md:text-2xl mt-4 text-gray-300 font-semibold">
          I am a{" "}
          <span className="text-purple-400">
            {currentText}
            <motion.span
              className="inline-block w-[2px] h-[1.2em] bg-purple-500 ml-1"
              animate={{ opacity: [0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;

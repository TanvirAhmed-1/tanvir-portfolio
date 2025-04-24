import {
  FaReact,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import img2 from "../../assets/Tanvir/img2.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="w-full flex justify-center">
          <img
            src={img2}
            alt="Tanvir Ahmed"
            className="rounded-2xl shadow-lg w-80 md:w-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            I’m <strong>Tanvir Ahmed</strong>, a passionate Web Developer
            dedicated to crafting responsive and scalable web applications. I
            love solving real-world problems with clean, efficient code using
            modern technologies.
          </p>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li>
              <strong>Email:</strong> tanvir.79.ahmed@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +8801786924911
            </li>
            <li>
              <strong>Location:</strong> Dhaka, Bangladesh
            </li>
          </ul>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Connect with me
            </h3>
            <div className="flex gap-5 text-2xl text-gray-300">
              <a
                href="https://github.com/TanvirAhmed-1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tanvir-ahmed-38088333a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/12TanvirAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

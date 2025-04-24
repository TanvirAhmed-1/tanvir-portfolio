import { FaCode, FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="Contact" className="min-h-screen mt-20 px-6 bg-gradient-to-tr from-[#1f1c2c] via-[#1b1b40] to-[#1f1c2c] pt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Let's Connect
      </h1>

      <div className="w-full max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold text-white">TANVIR AHMED</h2>
            <p className="text-sm text-gray-300">Web Developer</p>
            <div className="grid gap-6 mt-6">
              <p className="text-lg text-white">
                I am available for freelance work. Connect with me via email or phone.
              </p>
              <div>
                <p className="text-white text-lg font-medium">Email: tanvir.79.ahmed@gmail.com</p>
                <p className="text-white text-lg font-medium">Phone: +8801786924911</p>
              </div>
            </div>

                      {/* Tech Stack */}
                      <div className="mb-6 mt-5">
                        <h3 className="text-xl font-semibold text-white mb-2">Tech Stack</h3>
                        <div className="flex gap-4 text-3xl text-purple-400">
                          <FaReact title="React" />
                          <SiExpress title="Express.js" />
                          <SiMongodb title="MongoDB" />
                          <SiTailwindcss title="Tailwind CSS" />
                          <FaCode title="JavaScript" />
                        </div>
                      </div>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all">
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a href="https://github.com/TanvirAhmed-1" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all">
                <FaGithub className="text-white text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/tanvir-ahmed-38088333a/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all">
                <FaLinkedinIn className="text-white text-xl" />
              </a>
            </div>
          </div>

          {/* Right Panel - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg grid gap-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                className="input input-bordered w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

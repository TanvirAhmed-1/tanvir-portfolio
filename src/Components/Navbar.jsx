import img1 from "../assets/img1.jpg";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100 flex lg:justify-between lg:px-8">
        <div class="">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#home">HOME</a>
              </li>
              {/* <li><a>Experience</a></li> */}
              <li>
                <a href="#Education">Education</a>
              </li>
              <li>
                {" "}
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="w-12 lg:w-14 ml-4 sm:ml-0">
            <img class="rounded-full" alt="tanvir img" src={img1} />
          </div>
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Tanvir</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Ahmed</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex font-medium">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>HOME</a>
            </li>
            {/* <li><a>Experience</a></li> */}
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

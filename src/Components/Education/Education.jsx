import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="Education" className="mt-16 w-11/12 mx-auto text-white">
      <h1 className="text-4xl my-10 md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Education
      <div className="w-56 h-1 bg-purple-500 mx-auto mt-4"></div>
      </h1>
       
      <div className="space-y-10">
        {/* Bachelor */}
        <div className="bg-gray-900 p-8 transform transition-transform duration-300 hover:scale-105 rounded-3xl shadow-lg md:flex justify-between items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-purple-400">
              Bachelor of Science (B.Sc)
            </h3>
            <p className="text-lg text-gray-300">
              Northern University Bangladesh
            </p>
            <p className="text-lg">
              BSc in Computer Science and Engineering.
            </p>
          </div>

          <div className="mt-6 md:mt-0 space-y-3">
            <div className="flex items-center gap-2 text-gray-300">
              <FaCalendarAlt className="text-purple-400" />
              <span>02/01/2024 – Present</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Diploma */}
        <div className="bg-gray-900 p-8 transform transition-transform duration-300 hover:scale-105 rounded-3xl shadow-lg md:flex justify-between items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-purple-400">
              Diploma in Engineering (4 Years)
            </h3>
            <p className="text-lg text-gray-300">
              Naogaon Polytechnic Institute, Naogaon
            </p>
            <p className="text-lg">
              Diploma in Computer Technology, Passed in 2021, CGPA 3.67
            </p>
          </div>

          <div className="mt-6 md:mt-0 space-y-3">
            <div className="flex items-center gap-2 text-gray-300">
              <FaCalendarAlt className="text-purple-400" />
              <span>28/03/2017 – 26/04/2021</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Naogaon, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* SSC */}
        <div className="bg-gray-900 p-8 rounded-3xl transform transition-transform duration-300 hover:scale-105 shadow-lg md:flex justify-between items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-purple-400">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-lg text-gray-300">
              Badalgachi Govt. Model Pilot High School
            </p>
            <p className="text-lg">
              GPA: 4.68 in Science Group
            </p>
          </div>

          <div className="mt-6 md:mt-0 space-y-3">
            <div className="flex items-center gap-2 text-gray-300">
              <FaCalendarAlt className="text-purple-400" />
              <span>01/01/2012 – 20/03/2017</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Badalgachhi, Naogaon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

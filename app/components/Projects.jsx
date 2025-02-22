import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-12 scroll-mt-24">
      <h4 className="text-center mb-2 text-lg font-Ovo">Checkout</h4>
      <h2 className="text-center text-5xl font-Ovo">My Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in full-stack development and Machine
        Learning.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="w-10/12 rounded-md absolute bottom-5 left-1/2 
              -translate-x-1/2 py-4 px-6 flex flex-col gap-3 justify-between 
              duration-500 group-hover:bottom-7 shadow-md"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div>
                <h2 className="font-semibold text-gray-800">{project.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between mt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex 
                  items-center justify-center shadow-[2px_2px_0_#000] 
                  group-hover:bg-lime-300 transition duration-300 ml-2"
                >
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

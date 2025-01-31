import React from 'react'
import { FaLinkedinIn, FaReact, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/ArivazhaganSakthivel" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/arivazhagansathivel/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>

          </span>
          <span className="bannerIcon">
        
          <a href="https://wa.me/919384148905/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media
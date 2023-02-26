import React from "react";
//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              ISMAIL<span> EL HABACHA</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Back-End Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              specialized in React Js, Junior in mongoDb/Express.js/Node.js. I
              can create Full-stack applications
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:max-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>
          {/* images */}
          <div>
            <img src={Image} alt="random image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

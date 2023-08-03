import React from "react";
import SectionTitle from "./SectionTitle";
import ProfileImg from "../assets/profile.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-[1024px] mx-auto  py-10 lgl:py-20 flex lg:px-4  flex-col gap-8 "
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
     transition={{duration: 0.6, delay: 3.1 }}
     variants={{
      visible: {opacity:1, y: -50},
      hidden: {opacity:0, y: 0}
     }}
    >
      <SectionTitle title="About Me" />
      <div className=" flex justify-center flex-col-reverse py-12 px-4 lg:px-12  lgl:flex-row gap-14">
        <div className="w-full lgl:w-2/3 text-base text-gray-700 font-medium flex flex-col gap-4">
          <p>
          Hello! My name is Anklesh Doras and I enjoy creating things that live on the internet. My interest in web development started back in 2022 when I created my first project using HTML & CSS!
          </p>
          <p>
          Fast-forward to today. I specialize in designing and developing high-quality user-friendly and responsive web applications using React and Next. My main focus these days is building accessible, inclusive products using Next Js.
          </p>
          <p>
          I also creating  some projects using React Js & Next Js so you can see my projects in my Projects section. Here are a few technologies I’ve been working with recently See on My Skills section. 
          </p>
          
        </div>
        <div className=" overflow-hidden box flex justify-center mx-auto items-center w-60  h-60 md:w-[250px] md:h-[250px] rounded-full  relative cursor-pointer hover:scale-105  ease-in-out duration-500 shadow-md shadow-black ">
        <div className=" animate-spin duration-300 ease-in-out absolute bg-blue-700  inset-x-12 -inset-y-2  hover:inset-x-0  -z-0">
        </div>
         <div className=" absolute bg-white w-56  h-56 md:w-[234px] md:h-[234px] rounded-full -z-0 "></div> 
         <div className=" absolute border-4 border-blue-700 hover:border-green-600 w-48 h-48 md:w-[200px] md:h-[200px] rounded-full -z-0 ">
         <img src={ProfileImg} className=" z-40 object-contain w-44 h-44 md:w-[185px] md:h-[185px]"/>
         </div> 
          
        </div>
      </div>
    </motion.section>
  );
};

export default About;

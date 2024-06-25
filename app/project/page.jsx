"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";


import {
  Tooltip, 
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num:"01",
    category:"Frontend",
    title:"project 1",
    description:"Ripple is a social media platform that mimics the likeness of Twitter. However, unlike Twitter, it aims to improve the quality of what is being posted as well as utilising AI to ensure the user is permitted to explore the platform. So far, the frontend is the only part that is complete.",
    stack: [{name:"HTML 5"}, {name:"Tailwind"}, {name:"React"}, {name:"NodeJs"}],
    image:"public/ripple.png",
    live:"",
    github:"https://github.com/Jaiwin21/Ripple",
  },
  // {
  //   num:"01",
  //   category:"frontend",
  //   title:"project 1",
  //   description:"Ripple is a social media platform that mimics the likeness of Twitter. However, unlike Twitter, it aims to improve the quality of what is being posted as well as utilising AI to ensure the user is permitted to explore the platform. So far, the frontend is the only part that is complete.",
  //   stack: [{name:"HTML 5"}, {name:"Tailwind"}, {name:"React"}, {name:"NodeJs"}],
  //   image:"public/ripple.png",
  //   live:"",
  //   github:"https://github.com/Jaiwin21/Ripple",
  // }
  // {
  //   num:"01",
  //   category:"frontend",
  //   title:"project 1",
  //   description:"Ripple is a social media platform that mimics the likeness of Twitter. However, unlike Twitter, it aims to improve the quality of what is being posted as well as utilising AI to ensure the user is permitted to explore the platform. So far, the frontend is the only part that is complete.",
  //   stack: [{name:"HTML 5"}, {name:"Tailwind"}, {name:"React"}, {name:"NodeJs"}],
  //   image:"public/ripple.png",
  //   live:"",
  //   github:"https://github.com/Jaiwin21/Ripple",
  // }
]

const work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div
              className="text-8xl leading-none font-extrabold"
              style={{
                WebkitTextStroke: "2px white", 
                color: "transparent", 
              }}
            >
              {project.num}
            </div>
              <h2 className="text=[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                      </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>slide</SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default work
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/ui/WorkSliderButtons";

const projects = [
    {
    num: "01",
    name: "Event Driven Architecture: Error logging and monitoring",
    category: "Architecting",
    title: "project 1",
    description: "This event-driven log monitoring architecture enables real-time log processing, storage, and automated alerting using serverless AWS services. It efficiently handles high log volumes, ensuring instant error detection and response while supporting both real-time lookups and historical analysis. Designed for scalability and cost efficiency, it eliminates infrastructure overhead, providing a robust and automated monitoring solution for modern cloud applications.",
    stack: [{ name: "SNS" }, { name: "Kinesis" }, { name: "DynamoDB" }, { name: "S3" }, { name: "Lambda" }, { name: "Eventbridge" },],
    image: "/errorlog.png",
    live: "",
    live: "https://youtu.be/otE0Y8FgbnU",
  },
  {
    num: "02",
    name: "AI Powered PDF Querying system",
    category: "Fullstack",
    title: "project 2",
    description: "This project is an AI-powered PDF query system that allows users to upload PDFs and ask questions about their content. It uses FastAPI, FAISS, and LangChain to process and retrieve relevant document sections, with GPT-4 generating accurate responses, all within a sleek Next.js frontend.",
    stack: [{ name: "Tailwind" }, { name: "NextJs" }, { name: "LangChain" }, { name: "Python" }, { name: "FastAPI" }, { name: "openAI" }],
    image: "/pdfquery.png",
    live: "https://youtu.be/mIp1bow7xeA",
    github: "",
  },
  {
    num: "03",
    name: "Stargram",
    category: "Fullstack",
    title: "project 3",
    description: "Stargram is a fullstack social media application designed specifically for space enthusiasts. It features a robust backend powered by Appwrite, an open-source platform that handles the heavy lifting typically required in conventional fullstack applications.",
    stack: [{ name: "Tailwind" }, { name: "Typescript" }, { name: "ReactJs" }, { name: "ReactQuery" }],
    image: "/stargram.png",
    live: "",
    github: "https://github.com/Jaiwin21/Stargram",
  },
  {
    num: "04",
    name: "Ripple",
    category: "Frontend",
    title: "project 4",
    description: "Ripple is a social media platform that mimics the likeness of Twitter. However, unlike Twitter, it aims to improve the quality of what is being posted as well as utilising AI to ensure the user is permitted to explore the platform. So far, the frontend is the only part that is complete.",
    stack: [{ name: "HTML 5" }, { name: "Tailwind" }, { name: "ReactJs" }, { name: "NodeJs" }],
    image: "/ripple.png",
    live: "",
    github: "https://github.com/Jaiwin21/Ripple",
  },
  // {
  //   num: "01",
  //   name: "Ripple",
  //   category: "Frontend",
  //   title: "project 1",
  //   description: "Ripple is a social media platform that mimics the likeness of Twitter. However, unlike Twitter, it aims to improve the quality of what is being posted as well as utilising AI to ensure the user is permitted to explore the platform. So far, the frontend is the only part that is complete.",
  //   stack: [{ name: "HTML 5" }, { name: "Tailwind" }, { name: "React" }, { name: "NodeJs" }],
  //   image: "/ripple.png",
  //   live: "",
  //   github: "https://github.com/Jaiwin21/Ripple",
  // }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
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
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize text-accent">{project.name}</h2>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              {/* New section for clearer links */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <Link 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accent-hover transition"
                  >
                    View on GitHub
                  </Link>
                )}

                {project.live && (
                  <Link 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accent-hover transition"
                  >
                    Live Demo
                  </Link>
                )}

                {project.youtube && (
                  <Link 
                    href={project.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accent-hover transition"
                  >
                    Watch on YouTube
                  </Link>
                )}
              </div>

            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
{projects.map((project, index) => (
  <SwiperSlide key={index} className="w-full">
    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-4 border-[#00ff99] rounded-lg">
            <Image 
              src={project.image}
              fill
              className="object-cover rounded-lg"
              alt={project.title}
            />
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}
              <WorkSliderButtons 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

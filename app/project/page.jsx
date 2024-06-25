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

const Projects = [
  {
    num:"01",
    category:"frontend",
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

const Project = () => {
  return (
    <div>projects page</div>
  )
}

export default Project
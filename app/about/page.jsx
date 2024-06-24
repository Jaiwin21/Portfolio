"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiTypescript, SiSpringboot } from "react-icons/si";

const about = {
  title: "About me",
  description: "I am recent software engineering graduate who is seeking to make real world impact through contributions in industry. I am an avid tech geek who keeps up to date in what is going on around the world which is tech related. May it be a new library, framework or AI model, I am keen to learn more about it and its usecase.",
  info: [
      {
      fieldName: "Name",
      fieldValue: "Jaiwin Prince" 
    },
    {
      fieldName: "Phone",
      fieldValue: "+44 7475567756" 
    },
    {
      fieldName: "Email",
      fieldValue: "Jaiwinprince21@hotmail.com" 
    },
    {
      fieldName: "Nationality",
      fieldValue: "British" 
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Tamil, French" 
    },
]

}


const experience = {
  icon: "/resume/badge.svg",
  title: "My experinece",
  description: "test",
  items: [
    
    {
      company: "Phipps Henson McAllister",
      Position: "Software Engineer",
      duration: "Sept 2023 - Jan 2024",
    },
    {
      company: "Phipps Henson McAllister",
      Position: "Aritifial Intelligence Intern",
      duration: "Jul 2023 - Sept 2023",
    },
    {
      company: "Triad",
      Position: "Software Engineer",
      duration: "Feb 2024",
    },
    {
      company: "Barclays",
      Position: "Software Engineer",
      duration: "Apr 2023",
    },
    {
      company: "The Access Group",
      Position: "Software Engineer",
      duration: "Mar 2023",
    }
  ]
};

const education = {
  icon: "/resume/cap.svg",
  title: "My education",
  description: "test",
  items: [
    
    {
      institution: "The University Of Northampton",
      degree: "BSc (Hons) Computing (Software Engineering)",
      duration: "2021 - 2024",
    },
    {
      institution: "The University Of Northampton",
      degree: "(HND) Computing (Software Engineering)",
      duration: "2019 - 2021",
    },
    {
      institution: "St. Pauls Catholic School",
      degree: "National Diploma",
      duration: "2017 - 2019",
    },
  ]
};

const skills = {
  title: "My skills",
  description: "I am constantly expanding my repertoire. Occupying myself in a project which utilises the technology, I wish to learn, has shown me the best results when learning new skills. Online courses are also great to master the basics.",
  skillList: [
    
    {
      icon: <SiSpringboot />,
      name: "Springboot",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiSpringboot />,
      name: "Springboot",
    },
    
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate = {{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" >
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            
          <TabsContent value="experience" className="w-full">

          </TabsContent>

          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default About
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

const About = () => {
  return (
    <div>about page</div>
  )
}

export default About
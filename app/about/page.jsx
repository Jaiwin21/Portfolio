"use client";

import { FaCss3, FaJs, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiSpringboot, SiAmazonaws } from "react-icons/si";
import { BsFillGearFill } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Extracted Data to a Separate File for Better Maintainability
const about = {
  title: "About me",
  description: "I am a recent software engineering graduate who is seeking to make a real-world impact through my contributions in the industry. I am an avid tech geek who indulges in any new technology that may arise in the field. Whether it be a new library, framework, or AI model, I am keen to learn more about it and its use case, in order to improve the quality of products I build.",
  info: [
    { fieldName: "Name", fieldValue: "Jaiwin Prince" },
    { fieldName: "Phone", fieldValue: "+44 7475567756" },
    { fieldName: "Nationality", fieldValue: "British" },
    { fieldName: "Email", fieldValue: "Jaiwinprince@outlook.com" },
    { fieldName: "Languages", fieldValue: "English Tamil French" },
    { fieldName: "Location", fieldValue: "England, UK" },
  ],
};

const experience = {
  title: "My experience",
  description: "I have had the pleasure of working under the tutelage of industry-leading professionals. Some notable experiences include: Phipps Henson McAllister - One of the largest Accounting firms in the midlands. Barclays - Renowned as one of the big 4 in the UK from the banking sector. Triad plc - Who work very closely with the government to deliver excellent services nationwide. The Access Group - One of the largest software firms currently operating in the UK. I also served as the student representative of all Year 1 & Year 2 software engineering students, after being elected near the beginning of my tenure, at The University Of Northampton.",
  items: [
    { company: "Phipps Henson McAllister", Position: "Software Engineer", duration: "Sept 2023 - Jan 2024" },
    { company: "Phipps Henson McAllister", Position: "Artificial Intelligence Intern", duration: "Jul 2023 - Sept 2023" },
    { company: "Triad", Position: "Software Engineer Workshop", duration: "Feb 2024" },
    { company: "Barclays", Position: "Software Engineer Workshop", duration: "Apr 2023" },
    { company: "The Access Group", Position: "Software Engineer Workshop", duration: "Mar 2023" },
    { company: "UON", Position: "Student Representative", duration: "Oct 2019 - July 2021" },
  ],
};

const education = {
  title: "My education",
  description: "I have always known I wanted to delve into tech from a pretty young age, going all the way back to GCSEs. As time went on, I began to focus on specializing in software engineering more and more.",
  items: [
    { institution: "The University Of Northampton", degree: "BSc (Hons) Computing (Software Engineering)", duration: "2021 - 2024" },
    { institution: "The University Of Northampton", degree: "(HND) Computing (Software Engineering)", duration: "2019 - 2021" },
    { institution: "St. Pauls Catholic School", degree: "National Diploma (IT & Applied Science)", duration: "2017 - 2019" },
  ],
};

const skills = {
  title: "My skills",
  description: "I am constantly expanding my repertoire. Occupying myself in a project, which utilizes the technology I wish to learn. This has shown me the best results when it comes to learning new skills. I am more of a practical and hands-on learner. Online courses are also great to master the basics.",
  skillList: [
    { icon: <SiSpringboot />, name: "Springboot" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "NodeJs" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "NextJs" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <FaAws />, name: "AWS" },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* About me content */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[1000px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Experience content */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills content */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;

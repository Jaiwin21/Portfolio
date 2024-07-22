"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+44 7475567756",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Jaiwinprince21@hotmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "England, UK",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 py-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent p-4">Let&apos;s work together</h3>
              <p className="text-white/60 p-4">
                Want to get in touch? Feel free to send an email! More than happy to answer any questions, discuss new opportunities, or arrange a call.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
              </div>
              <div className="px-4">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Reason for contacting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Reason for contacting</SelectLabel>
                      <SelectItem value="query">Query</SelectItem>
                      <SelectItem value="opportunity">Exciting opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-4">
                <Textarea className="h-[200px]" placeholder="Type your message here." />
              </div>
              <div className="px-4">
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

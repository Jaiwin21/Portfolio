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
import { Icon } from "@radix-ui/react-select";

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
  ]


const Contact = () => {
  return (
    <div>contacts page</div>
  )
}

export default Contact
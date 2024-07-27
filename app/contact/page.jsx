"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+44 7475567756',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'Jaiwinprince21@hotmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Location',
    description: 'England, UK',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      if (!response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Something went wrong');
        } else {
          throw new Error('Something went wrong');
        }
      }

      const result = await response.json();
      setStatus('Message sent successfully');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        reason: '',
        message: '',
      });
    } catch (error) {
      setStatus('Error sending message: ' + error.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 py-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent p-4">Let&apos;s work together</h3>
              <p className="text-white/60 p-4">
                Want to get in touch? Feel free to send an email! More than happy to answer any questions, discuss new opportunities, or arrange a call.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <Input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>
              <div className="px-4">
                <Select
                  name="reason"
                  value={formData.reason}
                  onChange={(value) => handleChange({ target: { name: 'reason', value } })}
                >
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
                <Textarea
                  className="h-[200px]"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here."
                />
              </div>
              <div className="px-4">
                <Button type="submit" size="md" className="max-w-40">
                  Send message
                </Button>
              </div>
              {status && <p className="text-center text-white mt-4">{status}</p>}
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

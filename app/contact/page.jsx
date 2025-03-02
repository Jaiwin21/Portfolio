"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

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
      const response = await fetch('https://zvi65iu8c0.execute-api.us-east-1.amazonaws.com/prod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus('Message sent successfully');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          reason: '',
          message: '',
        });
      } else {
        setStatus('Error sending message');
      }
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
                {/* Replacing the Select component with a simple Input field */}
                <Input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Reason for contacting (e.g., Query, Opportunity, Other)"
                />
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
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

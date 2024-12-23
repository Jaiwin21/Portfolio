"use client"; // Add this at the top

import dynamic from 'next/dynamic';
import { FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Using dynamic imports
const Photo = dynamic(() => import('@/components/ui/Photo'));
const Social = dynamic(() => import('@/components/ui/Social'));
const Stats = dynamic(() => import('@/components/ui/Stats'));

const Home = () => {
  const words = ['AI', 'ML', 'Data']; // Words to cycle through
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br /> <span className="text-accent">Jaiwin Prince</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Up and coming{' '}
              <span className="text-accent font-bold">AWS</span>{' '}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-accent font-bold"
              >
                {words[currentWord]}
              </motion.span>{' '}
              engineer who is seeking to leverage their knowledge with industry experience.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/project">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Projects</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

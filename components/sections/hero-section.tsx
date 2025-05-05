"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Flashlight Text Reveal Component
const FlashlightTextReveal: React.FC = () => {
  const words: string[] = [
    "Innovative", 
    "Powerful",
    "Secure",
    "Dynamic",
    "Reliable",
    "Cutting-edge"
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isMouseInContainer, setIsMouseInContainer] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Set up dimensions
  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    const handleMouseEnter = () => {
      setIsMouseInContainer(true);
    };
    
    const handleMouseLeave = () => {
      setIsMouseInContainer(false);
    };
    
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  // Calculate positions for 6 words in a more distributed pattern
  const positions = [
    { top: '20%', left: '25%' },
    { top: '30%', left: '5%' },
    { top: '55%', left: '30%' },
    { top: '65%', left: '10%' },
    { top: '80%', left: '45%' },
    { top: '40%', left: '35%' }
  ];
  
  return (
    <div 
      ref={containerRef}
      className="items-center justify-center w-full h-full rounded-lg relative overflow-hidden hidden md:flex"
      // Remove cursor: none to keep default cursor visible
    >
      
      {/* Hidden words */}
      {words.map((word, index) => {
        const pos = positions[index];
        
        return (
          <div
            key={index}
            className="absolute text-4xl font-bold"
            style={{
              top: pos.top,
              left: pos.left,
              color: 'transparent', // Text is invisible
              WebkitTextStroke: '1px rgba(255,255,255,0.1)', // Very subtle outline
            }}
          >
            {/* The word with a clipped region that becomes visible */}
            <div 
              className="relative dark:text-white text-black"
              style={{
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextStroke: '0px',
                // This mask creates the revealing effect based on mouse position
                WebkitMaskImage: `radial-gradient(circle 150px at 
                  ${mousePosition.x - parseFloat(pos.left) * dimensions.width / 150}px 
                  ${mousePosition.y - parseFloat(pos.top) * dimensions.height / 150}px, 
                  white 0%, transparent 100%)`,
                maskImage: `radial-gradient(circle 150px at 
                  ${mousePosition.x - parseFloat(pos.left) * dimensions.width / 150}px 
                  ${mousePosition.y - parseFloat(pos.top) * dimensions.height / 150}px, 
                  white 0%, transparent 100%)`,
              }}
            >
              {word}
            </div>
            
            {/* Text shadow for illuminated parts */}
            <div 
              className="absolute top-0 left-0 text-blue-400 opacity-70 blur-sm"
              style={{
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextStroke: '0px',
                WebkitMaskImage: `radial-gradient(circle 100px at 
                  ${mousePosition.x - parseFloat(pos.left) * dimensions.width / 100}px 
                  ${mousePosition.y - parseFloat(pos.top) * dimensions.height / 100}px, 
                  white 0%, transparent 100%)`,
                maskImage: `radial-gradient(circle 100px at 
                  ${mousePosition.x - parseFloat(pos.left) * dimensions.width / 100}px 
                  ${mousePosition.y - parseFloat(pos.top) * dimensions.height / 100}px, 
                  white 0%, transparent 100%)`,
              }}
            >
              {word}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function HeroSection(): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background - Light/Dark Mode Responsive */}
      <div className="absolute inset-0 bg-[#eee] dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-black/80 z-0" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium"
            >
              Welcome to the future of technology
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-gray-800 dark:text-white"
            >
              Building the 
              <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400">
              Future
              </span> of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400">
              Digital
              </span>{" "}
              Interaction
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-muted-foreground mb-8 max-w-md"
            >
              We build smart, user-centered platforms that redefine how people connect, buy, and sell online. Empowering the Next era of Smart Platforms for a Decentralized Future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button> */}
            </motion.div>
          </motion.div>

          {/* Flashlight Text Reveal Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block order-1 lg:order-2 h-[400px] lg:h-[500px] w-full relative"
          >
            {loaded && <FlashlightTextReveal />}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <Link href="#about" className="text-sm text-gray-600 dark:text-muted-foreground">
            Scroll to explore
          </Link>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="h-5 w-5 mt-2 text-gray-600 dark:text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
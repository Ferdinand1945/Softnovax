"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Code, Cloud, Zap, BarChart4 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Clients Worldwide" },
  { value: "50+", label: "Team Members" },
  { value: "99%", label: "Client Satisfaction" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const technologies = [
  {
    name: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    icon: Code,
  },
  {
    name: "Cloud Computing",
    description: "Secure and scalable cloud infrastructure and services",
    icon: Cloud,
  },
  {
    name: "AI & Machine Learning",
    description: "Intelligent applications to automate and optimize operations",
    icon: Zap,
  },
  {
    name: "Data Analytics",
    description: "Transforming data into actionable business insights",
    icon: BarChart4,
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <section id="about" className="py-20 md:py-28 relative bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0,
              },
            },
          }}
          className="max-w-screen-md mx-auto text-center mb-16"
        >
          <motion.div variants={fadeIn} className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            About Us
          </motion.div>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
            Pioneering the Future of Software Solutions
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
            We are a team of passionate technologists committed to creating innovative solutions 
            that empower businesses to thrive in the digital age.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Company Story */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0,
                },
              },
            }}
          >
            <motion.h3 variants={fadeIn} className="text-2xl font-semibold mb-4">
              Our Story
            </motion.h3>
            <motion.p variants={fadeIn} className="text-muted-foreground mb-6">
              Founded in 2023, SoftNovaX Solutions was born out of a vision to bridge the gap between 
              cutting-edge technology and practical business applications. 
            </motion.p>
            <motion.p variants={fadeIn} className="text-muted-foreground mb-8">
              Our mission is to democratize access to advanced technology solutions, making them accessible, 
              intuitive, and impactful for businesses of all sizes. We believe that the right technology 
              can transform not just operations, but entire industries.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Company Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our team collaborating"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-24"
        >
          <motion.h3 variants={fadeIn} className="text-2xl font-semibold mb-8 text-center">
            Our Expertise
          </motion.h3>
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <tech.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-medium mb-2">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
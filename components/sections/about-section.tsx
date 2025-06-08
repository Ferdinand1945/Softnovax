"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Code, Cloud, Zap, BarChart4, Linkedin } from "lucide-react";
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
  // Set a very low threshold so content appears immediately as the section comes into view
  // rootMargin makes it trigger even before the section is fully in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: '200px 0px', // This will trigger 200px before the element enters the viewport
  });

  return (
    <section id="about" className="py-20 md:py-28 relative bg-background" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-screen-md mx-auto text-center mb-24"
        >
          <motion.div variants={fadeIn} className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            About Us
          </motion.div>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
            Pioneering the Future of Software Solutions
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
            We are a a tech company focused on creating innovative solutions that transform how people and businesses engage with digital commerce.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1">          
           {/* Team Members */}
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CTO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="relative w-52 h-52 mx-auto mb-4 rounded-full overflow-hidden shadow-xl group cursor-pointer">
                  <Image
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2"
                    alt="CTO"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* LinkedIn Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Linkedin className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground">CTO</h4>
              </motion.div>

              {/* CEO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="relative w-52 h-52 mx-auto mb-4 rounded-full overflow-hidden shadow-xl group cursor-pointer">
                  <Image
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2"
                    alt="CEO"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* LinkedIn Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Linkedin className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground">CEO</h4>
              </motion.div>

              {/* Lead Developer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="relative w-52 h-52 mx-auto mb-4 rounded-full overflow-hidden shadow-xl group cursor-pointer">
                  <Image
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2"
                    alt="Lead Developer"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* LinkedIn Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Linkedin className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Lead Developer</h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 mt-32">
            {/* Company Story */}
            <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="max-w-screen-md mx-auto text-center"
          >
            <motion.h3 variants={fadeIn} className="text-2xl text-center font-semibold mb-4">
              Our Story
            </motion.h3>
            <motion.p variants={fadeIn} className="text-muted-foreground text-center text-xl mb-6">
              Founded in 2024, SoftNovaX Solutions was born out of a vision to bridge the gap between 
              cutting-edge technology and practical business applications. 
            </motion.p>
            <motion.p variants={fadeIn} className="text-muted-foreground text-center text-xl mb-8">
              Our mission is to build an ecosystem where artificial intelligence, blockchain, and cutting-edge technology come together 
              to deliver accessible, efficient, and sustainable products.
              We believe that the right technology 
              can transform not just operations, but entire industries.
            </motion.p>

            {/* Stats */}
            {/* <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
</div>
        {/* Technologies */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
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
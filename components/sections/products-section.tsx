"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Quatum AI",
    tagline: "Next-Generation Artificial Intelligence",
    description:
      "A powerful AI platform that helps businesses automate complex tasks, gain insights from data, and build intelligent applications. Quantum AI uses cutting-edge machine learning algorithms to deliver accurate predictions and meaningful results.",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Custom ML Models",
    ],
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    name: "CloudScape",
    tagline: "Enterprise Cloud Infrastructure",
    description:
      "A comprehensive cloud platform that provides scalable infrastructure, storage, and computing resources for businesses of all sizes. CloudScape offers a secure, reliable, and cost-effective solution for your cloud computing needs.",
    features: [
      "Global CDN",
      "Auto-scaling Resources",
      "Serverless Computing",
      "Multi-region Deployment",
    ],
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    name: "DataForge",
    tagline: "Advanced Data Analytics",
    description:
      "A powerful data analytics platform that transforms raw data into actionable insights. DataForge helps businesses make data-driven decisions with real-time analytics, customizable dashboards, and comprehensive reporting tools.",
    features: [
      "Real-time Analytics",
      "Custom Dashboards",
      "Data Visualization",
      "Predictive Modeling",
    ],
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: 4,
    name: "SecureShield",
    tagline: "Enterprise Security Platform",
    description:
      "A comprehensive security solution that protects your business from cyber threats and vulnerabilities. SecureShield offers advanced threat detection, identity management, and data encryption to keep your sensitive information safe.",
    features: [
      "Threat Detection",
      "Identity Verification",
      "Data Encryption",
      "Compliance Management",
    ],
    image: "https://images.pexels.com/photos/60504/security-protection-privacy-policy-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-red-500 to-pink-600",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselRef, inView] = useInView({
    triggerOnce: true, // Changed to true so animation only happens once
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px", // Added margin to trigger earlier
  });
  const [headerRef, headerInView] = useInView({
    triggerOnce: true, // Changed to true so animation only happens once
    threshold: 0.1,
  });

  const activeProduct = products[activeIndex];
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="products" className="pt-20 md:pt-28 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial="hidden"
          whileInView="visible" // Changed from animate to whileInView
          viewport={{ once: true }} // Ensures the animation only happens once
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-screen-md mx-auto text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            Our Products
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            Cutting-Edge Solutions for Tomorrow's Challenges
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
            Discover our innovative product lineup designed to transform how your business operates
            and competes in the digital age.
          </motion.p>
        </motion.div>

        {/* Removed the dependency on inView for this section's visibility */}
        <motion.div
          ref={carouselRef}
          initial="visible" // Always start visible
          animate="visible" // Always stay visible
          variants={{
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
              },
            },
          }}
          className="relative mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Product Image */}
              <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.color} opacity-30 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-4 py-1 mb-3 text-sm rounded-full bg-white/20 backdrop-blur-sm text-white font-medium">
                    {activeProduct.tagline}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {activeProduct.name}
                  </h3>
                </div>
              </div>

              {/* Product Details */}
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-2">{activeProduct.name}</h3>
                <p className="text-xl text-muted-foreground mb-6">{activeProduct.tagline}</p>
                <p className="text-muted-foreground mb-8">
                  {activeProduct.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {activeProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${activeProduct.color}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <Button>Learn More</Button>
                  <Button variant="outline" className="group">
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    idx === activeIndex
                      ? "bg-primary scale-125"
                      : "bg-muted hover:bg-primary/50"
                  )}
                  aria-label={`Go to product ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Product Cards - Changed to always be visible */}
        <motion.div
          initial="hidden"
          whileInView="visible" // Use whileInView instead of animate
          viewport={{ once: true }} // Ensures animation only happens once
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              className={cn(
                "group cursor-pointer",
                index === activeIndex && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
              onClick={() => setActiveIndex(index)}
            >
              <Card className="h-full overflow-hidden border-border/40 transition-all duration-300 hover:border-primary/50">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-40 mix-blend-overlay`} />
                </div>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{product.tagline}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
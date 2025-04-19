"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Zap, 
  Shield, 
  RefreshCw, 
  Globe, 
  Smartphone, 
  PenTool,
  Server,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Our optimized software delivers exceptional speed and responsiveness for seamless user experiences."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Advanced encryption and security protocols to protect your sensitive data and systems."
  },
  {
    icon: RefreshCw,
    title: "Seamless Integration",
    description: "Easily integrate with your existing systems and third-party applications for streamlined workflows."
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description: "Scale your solutions globally with our distributed infrastructure and multi-region support."
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Compatibility",
    description: "Access your applications from any device with consistent performance and interfaces."
  },
  {
    icon: PenTool,
    title: "Customizable Solutions",
    description: "Tailor our solutions to your specific requirements with powerful customization options."
  },
  {
    icon: Server,
    title: "Cloud-Native Architecture",
    description: "Built for the cloud from the ground up, leveraging the latest in containerization and microservices."
  },
  {
    icon: Layers,
    title: "Real-Time Analytics",
    description: "Gain valuable insights with comprehensive analytics and reporting capabilities."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 relative bg-secondary/20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
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
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-screen-md mx-auto text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            Why Choose Us
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            Features that Set Us Apart
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
            Our cutting-edge platform delivers exceptional capabilities that help your business stay 
            ahead in today's rapidly evolving technological landscape.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={cn(
                "relative p-6 rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm",
                "hover:bg-background hover:border-border transition-all duration-300",
                "group cursor-default"
              )}
            >
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-lg bg-primary/80 flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
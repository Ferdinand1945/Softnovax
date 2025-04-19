"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "SoftNovaX's AI solution has completely transformed how we analyze customer data. We've seen a 40% increase in prediction accuracy and a dramatic improvement in our decision-making process.",
    author: "Sarah Johnson",
    position: "CTO, Global Retail Inc.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "Global Retail Inc.",
  },
  {
    id: 2,
    quote: "Implementing CloudScape across our organization has drastically reduced our infrastructure costs while improving performance. Their team's expertise and support during migration was exceptional.",
    author: "Michael Chen",
    position: "Head of IT, FinTech Solutions",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "FinTech Solutions",
  },
  {
    id: 3,
    quote: "DataForge's analytics platform gave us insights we never knew existed in our data. The real-time dashboards have become an essential tool for our entire management team.",
    author: "Lisa Rodriguez",
    position: "Data Science Director, HealthPlus",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "HealthPlus",
  },
  {
    id: 4,
    quote: "Security is paramount for our business, and SecureShield has been a game-changer. Their advanced threat detection has already prevented several potential breaches that our previous solution missed.",
    author: "David Williams",
    position: "CISO, BankSecure",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "BankSecure",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-background to-secondary/20">
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
          <motion.div variants={fadeIn} className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            Testimonials
          </motion.div>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from some of our satisfied clients who have transformed their businesses with our solutions.
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
          className="relative"
        >
          {/* Featured Testimonial */}
          <div className="mb-12">
            <Card className="bg-card/60 backdrop-blur-sm border-border/40">
              <CardContent className="pt-6 px-6 md:p-10">
                <QuoteIcon className="h-12 w-12 text-primary/20 mb-6" />
                <motion.p
                  key={testimonials[activeIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl font-medium leading-relaxed mb-8"
                >
                  "{testimonials[activeIndex].quote}"
                </motion.p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-lg">{testimonials[activeIndex].author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  idx === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-primary/50"
                )}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Testimonial Grid - Mobile Hidden, Desktop Visible */}
          <div className="hidden lg:grid grid-cols-4 gap-6 mt-12">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                variants={fadeIn}
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  idx === activeIndex ? "opacity-100 scale-105" : "opacity-70 hover:opacity-100"
                )}
                onClick={() => setActiveIndex(idx)}
              >
                <Card className={cn(
                  "bg-card/60 backdrop-blur-sm border-border/40 h-full transition-all",
                  idx === activeIndex && "ring-2 ring-primary/50"
                )}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{testimonial.author}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-sm line-clamp-4">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
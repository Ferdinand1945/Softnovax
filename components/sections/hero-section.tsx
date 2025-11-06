"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection(): JSX.Element {
  const { t } = useI18n();
  return (
    <section id="home" className="relative pt-24 pb-16">
      <div className="absolute inset-0 -z-10 brand-gradient" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-border bg-card px-3 py-1 text-xs md:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{t("hero.kicker")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-2 accent-underline">
              {t("hero.title.line1")}
            </h1>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500">
              {t("hero.title.line2")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                {t("hero.primary")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#products">{t("hero.secondary")}</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:col-span-5">
            <div className="relative rounded-xl border border-border/60 bg-card/80 p-6 shadow-lg">
              <pre className="text-xs md:text-sm leading-6 text-muted-foreground">
{`const pipeline = createPipeline({
  ux: "world-class",
  qa: "zero-regression",
  ci: "ship-daily",
});

launch(pipeline).then(() => log("Hello, 2025."));`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
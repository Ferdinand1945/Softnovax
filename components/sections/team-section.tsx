"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Users, TrendingUp } from "lucide-react";
import { useI18n } from "@/components/i18n-provider";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function TeamSection() {
  const { t } = useI18n();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-20 md:py-28 relative">
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
                staggerChildren: 0.15,
              },
            },
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="inline-block mb-4 px-4 py-1 rounded-full border border-border text-muted-foreground text-sm">
            {t("team.kicker")}
          </motion.div>
          
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {t("team.title")}
          </motion.h2>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            {t("team.subtitle")}
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="p-6 rounded-xl border border-border/60 bg-card/50">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t("team.value1.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("team.value1.desc")}</p>
            </div>
            <div className="p-6 rounded-xl border border-border/60 bg-card/50">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t("team.value2.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("team.value2.desc")}</p>
            </div>
            <div className="p-6 rounded-xl border border-border/60 bg-card/50">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t("team.value3.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("team.value3.desc")}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="text-center">
            <p className="text-base md:text-lg text-muted-foreground italic">
              {t("team.tagline")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


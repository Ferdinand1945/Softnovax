"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/components/i18n-provider";

const products = [
  {
    id: 1,
    name: "AI Platforms",
    tagline: "Applied intelligence for real products",
    description:
      "We build pragmatic AI features: retrieval, assistants, analytics, and copilots integrated into your product stack.",
    features: [
      "RAG & eval pipelines",
      "Embeddings & vector DB",
      "Agentic workflows",
      "Safety & observability",
    ],
    image: "",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 2,
    name: "Cloud & Platforms",
    tagline: "Scale reliably, ship faster",
    description:
      "Foundations for scale: infra-as-code, CI/CD, observability, and cost-aware multi-region deployment.",
    features: [
      "IaC & policy",
      "CI/CD & previews",
      "Observability",
      "Multi-region",
    ],
    image: "",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 3,
    name: "Data & Analytics",
    tagline: "From raw to real insight",
    description:
      "Event pipelines, warehouses, and clear dashboards so teams can decide quickly with confidence.",
    features: [
      "ELT pipelines",
      "dbt modeling",
      "BI & dashboards",
      "Privacy & governance",
    ],
    image: "",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 4,
    name: "Security & Compliance",
    tagline: "Ship with trust built-in",
    description:
      "Identity, permissions, encryption, and compliance baked into the product lifecycle.",
    features: [
      "Auth & SSO",
      "RBAC & audit",
      "Data encryption",
      "Compliance tooling",
    ],
    image: "",
    color: "from-cyan-500 to-teal-500",
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
  const { t } = useI18n();

  return (
    <section id="products" className="pt-20 md:pt-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="max-w-screen-md mx-auto text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1 rounded-full border border-border text-muted-foreground text-sm">
            {t("products.kicker")}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            {t("products.title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
            {t("products.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Card className="group h-full overflow-hidden border-border/60 bg-card transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{product.tagline}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.color}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
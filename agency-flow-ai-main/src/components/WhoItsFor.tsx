import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const types = [
  "Marketing & SMMA Agencies",
  "Digital Agencies",
  "Lead Generation Agencies",
  "Service-Based Businesses",
  "Startups & Scale-ups",
  "Agency Owners Hiring Manually",
];

const WhoItsFor = () => (
  <section className="py-28 md:py-36 bg-card">
    <div className="container">
      <FadeIn>
        <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary mb-4 text-center">
          Who It's For
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center max-w-2xl mx-auto mb-20 leading-tight">
          Built for agencies ready to{" "}
          <span className="text-gradient">stop doing things manually.</span>
        </h2>
      </FadeIn>

      <div className="max-w-lg mx-auto grid grid-cols-1 gap-3">
        {types.map((t, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <motion.div
              whileHover={{ x: 8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-4 bg-background border border-border rounded-xl px-6 py-5 cursor-default hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-medium">{t}</span>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsFor;

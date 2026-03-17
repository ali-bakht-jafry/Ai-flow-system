import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Free Audit Call", desc: "30-minute deep dive into your business to find automation opportunities." },
  { num: "02", title: "Custom System Design", desc: "Tailored architecture — no templates, no cookie-cutter solutions." },
  { num: "03", title: "Build & Deploy", desc: "We build end-to-end. No technical knowledge needed from your side." },
  { num: "04", title: "Handover & Support", desc: "Full handoff with documentation and ongoing support." },
];

const HowItWorks = () => (
  <section id="process" className="py-28 md:py-36">
    <div className="container">
      <FadeIn>
        <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary mb-4 text-center">
          Our Process
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center max-w-2xl mx-auto mb-20 leading-tight">
          From audit to automation{" "}
          <span className="text-gradient">in days.</span>
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span className="inline-block text-4xl font-display font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-3">
                {s.num}
              </span>
              <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, PhoneMissed, Users, Unplug, DollarSign } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Leads go cold", desc: "Before you even follow up" },
  { icon: Clock, title: "Hours lost to repetitive tasks", desc: "Manual work slowing you down" },
  { icon: PhoneMissed, title: "Missed calls and messages", desc: "Opportunities slipping away" },
  { icon: Users, title: "Scaling means hiring", desc: "More people, more overhead" },
  { icon: Unplug, title: "Disconnected tools", desc: "Gaps in your workflow" },
  { icon: DollarSign, title: "Revenue left on the table", desc: "Slow processes cost money" },
];

const Problems = () => (
  <section className="py-28 md:py-36">
    <div className="container">
      <FadeIn>
        <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary mb-4 text-center">
          The Problem
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center max-w-2xl mx-auto mb-20 leading-tight">
          Agencies waste hours every week on work{" "}
          <span className="text-gradient">AI can handle.</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {problems.map((problem, i) => {
          const Icon = problem.icon;
          return (
            <FadeIn key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="font-display font-bold text-lg text-foreground mb-1">{problem.title}</p>
                <p className="text-sm text-muted-foreground">{problem.desc}</p>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>
);

export default Problems;

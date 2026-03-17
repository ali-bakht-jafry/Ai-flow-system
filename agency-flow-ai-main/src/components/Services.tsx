import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { Bot, Mic, Send, Workflow, MessageSquare, Database } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Agents & Assistants", desc: "Custom AI that handles conversations, qualifies leads, and automates client communication 24/7." },
  { icon: Mic, title: "Voice AI & Automated Receptionists", desc: "Never miss a call. AI picks up, qualifies, and books — instantly." },
  { icon: Send, title: "Automated Lead Outreach", desc: "Multi-channel outreach that runs on autopilot across email, SMS, and social." },
  { icon: Workflow, title: "Workflow & Operations Automation", desc: "End-to-end automations that replace manual data entry and admin work." },
  { icon: MessageSquare, title: "Multi-Channel Communication", desc: "Unified inbox powered by AI across WhatsApp, email, SMS, and web chat." },
  { icon: Database, title: "AI-Powered Internal Systems", desc: "Internal dashboards, CRM automations, and reporting that run themselves." },
];

const Services = () => (
  <section id="services" className="py-28 md:py-36 section-dark relative overflow-hidden">
    {/* Decorative circles */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-white/5"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full border border-white/5"
    />

    <div className="container relative z-10">
      <FadeIn>
        <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary mb-4 text-center">
          What We Build
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center max-w-2xl mx-auto mb-20 leading-tight text-[hsl(var(--nav-foreground))]">
          End-to-end AI systems{" "}
          <span className="text-primary">built for agencies.</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-7 h-full hover:border-primary/40 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-[hsl(var(--nav-foreground))]">{s.title}</h3>
              <p className="text-sm text-[hsl(var(--nav-foreground))]/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

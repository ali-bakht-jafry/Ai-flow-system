import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const CTA = () => (
  <section id="contact" className="py-28 md:py-36">
    <div className="container">
      <FadeIn>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative section-dark rounded-3xl p-8 sm:p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-white/5"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 blur-[120px] rounded-full"
          />

          <div className="relative z-10">
            <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary mb-6">
              Get Started
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 text-[hsl(var(--nav-foreground))]">
              Ready to <span className="text-primary">automate</span> your agency?
            </h2>
            <p className="text-[hsl(var(--nav-foreground))]/50 mb-10 max-w-md mx-auto">
              Book a free 30-minute audit and see exactly what can be automated in your business.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:team@aiflowsystem.co?subject=Book%20a%20Free%20Audit"
              className="inline-block font-semibold bg-primary text-primary-foreground px-10 py-4 rounded-full hover:brightness-110 hover:shadow-[0_0_30px_-5px_hsl(152,60%,36%,0.5)] transition-all duration-300"
            >
              Book a Free Audit →
            </motion.a>
            <p className="text-xs text-[hsl(var(--nav-foreground))]/30 mt-8 font-mono">
              team@aiflowsystem.co
            </p>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  </section>
);

export default CTA;

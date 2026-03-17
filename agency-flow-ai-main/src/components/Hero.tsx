import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-[100vh] flex items-center justify-center pt-16 section-dark overflow-hidden">
    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Floating accent shapes */}
    <motion.div
      animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full border border-primary/20"
    />
    <motion.div
      animate={{ y: [15, -15, 15], rotate: [0, -3, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[25%] left-[8%] w-20 h-20 bg-primary/10 rounded-2xl"
    />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
    />

    <div className="container relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-mono font-medium tracking-[0.25em] uppercase text-primary border border-primary/30 rounded-full px-5 py-2 mb-10">
            AI Automation for Agencies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tight leading-[1] mb-8 text-[hsl(var(--nav-foreground))]"
        >
          Your Agency Runs.
          <br />
          <span className="text-primary">AI Does the Work.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-[hsl(var(--nav-foreground))]/50 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          We build AI agents, voice automation, and end-to-end workflows that handle sales, support, and operations automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:team@aiflowsystem.co?subject=Book%20a%20Free%20Audit"
            className="w-full sm:w-auto text-center font-semibold bg-primary text-primary-foreground px-8 py-4 rounded-full hover:brightness-110 hover:shadow-[0_0_30px_-5px_hsl(152,60%,36%,0.5)] transition-all duration-300"
          >
            Book a Free Audit
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto text-center font-semibold border border-[hsl(var(--nav-foreground))]/20 text-[hsl(var(--nav-foreground))] px-8 py-4 rounded-full hover:bg-[hsl(var(--nav-foreground))]/5 transition-all duration-300"
          >
            See What We Build ↓
          </a>
        </motion.div>
      </div>
    </div>

    {/* Bottom fade to off-white */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default Hero;

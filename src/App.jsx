import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-indigo-500/[0.15]",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className ?? ""}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function App() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-fuchsia-500/[0.07] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[18%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[70%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] bottom-[8%] md:left-[10%] md:bottom-[12%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] top-[10%] md:right-[18%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] top-[5%] md:left-[22%]"
        />
      </div>

      <div className="relative z-10 mx-auto px-4 py-24 text-center sm:px-6 md:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-sm text-white/60 ring-1 ring-white/10 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>
              Track across DHL, FedEx, UPS &amp; Chronopost
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              Know where your parcel is,
            </span>
            <br />
            <span className="text-gradient animate-gradient-x">
              every step of the way.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed tracking-wide text-white/40 sm:text-lg md:text-xl"
          >
            Pick your courier, drop in the AWB number, and jump straight to the
            live tracking page. Simple, fast, and trusted worldwide.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/dhl"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/30 transition-all duration-300 hover:scale-[1.04] hover:shadow-violet-500/50"
            >
              Track a parcel
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <a
              href="#live-info"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-8 py-3.5 text-sm font-semibold text-white/80 ring-1 ring-white/15 backdrop-blur transition-all duration-300 hover:bg-white/[0.1] hover:text-white"
            >
              Live world info
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              { value: "4+", label: "Couriers" },
              { value: "120+", label: "Countries" },
              { value: "24/7", label: "Tracking" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-4 py-4 text-center sm:py-5"
              >
                <p className="text-gradient text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium tracking-wide text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060c] via-transparent to-[#06060c]/40" />
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,0.25)_100%)]" />

      {/* animated gradient blobs */}
      <motion.div
        className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-cyan-400/25 to-teal-400/25 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 30, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[20%] bottom-[-15%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-emerald-400/20 to-teal-500/20 blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0], rotate: [0, 10, -5, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}


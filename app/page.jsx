"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white relative overflow-hidden">
      {/* Neon arka plan ışıltısı */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-800/30 to-black blur-3xl"></div>

      {/* Neon yazı */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_25px_rgba(0,255,255,0.6)] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Sherlock OİT
      </motion.h1>

      {/* Alt açıklama */}
      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-300 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Gizemli güç. Sessiz kaos.
      </motion.p>

      {/* Giriş butonu */}
      <motion.a
        href="#"
        className="mt-12 px-10 py-4 text-2xl font-semibold border-4 border-cyan-400 rounded-full text-cyan-400 hover:text-black hover:bg-cyan-400 transition-all duration-500 shadow-[0_0_30px_#00ffff] z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Giriş Yap
      </motion.a>

      {/* Hafif arka plan parıltısı */}
      <motion.div
        className="absolute bottom-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

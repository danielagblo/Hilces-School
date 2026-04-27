"use client";

import { motion } from "framer-motion";
import { Rocket, Heart, Star, Music, Pencil, Smile, Paperclip } from "lucide-react";

export default function SchoolDoodles({ className = "text-white opacity-20" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-[10%]">
        <Rocket size={80} strokeWidth={1} />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.1, 1], rotate: [-10, 0, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-[20%]">
        <Heart size={60} strokeWidth={1.5} />
      </motion.div>
      <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute bottom-20 left-[15%]">
        <Star size={70} strokeWidth={1.2} />
      </motion.div>
      <motion.div animate={{ y: [0, 15, 0], rotate: [15, 0, 15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-40 left-[40%]">
        <Music size={50} strokeWidth={1.5} />
      </motion.div>
      <motion.div animate={{ x: [0, 10, 0], y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 right-[15%]">
        <Pencil size={90} strokeWidth={1} className="-rotate-12" />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-[5%]">
        <Smile size={100} strokeWidth={1} />
      </motion.div>
      <motion.div animate={{ rotate: [15, 30, 15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-[5%]">
        <Paperclip size={70} strokeWidth={1.2} />
      </motion.div>
    </div>
  );
}

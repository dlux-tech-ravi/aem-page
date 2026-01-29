import React from "react";
import { motion } from "framer-motion";

const SuccessToaster = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/95 text-gray-800 rounded-2xl p-10 text-center shadow-2xl border border-[#842DFF]/30 max-w-md mx-auto"
    >
      {/* ✅ Animated Tick */}
      <motion.svg
        width="70"
        height="70"
        viewBox="0 0 24 24"
        className="mx-auto mb-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M7 13.5L10.5 17L17 10.5"
          stroke="#8B5CF6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        />
      </motion.svg>

      {/* ✅ Text Section */}
      <motion.h3
        className="text-3xl font-poppins font-semibold text-[#842DFF] mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Thank You!
      </motion.h3>

      <motion.p
        className="text-gray-600 text-lg leading-relaxed font-rethink"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Your message has been successfully sent. Our team will get back to you soon!
      </motion.p>
    </motion.div>
  );
};

export default SuccessToaster;

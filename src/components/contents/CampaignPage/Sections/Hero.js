import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="bg-primary p-6 flex flex-col md:flex-col lg:flex-row items-center">
      {/* Left visual */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-[626px] flex justify-center items-center mb-8"
      >
        {/* Image */}
        <img
          src="https://images.ctfassets.net/xpxpo6b6k2je/2Ef3Cc6KVHyYhJYLMDzhJb/065134827240924ccff25811436d6539/cyberpunk-woman-warrior-portrait_1__1_.png"
          alt="Futuristic profile"
          className="rounded-2xl w-[320px] md:w-[420px] object-cover"
        />

        {/* Overlay */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 rounded-2xl md:left-[210px] top-[90px]"
        >
          <img
            src="https://images.ctfassets.net/xpxpo6b6k2je/2Qqsbbi1WbO65SXSykbNIU/91c07a62914a78b0ae12048f0a6b0e3d/Untitled_design__7_.png"
            alt="Futuristic overlay"
            className="rounded-2xl relative left-[35%] w-[70%] md:left-0 md:w-[390px] object-cover"
          />
        </motion.div>

        {/* Floating Box */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-2 md:bottom-8 left-2 md:left-36 w-[180px] md:w-[270px] h-[50px] md:h-[65px] bg-[#632EA3B0] border border-[#7300FF] rounded-[15px] px-3 flex items-center justify-between shadow-md backdrop-blur-lg"
        >
          <div className="flex flex-col">
            <span className="text-white font-poppins font-semibold text-sm md:text-lg">
              10K+
            </span>
            <span className="text-white font-light text-[10px] md:text-sm">
              People joined
            </span>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/newsletters/martech-basket-6948514756882247680"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 md:w-10 md:h-10 rounded-full bg-gray-300 border-2 border-[#632EA3B0] -ml-2 inline-flex items-center justify-center"
            >
              <img
                src="https://images.ctfassets.net/xpxpo6b6k2je/2yxh2JqREqMIoD3CDY78np/866528457f682d3e1edd97c6d14e673e/Martech_basket_newsletter.png"
                alt="AI and Martech Community"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Martech basket
              </span>
            </a>

            <a
              href="https://www.linkedin.com/groups/15366010"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 md:w-10 md:h-10 rounded-full bg-gray-300 border-2 border-[#632EA3B0] -ml-2 inline-flex items-center justify-center"
            >
              <img
                src="https://images.ctfassets.net/xpxpo6b6k2je/xInjcOBc94zg01Mff011v/ffa274fef226874fd1ed3f3e0b7aa5c3/Martech_and_AI_Innovation_center.png"
                alt="AI and Martech Community"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Ai and Martech Community
              </span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-5 h-5 md:w-5 md:h-5 rounded-full bg-gray-300 border-2 border-[#632EA3B0] flex items-center justify-center -ml-2"
            >
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Next
              </span>
              <FiArrowRight className="text-black text-sm md:text-base" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-full lg:w-1/2 flex flex-col justify-center items-start gap-6 md:gap-8 font-rethink font-semibold"
      >
        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight md:leading-none bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text"
        >
          No Budget. Big Brains.
          <br />
          <span className="bg-gradient-to-r from-[#842DFF] via-[#842DFF] to-gray-500 text-transparent bg-clip-text">
            Let’s Co-Create.
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[20px] md:text-[28px] lg:text-[32px] font-poppins text-[#D3D3D3] font-normal max-w-full lg:w-[95%] leading-[1.2]"
        >
          Join CMOs, CFOs, CIOs & CEOs co-creating the future of{" "}
          <span className="font-bold text-white">Martech, Adtech & AI</span>{" "}
          with DLUX — no contracts, no spend, just your time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row justify-center w-full items-center mt-4 md:mt-8 font-poppins gap-2 lg:gap-32"
        >
          <button
            onClick={() => {
              const contactSection = document.querySelector(
                '[data-id="contact"]'
              );
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#7300FF] hover:bg-[#8033e5] text-white font-semibold px-6 py-3 w-[181px] h-[54px] rounded-[50px] transition"
          >
            Drop Your Idea
          </button>
          {/* <button className="border border-[#7300FF] text-white px-6 py-3 w-[181px] h-[54px] rounded-[50px] transition hover:bg-[#222]">
            Watch Demo
          </button> */}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full text-white flex gap-6 md:gap-8 justify-center items-center md:justify-start text-sm md:text-base font-medium flex-wrap"
        >
          <div className="flex flex-row items-center gap-[5px]">
            <span className="font-montserrat font-normal text-white text-[12px] md:text-[24px] leading-[100%] tracking-[0%] text-right">
              100+
            </span>
            <span className="font-rethink font-normal text-[#868686] text-[7px] md:text-[14px] leading-[100%] tracking-[0.25em] uppercase">
              Certified Experts
            </span>
          </div>
          {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.07118 0.5V5.71798M7.07118 8.42873V13.6467M13.6467 7.07118L8.42873 7.07118M5.71798 7.07118L0.5 7.07118"
                stroke="white"
                strokeLinecap="round"
              />
            </svg>{" "}
          </div> */}
          <div className="flex flex-row items-center gap-[5px]">
            <span className="campaign-span font-montserrat text-white font-normal text-[12px] md:text-[24px] leading-[100%] tracking-[0%] text-right">
              30+
            </span>
            <span className="font-rethink font-normal text-[#868686] text-[7px] md:text-[14px] leading-[100%] tracking-[0.25em] uppercase">
              Global Partners
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

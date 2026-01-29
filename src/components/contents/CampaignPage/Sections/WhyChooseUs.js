import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SPACE_ID = "xpxpo6b6k2je";
const ACCESS_TOKEN = "GvVx2yaX570LDQ1VLMs_hvW27-DDHW-x_5KToOLNUH4";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  const [content, setContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const query = `
          query {
            coCreationCampaignCollection {
              items {
                whyChooseUsContent {
                  title
                  description
                  url
                }
                whyChooseUsCardsCollection {
                  items {
                    title
                    description
                    url
                  }
                }
              }
            }
          }
        `;
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await res.json();
        const item = data?.data?.coCreationCampaignCollection?.items?.[0];
        setContent(item);
      } catch (err) {
        console.error("Error fetching Contentful data:", err);
      }
    };
    fetchContent();
  }, []);

  if (!content) return <div className="text-white p-10">Loading...</div>;

  const { whyChooseUsContent, whyChooseUsCardsCollection } = content;

  return (
    <section className="bg-primary p-6 flex items-center overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-10">
        {/* Left: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-start md:justify-center items-center"
        >
          {/* Violet glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[350px] md:w-[480px] lg:w-[200px] h-[280px] sm:h-[400px] md:h-[520px] rounded-full opacity-70"
            style={{
              background: "linear-gradient(180deg, #632EA3 0%, #842DFF 100%)",
              filter: "blur(120px)",
            }}
          ></div>
          {/* White glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[320px] md:w-[450px] lg:w-[200px] h-[250px] sm:h-[380px] md:h-[500px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          ></div>
          {/* Main image */}
          <img
            src="https://images.ctfassets.net/xpxpo6b6k2je/787ggPwxbpn8kqSqKaKGMO/d1cadf12810f69ac3ac19e46345a6cee/Untitled_design__11_.png"
            alt="Why Choose Us"
            className="relative w-[220px] sm:w-[350px] md:w-[480px] lg:w-[580px] h-auto drop-shadow-md z-10 object-contain"
          />
        </motion.div>

        {/* Right: Text + Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left flex flex-col gap-6 sm:gap-8 md:gap-10"
        >
          <div className="w-full md:w-[95%] lg:w-full">
            <h2 className="font-rethink font-[400] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-white mb-4 sm:mb-6 leading-tight text-center md:text-left">
              Innovation Shouldn’t <br /> Wait For Budgets
            </h2>

            <ul className="space-y-5 sm:space-y-6 md:space-y-8">
              {whyChooseUsCardsCollection?.items?.map((card, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 rounded-2xl 
                 p-4 sm:p-6 bg-[#1A181F]/40 backdrop-blur-md 
                 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                 max-w-full md:max-w-[600px] lg:max-w-[700px] mx-auto md:mx-0
                 hover:bg-[#1A181F]/70 hover:shadow-[0_8px_30px_rgba(132,45,255,0.25)] 
                 hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[0.5deg]
                 hover:p-5 sm:hover:p-7"
                  style={{
                    marginLeft: isMobile || isTablet ? "0px" : `-${i * 100}px`,
                    transformOrigin: "center",
                  }}
                >
                  <div
                    className="flex justify-center items-center w-[80px] h-[90px] sm:w-[100px] sm:h-[110px] 
                      border border-[#842DFF] bg-[#632EA342] rounded-[20px] shrink-0
                      transition-transform duration-500 ease-out group-hover:scale-110"
                  >
                    {card?.url ? (
                      <img
                        src={card.url}
                        alt={card.title || "icon"}
                        className="w-[60px] h-[70px] sm:w-[80px] sm:h-[90px] object-contain transition-transform duration-500 ease-in-out"
                      />
                    ) : (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#A259F7] rounded-full" />
                    )}
                  </div>

                  <div className="text-center sm:text-left">
                    {card?.description && (
                      <p className="text-white font-poppins font-semibold text-base sm:text-lg md:text-2xl lg:text-[30px] leading-snug">
                        {card.description}
                      </p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Description below */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:col-span-2 mt-10 md:mt-14"
        >
          <p className="font-rethink text-[18px] sm:text-[18px] md:text-3xl lg:text-[64px] relative text-white text-center md:text-left px-2 sm:px-6 md:px-12 lg:px-28 leading-relaxed md:leading-none">
            <span
              className="font-rethink font-normal text-white"
              dangerouslySetInnerHTML={{
                __html: (
                  whyChooseUsContent?.description ||
                  '"Your vision" + our brains = "innovation" that moves fast.'
                )
                  .replace(/\|/g, "<br />")
                  .replace(
                    /"([^"]+)"/g,
                    '<span class="text-[#842DFF]">$1</span>'
                  ),
              }}
            ></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

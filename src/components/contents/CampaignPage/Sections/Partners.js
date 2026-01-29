import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const SPACE_ID = "xpxpo6b6k2je";
const ACCESS_TOKEN = "GvVx2yaX570LDQ1VLMs_hvW27-DDHW-x_5KToOLNUH4";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;

const Partners = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const query = `
          query {
            coCreationCampaignCollection {
              items {
                brandsCollection {
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
        const response = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });
        const { data } = await response.json();
        const brands =
          data?.coCreationCampaignCollection?.items?.[0]?.brandsCollection
            ?.items || [];
        setLogos(brands);
      } catch (error) {
        console.error("Error fetching partner logos:", error);
      }
    };
    fetchLogos();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-primary py-6 overflow-hidden relative">
      {/* Inline CSS for desktop animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Fade effect left/right */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      {/* Desktop logos scrolling */}
      <div className="hidden md:flex whitespace-nowrap animate-scroll">
        {[...logos, ...logos].map((brand, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="inline-flex items-center justify-center mx-10 opacity-80 grayscale hover:grayscale-0 transition"
          >
            <img
              src={brand?.url || "/assets/placeholder-logo.png"}
              alt={brand?.title || "Partner logo"}
              className="h-20 object-contain"
              draggable="false"
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="flex md:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {logos.map((brand, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center opacity-80 grayscale hover:grayscale-0 transition"
              >
                <img
                  src={brand?.url || "/assets/placeholder-logo.png"}
                  alt={brand?.title || "Partner logo"}
                  className="h-20 object-contain mx-auto"
                  draggable="false"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;

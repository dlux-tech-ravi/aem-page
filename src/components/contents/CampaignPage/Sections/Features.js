import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "./Feature.css";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        query {
          coCreationCampaignCollection {
            items {
              coCreationCollection {
                items {
                  title
                  description
                  url
                }
              }
              coCreationBg {
                url
              }
            }
          }
        }
      `;
      try {
        const res = await fetch(
          "https://graphql.contentful.com/content/v1/spaces/xpxpo6b6k2je/environments/master",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer GvVx2yaX570LDQ1VLMs_hvW27-DDHW-x_5KToOLNUH4",
            },
            body: JSON.stringify({ query }),
          }
        );
        const { data } = await res.json();
        const campaign = data.coCreationCampaignCollection.items[0];

        if (campaign) {
          setFeatures(campaign.coCreationCollection.items || []);
          setBgImage(campaign.coCreationBg?.url || "");
        }
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      }
    };

    fetchData();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="feature-section bg-primary pt-14 pb-0 px-4 flex flex-col items-center overflow-hidden">
      {/* Title */}
      <motion.h2
        className="font-rethink text-3xl tablet:text-5xl desktop:text-[64px] font-normal text-white text-center mb-5 tablet:mb-24 desktop:mb-36 leading-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        The DLUX Co-Creation Model
        <br className="hidden desktop:block" />
        <span className="block mt-2 text-white">(How It Works)</span>
      </motion.h2>

      <div className="relative z-10 w-full mb-8">
        {/* Background Image */}
        {bgImage && (
          <motion.div
            className="hidden desktop:block absolute inset-0 -z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <img
              src={bgImage}
              alt="Background"
              className="w-full h-full object-cover relative top-[-190px] p-[50px]"
            />
          </motion.div>
        )}

        {/* Mobile Swiper with Autoplay */}
        <motion.div
          className="md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {features.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative rounded-2xl overflow-hidden border border-[#842DFF]/40 shadow-lg group transition-transform duration-500 w-[300px] h-[400px] mx-auto">
                  <img
                    src={item.url || "/brain.png"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 flex flex-col justify-end p-6 font-poppins">
                    <h3 className="text-2xl font-medium text-white leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-normal text-white leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Tablet Grid */}
        <motion.div
          className="hidden tablet:grid desktop:hidden grid-cols-2 gap-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl overflow-hidden border border-[#842DFF]/40 shadow-lg group transition-all duration-300 ${i === 0 || i === 1 ? "h-[400px]" : "h-[450px]"
                }`}
            >
              <img
                src={item.url || "/brain.png"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 flex flex-col justify-end p-6 font-poppins">
                <h3 className="text-3xl font-medium text-white leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-white leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden desktop:grid desktop:grid-cols-3 desktop:p-[100px] desktop:pb-[0px] gap-8 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl overflow-hidden border border-[#842DFF]/40 shadow-lg group transition-all duration-300 ${i === 1
                ? "scale-105 z-20 shadow-[0_8px_32px_0_rgba(140,82,255,0.33)] bottom-[120px]"
                : "z-10"
                } ${i === 0 || i === 2 ? "w-[411px] h-[488px]" : "w-[411px] h-[520px] bottom-32"}`}
            >
              <img
                src={item.url || "/brain.png"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 flex flex-col justify-end p-8 font-poppins">
                <h3 className="text-4xl font-medium text-white leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-white leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="w-full mb-8 mt-8 flex flex-row justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            onClick={() => {
              const contactSection = document.querySelector('[data-id="contact"]');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-3 text-white font-semibold rounded-full bg-[#7300FF] shadow-xl hover:bg-[#5e1ed3] transition"
          >
            Drop Your Idea
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

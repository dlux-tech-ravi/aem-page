import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import "./CampaignForm.css";
import SuccessToaster from "../../../SuccessToaster";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("/vbg.jpg");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchMedia = async () => {
      const query = `
        query {
          coCreationCampaignCollection {
            items {
              campaignVideoCollection { items { title url } }
              campaignImage { title url }
            }
          }
        }
      `;
      try {
        const response = await fetch(
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
        const { data } = await response.json();
        const campaign = data.coCreationCampaignCollection.items[0];
        if (campaign.campaignVideoCollection?.items.length > 0) {
          setVideoUrl(campaign.campaignVideoCollection.items[0].url);
        }
        if (campaign.campaignImage) setImageUrl(campaign.campaignImage.url);
      } catch (error) {
        console.error("Error fetching Contentful media:", error);
      }
    };
    fetchMedia();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8 },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setFormSubmitted(true);
        form.reset();
      })
      .catch((err) => console.error("Form submission failed:", err));
  };

  // ✅ Auto-hide success card after 3 seconds
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <section className="bg-primary relative p-6 text-white">
      <div className="max-w-full mx-auto">
        {/* Title */}
        <motion.h2
          className="font-poppins font-medium text-3xl sm:text-[36] md:text-[48px] lg:text-[64px] leading-[1.5] text-left md:text-center mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Innovation Shouldn’t Cost Millions. <br /> Just Minutes.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div
            className="flex flex-col justify-center gap-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span className="bg-[#632EA342] text-purple-300 border border-[#842DFF] w-[160px] sm:w-[182px] h-[40px] flex items-center justify-center text-center rounded-[30px] tracking-[2px] sm:tracking-[2.5px] text-xs sm:text-sm">
              INTELLIGENCE
            </span>

            <p className="text-white font-rethink text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8">
              Ready to Grow Smarter?
            </p>

            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden cursor-pointer">
              <img
                src="https://images.ctfassets.net/xpxpo6b6k2je/1fphPWH74A4LVw685NXuAt/11601abdc0eddcd83b0a0c7c56d9fcd0/silhouetted-business-meeting-sunset-with-new-york-skyline-background.jpg"
                alt="Video Cover"
                className="w-full h-full object-cover"
              />
              <button
                // onClick={() => setIsOpen(true)}
                className="absolute inset-0 m-auto w-14 h-14 bg-purple-700/70 hover:bg-purple-700/90 rounded-full flex items-center justify-center transition"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <polygon points="6,4 14,10 6,16" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="md:col-span-1 rounded-xl md:p-6 sm:p-8 flex items-center justify-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {!formSubmitted ? (
              <div className="w-full">
                <div className="flex">
                  <h3 className="text-white font-roboto font-semibold text-lg sm:text-xl mb-4">
                    Join the Think Tank!
                  </h3>
                  <span className="text-purple-300">
                    <img src="/start.png" alt="" className="w-[50%]" />
                  </span>
                </div>

                <form
                  action="https://forms.zohopublic.in/dluxtech/form/LUXCoCreationContactForm/formperma/GVlQPghGhJ6s-T5cE8dnD_Zd6eEG0nNo_skH7Rad4hM/htmlRecords/submit"
                  method="POST"
                  acceptCharset="UTF-8"
                  className="contact-form"
                  onSubmit={handleSubmit}
                  data-id="contact"
                >
                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label htmlFor="firstName" className="contact-form__label">
                        First Name
                      </label>
                      <input id="firstName" name="Name_First" type="text" required className="contact-input" />
                    </div>

                    <div className="contact-form__group">
                      <label htmlFor="lastName" className="contact-form__label">
                        Last Name
                      </label>
                      <input id="lastName" name="Name_Last" type="text" required className="contact-input" />
                    </div>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      Work Email
                    </label>
                    <input id="email" name="Email" type="email" required className="contact-input" />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="message" className="contact-form__label">
                      Start the Spark
                    </label>
                    <textarea id="message" name="MultiLine" rows="3" required className="contact-input"></textarea>
                  </div>

                  <div className="contact-form__actions">
                    <button type="submit" className="contact-form__button">
                      Let's Build Together
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div>
                <SuccessToaster />
              </motion.div>
            )}
          </motion.div>
        </div>
           <motion.div
          className="w-full text-white flex p-8 md:p-3 gap-6 md:gap-8 justify-center items-center md:justify-start text-sm md:text-base font-medium flex-wrap"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="flex flex-row items-center gap-[5px]">
            <span className="font-montserrat font-normal text-[12px] md:text-[24px] leading-[100%] tracking-[0%] text-right text-white">
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
            <span className="font-montserrat font-normal text-[12px] md:text-[24px] leading-[100%] tracking-[0%] text-right text-white">
              30+
            </span>
            <span className="font-rethink font-normal text-[#868686] text-[7px] md:text-[14px] leading-[100%] tracking-[0.25em] uppercase">
              Global Partners
            </span>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {videoUrl ? (
          <video controls autoPlay className="w-full h-auto rounded-lg">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p className="text-center text-black">Video not available</p>
        )}
      </Modal>
    </section>
  );
}

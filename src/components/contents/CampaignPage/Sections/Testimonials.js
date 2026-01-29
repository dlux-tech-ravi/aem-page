import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [imageUrl, setImageUrl] = useState("/testi.png");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1250;
  const isDesktop = windowWidth >= 1250;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      const query = `
        query {
          coCreationCampaignCollection {
            items {
              testimonialsImage { url }
              testimonialsContentCollection {
                items { title description url }
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
        const data = await res.json();
        const items = data.data.coCreationCampaignCollection.items[0];
        if (items) {
          setTestimonials(items.testimonialsContentCollection.items);
          if (items.testimonialsImage?.url)
            setImageUrl(items.testimonialsImage.url);
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };
    fetchTestimonials();
  }, []);

  // Auto-slide for mobile/tablet
  useEffect(() => {
    if (isDesktop || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isDesktop, testimonials.length]);

  const handlePrev = () =>
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveIdx((prev) => (prev + 1) % testimonials.length);

  if (!testimonials.length) return null;

  const visibleCount = isMobile || isTablet ? 1 : 2;
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(
      testimonials[(activeIdx + i) % testimonials.length]
    );
  }

  return (
    <section className="relative bg-primary pt-12 pb-16 px-4 tablet:px-[50px] desktop:px-[80px] flex flex-col items-center overflow-hidden">
      {/* Label + Heading */}
      <div className="w-full flex flex-col desktop:flex-row  tablet:flex-row items-start tablet:items-center justify-between mb-10 tablet:mb-12">
        <div className="flex items-center mb-4 tablet:mb-0 gap-2">
          <img
            src="/campaign/testimonials.png"
            alt=""
            className="w-6 tablet:w-10 h-auto"
          />
          <span className="font-poppins text-white font-light text-sm tablet:text-base tracking-[2px] uppercase">
            TESTIMONIALS
          </span>
        </div>
        <div className="text-center tablet:text-right">
          <h2 className="text-white text-3xl tablet:text-[48px] desktop:text-[64px] font-light leading-tight text-left tablet:text-end tablet:leading-[1.3] font-raleway tablet:relative tablet:top-11">
            Real Stories.
            <br />
            Proven Protection.
          </h2>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col desktop:flex-row justify-between items-center desktop:items-start gap-10 tablet:gap-[30px]">
        {/* Mobile/Tablet Image */}
        {(isMobile || isTablet) && (
          <img
            src={imageUrl}
            alt="Testimonials visual"
            className={`rounded-2xl object-cover shadow-lg ${isMobile
              ? "w-full h-[260px] sm:h-[300px]"
              : "w-[420px] h-[420px]"
              }`}
          />
        )}

        {/* Slider */}
        <div
          className={`flex flex-col ${isMobile ? "w-full" : "flex-1"
            } items-center tablet:items-start`}
        >
          <div
            className={`flex transition-transform duration-500 ease-in-out ${isMobile || isTablet
              ? "overflow-hidden w-full justify-center"
              : "flex-row space-x-8"
              }`}
          >
            {visibleTestimonials.map((t, idx) => {
              const [part1, part2] = t.title.split("|").map((p) => p.trim());
              return (
                <div
                  key={activeIdx + "-" + idx}
                  className={`bg-[#232029] w-full sm:w-[360px] tablet:w-[400px] desktop:w-[409px] h-auto min-h-[420px] border border-[#632EA3] rounded-[30px] text-white p-6 tablet:p-8 shadow-lg select-none ${idx === 1 && isDesktop
                    ? "relative top-[100px]"
                    : "relative top-0"
                    }`}
                >
                  {t.url && (
                    <img
                      src={t.url}
                      alt=""
                      className="w-[45px] h-[40px] mb-[50px] object-contain"
                    />
                  )}
                  <p className="text-[14px] tablet:text-[16px] font-poppins font-[400] leading-[22px] tablet:leading-[25px] mb-[60px] text-[#E1DFE8]">
                    {t.description}
                  </p>
                  <div className="font-poppins text-white flex flex-col gap-1 tablet:gap-[5px]">
                    <span className="text-[18px] tablet:text-[20px] font-[700] text-white">
                      {part1}
                    </span>
                    {part2 && (
                      <span className="text-[14px] tablet:text-base text-[#AEAEB2]">
                        {part2}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex w-full items-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#5C5966] bg-[#232029] text-[#4E524E] hover:text-[#632EA3] hover:bg-[#393646] transition"
            >
              <FiArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#5C5966] bg-[#232029] text-[#4E524E] hover:text-[#632EA3] hover:bg-[#393646] transition"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Image */}
        {isDesktop && (
          <img
            src={imageUrl}
            alt="Testimonials visual"
            className="rounded-2xl object-cover w-[420px] h-[440px] relative top-[100px] shadow-lg"
          />
        )}
      </div>
    </section>
  );
};

export default Testimonials;

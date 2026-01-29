import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AemHero = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Close popup on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden font-sans pt-[50px] md:pt-0">
        
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://videos.ctfassets.net/pj0maraabon4/3o2G8BwlADTKKiWh4k3vD5/5fd146a64ef299e7d96913455d6a91cb/GettyImages-937055824.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-[1]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-5xl text-center text-white">
            <h1 className="text-4xl md:text-3xl lg:text-[45px] font-semibold lg:leading-[50px]">
              Adobe Experience Manager
              <br className="hidden md:block" />
              Edge Delivery Services & Latest AEM Innovations
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Edge Delivery Services delivers ultra-fast, GEO-optimized experiences at the edge, powered by AEM’s performance-first architecture—boosting page speed, search visibility, developer velocity, and organic traffic without compromising governance or brand consistency.
            </p>

            {/* CTA */}
            <div className="mt-10 flex justify-center gap-4">
              <button className="gradient-btn" onClick={() => setOpen(true)}>
                <span>Watch Overview</span>
              </button>

              <button
                className="gradient-btn"
                onClick={() => navigate("/contact-us")}
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          {/* Modal */}
          <div
            className="relative w-[90%] max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 text-white text-2xl hover:opacity-70 transition"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Video */}
            <video
              className="w-full h-full object-cover"
              src="https://videos.ctfassets.net/pj0maraabon4/3o2G8BwlADTKKiWh4k3vD5/5fd146a64ef299e7d96913455d6a91cb/GettyImages-937055824.mp4"
              autoPlay
              controls
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AemHero;

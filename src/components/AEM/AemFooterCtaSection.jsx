import React, { useState } from "react";

export default function AemFooterCtaSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-black py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* CTA Card */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-gradient-to-br
              from-neutral-800/60
              via-neutral-900
              to-black
              px-10
              md:px-16
              gradient-card-border
            "
          >
            {/* Soft Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />

            <img
              src="https://images.ctfassets.net/pj0maraabon4/5sySsTXVcEzcW7TLQWDALo/1b940acae7af76a3ba6170baf8b819c8/bg-gradient-banner.webp"
              alt=""
              className="
                pointer-events-none
                absolute
                top-0
                right-0
                opacity-100
                blur-[1px]
                w-full
                h-full
              "
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center m-0 font-sans">

              {/* LEFT CONTENT */}
              <div className="py-10 md:py-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug font-sans">
                  Don’t Let Slow Sites and <br />
                  Disconnected Assets Hold You Back
                </h2>

                <p className="mt-4 text-[#FFFFFF]/60 text-sm md:text-lg max-w-xl">
                  Join top brands already achieving 10× faster page creation,
                  100% better load times, and dramatically higher conversions
                  with AEM Sites & Assets. Get a free, no-obligation AEM
                  strategy review.
                </p>

                <div className="mt-6 text-gray-300 text-sm space-y-2">
                  <p className="font-medium text-sm md:text-lg text-[#FFFFFF]/60">
                    In one short session, see:
                  </p>
                  <ul className="list-disc text-sm md:text-lg list-inside space-y-1 text-[#FFFFFF]/60">
                    <li>How to fix your Core Web Vitals & load times</li>
                    <li>How to 5–10× content speed with AI</li>
                    <li>How unified Sites + Assets boost your ROI</li>
                  </ul>
                  <p className="mt-2 text-[#FFFFFF]/60 text-sm md:text-lg">
                    Reserve your spot — limited slots each week.
                  </p>
                </div>

                {/* BUTTON – ONLY LOGIC ADDED */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="mt-8 inline-flex items-center rounded-full border border-white/30 px-8 py-3 text-sm md:text-lg font-medium transition hover:bg-white hover:text-black"
                >
                  Know More
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex justify-center md:justify-end">
                <img
                  src="https://images.ctfassets.net/pj0maraabon4/4lriG19ccVIeclMf1zHjyc/b9e7687f2fd36b818c719264372d049d/aem-cta-woman-img.png"
                  alt="CTA Visual"
                  className="
                    w-[260px]
                    md:w-[80%]
                    lg:w-[100%]
                    object-contain
                    drop-shadow-2xl
                  "
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== POPUP MODAL ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Blur Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Popup */}
          <div className="relative z-10 w-[90%] max-w-xl rounded-2xl bg-neutral-900 p-8 text-white shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-xl text-white/60 hover:text-white"
            >
              ✕
            </button>

            {/* FORM (placeholder – content untouched outside main section) */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 focus:outline-none focus:border-white"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-white py-3 text-black font-medium hover:bg-gray-200"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}

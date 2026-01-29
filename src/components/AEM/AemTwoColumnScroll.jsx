import React, { useEffect, useRef } from "react";

const CARDS = [
  {
    title: "Strategy & Planning",
    desc: "Turn chaos into a smart asset strategy — start strong. Plan better, find faster. AEM Assets gives you intelligent tools to organize millions of files from day one, so your team always knows exactly what’s available and ready to use. ",
    points: [
      "Bulk upload and auto-classify assets in seconds ",
      "Smart metadata & Brand-Aware Tagging from the start ",
      "Lightning-fast natural-language search across everything ",
      "Build a clean, future-ready digital asset foundation ",
    ],
  },
  {
    title: "Centralized Control ",
    desc: " Keep your brand safe, compliant, and consistent — no exceptions. One powerful place to govern everything. Set rules once, protect rights, control access, and stop duplicates — so nothing off-brand ever reaches your customers. ",
    points: [
      "Role-based permissions and automatic expiry rules ",
      "Built-in DRM and duplication detection",
      "Version history and approval workflows that actually work ",
      "Enforce brand guidelines across global teams effortlessly ",
    ],
  },
  {
    title: "Optimized Distribution ",
    desc: "Get the right asset to the right place — instantly and perfectly. No more resizing nightmares or slow downloads. Deliver high-quality images, videos, and 3D exactly how each channel needs them automatically optimized and blazing fast. ",
    points: [
      "Dynamic Media: auto-resize, crop, format for any device",
      "Real-time transformations without new versions ",
      "Seamless embedding into AEM Sites, emails, apps & more ",
      "Reach every screen with perfect quality and speed ",
    ],
  },
  {
    title: "Asset Analytics  ",
    desc: "See what’s working, what’s not and make smarter decisions. Stop guessing. Track usage, discover top performers, measure real ROI, and continuously improve your entire asset library with clear, actionable insights. ",
    points: [
      "See which assets drive the most engagement & conversions",
      "Identify unused or underperforming files instantly ",
      "Get channel-by-channel performance breakdowns ",
      "Make data-backed choices to maximize asset value ",
    ],
  },
];

export default function AemTwoColumnScroll() {
  const sectionRef = useRef(null);
  const rightColRef = useRef(null);

  /* 🔑 Redirect scroll to right column (DESKTOP ONLY) */
  useEffect(() => {
    const section = sectionRef.current;
    const rightCol = rightColRef.current;
    if (!section || !rightCol) return;

    const onWheel = (e) => {
      if (window.innerWidth < 1024) return;

      const atTop = rightCol.scrollTop === 0;
      const atBottom =
        rightCol.scrollTop + rightCol.clientHeight >= rightCol.scrollHeight - 1;

      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        return;
      }

      e.preventDefault();
      rightCol.scrollTop += e.deltaY;
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-900 text-white lg:h-screen py-10 lg:py-20"
    >
      <div className="max-w-full mx-auto px-6 h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full">
          {/* LEFT COLUMN – CENTERED IMAGE */}
          <div className="flex items-center justify-center lg:pb-20">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/3IyQJCqrkqY3WDqREyDK5N/f50fdff9b577e88238548e51fea061c1/3848871.jpg"
              alt="AEM"
              className="rounded-3xl w-[85%] object-cover"
            />
          </div>

          {/* RIGHT COLUMN – INTERNAL SCROLL */}
          <div
            ref={rightColRef}
            className="
              space-y-6
              lg:h-full
              lg:overflow-y-auto
              lg:pr-6
              hide-scrollbar
              text-center
            "
          >
            <span className="inline-flex rounded-full font-sans border border-[#656565]/35 px-4 py-2 items-center text-sm text-gray-300 gap-3 bg-[#101010]">
              <img
    src="https://images.ctfassets.net/pj0maraabon4/4WH6837PWmPPMC4GKpyDbY/1a3fbb4bb45e6b9490e97039d47de480/dlux-dark-logo-subtitle.svg"
    alt="Adobe"
    className="h-6 w-6"
  />
            AEM Assets
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold font-sans">
             Enterprise Digital Asset
              Management (DAM)
            </h2>

            <p className="text-gray-400  text-lg leading-relaxed font-sans">
              Adobe Experience Manager Assets is an AI-powered enterprise DAM
              that enables teams to manage, govern, optimize, and deliver
              digital assets at scale with centralized control and intelligent
              automation.
            </p>
            <p className="text-gray-400  leading-relaxed font-sans text-lg">
              With AI-powered tagging, advanced rights management, dynamic asset
              delivery, and deep integration with Adobe Experience Cloud, AEM
              Assets helps organizations accelerate content reuse, ensure brand
              consistency, and maximize the value of every digital asset at
              scale.
            </p>

            <div className="space-y-8">
              {CARDS.map((card, index) => (
                <div
                  key={index} 
                  className="rounded-2xl border border-white/15 bg-white/5 p-8 text-left font-sans"
                >
                  <h3 className="text-xl font-semibold font-sans">{card.title}</h3>

                  <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                    {card.desc}
                  </p>

                  <ul className="mt-4 space-y-2 text-gray-400 text-lg list-disc list-inside">
                    {card.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom breathing space */}
            <div className="h-24" />
          </div>
        </div>
      </div>
    </section>
  );
}

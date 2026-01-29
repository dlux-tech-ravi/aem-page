import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import HeroSection from "./Sections/Hero";
import Partners from "./Sections/Partners";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Features from "./Sections/Features";
import Solution from "./Sections/Solution";
import Contact from "./Sections/Contact";
import Testimonials from "./Sections/Testimonials";

import "./campaign-tailwind.css";

function CampaignPage() {
  return (
    <>
      {/* ✅ SEO Meta Datas */}
      <Helmet>
        <title>DLUX Campaign | Co-create Martech, Adtech & AI Solutions</title>

        <meta
          name="description"
          content="Join DLUX's global community of CMOs, CFOs, and AI innovators co-creating Martech and Adtech solutions — no budget, just big brains and bold ideas."
        />
        <meta
          name="keywords"
          content="DLUX, Martech, Adtech, AI, Co-create, Digital Innovation, CMOs, CFOs, Marketing Technology, AI Collaboration"
        />
        <meta name="author" content="DLUX Team" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph (Facebook / LinkedIn) */}
        <meta property="og:title" content="No Budget. Big Brains. Let’s Co-Create | DLUX Campaign" />
        <meta
          property="og:description"
          content="Join DLUX’s Martech & AI community — Co-create the future with top CMOs, CFOs, and innovators. No contracts. No spend. Just your time."
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/xpxpo6b6k2je/2Ef3Cc6KVHyYhJYLMDzhJb/065134827240924ccff25811436d6539/cyberpunk-woman-warrior-portrait_1__1_.png"
        />
        <meta property="og:url" content="https://dluxtech.com/campaign" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DLUX Campaign – Co-create Martech, Adtech & AI" />
        <meta
          name="twitter:description"
          content="Join DLUX’s global innovation movement – No budget. Big brains. Let’s co-create Martech, Adtech & AI together."
        />
        <meta
          name="twitter:image"
          content="https://images.ctfassets.net/xpxpo6b6k2je/2Ef3Cc6KVHyYhJYLMDzhJb/065134827240924ccff25811436d6539/cyberpunk-woman-warrior-portrait_1__1_.png"
        />

        {/* 🔹 Canonical & Favicon */}
        <link rel="canonical" href="https://dluxtech.com/campaign" />
        <link rel="icon" type="image/png" href="https://dluxtech.com/favicon.png" />
      </Helmet>

      {/* ✅ Page Content */}
      <Header />
      <main className="bg-primary">
        <HeroSection />
        <Partners />
        <WhyChooseUs />
        <Features />
        <Solution />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default CampaignPage;

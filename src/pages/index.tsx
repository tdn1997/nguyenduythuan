import Head from "next/head";
import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import useScrollReveal from "../hooks/useScrollReveal";

const SITE_URL = "https://www.nguyenduythuan.dev";
const TITLE = "Nguyen Duy Thuan | Full Stack Engineer";
const DESCRIPTION =
  "Personal portfolio of Nguyen Duy Thuan — full stack engineer building end-to-end web applications with React, Next.js, and TypeScript.";

const Home: NextPage = () => {
  useScrollReveal();

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="theme-color" content="#292929" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      </Head>

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;

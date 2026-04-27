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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nguyen Duy Thuan | JavaScript Developer</title>
        <meta
          name="description"
          content="Personal portfolio of Nguyen Duy Thuan — JavaScript developer focused on modern frontend engineering."
        />
        <meta property="og:title" content="Nguyen Duy Thuan | JavaScript Developer" />
        <meta
          property="og:description"
          content="Explore projects, skills, and contact details of Nguyen Duy Thuan."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />
      <main>
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

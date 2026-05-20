import { Cursor } from "@/components/Cursor";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Specialty } from "@/components/sections/Specialty";
import { About } from "@/components/sections/About";
import { Showcase } from "@/components/sections/Showcase";
import { Works } from "@/components/sections/Works";
import { Spotlight } from "@/components/sections/Spotlight";
import { Services } from "@/components/sections/Services";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Cursor />
      <Navigation />

      <main className="relative">
        <Hero />
        <Manifesto />
        <Specialty />
        <About />
        <Showcase />
        <Works />
        <Spotlight />
        <Services />
        <Press />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

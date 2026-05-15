import { Cursor }     from "@/components/Cursor";
import { Navigation } from "@/components/Navigation";
import { Footer }     from "@/components/Footer";
import { Hero }       from "@/components/sections/Hero";
import { Specialty }  from "@/components/sections/Specialty";
import { About }      from "@/components/sections/About";
import { Works }      from "@/components/sections/Works";
import { Spotlight }  from "@/components/sections/Spotlight";
import { Services }   from "@/components/sections/Services";
import { Press }      from "@/components/sections/Press";
import { Contact }    from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Cursor />
      <Navigation />

      <main className="relative">
        <Hero />
        <Specialty />
        <About />
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

import SmoothScroll from "@/components/site/SmoothScroll";
import Loader from "@/components/site/Loader";
import Nav from "@/components/site/Nav";
import HeroSequence from "@/components/site/HeroSequence";
import Experience from "@/components/site/Experience";
import Work from "@/components/site/Work";
import About from "@/components/site/About";
import Process from "@/components/site/Process";
import Toolkit from "@/components/site/Toolkit";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Loader />
      <Nav />
      <main>
        <HeroSequence />
        <Experience />
        <Work />
        <About />
        <Process />
        <Toolkit />
      </main>
      <Footer />
    </>
  );
}

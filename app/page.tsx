import BackgroundBlobs from "@/components/BackgroundBlobs";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Articles from "@/components/Articles";
import Gallery from "@/components/Gallery";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundBlobs />
      <Nav />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Articles />
        <Gallery />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

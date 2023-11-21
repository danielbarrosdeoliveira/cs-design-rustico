import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { GalleryImage } from "@/components/GalleryImage";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

import "@/styles/global.css";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Services />
      <GalleryImage />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

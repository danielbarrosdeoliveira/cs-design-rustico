import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { ImageGallery } from "@/components/ImageGallery";

import "../assets/css/globals.css";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <ImageGallery />
    </>
  );
};

export default Home;

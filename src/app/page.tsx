import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { ImageGallery } from "@/components/ImageGallery";

import "../assets/css/globals.css";

const images = [
  "/images/trabalhos/01.jpg",
  "/images/trabalhos/02.jpg",
  "/images/trabalhos/03.jpg",
  "/images/trabalhos/04.jpg",
  "/images/trabalhos/05.jpg",
  "/images/trabalhos/06.jpg",
  "/images/trabalhos/07.jpg",
  "/images/trabalhos/08.jpg",
  "/images/trabalhos/09.jpg",
  "/images/trabalhos/10.jpg",
  "/images/trabalhos/11.jpg",
  "/images/trabalhos/12.jpg",
  "/images/trabalhos/13.jpg",
  "/images/trabalhos/14.jpg",
  "/images/trabalhos/15.jpg",
  "/images/trabalhos/16.jpg",
];

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <ImageGallery images={images} />
    </>
  );
};

export default Home;

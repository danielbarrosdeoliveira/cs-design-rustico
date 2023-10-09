import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";

import "../assets/css/globals.css";
import { About } from "@/components/About";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
    </>
  );
};

export default Home;

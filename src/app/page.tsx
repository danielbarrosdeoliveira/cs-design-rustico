import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";

import "../assets/css/globals.css";

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

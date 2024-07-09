import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import VideoCarousel from "./components/VideoCarousel";
import VideoCarousel2 from "./components/VideoCarousel2";
import Model from "./components/Model";

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <VideoCarousel2 />
        <Model />
      </main>
    </>
  );
};

export default App;

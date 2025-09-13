import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Countdown from "./components/Countdown";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen font-sans  text-gray-800">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Gallery />
          <About />
          <Countdown />
          <Contact />
        </div>
      </main>
      <footer className="text-center py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Our Pre-Wedding Moments
      </footer>
    </div>
  );
}

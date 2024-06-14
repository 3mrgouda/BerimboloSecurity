import React, { useEffect } from "react";
import { api } from "./api/Api";
import Navbar1 from "./pages/Navbar1";
import Hero2 from "./pages/Hero2";
import Sections3 from "./pages/Sections3";
import Pricing4 from "./pages/Pricing4";
import Footer5 from "./pages/Footer5";
import Places from "./pages/Places";
import Aos from "aos";
import "aos/dist/aos.css";
import FAQ5 from "./pages/FAQ5";

export default function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div className="dark:bg-black font-poppins w-full overflow-hidden">
      <Navbar1 />
      <div className="container mx-auto px-4  flex flex-col gap-20 dark:bg-black">
        <Hero2 />
        <Sections3 data={api} />
        <Places />
        <Pricing4 />
        <FAQ5 />
      </div>
      <Footer5 />
    </div>
  );
}

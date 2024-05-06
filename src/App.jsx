import React from "react";
import { api } from "./api/Api";
import Navbar1 from "./pages/Navbar1";
import Hero2 from "./pages/Hero2";
import Sections3 from "./pages/Sections3";
import Pricing4 from "./pages/Pricing4";
import Footer5 from "./pages/Footer5";

export default function App() {
  return (
    <div className="dark:bg-black">
      <Navbar1 />
      <div className="container mx-auto px-4  flex flex-col gap-20 dark:bg-black">
        <Hero2 />
        <Sections3 data={api} />
        <Pricing4 />
      </div>
      <Footer5 />
    </div>
  );
}

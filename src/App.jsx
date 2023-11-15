import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "./pages/Loading";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import India from "./pages/India";
import Andaman from "./pages/Andaman";
import Forms from "./pages/Forms";
import Kerala from "./pages/Kerala";
import Banglore from "./pages/Banglore";
import Tamilnadu from "./pages/Tamilnadu";
import Bhutan from "./pages/Bhutan";
import Kenya from "./pages/Kenya";
import Nepal from "./pages/Nepal";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Partner from "./pages/Partner";
import Gujarat from "./pages/Gujarat";
import Hyderabad from "./pages/Hyderabad";
import Lakshadweep from "./pages/Lakshadweep";
import Uttrakhand from "./pages/Uttrakhand";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, replace with actual loading logic
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <BrowserRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/india" element={<India />} />
          <Route path="/andaman" element={<Andaman />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/kerala" element={<Kerala />} />
          <Route path="/banglore" element={<Banglore />} />
          <Route path="/tamilnadu" element={<Tamilnadu />} />
          <Route path="/bhutan" element={<Bhutan />} />
          <Route path="/kenya" element={<Kenya />} />
          <Route path="/nepal" element={<Nepal />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/gujarat" element={<Gujarat />} />
          <Route path="/hyderabad" element={<Hyderabad />} />
          <Route path="/lakshadweep" element={<Lakshadweep />} />
          <Route path="/uttrakhand" element={<Uttrakhand />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

import { useState } from "react";
import logo from "../assets/logo.png";
import line from "../assets/line.svg";
import line1 from "../assets/line1.png";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Footer from "../constants/Footer";
import img1 from "../assets/galley (1).jpg";
import img2 from "../assets/galley (3).jpg";
import img3 from "../assets/galley (8).jpg";
import img4 from "../assets/galley (4).jpg";
import img5 from "../assets/galley (7).jpg";
import img6 from "../assets/galley (5).jpg";
import img7 from "../assets/galley (6).jpg";
import img8 from "../assets/galley (2).jpg";


function Gallery() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for an instant scroll
    });
  }
  scrollToTop();
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

function Header() {
  const handleCallClick = () => {
    // Use the `window.location` to initiate a phone call to the mobile number
    window.location.href = "tel:+918883226229"; // Replace with the desired mobile number
  };

  const handleEmailClick = () => {
    // Use the `window.location` to open the default email client
    window.location.href = "mailto:example@example.com"; // Replace with the desired email address
  };

  const handleDestinationsClick = () => {
    // Use the `window.location` to open the default email client
    window.location.href = "/forms"; // Replace with the desired email address
  };
  const [enquire, setEnquire] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <Parallax
      strength={500}
      className="relative flex flex-col font-primary bg-white text-black"
    >
      <nav className="hidden pr-6 md:flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex gap-24 font-bold text-xl text-black">
          <Link to="/">HOME</Link>
          <Link to="/destinations">DESTINATIONS</Link>
          <a href="/services">OUR SERVICES</a>
          <a href="/gallery">GALLERY</a>
          <a href="/about">ABOUT US</a>
        </div>

        <div
          onClick={() => setEnquire(!enquire)}
          className="text-black flex gap-2 relative"
        >
          <button>ENQUIRE NOW</button>
          <div className="flex items-center">
            <img src={line1} alt="" />
          </div>

          <div
            className={
              enquire
                ? "absolute top-16 h-f w-full bg-black text-white p-4 flex flex-col gap-3 translate-y-0 duration-200"
                : "absolute flex top-16 h-f w-full bg-white text-black p-4 flex-col gap-3 -translate-y-12 duration-200 -z-10"
            }
          >
            <button onClick={handleDestinationsClick}>Book Online</button>
            <button onClick={handleEmailClick}>By Email</button>
            <button onClick={handleCallClick}>By Phone</button>
          </div>
        </div>
      </nav>

      <nav className="flex justify-between items-center md:hidden relative z-10">
        <Link to="/">
          <img className="w-32" src={logo} alt="Logo" />
        </Link>

        <div className="px-3">
          <i
            onClick={() => setNav(true)}
            className="fa-solid fa-bars text-4xl text-black"
          ></i>
        </div>
        <div
          className={`${
            nav ? "translate-x-0" : "translate-x-full"
          } duration-150 absolute top-0 w-full bg-black h-screen text-white justify-center px-12 py-8`}
        >
          <div className="w-full flex justify-end">
            <i
              onClick={() => setNav(false)}
              className="fa-solid fa-x text-xl"
            ></i>
          </div>

          <div className="flex flex-col gap-5 items-center text-2xl py-8 h-full">
            <Link to="/">HOME</Link>
            <Link to="/destinations">DESTINATIONS</Link>
            <a href="/services">OUR SERVICES</a>
            <a href="/gallery">GALLERY</a>
            <a href="/about">ABOUT US</a>

            <div
              onClick={() => setEnquire(!enquire)}
              className="text-white flex gap-2 relative"
            >
              <button>ENQUIRE NOW</button>
              <img src={line} alt="" />

              <div
                className={
                  enquire
                    ? "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 translate-y-0 duration-200"
                    : "absolute top-16 h-f w-full bg-white text-black p-4 hidden flex-col gap-3 -translate-y-12 duration-200 -z-10"
                }
              >
                <button onClick={handleDestinationsClick}>Book Online</button>
                <button onClick={handleEmailClick}>By Email</button>
                <button onClick={handleCallClick}>By Phone</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <OurDestinations />
    </Parallax>
  );
}

function OurDestinations() {
  return (
    <div
      name="kenya"
      className="my-12 flex flex-col items-center justify-center text-black"
    >
      <p className="text-6xl bursh-font">Gallery</p>
      <br/>
      <br/>
      <p className="text-3xl font-amethysta">Our Hotels</p>

      <div className="grid md:grid-cols-2 px-6 gap-12 my-12">
        <img src={img1} alt="placeholder" />
        <img src={img2} alt="placeholder" />
        <img src={img3} alt="placeholder" />
        <img src={img4} alt="placeholder" />
        <img src={img5} alt="placeholder" />
        <img src={img6} alt="placeholder" />
        <img src={img7} alt="placeholder" />
        <img src={img8} alt="placeholder" />
        
       

      </div>
    </div>
  );
}

export default Gallery;

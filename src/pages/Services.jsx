import { useState } from "react";
import logo from "../assets/logo.png";
import line1 from "../assets/line1.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Footer from "../constants/Footer";

const destinationsData = [
  {
    title: "Transportation - Fleets",
    description:
      "We are offering a wide range of transportation since 1960 for the  tourists from various  parts of the world by knowing the budget-friendly to luxury in Andaman, Bhutan, India, Kenya, and Nepal. We have fleets of well-maintained and well experienced drivers, including cars, vans, buses, and coaches, to suit your needs and budget. Our experienced drivers will ensure that you get to your destination safely, on time to explore your dream.",
    imageUrl:
      "https://images.unsplash.com/photo-1622006578764-55f941807e09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cultural Packages",
    description:
      "We are offering a wide range of cultural packages to help you experience the rich and diverse cultures of India and other parts of the world. We specialize in creating itineraries that are tailored to your interests and budget, and we work with experience in house local guides to ensure that you have an authentic and enriching experience. Our cultural packages include visits to historical sites, temples, mosques, churches, and other religious landmarks. We also offer experiences that allow you to immerse yourself in the local culture, such as cooking, dance, visits to traditional villages and etc...",
    imageUrl:
      "https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=-quRLbD1Hkd2-i_I-uqJltiA516alqGNojlobB6nZ7A=",
  },
  {
    title: "Corporate Packages",
    description:
      "We are a leading Destination Management Company and B2B tour company, offers a range of corporate tailor made packages(M.I.C.E) to the needs of businesses of all sizes. Our packages are designed to help your team achieve their goals, whether you're looking to boost productivity, foster teamwork, or reward top performers.",
    imageUrl:
      "https://images.unsplash.com/photo-1536607961765-592e80bcc19e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Adventure Packages",
    description:
      "We are a leading destination management company and B2B tour company, offers a variety of adventure packages for thrill-seekers of all levels of experience. Our packages are designed to showcase the best of India's natural wonders and cultural experiences, while offering a healthy dose of adrenaline. From trekking in the Himalayas to whitewater rafting in the Ganges to scuba diving in the Andaman Islands, we have an adventure package for everyone. Our team of experienced and knowledgeable guides will ensure that you have a safe and unforgettable experience.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1667516408599-67d72068eaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Honeymoon Packages",
    tittle2: "",
    description:
      "Our packages are designed to create unforgettable experiences, whether you're looking for a romantic getaway on a secluded beach, a luxurious stay in a heritage palace, or an adventure-filled honeymoon exploring India's natural wonders. From the snow-capped peaks of the Himalayas to the pristine beaches of Goa to the lush backwaters of Kerala, we have a honeymoon package that's perfect for you. Our team of experienced travel planners will work with you to create a customized package that meets all of your requirements and ensures that you have a truly unforgettable honeymoon.",
    imageUrl:
      "https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Services() {
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
    window.location.href = "mailto:birdseyetrip@gmail.com"; // Replace with the desired email address
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
      className="relative flex flex-col font-primary bg-white "
    >
      <nav className="hidden pr-6 md:flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex gap-24 font-bold text-xl text-black ">
          <Link to="/">HOME</Link>
          <Link to="/destinations">DESTINATIONS</Link>
          <a href="/services">OUR SERVICES</a>
          <a href="/gallery">GALLERY</a>
          <a href="/about">ABOUT US</a>
        </div>

        <div
          onClick={() => setEnquire(!enquire)}
          className="text-black  flex gap-2 relative"
        >
          <button>ENQUIRE NOW</button>
          <div className="flex items-center">
            <img src={line1} alt="line1" />
          </div>

          <div
            className={
              enquire
                ? "absolute top-16 h-f w-full bg-black text-white p-4 flex flex-col gap-3 translate-y-0 duration-200 z-20"
                : "absolute flex top-16 h-f w-full bg-white text-white p-4 flex-col gap-3 -translate-y-12 duration-200 -z-10"
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
            className="fa-solid fa-bars text-4xl md:text-white"
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
              <img src={line} alt="line" />

              <div
                className={
                  enquire
                    ? "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 translate-y-0 duration-200"
                    : "absolute top-16 h-f w-full bg-white text-black p-4 hidden flex-col gap-3 -translate-y-12 duration-200 -z-10"
                }
              >
                <a onClick={handleDestinationsClick}>Book Online</a>
                <a onClick={handleEmailClick}>By Email</a>
                <a onClick={handleCallClick}>By Phone</a>
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
      className="my-12 flex flex-col items-center justify-center text-black gap-12 z-0"
    >
      <p className="text-6xl bursh-font">Our Services</p>

      {destinationsData.map((item, index) => (
        <div
          key={index}
          className={`flex justify-around md:px-24 w-full px-6 ${
            index % 2 === 1
              ? "md:flex-row-reverse flex-col"
              : "md:flex-row flex-col"
          }`}
        >
          <div className="basis-[40%]">
            <img src={item.imageUrl} alt="placeholder" />
          </div>
          <div className="flex flex-col justify-evenly basis-[40%] my-4">
            <h4 className="font-primary text-4xl font-bold">{item.title}</h4>
            <p className="my-4">{item.description}</p>
            <div className="flex justify-center w-full">
              <Link
                to="/forms"
                className="py-4 px-8 font-adanda bg-black text-white my-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;

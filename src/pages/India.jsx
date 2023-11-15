import { useState } from "react";
import logo from "../assets/logo.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import indiabg from "../assets/indiabg.avif";

function India() {
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
      <OurDestinations />
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
      bgImageStyle={{
        objectFit: "cover",
        width: "100%",
        height: "100vh",
        // Apply the style only for mobile screens (max-width: 767px)
        "@media (max-width: 767px)": {
          objectFit: "cover",
          height: "100vh",
        },
      }}
      bgImage={indiabg}
      className="relative flex flex-col font-primary min-h-screen bg-[#1B1A1A]"
    >
      <nav className="hidden pr-6 md:flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex gap-24 font-bold text-xl text-white">
          <Link to="/">HOME</Link>
          <Link to="/destinations">DESTINATIONS</Link>
          <a href="/services">OUR SERVICES</a>
          <a href="/gallery">GALLERY</a>
          <a href="/about">ABOUT US</a>
        </div>

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
            className="fa-solid fa-bars text-4xl text-white"
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

      <div className="md:flex hidden h-[80vh] items-center justify-center font-urbanist w-full">
        <h1 className="india-font pl-24">INDIA</h1>
      </div>
    </Parallax>
  );
}

function OurDestinations() {
  const destinations = [
    {
      name: "Andaman and Nicobar Tour Packages",
      imageUrl:
        "https://www.tripexperienceblog.com/wp-content/uploads/2018/04/Andaman-Nicobar-Islands-1.jpg",
      location: "India, South Asia",
      url: "/andaman",
    },
    {
      name: "Banglore Tour Packages",
      imageUrl:
        "https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg",
      location: "India, South Asia",
      url: "/banglore",
    },
    {
      name: "Gujarat Tour Packages",
      imageUrl:
        "https://cdn.britannica.com/39/124439-050-AFA5CEC6/Sun-Temple-Modhera-Gujarat-India.jpg",
      location: "India, South Asia",
      url: "/gujarat",
    },
    {
      name: "Hyderabad Tour Packages",
      imageUrl:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/09/15144355/Untitled-design-2-4.jpg",
      location: "India, South Asia",
      url: "/hyderabad",
    },
    {
      name: "Kerala Tour Packages",
      imageUrl:
        "https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/Further-down--in-Kerala--God-s-Own-Country--held-i_1679599101590_1679646049345_1679646049345.jpg",
      location: "India, South Asia",
      url: "/kerala",
    },
    {
      name: "Lakshadweep Tour Packages",
      imageUrl:
        "https://themapofindia.com/superawesome/2021/05/Lakshadweep-scaled.jpg",
      location: "India, South Asia",
      url: "/lakshadweep",
    },
    {
      name: "Tamil Nadu Tour Packages",
      imageUrl:
        "https://cdn.britannica.com/12/100812-050-27483D5E/Mamallapuram-Shore-Temple-Chennai-India-Tamil-Nadu.jpg",
      location: "India, South Asia",
      url: "/tamilnadu",
    },
    {
      name: "Uttrakhand Tour Packages",
      imageUrl:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2020/04/Lakes-in-Uttrakhand.jpg",
      location: "India, South Asia",
      url: "/uttrakhand",
    },
  ];

  return (
    <div
      name="kenya"
      className="my-12 flex flex-col items-center justify-center text-black gap-12"
    >
      <p className="text-6xl bursh-font">Our Destinations</p>
      <p className="india-font-1 font-urbanist text-2xl text-center pl-4">
        INDIA
      </p>

      <div className="grid md:grid-cols-2 place-items-center w-full mt-10 gap-12 px-6 md:px-0">
        {destinations.map((destination, index) => (
          <div key={index}>
            <Link
              to={destination.url}
              key={index}
              className={`md:flex hidden flex-col w-[500px] h-[500px] bg-white ${
                index % 2 === 0 ? "rounded-l-3xl" : "rounded-r-3xl"
              } drop-shadow-xl`}
            >
              <img
                src={destination.imageUrl}
                alt="placeholder"
                className={`${
                  index % 2 === 0 ? "rounded-tl-3xl" : "rounded-tr-3xl"
                } min-h-[70%] w-full`}
              />
              <div className="p-4 flex flex-col justify-evenly h-full">
                <p className="text-black font-bold text-lg">
                  {destination.name}
                </p>
                <p className="text-black">{destination.location}</p>
              </div>
            </Link>

            <Link
              to={destination.url}
              key={index}
              className={`md:hidden flex flex-col w-full bg-white rounded-xl drop-shadow-xl`}
            >
              <img
                src={destination.imageUrl}
                alt="placeholder"
                className={`rounded-t-xl min-h-[70%] w-full`}
              />
              <div className="p-4 flex flex-col justify-evenly h-full">
                <p className="text-black font-bold text-lg">
                  {destination.name}
                </p>
                <p className="text-black">{destination.location}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default India;

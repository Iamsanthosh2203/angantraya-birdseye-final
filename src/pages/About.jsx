import { useState } from "react";
import logo from "../assets/logo.png";
import line1 from "../assets/line1.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Footer from "../constants/Footer";
import gridabout from "../assets/gridabout.png";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.png";
import service3 from "../assets/atlg.jpg";
import service5 from "../assets/midlead_logo.jpg";
import service6 from "../assets/service6.png";


function About() {
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
      <Section1 />
      <Section2 />
      <OurGroups />
      <Reviews />
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
    <div className="h-screen relative">
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
        bgImage="https://images.unsplash.com/photo-1596295357308-b9ff1d2fe788?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="relative flex flex-col font-primary min-h-screen bg-[#1B1A1A]"
      >
        <nav className="hidden pr-6 md:flex items-center justify-between w-full text-black ">
          <Link to="/">
            <img src={logo} alt="Logo" className="relative z-10" />
          </Link>

          <div className="flex gap-24 font-bold text-xl text-black relative z-10">
            <Link to="/">HOME</Link>
            <Link to="/destinations">DESTINATIONS</Link>
            <a href="/services">OUR SERVICES</a>
            <a href="/gallery">GALLERY</a>
            <a href="/about">ABOUT US</a>
          </div>

          <div
            onClick={() => setEnquire(!enquire)}
            className="text-black flex gap-2 relative z-10"
          >
            <button>ENQUIRE NOW</button>
            <div className="flex items-center">
              <img src={line1} alt="line1" />
            </div>

            <div
              className={
                enquire
                  ? "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 translate-y-0 duration-200"
                  : "absolute top-16 h-f w-full hidden text-black p-4 flex-col gap-3 -translate-y-12 duration-200 -z-10"
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
      </Parallax>

      <div
        className="absolute inset-0 bg-[#00000032]"
        style={{ zIndex: 0 }}
      ></div>
    </div>
  );
}

function Section1() {
  return (
    <section className="py-16 bg-white">
      <h4 className="font-alfa text-2xl md:text-5xl text-center text-[#2596BE]">
        We are Angantraya Birdseye
      </h4>
      <div className="flex md:flex-row flex-col gap-4 justify-around py-12">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-adanda">200+</p>
          <p className="font-noticia tracking-[3px]">PACKAGES</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-adanda">100+</p>
          <p className="font-noticia tracking-[3px]">DESTINATIONS</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-adanda">100+</p>
          <p className="font-noticia tracking-[3px]">FLEETS / VEHICLE </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-adanda">5K+ </p>
          <p className="font-noticia tracking-[3px]"> HAPPY CUSTOMER </p>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="min-h-[60vh] about2 py-12 flex items-end text-white">
      <div className="md:flex hidden w-full justify-center gap-4 z-10">
        <p className="text-2xl font-noticia tracking-[3px]">ANDAMAN</p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-x border-white">
          BHUTAN
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-r border-white">
          NEPAL
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-r border-white">
          INDIA
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-r border-white">
          LAKSHADWEEP
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-r border-white">
          KENYA
        </p>
      </div>

      <div className="flex md:hidden flex-col items-center w-full justify-center gap-4 z-10">
        <p
          className="text-2xl font-noticia tracking-[3px]
        border-b"
        >
          ANDAMAN
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-b">
          BHUTAN
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-b">
          NEPAL
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4">INDIA</p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-b">
          LAKSHADWEEP
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-b">
          KENYA
        </p>
      </div>
    </section>
  );
}

function OurGroups() {
  return (
    <section className="py-12 px-6 flex flex-col justify-center">
      <h4 className="font-alfa text-5xl text-center uppercase text-[#2596BE]">Our Groups</h4>
      <div className="md:grid font-bold font-recursive">
        <div className="flex md:flex-row flex-col justify-evenly">
          {/* YUVARAJ */}
          <div className="flex flex-col items-center py-12 gap-7">
            <div className="w-[250px] h-[250px] flex justify-center items-center">
              <img
                src={gridabout}
                alt="gridabout"
                className="w-[150px] h-[150px]"
              />
            </div>
            {/* <p className="text-2xl font-noticia tracking-[3px] text-center uppercase">
              YUVARAJ <br />
              BY Angantraya
            </p> */}
          </div>
          {/* Apoorva */}
          <div className="flex flex-col items-center py-12 gap-7">
            <img
              src={service2}
              alt="service2"
              className="w-[250px] h-[250px]"
            />
            {/* <p className="text-2xl font-noticia tracking-[3px] text-center">
              APOORVA <br />
              TOURS AND TRAVELS
            </p> */}
          </div>
          {/* ANGANTRAYA */}
          <div className="flex flex-col items-center py-12 gap-7">
            <div className="w-[250px] h-[250px] flex items-center justify-center">
              <img
                src={service3}
                alt="service3"
                className="w-[350px] h-[350px] object-contain"
              />
            </div>
            {/* <p className="text-2xl font-noticia tracking-[3px] text-center">
              ANGANTRAYA <br />
              TRANSPORTS <br />& TRADERS
            </p> */}
          </div>
        </div>

        <div className="flex md:flex-row flex-col  justify-evenly w-full">
          {/* BROGIBRO */}
          <div className="flex flex-col items-center py-12 gap-7">
            <img
              src={service1}
              alt="service1"
              className="w-[250px] h-[250px]"
            />
            {/* <p className="text-2xl font-noticia tracking-[3px]">BROGIBRO</p> */}
          </div>
          {/* COCKTAIL */}
          <div className="flex flex-col items-center py-12 gap-7">
            <img
              src={service6}
              alt="service5"
              className="w-[250px] h-[250px]"
            />
            {/* <p className="text-2xl font-noticia tracking-[3px] text-center">
              COCKTAIL <br />
              MEDIA
            </p> */}
          </div>

          {/* MIDLEAD */}
          <div className="flex flex-col items-center py-12 gap-7">
            <img
              src={service5}
              alt="service5"
              className="w-[250px] h-[250px]"
            />
            {/* <p className="text-2xl font-noticia tracking-[3px] text-center">
              MIDLEAD <br />
              TECHNOVATIONS
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [activePackage, setActivePackage] = useState(1);

  let title = {
    para: [
      "The name says it all, ‘One Above Destination Management Services’; we are not just a travel company or tour operator selling packages or an Event Management Company pairing the passion for social events and business or a MICE Operator facilitating specialized tours for corporates; we are an all-inclusive global Destination Management Company handling all the above verticals with ease, expertise and efficiency.         ",
    ],
    sub: [],
    last: [],
  };

  if (activePackage === 2) {
    title = {
      para: [
        "At Angantraya Birdseye LLP, we specialize in creating memorable travel experiences for both leisure and corporate clients. Our services encompass a wide range of offerings, including:",
      ],
      sub: [
        "Cultural Packages: Immerse yourself in uplifting cultural, artistic, and spiritual travel experiences.",
        "Corporate Packages: Tailored travel solutions for Meetings, Incentives, Conventions, and Events (MICE).",
        "Honeymoon Packages: Romantic getaways designed for newlyweds seeking unforgettable moments.",
        "Adventure Packages: Thrilling and exciting adventure travel experiences for the adventurous soul.",
        "Corporate Auto Consultancy: Expert consultancy for Light Motor Vehicle (LMV) and Heavy Motor Vehicle (HMV) procurement.",
        "Supplier of Hospitality linen's: We specialize in supplying and exporting the tailored bed linen, pillow covers, towels, and more to the hospitality sector, meeting their specific needs with quality and precision in every order.",
      ],
      last: [
        "Our commitment is to deliver exceptional travel management services, ensuring satisfaction and creating lasting memories for our clients.",
      ],
    };
  }

  if (activePackage === 3) {
    title = {
      para: [
        "Our team at Angantraya Birdseye LLP consists of passionate and experienced professionals who are dedicated to providing the highest level of service. From destination management experts and travel consultants to corporate advisors and industry specialists, our team collaborates seamlessly to bring your travel dreams to life.",
      ],
      sub: [
        "[Founder's Name]: The visionary leader who laid the foundation of Angantraya Birdseye LLP, bringing a wealth of experience and passion for the travel industry.",
        "[Key Team Members]: A group of dynamic individuals with expertise in various facets of travel, corporate consultancy, and business management.",
        "[Support Staff]: Our dedicated support staff ensures smooth operations and excellent customer service.",
      ],
      last: [
        "Together, we form a cohesive unit committed to making every travel experience with Angantraya Birdseye LLP exceptional, seamless, and unforgettable.",
      ],
    };
  }

  return (
    <section className="md:p-12 p-5 flex flex-col">
      <div className="px-4 md:px-0 flex gap-4 md:justify-around my-4 font-arvo border-b pb-4 border-black overflow-x-auto text-sm">
        <button
          className={`${
            activePackage === 1 ? "bg-black text-white" : "bg-white"
          } border-2 border-black p-3 md:p-6 tracking-[5px]`}
          onClick={() => setActivePackage(1)}
        >
          WHO WE ARE ?
        </button>

        <button
          className={`${
            activePackage === 2 ? "bg-black text-white" : "bg-white"
          } text-black border-2 border-black p-3 md:p-6 tracking-[5px]`}
          onClick={() => setActivePackage(2)}
        >
          WHAT WE DO ?
        </button>

        {/* <button
          className={`${
            activePackage === 3 ? "bg-black text-white" : "bg-white"
          } text-black border-2 border-black p-3 md:p-6 tracking-[5px]`}
          onClick={() => setActivePackage(3)}
        >
          TEAM
        </button> */}
      </div>

      <div className="py-6">
        {title && title.sub && (
          <div className="font-amethysta font-normal text-xl my-8">
            {title.para.map((item, index) => (
              <p key={index} className="my-6">
                {item}
              </p>
            ))}
            <ol>
              {title.sub.map((item, index) => (
                <p key={index} className="my-6">
                  {activePackage === 2 && `${index + 1}.`}
                  {activePackage === 3 && `•`}
                  {item}
                </p>
              ))}
            </ol>
            {title.last.map((item, index) => (
              <p key={index} className="my-6">
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default About;

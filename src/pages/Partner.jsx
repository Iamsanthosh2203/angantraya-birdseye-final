import { useState } from "react";
import logo from "../assets/logo.png";
import line1 from "../assets/line1.png";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Footer from "../constants/Footer";

function Partner() {
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await fetch("https://formspree.io/f/xaygzwlw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
        console.log(formDataObject);
        window.location.href = "/";
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
      className="relative flex flex-col font-primary min-h-screen bg-white"
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
            <img src={line1} alt="line" />
          </div>

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
              <img src={line1} alt="ine1" />

              <div
                className={
                  enquire
                    ? "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 translate-y-0 duration-200"
                    : "absolute top-16 h-f w-full bg-white text-black p-4 hidden flex-col gap-3 -translate-y-12 duration-200 -z-10"
                }
              >
                <a onClick="handleDestinationsClick">Book Online</a>
                <a onClick="handleEmailClick">By Email</a>
                <a onClick="handleCallClick">By Phone</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <p className="text-6xl bursh-font text-center">Partner With Us</p>

      <p className="text-center my-12 text-xl w-[70%] mx-auto font-adanda">
        Partnering with Angantraya Birdseye ensures a seamless collaboration
        with a team boasting extensive expertise and years of experience in
        destinations like Andaman, Bhutan, India, Nepal, Lakshadweep, and Kenya.
        Beyond industry knowledge, our commitment to sustainable tourism,
        customizable itineraries, a diverse portfolio of offerings, competitive
        pricing, and exceptional customer service guarantees your clients a
        safe, memorable, and immersive experience, reinforcing your dedication
        to responsible travel and delivering unparalleled adventures across
        these captivating destinations.
      </p>
      <p className="text-center text-4xl my-12">
        Why Partner with Angantraya Birdseye?
      </p>

      <ol className="flex flex-col gap-4 w-[70%] px-5 mx-auto">
        <li className="list-disc list-inside mx-auto text-lg">
          Expertise & Experience: With years of experience in the industry, we
          possess in-depth knowledge of Andaman, Bhutan, India, Nepal,
          Lakshadweep, Kenya, Tanzania, Uganda, and Rwanda. Our seasoned team
          ensures your clients have a safe, memorable, and immersive experience.
        </li>
        <li className="list-disc list-inside mx-auto text-lg">
          Sustainable Tourism: We are committed to sustainable tourism and
          environmental conservation. Partnering with Brogibro Safaris showcases
          your commitment to responsible travel.
        </li>
        <li className="list-disc list-inside mx-auto text-lg">
          Tailored Itineraries: We offer fully customizable itineraries to cater
          to the unique interests and preferences of your clients. From wildlife
          safaris to cultural experiences, we’ve got it covered.
        </li>
        <li className="list-disc list-inside mx-auto text-lg">
          Wide Range of Offerings: Our portfolio includes safaris, cultural
          tours, gorilla trekking, and beach getaways. We are your one-stop-shop
          for a diverse range of African adventures.
        </li>
        <li className="list-disc list-inside text-lg">
          Competitive Pricing: We offer attractive rates for our B2B partners,
          ensuring you can provide competitive packages to your clients.
        </li>
        <li className="list-disc list-inside text-lg">
          Exceptional Customer Service: Our team is dedicated to providing
          excellent support at every stage, from initial inquiries to post-trip
          feedback.
        </li>
      </ol>

      <form
        method="post"
        action="https://formspree.io/f/xaygzwlw"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[70%] mx-auto my-12">
          <input
            type="text"
            required
            name="name"
            id="name"
            placeholder="Name"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl  rounded-lg"
          />
          <input
            type="text"
            required
            name="cname"
            id="cname"
            placeholder="Company Name"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[70%] mx-auto my-12">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email ID"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl  rounded-lg"
          />
          <input
            type="number"
            name="phone"
            required
            id="phone"
            placeholder="Phone Number"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[70%] mx-auto my-12">
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl  rounded-lg"
          />
          <input
            type="text"
            name="gst"
            id="gst"
            placeholder="GST Number"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-4 bg-[#2596BE] text-white text-xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </Parallax>
  );
}

export default Partner;

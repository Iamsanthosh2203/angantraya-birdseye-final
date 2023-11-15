import logoai from "../assets/logoai.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {" "}
      <footer className="flex flex-col md:flex-row text-center mt-11 gap-6 md:gap-24">
        {" "}
        <div>
          <img src={logoai} alt="logo" />
          <b><p>DMC & B2B</p></b>
        </div>
        <div className="flex flex-col justify-between basis-[20%]">
          <p className="text-left">
            Angantraya Birdseye LLP - A Destination Management Company&B2B Tour
            Company, Package Supplier, travel management services like Cultural
            Packages, Corporate Packages, Adventure Packages, Honeymoon
            Packages, Etc.... We specialize in leisure and corporate travel to
            clients from India and other parts of the world.
          </p>
          <div className="flex gap-5 justify-center md:justify-normal items-center mt-5 md:mt-0">
            <Link to="https://www.linkedin.com/company/angantrayabirdseye/">
              <i className="fa-brands fa-linkedin-in p-3 bg-[#2596BE] rounded-full text-white"></i>
            </Link>
            <Link to="https://www.instagram.com/angantrayabirdseye">
              <i className="fa-brands fa-instagram p-3 bg-[#2596BE] rounded-full text-white"></i>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <h6 className="font-bold text-xl">Company</h6>
            <div className="flex flex-col text-lg gap-3">
              <a href="/destinations">Destinations</a>
            </div>
            <div className="flex flex-col text-lg gap-3">
              <a href="/services">Services</a>
            </div>
            <div className="flex flex-col text-lg gap-3">
              <a href="/gallery">Gallery</a>
            </div>
            <div className="flex flex-col text-lg gap-3">
              <a href="/about">About Us</a>
            </div>
            
          </div>

          <div className="flex flex-col gap-6">
            <h6 className="font-bold text-xl">Contact</h6>
            <div className="flex flex-col text-lg gap-3">
              <a href="/partner">Partner with us</a>
            </div>
            <div className="flex flex-col text-lg gap-3">
              <a href="mailto:birdseyetrip@gmail.com">Careers</a>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6">
            <h6 className="font-bold text-xl">Meet Us</h6>
            <div className="flex flex-col text-lg gap-3">
              <a href="tel:+918883226229">+918883226229</a>
              <a href="mailto:birdseyetrip@gmail.com">birdseyetrip@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-6">
          <h6 className="font-bold text-xl">Meet Us</h6>
          <div className="flex flex-col text-lg gap-3">
            <a href="tel:+918883226229">+918883226229</a>
            <a href="mailto:birdseyetrip@gmail.com">birdseyetrip@gmail.com</a>
          </div>
        </div>
      </footer>
      <div className="text-center font-recursive py-2">
        <p>
          Designed And Developed By{" "}
          <a href="https://midlead.com" className="text-[#2596BE]">
            MidLead
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

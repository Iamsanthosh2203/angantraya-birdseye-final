/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import line1 from "../assets/line1.svg";

import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Footer from "../constants/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import attraction1 from "../assets/attraction1.png";

function Hyderabad() {
  const [activePackage, setActivePackage] = useState(1);
  return (
    <>
      <ScrollToTopButton />
      <Header
        activePackage={activePackage}
        setActivePackage={setActivePackage}
      />
      <Attractions activePackage={activePackage} />
      <Overview activePackage={activePackage} />
      <Itinerary activePackage={activePackage} />
      <Included activePackage={activePackage} />
      <NotIncluded activePackage={activePackage} />
      <Booking />
      <Footer />
    </>
  );
}
function ScrollToTopButton() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Check if the screen width is less than a certain threshold (e.g., 768px) to determine if it's a mobile screen
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
  };

  // Listen for window resize events to update the isMobile state
  useEffect(() => {
    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isMobile ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
}
// eslint-disable-next-line react/prop-types
function Header({ activePackage, setActivePackage }) {
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
  const handleClick = (packageNumber) => {
    setActivePackage(packageNumber);
  };

  const [enquire, setEnquire] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for an instant scroll
    });
  }
  scrollToTop();

  return (
    <div id="sticky-header" className="bg-white">
      <style>
        {`
          #sticky-header {
            position: sticky;
            top: 0;
            z-index: 50;
          }
          /* Additional styling if needed */
        `}
      </style>
      <Parallax
        strength={500}
        className="flex flex-col font-primary text-black top-0 sticky z-50 w-full"
      >
        <nav className="pr-6 hidden md:flex items-center justify-between w-full border-b-[1px] border-black ">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="flex gap-24 font-bold text-xl">
            <Link to="/">HOME</Link>
            <Link to="/destinations">DESTINATIONS</Link>
            <a href="/services">OUR SERVICES</a>
            <a href="/gallery">GALLERY</a>
            <a href="/about">ABOUT US</a>
          </div>

          <div
            onClick={() => setEnquire(!enquire)}
            className="flex gap-2 relative"
          >
            <button>ENQUIRE NOW</button>
            <img src={line1} alt="" />

            <div
              className={
                enquire
                  ? "absolute top-16 h-f w-full bg-black text-white p-4 flex flex-col gap-3 translate-y-0 duration-200"
                  : "absolute flex top-16 h-f w-full  text-white p-4 flex-col gap-3 -translate-y-12 duration-200 -z-10"
              }
            >
              <button onClick={handleDestinationsClick}>Book Online</button>
              <button onClick={handleEmailClick}>By Email</button>
              <button onClick={handleCallClick}>By Phone</button>
            </div>
          </div>
        </nav>

        <nav className="flex justify-between items-center md:hidden relative z-10 bg-black">
          <Link to="/">
            <img className="w-32" src={logo} alt="Logo" />
          </Link>

          <div className="px-3">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-4 text-black bg-white"
            >
              Go Back
            </button>
          </div>
        </nav>

        <div className="px-4 md:px-0 flex gap-4 md:justify-around my-4 font-arvo border-b pb-4 border-black overflow-x-auto">
          <button
            className={`${
              activePackage === 1 ? "bg-black text-white" : "bg-white"
            } border-2 border-black p-3 md:p-6 tracking-[5px]`}
            onClick={() => handleClick(1)}
          >
            PACKAGE 1
          </button>

          <button
            className={`${
              activePackage === 2 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-3 md:p-6 tracking-[5px]`}
            onClick={() => handleClick(2)}
          >
            PACKAGE 2
          </button>

          <button
            className={`${
              activePackage === 3 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-3 md:p-6 tracking-[5px]`}
            onClick={() => handleClick(3)}
          >
            PACKAGE 3
          </button>

          <button
            className={`${
              activePackage === 4 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-3 md:p-6 tracking-[5px]`}
            onClick={() => handleClick(4)}
          >
            PACKAGE 4
          </button>
        </div>

        <div className="flex overflow-x-auto items-center gap-6 md:justify-around font-amethysta text-xl border-b pb-4 border-black">
          <ScrollLink
            to="overview"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Overview
          </ScrollLink>
          <ScrollLink
            to="itinerary"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Itinerary
          </ScrollLink>
          <ScrollLink
            to="included"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            What’s Included
          </ScrollLink>
          <ScrollLink
            to="important"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Important notes
          </ScrollLink>
        </div>
      </Parallax>
    </div>
  );
}

function Attractions({ activePackage }) {
  let title = "Hyderabad two days tour package";

  if (activePackage === 2) {
    title = "Hyderabad Tour Package For Family";
  } else if (activePackage === 3) {
    title = "Hyderabad Tour Package For 3 Days";
  } else if (activePackage === 4) {
    title = "Hyderabad Tour Package For 4 Days";
  }

  return (
    <section
      id="attractions"
      className="my-8 font-arvo text-3xl font-bold md:px-24 px-8"
    >
      <h2 className="py-4">{title}</h2>
      <div className="flex items-center flex-col-reverse md:flex-row"></div>
    </section>
  );
}

function Overview({ activePackage }) {
  let description =
    "Explore the rich history and vibrant culture of Hyderabad with our 2-day tour package. Immerse yourself in the mesmerizing architecture of Golconda Fort, savor the exotic flavors of Hyderabadi biryani near Charminar, and witness the grandeur of Qutb Shahi Tombs. Your adventure continues with a fun-filled day at Ramoji Film City, ensuring a perfect blend of history, culture, and entertainment. Whether you're a history enthusiast, a food lover, or seeking thrilling adventures, Hyderabad has something for everyone. Our tour package includes comfortable accommodation, delicious meals, and expert-guided sightseeing, promising you a memorable experience in the 'City of Pearls.";

  if (activePackage === 2) {
    description =
      "Embark on a family adventure in the 'City of Pearls,' Hyderabad, where tradition and modernization seamlessly coexist. This 4-day, 3-night tour package offers a perfect blend of cultural exploration and modern entertainment. From the ancient forts and age-old mosques to the swanky malls and posh buildings of the Hi-tech city, Hyderabad has something for every member of the family. Witness the architectural marvels of Golconda Fort, explore the enchanting Ramoji Film City, stroll around Charminar, and savor the exotic flavors of Hyderabadi biryani. Our package includes comfortable accommodation, delicious meals, and expert-guided sightseeing, ensuring a memorable family getaway in Hyderabad.";
  } else if (activePackage === 3) {
    description =
      "Embark on a captivating 3-day journey through the enchanting city of Hyderabad, blending its rich historical charm with modern-day delights. Known as the 'City of Nizams,' Hyderabad beckons with its ornate palaces, historic forts, and delectable cuisine. The Hyderabad Tour Package for 3 Days offers a perfect balance of cultural exploration, thrilling adventures, and culinary delights. From the iconic Charminar to the sprawling Ramoji Film City, this tour promises an immersive experience in the heart of Telangana.";
  } else if (activePackage === 4) {
    description =
      "Embark on a delightful journey from Bangalore to Hyderabad with our 4-day tour package. Hyderabad, the city of Nizams, offers a perfect blend of historical charm and modern attractions. From the iconic Charminar to the majestic Golconda Fort, this tour promises an enriching experience. Relish the exotic flavors of Hyderabadi biryani, explore the enchanting Ramoji Film City, and witness the architectural wonders of Qutb Shahi Tombs. This Hyderabad Tour Package from Bangalore ensures a perfect getaway filled with culture, adventure, and culinary delights.";
  }
   let img = "https://images.unsplash.com/photo-1551161242-b5af797b7233?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
if (activePackage ===2){
  img="https://images.unsplash.com/photo-1568484085354-4e6149a3e658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
} else if (activePackage === 3){
  img="https://images.unsplash.com/photo-1583248619652-12efbd95d7c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
} else if (activePackage === 4){
  img="https://images.unsplash.com/photo-1646662599824-dc18e46be654?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
  return (
    <section
      id="overview"
      className="px-6 md:px-24 my-8 md:pr-52 text-xl flex justify-between md:flex-row flex-col-reverse items-center"
    >
      <div className="md:basis-[55%]">
        <h2 className="font-arvo text-3xl tracking-[6px] font-bold">
          OVERVIEW
        </h2>
        {/* <p className="my-5 mt-12 text-5xl font-light">{title}</p> */}

        <p className="text-with-space-1 text-2xl leading-10 my-12">
          {description}
        </p>
      </div>

      <div className="md:basis-[40%]">
        <img src={img} className="my-4" alt="attractions" />
      </div>
    </section>
  );
}

function Itinerary({ activePackage }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(
    new Array(6).fill(false) // Initialize an array of 6 elements with false
  );

  const toggleAccordion = (index) => {
    const updatedState = [...isAccordionOpen];
    updatedState[index] = !updatedState[index];
    setIsAccordionOpen(updatedState);
  };

  // Define an array of itinerary items
  let itineraryItems = [
    {
      day: "Day 1",
      title: "Arrival in Hyderabad",
      content: [
        "Check-in at your pre-booked hotel upon arrival.",
        "Explore the iconic Char Minar with its impressive four minarets.",
        "Visit the 18th-century Chowmahalla Palace, the official residence of the Nizams.",
        "Discover the treasures at the Salar Jung Museum, including 'The Veiled Rebecca.'",
        "Enjoy the evening at Hussain Sagar Lake with water sports activities.",
        "Return to the hotel for a peaceful overnight stay.",
      ],
    },
    {
      day: "Day 2",
      title: "Sightseeing | Departure",
      content: [
        "After breakfast, head to the magnificent Golconda Fort to explore its rich history.",
        "Visit the Qutub Shahi Tombs, a major heritage site in the city.",
        "Explore the Indo-Saracenic architecture at the AP State Museum.",
        "Visit the beautiful Birla Mandir, a marble temple dedicated to Lord Venkateshwara.",
        "Conclude the tour and head back home with wonderful memories of Hyderabad.",
      ],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival in Hyderabad: Explore the City of Pearls",
        content: [
          "Warm welcome at the railway station/bus station and transfer to the designated hotel.",
          "Check-in, freshen up, and embark on a sightseeing tour.",
          "Visit Snow World, Lumbini Park, NTR Gardens, Necklace Road, Birla Mandir, Birla Planetarium, Science Museum, and enjoy water sports at Hussain Sagar Lake.",
          "Overnight stay at the hotel.",
        ],
      },
      {
        day: "Day 2",
        title: "Ramoji Film City Adventure",
        content: [
          "Post breakfast, visit the magnificent Ramoji Film City, one of the world's famous film studios.",
          "Explore entertainment options, visit Eco Zone, Butterfly Park, Exotic Bird Park, Bonsai Garden, Fundustan, Borasura & Rain Dance, and experience Ramoji Movie Magic.",
          "Overnight stay.",
        ],
      },
      {
        day: "Day 3",
        title: "Hyderabad Historical Tour",
        content: [
          "Enjoy breakfast and proceed for a full day of sightseeing.",
          "Visit Golconda Fort, Qutub Shahi Tombs, Salar Jung Museum, Chowmahalla Palace, Mecca Masjid, and Charminar.",
          "Stroll around Lad Bazaar for shopping.",
          "Overnight stay.",
        ],
      },
      {
        day: "Day 4",
        title: "Departure from Hyderabad",
        content: [
          "Morning breakfast and check-out from the hotel.",
          "Drop-off at the railway station/bus station for the return journey.",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival in Hyderabad",
        content: [
          "Arrive at the Railway Station or Bus Stand and transfer to the hotel.",
          "Check-in at the hotel and freshen up.",
          "Visit Snow World, Birla Mandir, Birla Planetarium, and Science Museum.",
          "Explore Hussain Sagar Lake, NTR Gardens, and Necklace Road.",
          "Stroll along the famous Necklace Road and enjoy local cuisine.",
          "Overnight stay at the hotel.",
        ],
      },
      {
        day: "Day 2",
        title: "Ramoji Film City Day Out",
        content: [
          "Breakfast at the hotel.",
          "Full-day excursion to Ramoji Film City, the world's largest film complex.",
          "Enjoy city tours, adventure sports, and witness famous monuments.",
          "Return to the hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 3",
        title: "Departure",
        content: [
          "Breakfast at the hotel.",
          "Continue the sightseeing tour: Golconda Fort, Char Minar, Laad Bazaar, Chowmahalla Palace, Qutub Shahi Tombs, Salar Jung Museum, Mecca Masjid.",
          "Drop-off at the railway station or bus stand.",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival in Hyderabad",
        content: [
          "Arrive in Hyderabad and transfer to the hotel.",
          "Visit Snow World, Birla Mandir, Birla Planetarium, and Science Museum.",
          "Explore NTR Gardens and enjoy water sports at Hussain Sagar Lake.",
          "Drive on Necklace Road and overnight stay at the hotel.",
        ],
      },
      {
        day: "Day 2",
        title: "Ramoji Film City Excursion",
        content: [
          "Full-day excursion to Ramoji Film City.",
          "Explore shooting sets, theme parks, and studios.",
          "Enjoy thrilling rides and return to the hotel for dinner.",
        ],
      },
      {
        day: "Day 3",
        title: "Hyderabad Sightseeing",
        content: [
          "Visit Golconda Fort, Qutb Shahi Tombs, Salar Jung Museum, Chowmahalla Palace, and Charminar.",
          "Explore Mecca Masjid and Lad Bazaar for shopping.",
          "Evening at leisure and overnight stay.",
        ],
      },
      {
        day: "Day 4",
        title: "Departure",
        content: [
          "Check out from the hotel.",
          "Optional city exploration and tasting Hyderabadi biryani.",
          "Drop-off at Hyderabad airport/railway/bus station for the return journey.",
        ],
      },
      // Add more items here
    ];
  }

  return (
    <section
      id="itinerary"
      style={{ background: "rgba(236, 234, 234, 0.70)" }}
      className="px-7 md:px-24 py-12"
    >
      <h2 className="font-arvo text-3xl tracking-[6px] font-bold capitalize pt-24 pb-12">
        ITINERARY
      </h2>
      <Accordion allowZeroExpanded={true}>
        {itineraryItems.map((item, index) => (
          <AccordionItem
            key={index}
            className="bg-white p-6 rounded-xl font-noticia text-xl my-4"
          >
            <AccordionItemHeading onClick={() => toggleAccordion(index)}>
              <AccordionItemButton>
                <div className="flex justify-between">
                  <p>
                    <span className="font-bold">{item.day}:</span> {item.title}
                  </p>
                  {/* arrow icon based on Accordion state */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 inline-block ml-4 transform ${
                      isAccordionOpen[index] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {/* Map and render content items as a list */}
              <ul className="py-4 px-4">
                {item.content.map((contentItem, contentIndex) => (
                  <li className="list-disc list-inside" key={contentIndex}>
                    {contentItem}
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Included({ activePackage }) {
  let includedItems = [
    "Accommodation on a double and triple sharing basis.",
    "Meals including breakfast and dinner.",
    "Sightseeing as per the itinerary.",
    "Comfortable and hygienic vehicle (Sedan/SUV) for sightseeing on all days.",
    "Professional English-speaking driver cum guide.",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Accommodation on double and triple sharing basis",
      "Meals include breakfast and dinner",
      "Sightseeing as per the itinerary",
      "Comfortable and hygienic vehicle (Sedan/SUV) for sightseeing on all days",
      "Professional English-speaking driver cum guide",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Accommodation on a double or triple sharing basis.",
      "Meals: Breakfast and dinner included.",
      "Sightseeing as per the itinerary.",
      "Comfortable and hygienic vehicle (Sedan/SUV) provided for sightseeing on all days.",
      "Professional English-speaking driver cum guide included.",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Accommodation on a double and triple sharing basis.",
      "Meals include breakfast and dinner.",
      "Sightseeing as per the itinerary.",
      "Comfortable and hygienic vehicle (Sedan/SUV) for sightseeing.",
      "Professional English-speaking driver cum guide.",
    ];
  }

  return (
    <section id="included" className="md:px-24">
      <h2 className="font-arvo text-xl md:text-3xl tracking-[6px] font-bold capitalize pt-24 pb-12 text-center">
        WHAT’S INCLUDED
      </h2>

      <div className="md:px-24 px-5 py-5 md:pb-12 text-2xl">
        <ol className="list-disc list-inside flex-col flex items gap-8 text-xl">
          {includedItems.map((item, index) => (
            <li className="text-with-space-1" key={index}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function NotIncluded({ activePackage }) {
  let notIncludedItems = [
    "Lunch is not included in the package.",
    "Personal expenses such as tips, laundry, and shopping.",
    "Any additional activities not mentioned in the itinerary.",
    "Travel insurance.",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "Lunch (not included in the package)",
      "Personal expenses such as tips, laundry, and shopping",
      "Any additional activities not mentioned in the itinerary",
      "Travel insurance",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "International airfare.",
      "Lunch and personal expenses.",
      "Entry fees for attractions not mentioned in the itinerary.",
      "Optional activities and water sports at Hussain Sagar Lake.",
      "Tips and gratuities.",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "International airfare.",
      "Lunch and personal expenses.",
      "Entry fees for attractions not mentioned in the itinerary.",
      "Optional activities and water sports at Hussain Sagar Lake.",
      "Tips and gratuities.",
    ];
  }

  return (
    <section
      id="important"
      style={{ background: "rgba(236, 234, 234, 0.70)" }}
      className="md:px-24 px-5 py-12"
    >
      <h2 className="font-arvo text-xl md:text-3xl tracking-[6px] font-bold capitalize py-12">
        WHAT’S NOT INCLUDED
      </h2>

      <ol className="list-disc flex flex-col gap-4 px-12 text-xl md:text-2xl">
        {notIncludedItems.map((item, index) => (
          <li className="text-with-space-1 uppercase" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Booking() {
  return (
    <section className="md:px-24 py-24 bg-white flex flex-col">
      <div>
        <p className="text-xl md:text-3xl tracking-[2px] uppercase text-center md:leading-[2em] mb-9">
          The packages are customizable, so please contact us directly <br />
          for your customization and queries.
        </p>
      </div>

      <div className="flex justify-evenly">
        <Link
          to="/forms"
          className="px-8 py-6 hover:bg-black hover:text-white duration-150 border border-black"
        >
          ENQUIRE NOW
        </Link>
        <Link
          to="/forms"
          className="px-8 py-6 hover:bg-black hover:text-white duration-150 border border-black"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}

export default Hyderabad;

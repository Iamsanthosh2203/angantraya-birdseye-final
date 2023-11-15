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

function Andaman() {
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
  let title = "ANDAMAN PARADISE 5 NIGHTS 6 DAYS";

  if (activePackage === 2) {
    title = "EXCEPTIONAL ANDAMAN 6 NIGHTS 7 DAYS";
  } else if (activePackage === 3) {
    title = "EXPLORE ANDAMAN 5 NIGHTS 6 DAYS";
  } else if (activePackage === 4) {
    title = "7 Days Blissful Romantic Tour Of Andaman Islands";
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
    "Embark on a 5 Nights, 6 Days journey to the enchanting Andaman Islands with our 'Andaman Paradise' package. This well-crafted itinerary offers a perfect blend of history, adventure, and serene beaches. Explore the historic Cellular Jail, witness the Light and Sound Show, visit the picturesque Radhanagar Beach, and enjoy the tranquility of Havelock Island. Snorkel in the crystal-clear waters of North Bay, explore Ross Island's historical remnants, and relax on the scenic Kalapathar Beach. With comfortable accommodations, daily meals, and private transfers, this package promises an unforgettable experience in the Andaman archipelago..";

  if (activePackage === 2) {
    description =
      "Embark on a captivating 6 Nights, 7 Days journey through the stunning Andaman Islands with our 'Exceptional Andaman' package. This well-designed itinerary ensures an immersive experience, blending historical insights, adventure, and serene beach retreats. Explore the historic Cellular Jail, witness the Light and Sound Show, discover the natural beauty of Radhanagar Beach in Havelock, and unwind on the pristine shores of Neil Island. Snorkel in North Bay, visit the picturesque Ross Island, and enjoy the solitude of Kalapathar Beach. With comfortable accommodations, daily meals, and private transfers, this package promises an extraordinary sojourn in the Andaman archipelago.";
  } else if (activePackage === 3) {
    description =
      "Embark on an unforgettable 5 Nights, 6 Days adventure with our 'Explore Andaman' package. Immerse yourself in the rich history of Cellular Jail, witness the beauty of Radhanagar Beach in Havelock, and discover the tranquility of Neil Island. This meticulously crafted itinerary combines cultural exploration, water sports, and beach relaxation, promising an exceptional Andaman experience. With comfortable accommodations, daily meals, and private transfers, this package is designed for those seeking a perfect blend of adventure and leisure in the Andaman archipelago.";
  } else if (activePackage === 4) {
    description =
      "Embark on a 7 Days Blissful Romantic Tour of Andaman Islands, where azure waters, sandy beaches, and historical landmarks create the perfect backdrop for a romantic escapade. This enchanting journey includes visits to Port Blair, Havelock Island, Neil Island, Ross Island, and North Bay. Experience the historical charm of Cellular Jail, indulge in water sports, and witness the natural beauty of pristine beaches. Unwind in comfortable accommodations, savor delicious meals, and create timeless memories with your loved one";
  }
  let img =
    "https://images.unsplash.com/photo-1631364377744-2d0a1e5c40cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  if (activePackage === 2) {
    img =
      "https://images.unsplash.com/photo-1650451846800-b384c1ca0b25?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (activePackage === 3) {
    img =
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (activePackage === 4) {
    img =
      "https://images.unsplash.com/photo-1591260861580-e6dacfb30cb1?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
      title: "Port Blair – City Tour",
      content: [
        "Arrive at Port Blair airport, transfer to the hotel, and check-in.",
        "Visit Carbyn’s Cove Beach, Cellular Jail, and enjoy the Light and Sound Show.",
        "Overnight stay in Port Blair.",
      ],
    },
    {
      day: "Day 2",
      title: "Port Blair - Coral Island & Ross Island Excursion",
      content: [
        "Visit North Bay for snorkeling and water sports.",
        "Explore Ross Island, the former capital of Port Blair.",
        "Return to the hotel for an overnight stay.",
      ],
    },
    {
      day: "Day 3",
      title: "Port Blair to Havelock - Radhanagar Beach",
      content: [
        "Transfer to Havelock Island by cruise.",
        "Visit Radhanagar Beach, rated as the seventh most beautiful beach in the world.",
        "Overnight stay in Havelock.",
      ],
    },
    {
      day: "Day 4",
      title: "Havelock - Elephanta Beach",
      content: [
        "Leisure day for personal activities.",
        "Explore Elephanta Beach for water sports and activities.",
        "Overnight stay in Havelock.",
      ],
    },
    {
      day: "Day 5",
      title: "Havelock - Kalapathar Beach - Port Blair",
      content: [
        "Visit Kalapathar Beach for solitude and scenic beauty.",
        "Return to Port Blair by private cruise.",
        "Evening free for local marketing.",
        "Overnight stay in Port Blair.",
      ],
    },
    {
      day: "Day 6",
      title: "Port Blair – Airport Dropping",
      content: ["Drop to the airport for departure with cherished memories."],
    },

    // Add more days as needed
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Port Blair – City Tour",
        content: [
          "Arrive at Port Blair airport, transfer to the hotel, and check-in.",
          "Visit Carbyn’s Cove Beach, Cellular Jail, and enjoy the Light and Sound Show.",
          "Overnight stay in Port Blair.",
        ],
      },
      {
        day: "Day 2",
        title: "Port Blair - Coral Island & Ross Island Excursion",
        content: [
          "Visit North Bay for snorkeling and water sports.",
          "Explore Ross Island, the former capital of Port Blair.",
          "Return to the hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 3",
        title: "Port Blair to Havelock - Radhanagar Beach",
        content: [
          "Transfer to Havelock Island by cruise.",
          "Explore Radhanagar Beach.",
          "Overnight stay in Havelock.",
        ],
      },
      {
        day: "Day 4",
        title: "Havelock - Elephanta Beach",
        content: [
          "Leisure day for personal activities.",
          "Explore Elephanta Beach for water sports.",
          "Overnight stay in Havelock.",
        ],
      },
      {
        day: "Day 5",
        title: "Havelock – Kalapathar – Neil Island",
        content: [
          "Visit Kalapathar Beach in Havelock.",
          "Board a private ferry to Neil Island.",
          "Explore Laxmanpur, Bharatpur, and Howrah Bridge beaches on Neil Island.",
          "Overnight stay in Neil Island.",
        ],
      },
      {
        day: "Day 6",
        title: "Neil - Port Blair",
        content: [
          "Board a private ferry and return to Port Blair.",
          "Overnight stay in Port Blair.",
        ],
      },
      {
        day: "Day 7",
        title: "Port Blair – Airport Dropping",
        content: ["Drop to the airport for departure with cherished memories."],
      },
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Port Blair – City Tour",
        content: [
          "Arrive at Port Blair airport, where our representative will greet you.",
          "Check-in at the hotel, and later, visit Carbyn’s Cove Beach, Cellular Jail, and witness the Light and Sound Show.",
          "Overnight stay at Port Blair.",
        ],
      },
      {
        day: "Day 2",
        title: "Port Blair - Coral Island & Ross Island Excursion",
        content: [
          "Explore North Bay for snorkeling and water sports.",
          "Visit Ross Island, the former capital of Port Blair.",
          "Return to the hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 3",
        title: "Port Blair to Havelock - Radhanagar Beach",
        content: [
          "Transfer to Havelock Island by cruise.",
          "Explore Radhanagar Beach, known for its pristine beauty.",
          "Overnight stay in Havelock.",
        ],
      },
      {
        day: "Day 4",
        title: "Havelock – Kalapathar Beach – Neil Island",
        content: [
          "Check out from the hotel, visit Kalapathar Beach in Havelock.",
          "Board a boat to Neil Island, check-in, and explore Laxmanpur, Bharatpur & Howrah Bridge beaches.",
          "Overnight stay at Neil Island.",
        ],
      },
      {
        day: "Day 5",
        title: "Neil - Port Blair",
        content: [
          "Explore Neil Island's beautiful beaches.",
          "Board a private ferry and return to Port Blair.",
          "Overnight stay in Port Blair.",
        ],
      },
      {
        day: "Day 6",
        title: "Port Blair – Airport Dropping",
        content: [
          "Drop to the airport with cherished memories of your Andaman Islands adventure.",
        ],
      },
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Port Blair - Witness the Historical Beauty of Cellular Jail",
        content: [
          "Arrival in Port Blair, transfer to the hotel, and check-in.",
          "Explore Corbyn Cove Beach, known for its coconut-palm-fringed beauty.",
          "Visit Cellular Jail and attend the Light & Sound Show narrating India's freedom struggle.",
          "Overnight stay in Port Blair.",
        ],
      },
      {
        day: "Day 2",
        title: "Havelock Island - Experience a Ferry Ride",
        content: [
          "After breakfast, take a ferry to Havelock Island.",
          "Explore Radhanagar Beach, recognized as the best beach in Asia.",
          "Overnight stay in Havelock Island.",
        ],
      },
      {
        day: "Day 3",
        title: "Havelock Island - Enjoy a Leisure Day",
        content: [
          "Relax on the pristine beaches of Havelock.",
          "Engage in snorkeling to witness underwater life.",
          "Overnight stay in Havelock Island.",
        ],
      },
      {
        day: "Day 4",
        title: "Neil Island - Explore the Beauty of Kalapathar Beach",
        content: [
          "Visit Kalapathar Beach, known for its white sands and crystal-clear blue waters.",
          "Transfer to Neil Island via ferry.",
          "Overnight stay at Neil Island.",
        ],
      },
      {
        day: "Day 5",
        title: "Neil Island - Enjoy a Ferry Ride",
        content: [
          "Explore Bharatpur Beach, Laxmanpur Beach, and Natural Coral Bridge on Neil Island.",
          "Return to Port Blair via ferry.",
          "Overnight stay in Port Blair.",
        ],
      },
      {
        day: "Day 6",
        title: "Ross & North Bay Island - Witness the Coral Views",
        content: [
          "Explore Ross Island, a former British administrative center.",
          "Visit North Bay Coral Island for its pristine beauty.",
          "Overnight stay in Port Blair.",
        ],
      },
      {
        day: "Day 7",
        title: "Departure - Time to Head Back Home",
        content: [
          "Check-out from the hotel and transfer to the airport for departure.",
        ],
      },
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
    "Meet and Greet at Port Blair Airport.",
    "Airport Transfers and Sightseeing by A/C car.",
    "Accommodation for 3 nights in Port Blair.",
    "Daily Breakfast and Dinner at Hotels in Port Blair.",
    "Entry permits, entry tickets, boat tickets.",
    "Private cruise from Port Blair to Havelock, Neil to Port Blair.",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Meet and Greet at Port Blair Airport.",
      "Airport Transfers and Sightseeing by A/C car.",
      "Accommodation for 3 nights in Port Blair and 2 nights in Havelock.",
      "Daily Breakfast and Dinner at Hotels.",
      "Entry permits, entry tickets, boat tickets.",
      "Private cruise from Port Blair to Havelock and return.",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Meet and Greet by our Tour Executives on arrival at Port Blair Airport.",
      "Airport Transfers and Sightseeing as per the itinerary by A/C car.",
      "Accommodation for 3 nights in Port Blair, 1 night in Havelock, and 1 night in Neil.",
      "Daily Breakfast and Dinner at Hotels.",
      "Entry permits, entry tickets, boat tickets wherever required.",
      "Private Cruise from Port Blair to Havelock, Neil, and back to Port Blair.",
      "Assistance at all arrival and departure points.",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Airport pick-up and drop-off as per your flight timings.",
      "Comfortable and hygienic vehicle (SUV/Sedan) based on group size.",
      "Double or triple-sharing stay in hotels as per the selected variant.",
      "Breakfast from Day 2 to the last day as per the itinerary.",
      "Driver night charges, allowances, toll tax, parking charges, etc.",
      "Experienced driver for the entire journey.",
      "Sightseeing as per the itinerary.",
      "Inter-island transfers, jetty pick-up & drop as per the itinerary.",
      "Activities as per the variant (if any).",
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
    "Lunch (unless specified)",
    "Optional activities at Harangi Dam",
    "Souvenirs and personal expenses",
    "GST 5%",
    "Personal expenses such as tips, laundry, telephone bills, and beverages",
    "Meals not specified in the itinerary",
    "Optional, suggested, or unspecified activities",
    "Camera fees",
    "Undersea Walk (Sea walking), Game Fishing, Snorkeling, and other water sports",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "GST 5%",
      "Personal expenses such as tips, laundry, telephone bills, and beverages",
      "Meals not specifically mentioned",
      "Optional, suggested, or unspecified activities",
      "Camera fee (still or movie)",
      "Undersea Walk (Sea walking), Game Fishing, Snorkeling, and all other water sports",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "GST (as applicable)",
      "Personal expenses such as tips, laundry, telephone bills, and beverages",
      "Meals not specifically mentioned",
      "Optional activities and unspecified activities",
      "Camera fee (still or movie)",
      "Undersea walk (Sea walking), Game Fishing, Snorkeling, and all other water sports",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "Air/train fare",
      "Entry tickets to attractions",
      "Early check-in and late checkout",
      "Lunch and dinner at hotels",
      "Boating and other activities",
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

export default Andaman;

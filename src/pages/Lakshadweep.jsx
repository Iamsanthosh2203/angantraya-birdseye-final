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

function Lakshadweep() {
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
  let title = "Discover Serenity in Lakshadweep - Kavaratti Island Resort";

  if (activePackage === 2) {
    title = "Explore the Serenity of Lakshadweep - Bangaram Island Getaway";
  } else if (activePackage === 3) {
    title = "Discover Agatti Island Paradise - A Domestic Getaway";
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
    "Escape to the pristine Lakshadweep islands with our exclusive Kavaratti Island Resort Package. Nestled between 8° and 12° North Latitudes and 71° and 74° East Longitudes, these islands offer an idyllic retreat for those seeking solitude and peace in a verdant environment. The package centers around Kavaratti, the administrative capital, known for its warm sandy beaches, turquoise lagoons teeming with marine life, and exciting water sports activities. Immerse yourself in the tranquility and beauty of Lakshadweep, where every moment promises an unforgettable experience";

  if (activePackage === 2) {
    description =
      "Escape to the pristine beauty of Lakshadweep with our exclusive Bangaram Island Getaway package. This 6-day journey offers a perfect blend of relaxation and adventure. Immerse yourself in the turquoise waters, white sandy beaches, and vibrant marine life of Bangaram Island. Indulge in thrilling water sports, explore nearby islands, and create memories that will last a lifetime.";
  } else if (activePackage === 3) {
    description =
      "Escape to the pristine beauty of Agatti Island with our exclusive domestic package. This 4-day journey offers a perfect blend of relaxation and adventure, allowing you to explore the natural wonders of Lakshadweep. Immerse yourself in the turquoise waters, indulge in water sports, and create unforgettable memories in this tropical paradise.";
  } else if (activePackage === 4) {
    description =
      "Escape to the pristine beauty of Agatti Island with our exclusive domestic package. This 4-day journey offers a perfect blend of relaxation and adventure, allowing you to explore the natural wonders of Lakshadweep. Immerse yourself in the turquoise waters, indulge in water sports, and create unforgettable memories in this tropical paradise.";
  } 

  let img = "https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  if (activePackage ===2){
    img= "https://images.unsplash.com/photo-1562075704-a6f2d6a42c77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  } else if (activePackage === 3){
    img="https://images.unsplash.com/photo-1642661913340-5bad1fe0da9b?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  } else if (activePackage === 4){
    img="https://images.unsplash.com/photo-1646130322178-c9d8da261891?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      title: "Arrival at Agatti Island – Kavaratti",
      content: [
        "Arrive at Agatti Airport and transfer to Kavaratti Island by a scenic boat journey (2-3 hours).",
        "Check-in at the luxurious resort, enjoy a delicious lunch, and unwind.",
        "Explore the nearby beach in the evening, witnessing a breathtaking sunset.",
        "Savor a delightful dinner and relax for an overnight stay at Kavaratti Island.",
      ],
    },
    {
      day: "Days 2 to 5",
      title: "Kavaratti – Days for Dive and Water Sports",
      content: [
        "Embark on thrilling water sports activities, including scuba diving, kayaking, and snorkeling.",
        "Relax and soak up the sun at the resort, surrounded by the pristine beauty of Kavaratti.",
        "Opt for optional excursions to Kavaratti Island lagoon, Marine Aquarium, Museum, Dolphin Dive Centre, and Ujra Mosque (additional charges apply).",
        "Enjoy overnight stays at the serene Kavaratti Island.",
      ],
    },
    {
      day: "Day 6",
      title: "Kavaratti - Agatti (Departure)",
      content: [
        "After a delightful breakfast, transfer to Agatti Island by a scenic boat ride.",
        "Depart from Agatti Airport, cherishing the beautiful memories of your island adventure.",
      ],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival at Agatti Island – Bangaram",
        content: [
          "Arrive at Agatti Airport, greeted by our representative.",
          "Transfer to Bangaram Island by boat.",
          "Check-in at the resort, have lunch, and relax.",
          "Evening exploration of the nearby beach and sunset.",
          "Dinner and overnight stay at Bangaram Island.",
        ],
      },
      {
        day: "Day 2",
        title: "Bangaram - Thinnakara Excursion & Leisure",
        content: [
          "Optional half-day excursion to Thinnakara Island (Direct Payment).",
          "Witness turtles in the lagoon, enjoy the serene beach, and water sports.",
          "Return to Bangaram Island, leisure time after lunch.",
          "Dinner and overnight stay at Bangaram Island.",
        ],
      },
      {
        day: "Days 3 to 5",
        title: "Bangaram – Days for Dive and Water Sports",
        content: [
          "Breakfast followed by water sports activities (Direct Payment).",
          "Enjoy scuba diving, kayaking, snorkeling, and other fun activities.",
          "Relax with sunbathing and unwind at the resort.",
          "Overnight stay at Bangaram Island.",
        ],
      },
      {
        day: "Day 6",
        title: "Bangaram - Agatti (Departure)",
        content: [
          "Breakfast, then transfer to Agatti Island by boat (40 min).",
          "Reach Agatti Airport and fly to Kochi with cherished memories.",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Kochi-Agatti (by Flight) - Island Welcome & Sightseeing",
        content: [
          "Arrive at Agatti Airport and Island Sightseeing",
          "Arrive at Agatti Airport, greeted by our representative.",
          "Transfer to the hotel, lunch, and relaxation.",
          "Island sightseeing including Public Library, Anthropological Museum, South Beach, Eastern Jetty, NIOT Sea Water Desalination Plant, and Lagoon Beach.",
          "Evening exploration of the nearby beach and sunset.",
          "Dinner and overnight stay at Agatti Island.",
        ],
      },
      {
        day: "Day 2",
        title: "Agatti - Kalpetti Island Trip (Subject to weather condition)",
        content: [
          "Optional Kalpetti Island Trip and Water Sports",
          "Optional half-day excursion to Kalpetti Island by boat (Direct Payment).",
          "Return to Agatti for lunch and enjoy the rest of the day for leisure and water sports.",
          "Water sports activities like diving, snorkeling, kayaking, fishing, reef watch, etc. (Direct Payment).",
          "Dinner and overnight stay at Agatti.",
        ],
      },
      {
        day: "Day 3",
        title: "Agatti - Day for Water Sports (Subject to weather condition)",
        content: [
          "Full Day for Water Sports and Leisure",
          "Full day free for water sports activities and leisure.",
          "Enjoy activities like diving, snorkeling, kayaking, fishing, reef watch, etc. (Direct Payment).",
          "Dinner and overnight stay at Agatti.",
        ],
      },
      {
        day: "Day 4",
        title: "Departure from Agatti",
        content: [
          "Check-out and Departure",
          "Breakfast and check-out from the hotel.",
          "Transfer to Agatti Airport for departure.",
          "Departure with cherished memories of Lakshadweep.",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Welcome to Kerala, Transfer to Munnar",
        content: [
          "Airport transfer and sightseeing",
          "Arrive at Cochin Airport",
          "Visit Spice Plantations, Valara, and Cheeyappara Falls en route to Munnar",
          "Check-in at the hotel in Munnar",
          "Leisure time to explore the local markets",
          "Overnight stay at the hotel in Munnar",
        ],
      },
      {
        day: "Day 2",
        title: "Sightseeing at Munnar",
        content: [
          "Breakfast at the hotel",
          "Full-day sightseeing tour of Munnar",
          "Visit Mattupetty Dam, Echo Point, Nursery Garden, Photo Point, Eravikulam National Park, Anaimudi Peak, and Tea Museum",
          "Overnight stay at the hotel in Munnar",
        ],
      },
      {
        day: "Day 3",
        title: "Transfer to Thekkady",
        content: [
          "Breakfast at the hotel",
          "Journey to Thekkady through scenic landscapes",
          "Check-in at the hotel in Thekkady",
          "Enjoy a wildlife safari at the Periyar Tiger Reserve",
          "Overnight stay at the hotel in Thekkady",
        ],
      },
      {
        day: "Day 4",
        title: "Thekkady to Alleppey",
        content: [
          "Breakfast at the hotel",
          "Travel to Alleppey, a land of serene backwaters",
          "Check-in at a Kerala houseboat",
          "Cruise through the intricate network of canals",
          "Enjoy lunch, dinner, and an overnight stay on the houseboat",
        ],
      },
      {
        day: "Day 5",
        title: "Departure from Alleppey",
        content: ["Breakfast on the houseboat", "Disembark from the houseboat"],
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
    "Accommodation in Deluxe AC Suite at Kavaratti Island Resort (double/triple sharing basis)",
    "All-inclusive meals with buffet options for breakfast, lunch, and dinner",
    "Land transfer from Agatti airport to the boat jetty and back",
    "Scenic boat transfer from Agatti to Kavaratti and back",
    "Entry permit for Kavaratti",
    "All permits, tolls, fuel charges, parking charges, and driver allowances for land transportation",
    "Experienced driver for comfortable and safe travel",
    "Knowledgeable guide for insightful sightseeing of various attractions",
    "Goods and Services Tax (GST)",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Accommodation in a Standard AC Cottage at Bangaram Island Resort",
      "All meals included (buffet) at Bangaram's main restaurant, open beach barbeque, and beach bar",
      "Car transfer from Agatti Airport to the boat jetty and back",
      "Boat transfers between Agatti and Bangaram Island",
      "Entry permit for Bangaram",
      "Sightseeing of various attractions on the islands",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Sea view cottage at Sea Shell Beach Resort.",
      "All meals included in the package.",
      "Car transfer from Agatti Airport to the resort and back.",
      "Land excursion in Agatti by car.",
      "Entry permit for Agatti.",
      "GST (Goods and Services Tax).",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Accommodation in hotels and a Kerala houseboat",
      "Breakfast at hotels",
      "All meals during the houseboat stay",
      "Airport and railway station transfers",
      "Parking, tolls, driver allowance, and fuel costs",
      "GST, VAT, and service charges",
      "Sightseeing transfers by cab",
      "Full-day sightseeing in Munnar",
      "Wildlife safari in Thekkady",
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
    "Alliance Air flights (Kochi to Agatti Island and return) with specific timings and baggage allowance details",
    "Kavaratti Excursion (Rs. 1,200 + tax per person)",
    "Nature expenses and other water sports activities directly payable at the resort",
    "Additional baggage fees (Rs. 465 extra per kg)",
    "Expenses not mentioned in the inclusions",
    "No credit card or debit card facilities at the resort; payments in rupees, dollars, or euros",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "Alliance Air flights (Kochi to Agatti Island and return):",
      "- ETD 08:55 / ETA 10:15 (Kochi to Agatti)",
      "- ETD 10:45 / ETA 12:05 (Agatti to Kochi)",
      "- Baggage allowance: 15 kg check-in, 7 kg hand baggage (Extra baggage at Rs. 465 per kg)",
      "Thinnakara Excursion: Rs. 1,200 + tax per person",
      "Nature expenses, bar, water sports, dive, Ayurveda, and extra activities directly payable at the resort",
      "Exclusive of 5% GST",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "Alliance Air flights (Kochi to Agatti Island and return).",
      "- ETD 08:55 / ETA 10:15 (Kochi to Agatti)",
      "- ETD 10:45 / ETA 12:05 (Agatti to Kochi)",
      "- Baggage allowance: 15 kg check-in, 7 kg hand baggage (Extra baggage at Rs. 465 per kg).",
      "Nature expenses, water sports, dive, and extra activities directly payable at the resort.",
      "Excursions not mentioned in inclusions.",
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

export default Lakshadweep;

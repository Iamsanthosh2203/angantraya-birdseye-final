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

function Nepal() {
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
  let title = "Enchanting Kathmandu Exploration - A Spiritual Odyssey";

  if (activePackage === 2) {
    title = "Kathmandu Tour Package From Delhi";
  } else if (activePackage === 3) {
    title = "Kathmandu Sightseeing Tour For 4 Days and 3 Nights";
  } else if (activePackage === 4) {
    title = "6 Days Nepal Tour Package";
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
    "Embark on a soul-stirring journey with our 4-day Nepal tour package, offering a captivating exploration of Kathmandu's rich history, cultural treasures, and spiritual sanctuaries. Immerse yourself in the divine aura of Pashupatinath Temple, sway to the rhythm of aarti, and witness the architectural marvels of Durbar Square. Delve into the spiritual essence of Swayambhunath and Boudhanath, concluding your adventure with the panoramic views of Nagarkot.";

  if (activePackage === 2) {
    description =
      "Embark on a captivating 3-day journey from Delhi to Kathmandu, the mystical capital city of Nepal. Immerse yourself in the timeless charm of Kathmandu as you explore its beautiful alleyways, visit UNESCO World Heritage Sites, and seek blessings at the sacred Pashupatinath Temple. Relive Bollywood moments at the majestic Durbar Square and experience the rich Newari culture in the medieval town of Bhaktapur. This Kathmandu tour package offers a perfect blend of cultural exploration, historical wonders, and tranquil moments in the heart of the Himalayas.";
  } else if (activePackage === 3) {
    description =
      "Embark on a captivating Kathmandu Sightseeing Tour for 4 Days and 3 Nights, exploring the timeless charm and cultural richness of Nepal's capital city. From the iconic Pashupatinath Temple to the majestic Durbar Square and the breathtaking views from Nagarkot, this tour promises a blend of spirituality, history, and natural beauty. With accommodation, meals, transfers, and sightseeing included, immerse yourself in the enchanting landscapes and cultural treasures of Kathmandu.";
  } else if (activePackage === 4) {
    description =
      "Embark on a mesmerizing 5 Nights 6 Days Nepal Tour, a journey that blends spirituality, nature's wonders, and cultural exploration. Begin in the vibrant capital, Kathmandu, where you'll explore UNESCO World Heritage Sites, seek blessings at sacred temples, and walk through the charming old city. Continue to Pokhara, a haven of nature, for breathtaking landscapes and serene lakeside experiences. The tour concludes with the panoramic views of the Himalayas in Nagarkot. With accommodation, meals, transfers, and sightseeing included, this tour promises a perfect blend of adventure and tranquility.";
  }
  let img = "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  if (activePackage ===2){
    img= "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S2F0aG1hbmR1fGVufDB8fDB8fHww"
  } else if (activePackage === 3){
    img="https://images.unsplash.com/photo-1526712318848-5f38e2740d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  } else if (activePackage === 4){
    img="https://images.unsplash.com/photo-1574064864132-6d5870d168ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      title: "Arrival & Sunset Aarti at Pashupatinath Temple",
      content: [
        "Arrive at the airport and transfer to the hotel.",
        "Attend the sunset aarti at Pashupatinath Temple, a divine experience.",
        "Return to the hotel for an overnight stay.",
      ],
    },
    {
      day: "Day 2",
      title: "Kathmandu Local Valley Sightseeing",
      content: [
        "Visit Jal Narayan or Budhanilkantha, a colossal statue of Lord Vishnu.",
        "Explore Swayambhunath Temple, a hilltop stupa offering panoramic views.",
        "Head to Boudhanath Stupa, the largest stupa in South Asia.",
        "Discover the historical charm of Durbar Square.",
        "Evening for shopping and leisure.",
        "Overnight stay at the hotel.",
      ],
    },
    {
      day: "Day 3",
      title: "Nagarkot & Bhaktapur Durbar Square",
      content: [
        "Transfer to Nagarkot, visit Narayanhiti Palace Museum en route.",
        "Explore Bhaktapur Durbar Square, a conglomeration of pagoda and shikhara style temples.",
        "Enjoy adventure activities like hiking or trekking in Nagarkot.",
        "Experience a scenic sunset view.",
        "Overnight stay in Nagarkot.",
      ],
    },
    {
      day: "Day 4",
      title: "Departure from Kathmandu",
      content: [
        "Leisure time until departure.",
        "Transfer to the airport for your onward journey.",
      ],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Delhi to Kathmandu | Welcome to the Himalayan Gateway",
        content: [
          "Arrive at Indira Gandhi International Airport (IGI) and board your flight to Kathmandu.",
          "Complete immigration at Tribhuvan International Airport, meet our representative, and transfer to the hotel.",
          "Check-in, rest, and leisure time. Overnight stay in Kathmandu.",
        ],
      },
      {
        day: "Day 2",
        title: "Sightseeing in Kathmandu | Explore UNESCO World Heritage Sites",
        content: [
          "Post breakfast, embark on a city tour of Kathmandu.",
          "Visit Pashupatinath Temple, Boudhanath Stupa, Durbar Square, and Swayambhunath Stupa.",
          "Explore Thamel (Local Market) if time permits.",
          "Return to the hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Excursion to Bhaktapur | A City of Architectural Masterpieces and Ancient Sculptures",
        content: [
          "Check out from the hotel and journey to Bhaktapur.",
          "Explore architectural wonders like 55 Windows Palace, Golden Gate, and Nyatapola Temple.",
          "Return to Kathmandu and drop-off at Tribhuvan International Airport for the onward flight to Delhi.",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu | Welcome to the Himalayan Gateway",
        content: [
          "Arrival at Tribhuvan International Airport.",
          "Transfer to the hotel for check-in.",
          "Leisure time or explore the local area.",
          "Overnight stay in Kathmandu.",
        ],
      },
      {
        day: "Day 2",
        title: "Sightseeing in Kathmandu | Explore UNESCO World Heritage Sites",
        content: [
          "Visit Pashupatinath Temple and Boudhanath Stupa.",
          "Explore Durbar Square and Swayambhunath Stupa.",
          "Optional exploration of Thamel (Local Market).",
          "Overnight stay in Kathmandu.",
        ],
      },
      {
        day: "Day 3 ",
        title:
          "Drive to Nagarkot via Bhaktapur | Take a closer look at the mighty Himalayan peaks",
        content: [
          "Drive to Nagarkot via Bhaktapur.",
          "Explore Bhaktapur's architectural wonders.",
          "Sunset Tour of Nagarkot for panoramic Himalayan views.",
          "Overnight stay in Nagarkot.",
        ],
      },
      {
        day: "Day 4",
        title: "Departure | Bid Farewell with a lot of memories",
        content: [
          "Witness the sunrise and glowing Himalayan peaks.",
          "Breakfast at the hotel.",
          "Transfer to Tribhuvan International Airport for departure.",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: " Kathmandu Arrival | Welcome to the Himalayan Gateway",
        content: [
          "Arrival at Tribhuvan International Airport.",
          "Transfer to the hotel in Kathmandu.",
          "Leisure time or explore the local area.",
          "Overnight stay in Kathmandu.",
        ],
      },
      {
        day: "Day 2",
        title: "Sightseeing in Kathmandu | Explore UNESCO World Heritage Sites",
        content: [
          "Visit Pashupatinath Temple and Boudhanath Stupa.",
          "Explore Durbar Square and Swayambhunath Stupa.",
          "Optional exploration of Thamel (Local Market).",
          "Overnight stay in Kathmandu.",
        ],
      },
      {
        day: "Day 3",
        title: "Transfer to Pokhara | Blessings at Manakamana Temple",
        content: [
          "Drive to Pokhara via Manakamana Devi temple.",
          "Take blessings at the temple and proceed to Pokhara.",
          "Check-in at the hotel in Pokhara.",
          "Leisure time or explore the local area.",
          "Overnight stay in Pokhara.",
        ],
      },
      {
        day: "Day 4",
        title: "Sightseeing in Pokhara | Nature's Haven in Simple Words",
        content: [
          "Explore Devi's Waterfall, Gupteshwar Cave, and Bindhyabasini Temple.",
          "Leisure time to enjoy the scenic beauty of Pokhara.",
          "Overnight stay in Pokhara.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Pokhara to Nagarkot | Take a closer look at the mighty Himalayan peaks",
        content: [
          "Drive to Nagarkot from Pokhara.",
          "Arrival in Nagarkot and check-in at the hotel.",
          "Sunset Tour at Nagarkot with panoramic Himalayan views.",
          "Overnight stay in Nagarkot.",
        ],
      },
      {
        day: "Day 6",
        title: "Kathmandu Departure | Bid Farewell with lots of memories",
        content: [
          "Witness the sunrise and glowing Himalayan peaks.",
          "Breakfast at the hotel.",
          "Transfer to Tribhuvan International Airport for departure.",
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
    "Accommodation in a comfortable hotel.",
    "Meals as per the itinerary (Breakfast).",
    "Sightseeing to Pashupatinath Temple, Jal Narayan, Swayambhunath, Boudhanath Stupa, Durbar Square, Narayanhiti Palace Museum, Bhaktapur Durbar Square, and Nagarkot.",
    "Sunset aarti experience at Pashupatinath Temple.",
    "Transfers as per the itinerary.",
    "Accommodation in Coorg on a double/triple sharing basis",
    "Breakfast and dinner",
    "Transportation in a sedan/SUV/TT based on group size",
    "Permits, tolls, fuel charges, parking charges, and driver allowances",
    "Highly experienced driver",
    "Knowledgeable guide",
    "Sightseeing of various attractions",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Accommodation on a double sharing basis with breakfast.",
      "To and from flights from Delhi.",
      "Private cab for all transfers within Kathmandu and to Bhaktapur.",
      "Private cab for all sightseeing activities as per the itinerary.",
      "Airport transfers in Nepal.",
      "All applicable taxes on accommodation.",
      "All toll taxes, driver's allowance, fuel charges, etc.",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Accommodation on a double sharing basis with breakfast.",
      "All transfers from Kathmandu, Nagarkot, or Kathmandu by a private cab.",
      "All sightseeing by a private cab, as per the itinerary.",
      "02 airport transfers by cab.",
      "All applicable taxes on accommodation.",
      "All toll taxes, driver's allowance, fuel charges, etc.",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Accommodation on a double sharing basis with breakfast.",
      "All sightseeing by a private cab, as per the itinerary.",
      "02 airport transfers by cab.",
      "All applicable taxes on accommodation.",
      "All toll taxes, driver's allowance, fuel charges, etc.",
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
    "Airfare and related expenses.",
    "Additional meals and personal expenses.",
    "Entry fees for optional activities and excursions.",
    "Travel insurance.",
    "Gratuities.",
    "Any expenses not mentioned in the inclusions",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "Tips.",
      "Lunch and dinner (unless specified).",
      "Personal expenses.",
      "International flights.",
      "Visa fees.",
      "Any other extras not detailed in the itinerary.",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "International airfare.",
      "Lunch and dinner.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Travel insurance.",
      "Optional activities and entrance fees not mentioned in the itinerary.",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "International airfare.",
      "Lunch and dinner.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Travel insurance.",
      "Optional activities and entrance fees not mentioned in the itinerary.",
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
        <button className="px-8 py-6 hover:bg-black hover:text-white duration-150 border border-black">
          CONTACT US
        </button>
      </div>
    </section>
  );
}

export default Nepal;

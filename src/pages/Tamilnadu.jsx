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

function Tamilnadu() {
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
  let title = "Tamilnadu - Ooty Package";

  if (activePackage === 2) {
    title = "Chennai To Yelagiri Tour Package";
  } else if (activePackage === 3) {
    title = "Honeymoon Package Overview";
  } else if (activePackage === 4) {
    title = "Chariot Beach Resort Mahabalipuram | Luxury Seaside Retreat";
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
    "Escape to the serene hill stations of Ooty and Kodaikanal, where nature's beauty and tranquility await. These two destinations, known as the Queen of Hill Stations and the Princess of Hill Stations, respectively, offer picturesque landscapes, pristine lakes, lush gardens, and a rich cultural experience. Immerse yourself in the natural beauty of Ooty and Kodaikanal while creating lifelong memories. Book your Ooty and Kodaikanal tour package now.";

  if (activePackage === 2) {
    description =
      "Escape to the tranquil hill station of Yelagiri, nestled amidst the lush green valleys, rose gardens, and orchards of Tamil Nadu. This 3-day tour from Chennai offers a complete package that immerses you in the beauty of nature. Explore gushing waterfalls, ancient temples, and picturesque lakes, making it a perfect getaway for those seeking serenity and rejuvenation.";
  } else if (activePackage === 3) {
    description =
      "Escape the hustle and bustle of daily life and embark on a romantic and enchanting journey with our Ooty Kodaikanal Munnar Honeymoon Package. These three hill stations offer the perfect backdrop for your romantic getaway. In Ooty, witness the breathtaking sunset at Doddabetta Peak, explore the vibrant Botanical Garden, and stroll through the fragrant Rose Garden. In Kodaikanal, enjoy a romantic boat ride on the tranquil Kodaikanal Lake, walk hand in hand on Coaker's Walk, and immerse yourself in the beauty of colorful flowers at Bryant Park. Finally, in Munnar, relish boating at the serene Mattupetty Dam, take in the panoramic views from Dolphin's Nose viewpoint, and create timeless memories at Echo Point. This honeymoon package promises an unforgettable experience surrounded by the natural beauty of these hill stations, allowing you to cherish these moments forever.";
  } else if (activePackage === 4) {
    description =
      "Escape to the blissful shores of Mahabalipuram with our exclusive staycation deal at Chariot Beach Resort. Nestled amidst the scenic beauty of misty sandy beaches, this luxury resort promises a rejuvenating experience. With a remarkable rating of 4.8/5 from 109 reviews and endorsed by Thrillophilia, it guarantees a safe and secure environment. Immerse yourself in the charm of Mahabalipuram, featuring spacious rooms, engaging activities, and a wellness spa.";
  }
  let img = "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b290eXxlbnwwfHwwfHx8MA%3D%3D"
  if (activePackage ===2){
    img= "https://images.unsplash.com/photo-1649570957235-56a26f7577bc?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  } else if (activePackage === 3){
    img="https://images.unsplash.com/photo-1570832764204-f209aa9cd28f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  } else if (activePackage === 4){
    img="https://images.unsplash.com/photo-1620987327429-2ff481733060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      day: "Day 1: Arrival in Ooty | ",
      title: "Welcome to The Princess of Hill Stations",
      content: [
        "Start your journey from Bangalore to Ooty, a scenic 5-6 hour drive.",
        "Check in at your chosen hotel or resort in Ooty and enjoy some leisure time.",
        "Explore the charming hill station of Ooty at your own pace.",
        "Overnight stay in Ooty.",
      ],
    },
    {
      day: "Day 2: Ooty Sightseeing | ",
      title: "Relax by the Beautiful Ooty Lake ",
      content: [
        "Breakfast at your hotel.",
        "Visit Doddabetta Peak for breathtaking panoramic views of the Nilgiri range.",
        "Explore the Botanical Gardens with its diverse plant species.",
        "Enjoy boating at Ooty Lake, surrounded by hills and eucalyptus trees.",
        "Discover the largest rose garden in India at Rose Garden.",
        "Overnight stay in Ooty.",
      ],
    },
    {
      day: "Day 3: Coonoor Excursion | ",
      title: "A Visit to the Beautiful Sim's Park",
      content: [
        "Breakfast at your Ooty hotel.",
        "Head to Coonoor, a picturesque hill station, for a day's excursion.",
        "Explore Sim's Park, known for its diverse collection of trees and flowers.",
        "Visit Dolphin's Nose for panoramic views of hills and tea plantations.",
        "Continue to Lamb's Rock for scenic views.",
        "Return to Ooty for an evening at leisure.",
        "Overnight stay in Ooty.",
      ],
    },
    {
      day: "Day 4: Transfer from Ooty to Kodaikanal | ",
      title: "Welcome to the Princess of Hill Stations",
      content: [
        "Breakfast at your Ooty hotel.",
        "Journey to Kodaikanal, a 6-7 hour drive.",
        "Check in at your hotel in Kodaikanal.",
        "Spend the evening at leisure, taking in the town's beauty and tranquility.",
        "Overnight stay in Kodaikanal.",
      ],
    },
    {
      day: "Day 5: Kodaikanal Sightseeing | ",
      title: "Visit the Fascinating Pillar Rocks",
      content: [
        "Breakfast at your Kodaikanal hotel.",
        "Explore Kodaikanal, starting with Kodaikanal Lake, offering boating and fishing activities.",
        "Visit Bryant Park, a botanical garden featuring rare plant species.",
        "Stroll along Coakers Walk for panoramic views of hills and valleys.",
        "Admire the Pillar Rocks, three giant rock pillars with spectacular views.",
        "Return to your Kodaikanal hotel for the night.",
      ],
    },
    {
      day: "Day 6: Departure | ",
      title: "Take a Bagful of Happy Memories",
      content: [
        "Enjoy breakfast at your Kodaikanal hotel and complete check-out.",
        "A representative will accompany you on an 8-9 hour drive back to Bangalore.",
        "Arrive in Bangalore in the evening and return home with cherished memories.",
      ],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1 ",
        title: "Hogenakkal Waterfalls & Yelagiri Arrival",
        content: [
          "Start your journey with a pick-up from Chennai airport or railway station.",
          "Proceed to Hogenakkal Waterfalls, often referred to as the 'Niagara of India.' Enjoy boating and swimming in the majestic waterfall.",
          "Arrive in Yelagiri and check into your hotel.",
          "Evening at leisure; explore nearby places or embark on a short hike in the hills.",
          "Overnight stay at the hotel in Yelagiri.",
        ],
      },
      {
        day: "Day 2 ",
        title: "Yelagiri Local Sightseeing",
        content: [
          "Begin your day with a hearty breakfast.",
          "Explore Yelagiri's popular tourist attractions:",
          "Nilavoor Lake, an artificial lake surrounded by picturesque gardens.",
          "Devi Temple and Thambiran Lotus Pond within the same vicinity.",
          "Velavan Temple, dedicated to Lord Murugan, known for its unique statue of Lord Murugan and Valli.",
          "Punganoor Lake, an artificial lake with a central fountain offering row boating and scenic walks.",
          "Nature Park, featuring a children's park, musical fountain, aquarium, seasonal garden, bamboo house, and poly house.",
          "Return to the hotel for a relaxing overnight stay.",
        ],
      },
      {
        day: "Day 3 ",
        title: "Departure",
        content: [
          "Enjoy a delicious breakfast at the hotel.",
          "Check out from the hotel and begin your journey back to Chennai.",
          "En route, visit Jalagamparai Waterfalls, renowned for its reputed healing properties and ability to cure skin infections.",
          "Conclude your Chennai to Yelagiri tour by getting dropped off at your preferred location in Chennai.",
        ],
      },
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1: Transfer from Bangalore to Ooty",
        title: "Welcome to The Queen of Hill Stations",
        content: [
          "A representative will meet you in Bangalore and escort you on a scenic journey to Ooty, offering stunning views of the Nilgiri Mountains.",
          "Check in to your Ooty hotel upon arrival and unwind.",
          "Explore Ooty at your own pace, taking in its colonial architecture, bustling markets, and vibrant culture.",
          "Overnight stay in Ooty.",
        ],
      },
      {
        day: "Day 2: Ooty Sightseeing",
        title: "A Visit to The Famous Rose Garden",
        content: [
          "Begin your day with breakfast at your hotel.",
          "Explore Doddabetta Peak, the highest point in the Nilgiri Mountains, offering panoramic views.",
          "Visit the Rose Garden, a picturesque park with a vast variety of roses.",
          "Enjoy a romantic boat ride on Ooty Lake during the enchanting sunset.",
          "Overnight stay in Ooty.",
        ],
      },
      {
        day: "Day 3: Connor Excursion",
        title: "Enjoy The Iconic Toy Train Ride",
        content: [
          "Start your day with breakfast.",
          "Explore Sim's Park, known for its diverse botanical wonders.",
          "Visit Lamb's Rock for breathtaking views of the Coimbatore Plains and surrounding tea estates.",
          "Head to Dolphin's Nose viewpoint for panoramic vistas.",
          "Embark on a scenic toy train ride in the Nilgiri Mountains.",
          "Return to Ooty for an overnight stay.",
        ],
      },
      {
        day: "Day 4: Transfer from Ooty to Kodaikanal",
        title: "Welcome to The Princess of Hill Stations",
        content: [
          "After breakfast, journey to Kodaikanal, taking in the Western Ghats' scenic beauty.",
          "Upon arrival, spend the day at leisure, exploring the town or relaxing in its serene surroundings.",
          "Overnight stay in Kodaikanal.",
        ],
      },
      {
        day: "Day 5: Kodaikanal Sightseeing",
        title: "Take in The Scenic Views From The Coaker's Walk",
        content: [
          "Begin your day with breakfast.",
          "Visit Kodaikanal Lake for boating, fishing, or a leisurely walk.",
          "Explore Bryant Park's exotic flora.",
          "Discover Coaker's Walk for stunning panoramic views.",
          "Overnight stay in Kodaikanal.",
        ],
      },
      {
        day: "Day 6: Exploring Kodaikanal ",
        title: "Relax By The Berijam Lake",
        content: [
          "Enjoy breakfast.",
          "Visit Berijam Lake for breathtaking views.",
          "Explore the serene Pine Forest.",
          "Overnight stay in Kodaikanal.",
        ],
      },
      {
        day: "Day 7: Transfer from Kodaikanal to Munnar",
        title: "Welcome to The Kashmir of South India",
        content: [
          "After breakfast, head to Munnar, enjoying the scenic drive.",
          "Visit Mattupetty Dam for boating and Echo Point for stunning natural echoes.",
          "Overnight stay in Munnar.",
        ],
      },
      {
        day: "Day 8: Departure and Sightseeing",
        title: "A Visit to Top Station",
        content: [
          "After breakfast and check-out, visit Top Station for panoramic views.",
          "Return for your onward journey to Cochin.",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival in Mahabalipuram",
        content: [
          "2:00 PM: Check-in at Chariot Beach Resort",
          "2:30 PM - 6:00 PM: Settle into your room and explore the resort amenities",
          "7:00 PM: Dinner at the resort's dining facility",
        ],
      },
      {
        day: "Day 2",
        title: "Leisure Day at Chariot Beach Resort",
        content: [
          "8:00 AM - 10:00 AM: Breakfast",
          "10:00 AM - 1:00 PM: Engage in resort activities (tennis, cricket, badminton)",
          "1:00 PM: Lunch",
          "2:00 PM - 5:00 PM: Relax at the wellness spa with Ayurvedic treatments",
          "7:00 PM: Dinner",
        ],
      },
      {
        day: "Day 3",
        title: "Departure",
        content: [
          "8:00 AM - 10:00 AM: Breakfast",
          "12:00 PM: Check-out and depart from Chariot Beach Resort",
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
    "Accommodation in Hotels on Double/Triple Sharing",
    "Breakfast from Day 2 to Day 6",
    "Private Vehicle Transportation (Sedan/SUV/Hatchback)",
    "Permits",
    "Parking Charges",
    "Toll Fees",
    "Fuel",
    "Experienced Driver cum Guide",
    "Sightseeing as per Itinerary",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Accommodation on a double or triple sharing basis",
      "Breakfast on Day 2 and Day 3",
      "Guided sightseeing as per the itinerary",
      "Comfortable and hygienic vehicle (Sedan/SUV) for all sightseeing activities",
      "Professional English-speaking driver-cum-guide",
      "AC vehicle transfers from Chennai",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Accommodation in Hotels on Double/Triple Sharing",
      "Meals: Breakfast from Day 2 to Day 8",
      "Transportation: Private Vehicle (Sedan/SUV/Hatchback/TT, based on group size)",
      "Permits",
      "Parking Charges",
      "Toll Fees",
      "Fuel",
      "Experienced Driver cum Guide",
      "Scenic Road Journey from Bangalore to Ooty",
      "Sightseeing as per the Itinerary",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Comfortable accommodation in a choice of rooms (Garden View, Sea View, Family Room, Pool Side Cottage, Sea View Cottage, Sea View Suite)",
      "Delicious breakfast to kickstart your day",
      "Complimentary Wi-Fi for seamless connectivity",
      "Access to resort amenities such as swimming pool, badminton court, and basketball court",
      "Dining facility offering multi-cuisine homely meals",
      "Housekeeping services for a neat and hygienic stay",
      "Free parking facilities for your convenience",
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
    "Flights or transportation to Bangalore (Start/End Point)",
    "Lunch and Dinner",
    "Boating and fishing costs at Ooty and Kodaikanal Lakes",
    "Personal expenses and tips",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "Flights or train tickets to and from Chennai",
      "Lunch and dinner expenses",
      "Personal expenses, tips, and gratuities",
      "Any additional activities or services not mentioned in the itinerary",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "Airfare or Train Tickets",
      "Lunch and Dinner",
      "Entry Fees (if any) to tourist attractions not mentioned in the itinerary",
      "Personal Expenses",
      "Travel Insurance",
      "Any additional activities or services not specified in the itinerary",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "Gondola ride or any other activities not mentioned in the itinerary",
      "Laundry and dry-cleaning services (available at an additional charge)",
      "Any additional meals or snacks not specified in the package",
      "Personal expenses, tips, and gratuities",
      "Optional tours or activities outside the resort premises",
      "Gondola tickets for optional Gorson Bugyal hike (if chosen)",
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

export default Tamilnadu;

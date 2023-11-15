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

function Gujarat() {
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
  let title = "White Rann Resort Kutch";

  if (activePackage === 2) {
    title = "Dwarka Somnath Tour Package";
  } else if (activePackage === 3) {
    title = "Dwarka Somnath Gir Tour Package";
  } else if (activePackage === 4) {
    title = "Wildlife Expedition in Gujarat: A 6-Day Adventure";
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
    "Experience the mesmerizing beauty of the White Rann at Dhordo, Kutch, with a stay at the White Rann Resort. As the official operator for RANN UTSAV, the resort provides a unique opportunity to explore Kutch's enchanting desert life, vibrant culture, and breathtaking natural beauty. Whether you're an adventure enthusiast or someone seeking a tranquil retreat, the resort offers a range of recreational options and outdoor activities. Immerse yourself in the rich Gujarati culture with daily folk dance and music performances. The package includes a stay in a luxurious Swiss tent, a desert safari, camel ride during sunset, and complimentary breakfast.";

  if (activePackage === 2) {
    description =
      "Embark on a spiritual journey with the Dwarka Somnath Tour Package by Thrillophilia. This 3-day tour takes you to the holy land of Dwarka, believed to be part of Lord Krishna's kingdom, and Somnath, home to the Somnath temple, one of the twelve Lord Shiva Jyotirlingas. Immerse yourself in the divine atmosphere of these ancient towns, visit age-old temples, and witness the rich cultural and historical heritage.";
  } else if (activePackage === 3) {
    description =
      "Embark on a 6-day journey through the vibrant state of Gujarat with our Dwarka Somnath Gir Tour Package. This meticulously crafted vacation takes you through five enchanting destinations, including Ahmedabad, Jamnagar, Dwarka, Somnath, and Gir. Immerse yourself in the rich culture, history, and natural beauty of these places as you explore temples, historic sites, and the wilderness of Gir, home to the majestic Asiatic Lions.";
  } else if (activePackage === 4) {
    description =
      "Embark on a thrilling six-day journey through the untamed wilderness of Gujarat, India. This adventure takes you to Gir National Park, the abode of Asiatic Lions, and introduces you to the vibrant birdlife at Nal Sarovar Bird Sanctuary. Immerse yourself in the rich culture of Kutch, known for its traditional textile making and embroidery. The experience is enhanced with stays in eco-friendly safari resorts and tents in the desert, providing a close encounter with nature";
  }
  let img = "https://images.unsplash.com/photo-1669015881702-951de590db31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  if (activePackage ===2){
    img="https://images.unsplash.com/photo-1591700430569-9469d38b1006?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  } else if (activePackage === 3){
    img="https://plus.unsplash.com/premium_photo-1664302797043-869952aeecd3?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  } else if (activePackage === 4){
    img="https://www.gujaratexpert.com/wp-content/uploads/2019/12/Gir-National-Park-Safari.jpg"
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
      title: "Arrival at White Rann Resort",
      content: [
        "Check-in at White Rann Resort at 12:00 PM.",
        "Relax and explore the resort premises.",
        "Enjoy recreational activities such as billiards and table tennis.",
        "In the evening, embark on a thrilling desert safari in a jeep.",
        "Experience a camel ride while witnessing the beautiful sunset.",
        "Immerse yourself in the rich Gujarati culture with a folk dance show.",
        "Overnight stay in a luxurious Swiss tent.",
      ],
    },
    {
      day: "Day 2",
      title: "Departure",
      content: [
        "Wake up to the serene surroundings of the White Rann.",
        "Have a complimentary breakfast.",
        "Check-out by 09:30 AM with fond memories of your desert retreat.",
      ],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival in Dwarka",
        content: [
          "Arrive in Dwarka and check-in to your hotel.",
          "Visit Dwarkadhish Temple, dedicated to Lord Krishna.",
          "Explore Nageshwar Jyotirlinga Temple, one of the twelve Jyotirlingas.",
          "Overnight stay in Dwarka.",
        ],
      },
      {
        day: "Day 2",
        title: "Dwarka to Somnath",
        content: [
          "Proceed to Somnath, a town known for the Somnath temple.",
          "Visit Bhalka Tirth, believed to be the place where Lord Krishna was accidentally wounded.",
          "Explore Somnath Temple, a significant Jyotirlinga.",
          "Enjoy the evening Aarti at the temple.",
          "Overnight stay in Somnath.",
        ],
      },
      {
        day: "Day 3",
        title: "Departure",
        content: [
          "Check-out from the hotel.",
          "Visit Triveni Sangam Ghat.",
          "Depart for your onward journey.",
        ],
      },
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival in Ahmedabad",
        content: [
          "Arrive in Ahmedabad, the colorful city of Gujarat.",
          "Check-in to your hotel and relax.",
          "Optionally explore local markets or take a stroll along the Sabarmati Riverfront.",
        ],
      },
      {
        day: "Day 2",
        title: "Ahmedabad to Jamnagar",
        content: [
          "After breakfast, depart for Jamnagar.",
          "Visit the Lakhota Lake and Lakhota Palace.",
          "Explore the beautiful Ranmal Lake and Khijadia Bird Sanctuary.",
          "Overnight stay in Jamnagar.",
        ],
      },
      {
        day: "Day 3",
        title: "Jamnagar to Dwarka",
        content: [
          "Proceed to Dwarka, the ancient city known for its temples.",
          "Visit the Dwarkadhish Temple, Nageshwar Jyotirlinga, and Rukmini Devi Temple.",
          "Enjoy the evening aarti at Dwarkadhish Temple.",
          "Overnight stay in Dwarka.",
        ],
      },
      {
        day: "Day 4",
        title: "Dwarka to Somnath",
        content: [
          "Head to Somnath, a historic pilgrimage site.",
          "Explore Somnath Temple, known for its stunning architecture.",
          "Visit Bhalka Tirth and Triveni Ghat.",
          "Witness the mesmerizing Somnath Temple Aarti in the evening.",
          "Overnight stay in Somnath.",
        ],
      },
      {
        day: "Day 5",
        title: "Somnath to Gir",
        content: [
          "Journey to Gir, the last abode of Asiatic Lions.",
          "Explore Gir National Park and Wildlife Sanctuary.",
          "Enjoy a safari to spot lions, leopards, and various other wildlife.",
          "Overnight stay in Gir.",
        ],
      },
      {
        day: "Day 6",
        title: "Departure",
        content: [
          "Check-out from the hotel in Gir.",
          "Bid farewell to the enchanting land of Gujarat as you depart for your onward journey.",
        ],
      },
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival in Ahmedabad",
        content: [
          "Arrive in Ahmedabad and transfer to the hotel.",
          "Excursion to Nal Sarovar Bird Sanctuary.",
          "Visit Mahatma Gandhi's Sabarmati Ashram, Akshardham Temple, and Adalaj Stepwell.",
          "Evening walking tour in Old Ahmedabad.",
          "Dinner and overnight stay in Ahmedabad.",
        ],
      },
      {
        day: "Day 2",
        title: "Ahmedabad to Bhavnagar",
        content: [
          "Drive to Bhavnagar after breakfast.",
          "Visit Blackbuck National Park, Victoria Park, and Takhteshwar Temple.",
          "Dinner and overnight stay in Bhavnagar.",
        ],
      },
      {
        day: "Day 3",
        title: "Bhavnagar to Dasada",
        content: [
          "Travel to Dasada and check in to an eco-friendly safari resort.",
          "Afternoon visit to Little Rann of Kutch, home of the Indian Wild Ass.",
          "Dinner at the resort.",
        ],
      },
      {
        day: "Day 4",
        title: "Exploring Dasada",
        content: [
          "Morning sightseeing, including Nawa Talao and Rann villages.",
          "Explore the rich handicrafts and embroidery.",
          "Dinner at the resort.",
        ],
      },
      {
        day: "Day 5",
        title: "Dasada to Gir National Park",
        content: [
          "Drive to Gir National Park, home of Asiatic lions.",
          "Check-in to the resort and enjoy lunch.",
          "Visit the crocodile breeding farm at Sasan.",
          "Dinner and overnight stay in Gir.",
        ],
      },
      {
        day: "Day 6",
        title: "Return to Ahmedabad",
        content: [
          "Morning safari in Gir National Park.",
          "Return to Ahmedabad (330 km/205 miles).",
          "Check-in to the hotel.",
          "Evening Ayurvedic massage and Bollywood film.",
          "Drop-off at the railway station or airport.",
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
    "Stay in a Luxury Tent: Large, airy, and serene tents with contemporary style and modern amenities, including LCD TV, room service, electronic safe, free Wi-Fi, and more.",
    "Activities: Billiards, table tennis, jeep safari, camel ride, and folk dance show.",
    "Complimentary Breakfast",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Accommodation: 2 nights' stay in comfortable hotels.",
      "Meals: Daily breakfast included.",
      "Sightseeing: Visit Dwarkadhish Temple, Nageshwar Jyotirlinga Temple, Bhalka Tirth, Somnath Temple, and Triveni Sangam Ghat.",
      "Aarti: Experience the evening Aarti at Somnath Temple.",
      "Comfortable Transportation: Travel in comfort with included transfers.",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Accommodation in well-appointed hotels.",
      "Daily breakfast and dinner.",
      "Transportation between cities and local sightseeing.",
      "Entrance fees to temples, monuments, and wildlife sanctuary.",
      "Safari in Gir National Park.",
      "Experienced tour guide.",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Accommodation in hotels and eco-friendly safari resorts on a sharing basis.",
      "Breakfast and dinner on all days.",
      "Guided sightseeing tours.",
      "Driver's allowance.",
      "Entry fees to parks and attractions.",
      "All transportation during the tour in a private vehicle.",
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
    "Transportation to and from the resort.",
    "Any additional meals or beverages not mentioned in the package.",
    "Personal expenses, tips, and gratuities.",
    "Expenses related to activities not specified in the itinerary.",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "Personal Expenses: Expenses of a personal nature are not included.",
      "Meals: Lunch and dinner are not included.",
      "Travel Insurance: Travel insurance is not provided.",
      "Tips: Tips and gratuities are at your discretion.",
      "Any Other Expenses: Any other expenses not mentioned in the inclusions.",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "Airfare or train tickets.",
      "Lunch and personal expenses.",
      "Any additional activities or services not mentioned in the itinerary.",
      "Travel insurance.",
      "Tips and gratuities.",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "Airfare or train tickets.",
      "Lunch and personal expenses.",
      "Optional activities or services not mentioned in the itinerary.",
      "Travel insurance.",
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

export default Gujarat;

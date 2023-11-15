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

function Uttrakhand() {
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
  let title =
    "Best of Uttarakhand Tour Package A 4-Day Journey of Spiritual Bliss and Natural Wonders";

  if (activePackage === 2) {
    title =
      "Badrinath Yatra Package: A 6-Day Spiritual Journey in the Himalayas";
  } else if (activePackage === 3) {
    title =
      "Mussoorie Rishikesh Group Tour Package: A 4-Day Adventure and Spiritual Retreat";
  } else if (activePackage === 4) {
    title = "Auli and Rishikesh Adventure Package: 6 Days of Himalayan Bliss";
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
    "Embark on a soul-stirring journey through the heart of Uttarakhand with our Best of Uttarakhand Tour Package. This 4-day expedition takes you from the bustling streets of Delhi to the serene landscapes of Haridwar, Rishikesh, Mussoorie, and Dhanaulti. Immerse yourself in the spiritual aura of the Ganga, explore the vibrant hill stations, and experience the thrill of adventure in the lap of the Himalayas. With comfortable transportation, cozy accommodations, and a knowledgeable guide, this tour promises an unforgettable blend of spirituality and natural beauty.";

  if (activePackage === 2) {
    description =
      "Embark on a spiritual odyssey through the mystical landscapes of Badrinath and Rishikesh with our Badrinath Yatra Package. This 6-day pilgrimage takes you on a transformative journey from Delhi to the sacred abode of Lord Vishnu, Badrinath, and the Yoga Capital of the World, Rishikesh. Immerse yourself in the divine aura of these religious gems, witness the breathtaking beauty of the Himalayas, and explore the untouched paradise of Mana Village. With comfortable transportation, cozy accommodations, and a knowledgeable guide, this yatra promises a profound experience of spirituality and natural wonders.";
  } else if (activePackage === 3) {
    description =
      "Embark on a delightful journey from the spiritual vibes of Rishikesh to the serene hills of Mussoorie with our Mussoorie Rishikesh Group Tour Package. This 4-day tour is a perfect blend of adventure, spirituality, and camaraderie. Start your adventure in Delhi, travel through the enchanting landscapes of Mussoorie, marvel at nature's wonders, conquer the rapids of the holy Ganga, and immerse yourself in the spiritual aura of Rishikesh. With comfortable transportation, cozy accommodations, and a knowledgeable guide, this group tour is an opportunity to connect with nature, create lasting memories, and form bonds with fellow travelers.";
  } else if (activePackage === 4) {
    description =
      "Embark on an exhilarating journey through the Himalayan gems of Auli and Rishikesh with our adventure package. From the spiritual tranquility of Rishikesh to the alpine wonders of Auli, this 6-day tour is a perfect blend of adventure and serenity. Glide above the clouds on the Auli ropeway, conquer the rapids of the Ganga River, and discover the mystical beauty of Joshimath. With comfortable transportation, cozy accommodations, and an experienced guide, this adventure package offers an unforgettable Himalayan experience";
  }
  let img = "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  if (activePackage ===2){
    img= "https://images.unsplash.com/photo-1601821139990-9fc929db79ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  } else if (activePackage === 3){
    img="https://images.unsplash.com/photo-1547106365-bb4b17f50a15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  } else if (activePackage === 4){
    img="https://images.unsplash.com/photo-1632929543107-5590d81d9d80?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      title: "Delhi to Haridwar | Seek Blessings at the Evening Ganga Aarti",
      content: [
        "Begin your journey with a pickup from Delhi and a scenic drive to Haridwar.",
        "Explore Mansa Devi Temple and partake in the divine Ganga Aarti at Har ki Pauri.",
        "Check-in at the hotel for an overnight stay.",
      ],
    },
    {
      day: "Day 2",
      title: "Haridwar to Rishikesh | Explore the Yoga Capital of the World",
      content: [
        "Visit iconic sites like Laxman Jhula, Ram Jhula, and Robber's Cave in Rishikesh.",
        "Experience the spiritual Ganga Aarti in the evening.",
        "Transfer to Mussoorie for an overnight stay.",
      ],
    },
    {
      day: "Day 3",
      title: "Mussoorie Sightseeing | Welcome to the Queen of Hill Stations",
      content: [
        "Explore Gun Hill, Nag Devta Temple, Company Garden, and Kempty Falls in Mussoorie.",
        "Enjoy a leisurely stroll along Mall Road.",
        "Return to the hotel for an overnight stay.",
      ],
    },
    {
      day: "Day 4",
      title: "Mussoorie to Dhanaulti | Experience the Adventure",
      content: [
        "Head to Dhanaulti and indulge in adventurous activities at Eco Park.",
        "Visit Surkanda Devi Temple and Tehri Dam for breathtaking views.",
        "Return to the hotel for an overnight stay.",
      ],
    },
    {
      day: "Day 5",
      title: "Dhanaulti to Delhi via Dehradun | Departure",
      content: [
        "Bid farewell to the hills and embark on a scenic drive back to Delhi.",
        "En route, visit Sahastradhara for its therapeutic value.",
        "Drop-off at Delhi bus stand or railway station.",
      ],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title:
          "Start trip from Delhi | Embark on a Journey to the Wonderland of India",
        content: [
          "Pickup from a pre-decided location in Delhi for an overnight journey to Haridwar.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Reach Haridwar and Transfer to Joshimath | Pass through the Panch Prayags of Uttarakhand",
        content: [
          "Early morning arrival in Haridwar.",
          "Proceed towards Joshimath with stopovers at scenic points.",
          "Check-in at the hotel in Joshimath for an overnight stay.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Joshimath to Badrinath | Journey to the Holy Abode of Lord Vishnu",
        content: [
          "Transfer from Joshimath to Badrinath.",
          "Visit Badrinath Temple and seek blessings of Lord Vishnu.",
          "Check-in at the hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 4",
        title: "Badrinath To Rishikesh | Descending from Divine Heights",
        content: [
          "Travel from Badrinath to Rishikesh.",
          "Enroute sightseeing at Mana Village and prayags of Alaknanda River.",
          "Check-in at the hotel in Rishikesh for an overnight stay.",
        ],
      },
      {
        day: "Day 5",
        title: "Rishikesh Sightseeing | Explore the Yoga Capital of the World",
        content: [
          "Explore Laxman Jhula, Ram Jhula, and Triveni Ghat in Rishikesh.",
          "Witness the Ganga Aarti at Triveni Ghat.",
          "Return to the hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 6",
        title: "Departure | Bid Farewell",
        content: [
          "Transfer from Rishikesh to Delhi.",
          "Drop-off at a pre-decided spot in Delhi.",
        ],
      },
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Delhi to Mussoorie | Welcome to the Queen of Hill Stations",
        content: [
          "Pickup from a pre-decided spot in Delhi.",
          "Scenic drive to Mussoorie with a short stopover in Dehradun for Robber's Cave sightseeing.",
          "Check-in at the hotel in Mussoorie for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Mussoorie Sightseeing | Step into the Embrace of Himalayas",
        content: [
          "Explore Gun Hill, Nag Devta Temple, Company Garden, Kempty Falls, and Mall Road in Mussoorie.",
          "Return to the hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 3",
        title: "Mussoorie to Rishikesh | Explore the Yoga Capital of the World",
        content: [
          "Transfer from Mussoorie to Rishikesh.",
          "Visit Laxman Jhula, Ram Jhula, and Triveni Ghat in Rishikesh.",
          "Witness the Ganga Aarti at Triveni Ghat.",
          "Check-in at the hotel in Rishikesh for an overnight stay.",
        ],
      },
      {
        day: "Day 4",
        title: "Rishikesh to Delhi | Departure",
        content: [
          "Experience adventurous River rafting from Shivpuri to Rishikesh (16 Km).",
          "Freshen up, check-out from the hotel, and transfer to a pre-decided spot in Delhi.",
        ],
      },
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title:
          "Start from Delhi to Auli | Embark on a journey to the Wonderland of India",
        content: [
          "Pickup from a pre-decided location in Delhi.",
          "Overnight journey to reach Haridwar.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Reach Haridwar and Transfer to Joshimath | Pass through the Panch Prayags of Uttarakhand",
        content: [
          "Early morning arrival in Haridwar.",
          "Resume the journey towards Auli with sightseeing stopovers en route.",
          "Transfer to the hotel in Joshimath for rest.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Auli Sightseeing | Ride one of the Longest Cable Car from Joshimath to Auli",
        content: [
          "Take the famous gondola ride to Auli, experiencing breathtaking views.",
          "Optional trek to Gorson Bugyal for a 360° view of snow-capped peaks.",
          "Explore Joshimath's temples and local markets.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Auli Sightseeing | Spend the day exploring the beautiful town of Auli",
        content: [
          "Leisure day to explore Auli, visit Auli Lake, and enjoy adventure activities.",
          "Evening return to the hotel in Joshimath.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Auli to Rishikesh | Indulge in the Spiritual Aura during Ganga Aarti",
        content: [
          "Journey back to Rishikesh.",
          "Witness the evening Ganga Aarti at Triveni Ghat.",
          "Explore Laxman Jhula and Ram Jhula.",
        ],
      },
      {
        day: "Day 6",
        title: "Departure to Delhi | Goodbye with Lots of Memories",
        content: [
          "Transfer from Rishikesh to Delhi.",
          "Drop-off at the pre-decided location in Delhi.",
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
    "Pickup and drop-off from Delhi bus stand or railway station.",
    "Comfortable and hygienic vehicle (Sedan, SUV, or traveler) for sightseeing.",
    "Stay on a double- and triple-sharing basis in hygienic and sanitized hotels.",
    "Breakfast as per the itinerary.",
    "Highly-experienced driver cum guide.",
    "Sightseeing as per the itinerary.",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Pickup and drop-off from bus stand or railway station.",
      "Comfortable and hygienic vehicle (Sedan, SUV, or traveler) for sightseeing.",
      "Stay on a double- and triple-sharing basis in hygienic and sanitized hotels.",
      "Breakfast as per the itinerary.",
      "Highly-experienced driver cum guide.",
      "Sightseeing as per the itinerary.",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Pickup and drop-off from bus stand or railway station.",
      "Comfortable and hygienic shared vehicle (Sedan, SUV, or traveler) for sightseeing.",
      "Stay on a double- and triple-sharing basis in hygienic and sanitized hotels.",
      "Breakfast as per the itinerary.",
      "Highly-experienced driver cum guide.",
      "Sightseeing as per the itinerary.",
      "River rafting adventure in Rishikesh.",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Pickup and drop-off from bus stand or railway station.",
      "Comfortable and hygienic shared vehicle (Sedan, SUV, or traveler) for sightseeing.",
      "Stay on a double- and triple-sharing basis in hygienic and sanitized hotels.",
      "Breakfast as per the itinerary.",
      "Highly-experienced driver cum guide.",
      "Sightseeing as per the itinerary.",
      "River rafting adventure in Rishikesh.",
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
    "Airfare or train tickets.",
    "Lunch and dinner expenses.",
    "Optional activities or services not mentioned in the itinerary.",
    "Personal expenses.",
    "Travel insurance.",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "Airfare or train tickets.",
      "Lunch and dinner expenses.",
      "Optional activities or services not mentioned in the itinerary.",
      "Personal expenses.",
      "Travel insurance.",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "Airfare or train tickets.",
      "Lunch and dinner expenses.",
      "Optional activities or services not mentioned in the itinerary.",
      "Personal expenses.",
      "Travel insurance.",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "Airfare or train tickets.",
      "Lunch and dinner expenses.",
      "Optional activities or services not mentioned in the itinerary.",
      "Personal expenses.",
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

export default Uttrakhand;

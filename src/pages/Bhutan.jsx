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

function Bhutan() {
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
  let title = "Enchanting Bhutan Expedition (4 Nights / 5 Days)";

  if (activePackage === 2) {
    title = "Explore the Enchanting Kingdom of Bhutan";
  } else if (activePackage === 3) {
    title = "Explore the Enchanting Beauty of Bhutan in 7 Days";
  } else if (activePackage === 4) {
    title = "Discover Bhutan - Land of Happiness";
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
    "Embark on a mesmerizing journey to the mystical kingdom of Bhutan with our 4-night, 5-day travel package. From the vibrant capital city of Thimphu to the scenic beauty of Paro and Punakha, this itinerary offers a glimpse into Bhutan's rich culture, spirituality, and breathtaking landscapes. Witness iconic landmarks, explore historic dzongs, and immerse yourself in the tranquility of this Himalayan gem.";

  if (activePackage === 2) {
    description =
      "Embark on a mesmerizing 6-day journey through the mystical landscapes of Bhutan. This carefully crafted itinerary takes you to the heart of Bhutanese culture, allowing you to explore the vibrant city of Thimphu, the historical town of Paro, and the scenic beauty of Punakha. Immerse yourself in the rich cultural heritage, visit iconic landmarks, and witness the breathtaking natural wonders of the Land of the Thunder Dragon.";
  } else if (activePackage === 3) {
    description =
      "Embark on a mesmerizing 7-day journey to Bhutan, a land of happiness and tranquility. This well-crafted itinerary takes you through the picturesque landscapes and cultural wonders of Thimphu, Punakha, Phobjakha, and Paro. From the iconic Tigers Nest to the serene Dochula Pass, experience the rich cultural heritage and natural beauty that Bhutan has to offer. Immerse yourself in the Bhutanese way of life, visit sacred monasteries, and enjoy the warmth of the local hospitality.";
  } else if (activePackage === 4) {
    description =
      "Embark on an enchanting journey through the mystical landscapes of Bhutan with our meticulously crafted 8-day tour. From the bustling city of Thimphu to the serene valleys of Bumthang and Paro, this itinerary promises an immersive experience of Bhutanese culture, breathtaking scenery, and sacred sites. Witness iconic landmarks, explore ancient monasteries, and enjoy the warmth of Bhutanese hospitality";
  }
  let img = "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  if (activePackage ===2){
    img= "https://images.unsplash.com/photo-1608659377506-3b4fec4f7634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  } else if (activePackage === 3){
    img="https://images.unsplash.com/photo-1580649851649-992b28f56e98?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  } else if (activePackage === 4){
    img="https://images.unsplash.com/photo-1608318674404-91cf176097aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      title: "Arrival at IXB/NJP/Phuentsholing",
      content: [
        "Arrive at IXB/NJP/Phuentsholing, where our representative will welcome you",
        "Complete Bhutan travel permit formalities.",
        "Transfer to Thimphu (5 hours journey).",
        "Check-in at the hotel and relax",
      ],
    },
    {
      day: "Day 2",
      title: "Thimphu Sightseeing",
      content: [
        "Visit Buddha Point for panoramic views of Thimphu",
        "Explore the Memorial Chorten, a symbol of Bhutanese spirituality",
        "Experience the cultural heritage at Simply Bhutan",
        "Discover the unique Takin Preserve.",
        "Visit Thimphu Dzong, an impressive fortress-monastery.",
        "Explore the Royal Textile Museum (RTM).",
        "Wander through the Handicraft Market and town",
      ],
    },
    {
      day: "Day 3",
      title: "Paro Sightseeing (Day Trip)",
      content: [
        "Venture to the iconic Tigers Nest or Chella Pass, a prominent Bhutanese monastery",
        "Explore the historic Paro Dzong.",
        "Enjoy a leisurely time by the river",
      ],
    },
    {
      day: "Day 4",
      title: "Punakha Sightseeing (Day Trip)",
      content: [
        "Drive through Dochula Pass for stunning mountain views",
        "Visit Punakha Dzong, a majestic fortress at the confluence of two rivers",
        "Experience the thrill of crossing the Suspension Bridge",
        "Explore Chhemi Lhakhang and embark on a hike to Khamsung Yellay Namgay Chortem",
      ],
    },
    {
      day: "Day 5",
      title: "Thimphu to IXB/NJP/Phuentsholing",
      content: [
        "Check-out from the hotel in Thimphu",
        "Depart for IXB/NJP/Phuentsholing for your onward journey",
      ],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival at IXB/NJP/Phuntsholing",
        content: [
          "Our representative will welcome you and assist with Bhutan travel permit formalities.",
          "Transfer to Thimphu, a scenic journey taking approximately 5 hours.",
          "Check-in at the hotel and relax.",
        ],
      },
      {
        day: "Day 2",
        title: "Thimphu Sightseeing",
        content: [
          "Visit Buddha Point for panoramic views of Thimphu.",
          "Explore Memorial Chorten, a sacred shrine.",
          "Experience Bhutanese culture at Simply Bhutan.",
          "Visit the Takin Preserve and witness the unique national animal.",
          "Explore Thimphu Dzong and the Royal Textile Museum (RTM)",
        ],
      },
      {
        day: "Day 3",
        title: "Thimphu Sightseeing",
        content: [
          "Explore Samthokha Dzong, the oldest fortress in Bhutan.",
          "Visit the School of 13 Arts and Craft.",
          "Explore the Handicraft Market and enjoy the town excursion.",
        ],
      },
      {
        day: "Day 4",
        title: "Paro Sightseeing (Day Trip)",
        content: [
          "Hike to the iconic Tiger's Nest or visit Chele La Pass for stunning views",
          "Explore Paro Dzong, a historic fortress",
          "Enjoy the serene River View",
        ],
      },
      {
        day: "Day 5",
        title: "Punakha Sightseeing (Day Trip)",
        content: [
          "Visit Dochula Pass for breathtaking scenery",
          "Explore Punakha Dzong, a majestic fortress",
          "Walk the Suspension Bridge for thrilling views",
          "Hike to Chhemi Lhakhang and visit Khamsung Yellay Namgay Chortem",
        ],
      },
      {
        day: "Day 6",
        title: "Thimphu to IXB/NJP/Phuntsholing",
        content: [
          "Check-out from the hotel",
          "Depart for IXB/NJP/Phuntsholing, marking the end of your Bhutanese adventure",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival at IXB/NJP/Phuntsholing",
        content: [
          "Arrival at the designated point (IXB/NJP/Phuntsholing)",
          "Our representative will assist with immigration formalities and transfer to Thimphu.",
          "Travel time: 5 hours.",
        ],
      },
      {
        day: "Day 2",
        title: "Thimphu Sightseeing",
        content: [
          "Visit Buddha Point, Memorial Chorten, Simply Bhutan, Takin Preserve, Thimphu Dzong, RTM, Handicraft Market, and explore the town.",
          "A day filled with cultural and historical wonders.",
        ],
      },
      {
        day: "Day 3",
        title: "Thimphu to Punakha Sightseeing and Drive to Phobjakha",
        content: [
          "Explore Dochula Pass, Punakha Dzong, Suspension Bridge, Chhemi Lhakhang, Khamsung Yellay Namgay Chortem (Hike).",
          "Drive to Phobjakha.",
        ],
      },
      {
        day: "Day 4",
        title: "Phobjakha Sightseeing and Drive to Paro",
        content: [
          "Visit Gangtay Valley and Phobjakha Valley.",
          "Proceed to Paro.",
        ],
      },
      {
        day: "Day 5",
        title: "Paro Sightseeing",
        content: [
          "Trek to the iconic Tigers Nest (Paro Taktsang).",
          "Explore Paro Dzong and enjoy the River View.",
        ],
      },
      {
        day: "Day 6",
        title: "Paro Sightseeing",
        content: [
          "Visit Chella Pass and explore Paro town.",
          "Leisure time for personal exploration.",
        ],
      },
      {
        day: "Day 7",
        title: "Paro to IXB/NJP/Phuntsholing",
        content: [
          "Depart from Paro and transfer to IXB/NJP/Phuntsholing.",
          "Bid farewell to the enchanting land of Bhutan.",
        ],
      },

      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Arrival at IXB/NJP/Phuntsholing, Transfer to Thimphu",
        content: [
          "Meet our representative and complete Bhutan travel permit formalities.",
          "Transfer to Thimphu (5 hours).",
        ],
      },
      {
        day: "Day 2",
        title: "Thimphu Sightseeing",
        content: [
          "Explore Buddha Point, Memorial Chorten, Simply Bhutan, Takin Preserve, Thimphu Dzong, RTM, Handicraft Market.",
          "Town excursion.",
        ],
      },
      {
        day: "Day 3",
        title: "Punakha Sightseeing and Drive to Bumthang",
        content: [
          "Visit Dochula Pass, Punakha Dzong, Suspension Bridge.",
          "Drive to Bumthang.",
        ],
      },
      {
        day: "Day 4",
        title: "Bumthang Sightseeing",
        content: [
          "Explore Kichu Monastery, Jambay Lhakhang, and Burning Lake.",
        ],
      },
      {
        day: "Day 5",
        title: "Bumthang to Phobjikha Sightseeing",
        content: ["Visit Gangtey Valley and Phobjikha Valley."],
      },
      {
        day: "Day 6",
        title: "Phobjikha to Paro",
        content: ["Enjoy the scenic journey to Paro."],
      },
      {
        day: "Day 7",
        title: "Paro Sightseeing",
        content: [
          "Choose between the iconic Tiger's Nest or Chella Pass hike.",
          "Explore Paro Dzong and River View.",
        ],
      },
      {
        day: "Day 8",
        title: "Paro to IXB/NJP/Phuntsholing",
        content: [
          "Bid farewell to Bhutan and transfer to the departure point.",
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
    "Accommodation in well-selected hotels",
    "Breakfast and dinner included daily.",
    "Bhutan travel permit processing.",
    "Comfortable transfers in a private vehicle",
    "Guided sightseeing tours as per the itinerary",
    "Hike to Khamsung Yellay Namgay Chortem in Punakha",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Accommodation in comfortable hotels",
      "All meals during the tour",
      "Bhutan travel permit processing",
      "Sightseeing as per the itinerary",
      "Knowledgeable local guide",
      "Comfortable transfers in a private vehicle",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Accommodation in comfortable hotels.",
      "All meals as per the itinerary.",
      "Local transportation for sightseeing and transfers.",
      "Bhutan travel permit.",
      "Experienced English-speaking guide.",
      "Entrance fees to monuments and attractions.",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Accommodation in comfortable hotels",
      "All transfers and sightseeing in a private vehicle",
      "Professional English-speaking guide",
      "Entrance fees to monuments and attractions",
      "Daily breakfast, lunch, and dinner",
      "Bhutan travel permit processing and immigration assistance",
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
    "Airfare or train tickets to IXB/NJP/Phuentsholing",
    "Lunch and any additional meals not mentioned",
    "Personal expenses, tips, and travel insurance",
    "Expenses arising due to unforeseen circumstances like natural calamities, roadblocks, etc",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "Airfare or train tickets to IXB/NJP/Phuntsholing",
      "Personal expenses, tips, and travel insurance",
      "Additional activities not mentioned in the itinerary",
      "Expenses arising due to unforeseen circumstances like natural calamities or political disruptions",
      "Any other item not explicitly mentioned as included",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "Airfare to and from the designated points (IXB/NJP/Phuntsholing)",
      "Personal expenses, tips, and travel insurance",
      "Additional activities not mentioned in the itinerary",
      "Expenses arising due to unforeseen circumstances like natural calamities, political disruptions, etc.",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "Airfare or train tickets to IXB/NJP/Phuntsholing",
      "Personal expenses such as tips, laundry, and shopping",
      "Optional activities and experiences not mentioned in the itinerary",
      "Travel insurance",
      "Any additional expenses due to unforeseen circumstances like natural calamities, political disruptions, etc..",
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

export default Bhutan;

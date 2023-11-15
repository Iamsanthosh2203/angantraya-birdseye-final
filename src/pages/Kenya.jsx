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

function Kenya() {
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
  let title = "Explore Amboseli, Naivasha, Maasai Mara, and Nairobi (6N/7D)";

  if (activePackage === 2) {
    title = "5 Days Highlights of Kenya Safari Experience";
  } else if (activePackage === 3) {
    title = "9 Days Best of Kenya and Tanzania";
  } else if (activePackage === 4) {
    title = "Maasai Mara And Lake Nakuru Tour In Kenya";
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
    "Embark on a captivating 7-day safari adventure through Kenya's most iconic wildlife destinations. Witness the majestic landscapes of Amboseli National Park, the serene beauty of Lake Naivasha, the vast plains of Maasai Mara Game Reserve, and the vibrant city life of Nairobi. This package offers an unforgettable blend of game drives, cultural experiences, and leisure, providing a glimpse into Kenya's rich biodiversity and the Maasai way of life.";

  if (activePackage === 2) {
    description =
      "Embark on an unforgettable safari adventure through the diverse landscapes of Kenya with Brogibro Tours, Travel & Events Organizers. This 5-day journey takes you from the flamingo-filled Lake Nakuru National Park to the iconic Maasai Mara Game Reserve, offering a chance to witness the Big Five and the spectacular Wildebeest migration. The adventure continues to the foot of Mount Kilimanjaro in Amboseli National Park before concluding with a unique dining experience at the world-famous Carnivore restaurant in Nairobi. Immerse yourself in the rich wildlife and stunning scenery while enjoying the comfort and hospitality of top-notch accommodations.";
  } else if (activePackage === 3) {
    description =
      "Embark on a breathtaking 9-day adventure through the best of Kenya and Tanzania with 'Brogibro Tours, Travel & Events Organizers.' This meticulously crafted tour takes you from the captivating landscapes of Nakuru National Park and Maasai Mara in Kenya to the iconic Amboseli National Park with the majestic backdrop of Mount Kilimanjaro, and finally, the renowned Serengeti and Ngorongoro Crater in Tanzania. Immerse yourself in the diverse wildlife, stunning scenery, and rich cultural experiences that define this region. Our professional driver/guide will ensure a seamless and memorable journey for you and your travel companions.";
  } else if (activePackage === 4) {
    description =
      "Embark on an unforgettable journey through the wild landscapes of Kenya with our Maasai Mara and Lake Nakuru Tour. Immerse yourself in the mesmerizing beauty of Maasai Mara National Park and Lake Nakuru, home to exotic flora and fauna. Witness the majestic Big 5 – lion, leopard, buffalo, rhino, and elephant – in their natural habitat, and marvel at the diverse bird species around Nakuru Lake. This 3-night, 4-day adventure promises an exciting blend of game drives and wildlife spotting, making it a paradise for nature and animal enthusiasts. All meals are included, ensuring you focus solely on the thrilling experiences these destinations have to offer";
  }
  let img = "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  if (activePackage ===2){
    img= "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  } else if (activePackage === 3){
    img="https://images.unsplash.com/photo-1566296524462-e0a341bf65e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  } else if (activePackage === 4){
    img="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      title: "Nairobi – Amboseli National Park",
      content: [
        "Early breakfast and departure to Amboseli.",
        "En-route game drive and arrival at the lodge.",
        "Afternoon game drive in Amboseli.",
        "Dinner and overnight stay.",
      ],
    },
    {
      day: "Day 2",
      title: "Explore Amboseli National Park",
      content: [
        "Morning game drive with views of Mount Kilimanjaro.",
        "Visit to a Maasai village after breakfast.",
        "Afternoon rest and another game drive.",
        "Dinner and overnight stay.",
      ],
    },
    {
      day: "Day 3",
      title: "Amboseli – Lake Naivasha",
      content: [
        "Depart for Lake Naivasha after breakfast.",
        "Optional boat ride or visit to Crescent Island.",
        "Dinner and overnight stay in Naivasha.",
      ],
    },
    {
      day: "Day 4",
      title: "Naivasha – Maasai Mara",
      content: [
        "Depart for Maasai Mara after breakfast.",
        "Game drive with a visit to a Maasai village.",
        "Dinner and overnight stay in Maasai Mara.",
      ],
    },
    {
      day: "Day 5",
      title: "Discover Maasai Mara",
      content: [
        "Morning and afternoon game drives.",
        "Explore the Maasai Mara's abundant wildlife.",
        "Dinner and overnight stay.",
      ],
    },
    {
      day: "Day 6",
      title: "Maasai Mara – Nairobi",
      content: [
        "Early morning game drive and breakfast.",
        "Overland journey to Nairobi.",
        "Leisure time for shopping and sightseeing.",
        "Evening transfer to the airport.",
      ],
    },
    {
      day: "Day 7",
      title: "Nairobi",
      content: ["Breakfast at the hotel.", "Airport transfer for departure"],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Nairobi – Lake Nakuru National Park",
        content: [
          "Meet and greet at Jomo Kenyatta International Airport.",
          "Depart for Lake Nakuru National Park with lunch and an evening game drive.",
          "Overnight stay at Lake Nakuru Sopa Lodge.",
        ],
      },
      {
        day: "Day 2",
        title: "Lake Nakuru National Park – Maasai Mara Game Reserve",
        content: [
          "Depart for Maasai Mara Game Reserve after breakfast.",
          "Check-in, lunch, and afternoon game drives in Maasai Mara.",
          "Optional activities include hot air balloon safari and guided nature walks.",
          "Overnight stay at Mara Sopa Lodge.",
        ],
      },
      {
        day: "Day 3",
        title: "Full Day in Maasai Mara Game Reserve",
        content: [
          "Extensive full-day game drive in Maasai Mara with a picnic lunch at the hippo pool.",
          "Witness the Wildebeest migration and explore the diverse wildlife.",
          "Overnight stay at Mara Sopa Lodge.",
        ],
      },
      {
        day: "Day 4",
        title: "Maasai Mara Game Reserve – Amboseli National Park",
        content: [
          "Early breakfast and departure for Amboseli National Park.",
          "Afternoon game drive with views of Mount Kilimanjaro.",
          "Dinner and overnight at Amboseli Sopa Lodge.",
        ],
      },
      {
        day: "Day 5",
        title: "Amboseli National Park – Nairobi",
        content: [
          "Early morning game drive, followed by breakfast.",
          "Drive back to Nairobi with an early dinner at the Nairobi Carnivore.",
          "Airport transfer for your departure.",
        ],
      },
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Nairobi – Nakuru National Park",
        content: [
          "Meet and greet at Jomo Kenyatta International Airport.",
          "Depart for Lake Nakuru National Park, known for its flamingos and diverse bird species.",
          "Evening game drive and overnight at Flamingo Hill Tented Camp.",
        ],
      },
      {
        day: "Day 2",
        title: "Lake Nakuru National Park – Maasai Mara Game Reserve",
        content: [
          "Depart for Maasai Mara, home to the big five.",
          "Afternoon game drives and optional activities.",
          "Overnight at Mara Sopa Lodge.",
        ],
      },
      {
        day: "Day 3",
        title: "Full day in Masai Mara Game Reserve",
        content: [
          "Full day game drive with a picnic lunch at the Mara River.",
          "Witness the annual Wildebeest migration (June to October).",
          "Overnight at Mara Sopa Lodge.",
        ],
      },
      {
        day: "Day 4",
        title: "Maasai Mara Game Reserve – Amboseli National Park",
        content: [
          "Depart for Amboseli National Park, with views of Mount Kilimanjaro.",
          "Afternoon game drive and overnight at Amboseli Sopa Lodge.",
        ],
      },
      {
        day: "Day 5",
        title: "Full day in Amboseli National Park",
        content: [
          "Full day game drives with optional Maasai village visit.",
          "Overnight at Amboseli Sopa Lodge.",
        ],
      },
      {
        day: "Day 6",
        title: "Amboseli National – Arusha – Lake Manyara",
        content: [
          "Depart for Arusha and proceed to Lake Manyara.",
          "Afternoon game drive and overnight at Lake Manyara campsite.",
        ],
      },
      {
        day: "Day 7",
        title: "Lake Manyara National park – Serengeti Game Reserve",
        content: [
          "Depart for Serengeti, passing through Olduvai Gorge.",
          "Overnight at Serengeti Campsite.",
        ],
      },
      {
        day: "Day 8",
        title: "Serengeti – Ngorongoro Crater",
        content: [
          "Drive to Ngorongoro Crater for a unique wildlife experience.",
          "Picnic lunch at the crater and overnight at Ngorongoro Campsite.",
        ],
      },
      {
        day: "Day 9",
        title: "Ngorongoro – Arusha – Nairobi",
        content: [
          "Depart for Nairobi with an airport transfer.",
          "End of an amazing 9-day safari.",
        ],
      },
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Nairobi – Masai Mara",
        content: [
          "Arrive in Nairobi and embark on a 5.5-hour drive to Maasai Mara National Park.",
          "Lunch upon arrival followed by the first game drive.",
          "Relax and enjoy dinner at the overnight camp.",
        ],
      },
      {
        day: "Day 2",
        title: "Masai Mara",
        content: [
          "Morning and afternoon game drives for Big 5 spotting.",
          "Option to visit a Maasai Village (additional cost).",
          "Leisure time to unwind at the camp with dinner and an overnight stay.",
        ],
      },
      {
        day: "Day 3",
        title: "Masai Mara – Lake Nakuru",
        content: [
          "Depart from Masai Mara and head to Lake Nakuru.",
          "Lunch at Kenya Guest House followed by an afternoon game drive.",
          "Explore the diverse bird species and wildlife around Nakuru Lake.",
          "Dinner and overnight stay at Nakuru Guest House.",
        ],
      },
      {
        day: "Day 4",
        title: "Lake Nakuru - Nairobi",
        content: [
          "Early morning game drive at Lake Nakuru.",
          "Breakfast and a 3-hour drive back to Nairobi, marking the end of the tour.",
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
    "Transportation in a 4x4 Safari Land Cruiser with open roof",
    "Accommodation on a full board basis in Naivasha, Maasai Mara, and Amboseli",
    "1-night stay in Nairobi on a bed and breakfast basis",
    "Park entrance fees and government taxes",
    "English-speaking professional driver/guide",
    "Complimentary return airport transfers",
    "1 boat ride in Lake Naivasha",
    "One complimentary dinner at a local Indian restaurant in Nairobi",
  ];

  if (activePackage === 3) {
    includedItems = [
      "Transport on a 4 x 4 Land Cruiser for optimal game viewing",
      "Full board accommodation throughout the safari",
      "Accommodation in a double room",
      "All park entrance fees and government taxes",
      "Service of an English-speaking professional driver/guide",
      "All game drives as detailed in the itinerary",
      "Complimentary return airport transfers",
      "Bottled water during the safari",
      "Personalized service",
      "One-way Shuttle Bus Arusha – Nairobi",
    ];
  }

  if (activePackage === 2) {
    includedItems = [
      "Transport on a 4x4 Safari vehicle ideal for game viewing and photography",
      "Full board accommodation during the safari",
      "Accommodation in a double room",
      "All park entrance fees and government taxes",
      "Service of an English-speaking professional driver/guide",
      "Complimentary return airport transfers",
      "Bottled water during the safari",
      "Personalized service",
      "Dinner at the Carnivore",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Transfers from Nairobi to Nairobi",
      "Accommodation in camps and luxury lodges on a sharing basis",
      "All meals from lunch on Day 1 to breakfast on Day 4",
      "Game drives as per the itinerary in a Safari Minivan with a pop-up roof",
      "Park Entrance Fees",
      "One water bottle per person at each Game Drive",
      "Driver/Tour Assistant Charges",
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
    "International/domestic flights",
    "Tips and laundry",
    "Maasai village visits (optional)",
    "Balloon safari (optional)",
    "Visa fees",
    "Personal expenses",
    "Any other extras not mentioned in inclusions",
  ];
  if (activePackage === 2) {
    notIncludedItems = [
      "Lunch and dinner",
      "Entrance fees to attractions (unless specified)",
      "Personal expenses",
      "Tips",
      "Laundry",
      "Beverages/Drinks",
      "Visas",
      "Items of a personal nature",
      "Any other extras not detailed in the itinerary",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "Lunch and dinner",
      "Entrance fees to attractions (unless specified)",
      "Personal expenses",
      "Tips",
      "Laundry",
      "Beverages/Drinks",
      "Visas",
      "Items of a personal nature",
      "Any other extras not detailed in the itinerary",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "Airfare or train tickets to Nairobi",
      "Personal expenses, tips, and travel insurance",
      "Expenses arising due to unforeseen circumstances like natural calamities, roadblocks, etc.",
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

export default Kenya;

import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Forms = () => {
  const [departure, setDeparture] = useState(null);
  const [book, setBook] = useState(null);
  const [packageType, setPackageType] = useState(null);

  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
    scrollToTop();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!departure || !book || !packageType) {
      alert("Please fill in all required fields");
      return;
    }

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await fetch("https://formspree.io/f/xaygzwlw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
        console.log(formDataObject);
        window.location.reload();
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="px-6 md:px-24 py-12 text-center">
      <div className="w-full flex justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img className="md:w-auto w-[150px]" src={logo} alt="logo" />
        </div>
        <div>
          <button
            onClick={() => (window.location.href = "/destinations")}
            className="bg-black text-white px-8 py-6"
          >
            Go Back
          </button>
        </div>
      </div>
      <h4 className="text-center font-encodesans text-lg md:text-4xl">
        Please Fill This Form, We Will Get Back To You <br />
        Within 24 Hours
      </h4>
      <p className="text-center font-adanda text-xl md:text-2xl my-4 md:my-12">
        How It Works ?
      </p>
      <ol className="list-decimal list-inside text-center font-primary text-lg md:text-2xl flex-col flex gap-3">
        <li>Tell us details of your holiday plan.</li>
        <li>
          Get multiple quotes from expert agents, compare & customize further.
        </li>
        <li>Select & book the best deal.</li>
      </ol>

      <form
        action="https://formspree.io/f/xaygzwlw"
        method="POST"
        className="my-8 md:w-[60%] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            required
            id="name"
            placeholder="Name"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl  rounded-lg"
          />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Number"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          />
        </div>
        <div className="my-6">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email ID"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg w-full"
          />
        </div>
        <div className="my-3 grid grid-cols-2 gap-6">
          <input
            type="text"
            name="from"
            id="from"
            required
            placeholder="From"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          />
          <input
            type="text"
            name="to"
            id="to"
            required
            placeholder="To"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          />
        </div>
        <p className="text-left font-encodesans text-lg my-6">
          Departure Date(Choose Any)
        </p>
        <div className="grid md:grid-cols-3 font-encodesans text-[#A7A7A7] md:gap-20 gap-5">
          <div
            onClick={() => setDeparture("fixed")}
            className={`p-4 border rounded-xl ${
              departure === "fixed" ? "bg-black text-white" : ""
            }`}
          >
            Fixed
          </div>
          <div
            onClick={() => setDeparture("flexible")}
            className={`p-4 border rounded-xl ${
              departure === "flexible" ? "bg-black text-white" : ""
            }`}
          >
            Flexible
          </div>
          <div
            onClick={() => setDeparture("anytime")}
            className={`p-4 border rounded-xl ${
              departure === "anytime" ? "bg-black text-white" : ""
            }`}
          >
            Anytime
          </div>
        </div>
        <p className="text-left font-encodesans text-lg my-6">
          Preferred Hotel Category
        </p>
        <div className="flex">
          <select required name="hotel" id="hotel" className="p-4 border">
            <option value="" disabled selected>
              Select Hotel
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="my-12 flex-col md:flex-row flex gap-4 md:gap-12 text-xl">
          <p>Flights To Be Included?</p>
          <div>
            <input
              type="radio"
              required
              name="flight"
              id="yes"
              className="mx-2"
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              required
              name="flight"
              id="no"
              className="mx-2"
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <p className="text-left font-encodesans text-lg my-6">
          Budget Without Airfare : (per person)
        </p>
        <div className="md:w-[50%]">
          <input
            required
            type="number"
            name="budget"
            id="budget"
            placeholder="Enter Your Budget Value"
            className="m-0 p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg w-full"
          />
        </div>
        <div className="grid md:grid-cols-3 my-6 text-left font-encodesans text-lg md:gap-12 gap-5">
          <div className="flex flex-col gap-4">
            <p>
              Adults <span className="text-[#b6b6b6]">(12+years)</span>
            </p>
            <select required name="adults" id="adults" className="p-4 border">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="above">10+</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Infant <span className="text-[#b6b6b6]">(0-2 Years)</span>
            </p>
            <select required name="infant" id="infant" className="p-4 border">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="above">10+</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Children <span className="text-[#b6b6b6]">(2-12 Years)</span>
            </p>
            <select
              required
              name="children"
              id="children"
              className="p-4 border"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="above">10+</option>
            </select>
          </div>
        </div>
        <p className="text-left font-encodesans text-lg my-6">I Will Book</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            onClick={() => setBook("next2-3days")}
            className={`p-4 border rounded-xl ${
              book === "next2-3days" ? "bg-black text-white" : ""
            }`}
          >
            In Next 2-3 Days
          </div>
          <div
            onClick={() => setBook("In This Week")}
            className={`p-4 border rounded-xl ${
              book === "In This Week" ? "bg-black text-white" : ""
            }`}
          >
            In This Week
          </div>
          <div
            onClick={() => setBook("In This Month")}
            className={`p-4 border rounded-xl ${
              book === "In This Month" ? "bg-black text-white" : ""
            }`}
          >
            In This Month
          </div>
          <div
            onClick={() => setBook("Later Sometime")}
            className={`p-4 border rounded-xl ${
              book === "Later Sometime" ? "bg-black text-white" : ""
            }`}
          >
            Later Sometime
          </div>
          <div
            onClick={() => setBook("Just Checking Prices")}
            className={`p-4 border rounded-xl ${
              book === "Just Checking Prices" ? "bg-black text-white" : ""
            }`}
          >
            Just Checking Prices
          </div>
        </div>
        <div className="my-12 flex-col md:flex-row flex gap-4 md:gap-12 text-xl">
          <p>Cab for local sightseeing?</p>
          <div>
            <input
              required
              type="radio"
              name="cab"
              id="cabyes"
              className="mx-2"
            />
            <label htmlFor="cabyes">Yes</label>
            <input
              required
              type="radio"
              name="cab"
              id="cabno"
              className="mx-2"
            />
            <label htmlFor="cabno">No</label>
          </div>
        </div>
        <p className="text-left font-encodesans text-lg my-12">
          Which type of package would you prefer?
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div
            onClick={() => setPackageType("Customizable Package")}
            className={`p-4 border rounded-xl ${
              packageType === "Customizable Package"
                ? "bg-black text-white"
                : ""
            }`}
          >
            Customizable Package
          </div>
          <div
            onClick={() => setPackageType("Bestselling Standard Package")}
            className={`p-4 border rounded-xl ${
              packageType === "Bestselling Standard Package"
                ? "bg-black text-white"
                : ""
            }`}
          >
            Bestselling Standard Package
          </div>
        </div>
        <div className="w-full mx-0 text-left">
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            placeholder="Additional Comments"
            className="p-4 w-full border drop-shadow-xl focus:drop-shadow-2xl rounded-lg my-12"
          ></textarea>
        </div>
        <input required type="hidden" name="departure" value={departure} />
        <input required type="hidden" name="book" value={book} />
        <input required type="hidden" name="packageType" value={packageType} />
        <button
          type="submit"
          className={`p-4 border bg-[#2596BE] text-white w-full mt-12`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Forms;

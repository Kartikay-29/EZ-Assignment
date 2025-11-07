import React, { useState } from "react";
import mandalaImage from "./assets/mandala.jpg"; // make sure your image is in src/assets

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData };

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setResponseMessage("Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen w-full px-6 sm:px-12 md:px-24 py-12 bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${mandalaImage})`,
        backgroundColor: "#FFF6F1",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Semi-transparent overlay to make text pop */}
      <div className="absolute inset-0 bg-[#fff6f1]/80"></div>

      <div className="relative max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="text-[#2E2E2E]">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold mb-6">
            Join the Story
          </h2>
          <p className="font-['Inter'] text-lg mb-8 leading-relaxed">
            Ready to bring your vision to life? Let’s talk. Whether you have an
            idea, a question, or simply want to explore how we can work together —
            we’re just a message away.
          </p>
          <p className="font-['Inter'] text-lg leading-relaxed">
            Let’s catch up over coffee. Great stories always begin with a good
            conversation.
          </p>

          <div className="mt-10 space-y-1">
            <p className="text-[#D65A31] font-['Inter'] font-medium">
              vernita@varnanfilms.co.in
            </p>
            <p className="text-[#D65A31] font-['Inter'] font-medium">
              +91 98736 84567
            </p>
          </div>
        </div>

        {/* Right Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-5 z-10"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name*"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D65A31] font-['Inter']"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email*"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D65A31] font-['Inter']"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D65A31] font-['Inter']"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message*"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D65A31] font-['Inter']"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#D65A31] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#c54f29] transition font-['Inter'] font-medium"
          >
            Submit
          </button>
          {responseMessage && (
            <p className="text-center mt-3 text-[#2E2E2E] font-['Inter'] font-medium">
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;

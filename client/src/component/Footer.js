import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Building, MapPin } from "lucide-react";
import { FaHome } from "react-icons/fa";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    answer: "",
  });

  const [captcha, setCaptcha] = useState({
    num1: Math.floor(Math.random() * 10) + 1,
    num2: Math.floor(Math.random() * 10) + 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    const correctAnswer = captcha.num1 + captcha.num2;
    if (parseInt(formData.answer) !== correctAnswer) {
      alert("Incorrect CAPTCHA answer. Please try again.");
      return;
    }

    try {
      const response = await fetch("mail/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", mobile: "", email: "", message: "", answer: "" });
        setCaptcha({ num1: Math.floor(Math.random() * 10) + 1, num2: Math.floor(Math.random() * 10) + 1 });
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 py-12 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-lg font-semibold">VRS Manpower Solutions </p>
        {/* <p className="text-center text-sm mb-10">An ISO 9001:2015 Certified Recruitment Company</p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10 p-5">
          <div>
            <FaHome className="text-3xl mb-2" />
            <p className="font-semibold">PHONE</p>
            <p>+91-6232513226</p>
          </div>
          <div>
            <BiSolidPhoneCall className="text-3xl mb-2" />
            <p className="font-semibold">MOBILE</p>
            <p>+91-6232513226</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-2" />
            <p className="font-semibold">EMAIL</p>
            <p>vrs.solution12@gmail.com</p>
          </div>
        </div>
        <div id="stareted" className="grid md:grid-cols-2 gap-8 p-5 w">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-1/2 max-w-2xl justify-center item-center">
            <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Contact Us</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
              <input type="tel" id="mobile" value={formData.mobile} onChange={handleChange} placeholder="Your Mobile Number" className="w-full px-4 py-2 border rounded-lg" />
              <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address" className="w-full px-4 py-2 border rounded-lg" />
              <textarea id="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg"></textarea>
              <div className="flex items-center justify-between">
                <label>{captcha.num1} + {captcha.num2} =</label>
                <input type="text" id="answer" value={formData.answer} onChange={handleChange} className="w-16 px-4 py-2 border rounded-lg" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Submit</button>
            </form>
          </div>
          <div className="text-center text-black space-y-6">
            <div className="bg-blue-100 border shadow-lg rounded-lg p-6">
              <Building className="w-10 h-10 text-blue-700 mb-3" />
              <h4 className="font-bold text-lg">Corporate Office</h4>
              <p>Address Satyam Colony, </p>
              <p>Khandwa Naka,</p>
              <p>Indore – 452001, India</p>
            </div>
            <div className="bg-green-100 border shadow-lg rounded-lg p-6">
              <MapPin className="w-10 h-10 text-green-700 mb-3" />
              <h4 className="font-bold text-lg">Branch Office</h4>
              <p>Address Satyam Colony, </p>
              <p>Khandwa Naka,</p>
              <p>Indore – 452001, India</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">&copy; 2025 VRS Manpower Solutions </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import mock from "../assets/images/mock.jpg"
import resume from "../assets/images/resume.jpg"
import careers from "../assets/images/careers.jpg"
import it from "../assets/images/it.jpg"
import hiring from "../assets/images/hiring.jpg"
import training from "../assets/images/training.jpg"
import live from "../assets/images/live.jpg"
import counslt from "../assets/images/counslt.jpg"


const services = [
  {
    title: "Mock Interview",
    description:
      "A simulated job interview that allows candidates to practice and prepare for real interviews.",
    image:mock,
  },
  {
    title: "Resume/CV Review",
    description:
      "Get expert feedback on your resume to improve your chances of landing your dream job.",
    image: resume
  },
  {
    title: "Career Coaching",
    description:
      "One-on-one career guidance to help with career planning, job changes, and skill development.",
    image: careers
  },
  {
    title: "IT & Non-IT Recruitment",
    description:
      "Connecting the right talent with the right opportunities in both IT and Non-IT industries.",
    image: it,
  },
  {
    title: "Bulk Hiring Solutions",
    description:
      "Efficient and fast bulk hiring solutions tailored to business needs.",
    image: hiring,
  },
  {
    title: "IT Training & Skill Development",
    description:
      "Industry-relevant training programs to keep up with the latest technology trends.",
    image: training,
  },
  {
    title: "HR Internships & Live Projects",
    description:
      "Real-world HR internship opportunities to gain practical experience.",
    image: live,
  },
  {
    title: "Marketing & Business Consulting",
    description:
      "Strategic marketing and business consulting services to drive growth.",
    image: counslt,
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-10">
          From career guidance to corporate hiring, we provide expert services tailored for individuals and businesses.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl shadow-red-500 hover:shadow-lg transition cover p-3"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl w-full h-70 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartLine, faShieldAlt, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import it from "../assets/images/it.jpg";
import hiring from "../assets/images/hiring.jpg";
import payroll from "../assets/images/payroll.jpg";
import admissions from "../assets/images/admissions.jpg";
import coaching from "../assets/images/coaching.jpg";
import hospital from "../assets/images/hospital.jpg";
import manufacturing from "../assets/images/manufacturing.jpg";
import resume from "../assets/images/resume.jpg";
import training from "../assets/images/training.jpg";
import internship from "../assets/images/internship.jpg";
import consulting from "../assets/images/consulting.jpg";

const services = [
  {
    title: "IT & Non-IT Recruitment",
    description: "Find the best talent for your organization with our specialized recruitment solutions.",
    image: it,
  },
  {
    title: "Bulk Hiring",
    description: "Streamlined recruitment for large-scale hiring needs to ensure efficient staffing.",
    image: hiring,
  },
  {
    title: "Payroll Management",
    description: "Efficient and accurate payroll solutions to handle salary processing seamlessly.",
    image: payroll,
  },
  {
    title: "Colleges – Admissions",
    description: "Assistance with student admissions and placement support for educational institutions.",
    image: admissions,
  },
  {
    title: "Coaching – Teachers & Student Admissions",
    description: "Recruitment of qualified teachers and admission support for coaching institutes.",
    image: coaching,
  },
  {
    title: "Hospitals – Staff, Security, Nurses, Marketing",
    description: "Specialized staffing solutions for healthcare organizations.",
    image: hospital,
  },
  {
    title: "Manufacturing Units – Workers",
    description: "Providing skilled and semi-skilled workers for manufacturing and production units.",
    image: manufacturing,
  },
  {
    title: "Resume Creation",
    description: "Professional resume writing services to help candidates stand out in job applications.",
    image: resume,
  },
  {
    title: "IT Training & Skill Development",
    description: "Training programs designed to enhance technical and soft skills for career growth.",
    image: training,
  },
  {
    title: "HR Internship & Live Projects",
    description: "Hands-on experience for HR students and professionals through live projects.",
    image: internship,
  },
  {
    title: "Marketing & Business Consulting",
    description: "Strategic consulting to grow your business and improve marketing efforts.",
    image: consulting,
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-lg text-gray-600 mb-10">
          No matter your industry or requirement, we provide customized solutions that deliver results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 p-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl w-full h-56 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
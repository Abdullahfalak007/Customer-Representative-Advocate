import React from "react";
import imagesPath from "../data/imagesPath.json";

const services = [
  "AI-Powered CRM",
  "Business Intelligence",
  "Customer Analytics",
  "Data Analytics",
  "Content Optimization",
  "AI Chatbot Integration",
  "Test and Data Extraction",
  "Real-time System Monitor",
  "Natural Language Processing",
  "Speech Services",
];

const information = [
  "About Us",
  "Blog",
  "Contact Us",
  "Careers",
  "Partner With Us",
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Contact Information */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <img
              src={imagesPath.Signup.logo}
              alt="Logo"
              className="w-[13.6875rem] h-[5.25rem] mb-4"
            />
            <ul className="ml-6">
              <li className="flex items-center mb-4">
                <img
                  src={imagesPath.Footer.locationIcon}
                  alt="Location"
                  className="h-5 w-5 mr-2"
                />
                <address className="not-italic text-white text-[0.75rem] font-montserrat font-normal leading-normal hover:text-gray-400">
                  Florida Office2875 S Ocean Blvd, Ste.
                  <br />
                  200 Palm Beach, FL 33480
                </address>
              </li>
              <li className="flex items-center mb-4">
                <img
                  src={imagesPath.Footer.telephoneIcon}
                  alt="Telephone"
                  className="h-5 w-5 mr-2"
                />
                <a
                  href="tel:+1234567890"
                  className="text-white text-[0.75rem] font-montserrat font-normal leading-normal hover:text-gray-400"
                >
                  +1 (800) 561-2713
                </a>
              </li>
              <li className="flex items-center mb-4 font-normal">
                <img
                  src={imagesPath.Footer.emailIcon}
                  alt="Email"
                  className="h-5 w-5 mr-2"
                />
                <a
                  href="mailto:info@example.com"
                  className="text-white text-[0.75rem] font-montserrat font-normal leading-normal hover:text-gray-400"
                >
                  info@cybergen.com
                </a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <img
                    src={imagesPath.Footer.facebookIcon}
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <img
                    src={imagesPath.Footer.whatsappIcon}
                    alt="WhatsApp"
                    className="h-5 w-5"
                  />
                </a>

                <a href="#" className="text-white hover:text-gray-400">
                  <img
                    src={imagesPath.Footer.linkedInIcon}
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <img
                    src={imagesPath.Footer.twitterIcon}
                    alt="Twitter"
                    className="h-5 w-5"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* Services Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service} className="mb-2">
                  <a
                    href="#"
                    className="text-white text-[0.75rem] font-montserrat font-normal hover:text-gray-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Information Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul>
              {information.map((info) => (
                <li key={info} className="mb-2">
                  <a
                    href="#"
                    className="text-white text-[0.75rem] font-montserrat hover:text-gray-400 font-normal"
                  >
                    {info}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-white text-[0.75rem] font-montserrat font-normal w-[17.74rem] mb-2">
              Register now to get latest updates on promotions.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-[10.7465rem] h-[2.39188rem]  flex-shrink-0 rounded-l-[0.625rem] bg-[#333] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white px-4"
              />
              <button
                type="submit"
                className="w-[6.7955rem] h-[2.39188rem] flex-shrink-0 ml-[-0.5rem] rounded-[0.625rem] bg-gradient-to-b from-[#0595FC] to-[#024C80] focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-white text-[0.75rem] font-montserrat font-normal mt-2">
              By subscribing, I have accepted the Policy.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-white text-[0.75rem] font-montserrat font-normal">
            &copy; 2023 Company Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

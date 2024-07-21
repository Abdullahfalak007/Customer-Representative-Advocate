// import React from "react";
// import imagesPath from "../data/imagesPath.json";

// const services = [
//   "AI-Powered CRM",
//   "Business Intelligence",
//   "Customer Analytics",
//   "Data Analytics",
//   "Content Optimization",
//   "AI Chatbot Integration",
//   "Test and Data Extraction",
//   "Real-time System Monitor",
//   "Natural Language Processing",
//   "Speech Services",
// ];

// const information = [
//   "About Us",
//   "Blog",
//   "Contact Us",
//   "Careers",
//   "Partner With Us",
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           {/* Logo and Contact Information */}
//           <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
//             <img
//               src={imagesPath.Signup.logo}
//               alt="Logo"
//               className="w-[13.6875rem] h-[5.25rem] mb-4"
//             />
//             <ul className="ml-6">
//               <li className="flex items-center mb-4">
//                 <img
//                   src={imagesPath.Footer.locationIcon}
//                   alt="Location"
//                   className="h-5 w-5 mr-2"
//                 />
//                 <address className="not-italic text-white text-[0.75rem] font-montserrat font-normal leading-normal hover:text-gray-400">
//                   Florida Office2875 S Ocean Blvd, Ste.
//                   <br />
//                   200 Palm Beach, FL 33480
//                 </address>
//               </li>
//               <li className="flex items-center mb-4">
//                 <img
//                   src={imagesPath.Footer.telephoneIcon}
//                   alt="Telephone"
//                   className="h-5 w-5 mr-2"
//                 />
//                 <a
//                   href="tel:+1234567890"
//                   className="text-white text-[0.75rem] font-montserrat font-normal leading-normal hover:text-gray-400"
//                 >
//                   +1 (800) 561-2713
//                 </a>
//               </li>
//               <li className="flex items-center mb-4 font-normal">
//                 <img
//                   src={imagesPath.Footer.emailIcon}
//                   alt="Email"
//                   className="h-5 w-5 mr-2"
//                 />
//                 <a
//                   href="mailto:info@example.com"
//                   className="text-white text-[0.75rem] font-montserrat font-normal leading-normal hover:text-gray-400"
//                 >
//                   info@cybergen.com
//                 </a>
//               </li>
//               <li className="flex space-x-4 mt-4">
//                 <a href="#" className="text-white hover:text-gray-400">
//                   <img
//                     src={imagesPath.Footer.facebookIcon}
//                     alt="Facebook"
//                     className="h-5 w-5"
//                   />
//                 </a>
//                 <a href="#" className="text-white hover:text-gray-400">
//                   <img
//                     src={imagesPath.Footer.whatsappIcon}
//                     alt="WhatsApp"
//                     className="h-5 w-5"
//                   />
//                 </a>

//                 <a href="#" className="text-white hover:text-gray-400">
//                   <img
//                     src={imagesPath.Footer.linkedInIcon}
//                     alt="LinkedIn"
//                     className="h-5 w-5"
//                   />
//                 </a>
//                 <a href="#" className="text-white hover:text-gray-400">
//                   <img
//                     src={imagesPath.Footer.twitterIcon}
//                     alt="Twitter"
//                     className="h-5 w-5"
//                   />
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Services Section */}
//           <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
//             <h3 className="font-semibold text-lg mb-4">Services</h3>
//             <ul>
//               {services.map((service) => (
//                 <li key={service} className="mb-2">
//                   <a
//                     href="#"
//                     className="text-white text-[0.75rem] font-montserrat font-normal hover:text-gray-400"
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* Information Section */}
//           <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
//             <h3 className="font-semibold text-lg mb-4">Information</h3>
//             <ul>
//               {information.map((info) => (
//                 <li key={info} className="mb-2">
//                   <a
//                     href="#"
//                     className="text-white text-[0.75rem] font-montserrat hover:text-gray-400 font-normal"
//                   >
//                     {info}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* Newsletter Section */}
//           <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
//             <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
//             <p className="text-white text-[0.75rem] font-montserrat font-normal w-[17.74rem] mb-2">
//               Register now to get latest updates on promotions.
//             </p>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className="w-[10.7465rem] h-[2.39188rem]  flex-shrink-0 rounded-l-[0.625rem] bg-[#333] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white px-4"
//               />
//               <button
//                 type="submit"
//                 className="w-[6.7955rem] h-[2.39188rem] flex-shrink-0 ml-[-0.5rem] rounded-[0.625rem] bg-gradient-to-b from-[#0595FC] to-[#024C80] focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//               >
//                 Subscribe
//               </button>
//             </form>
//             <p className="mt-2 text-white text-[0.75rem] font-montserrat font-normal mt-2">
//               By subscribing, I have accepted the Policy.
//             </p>
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-700 pt-4">
//           <p className="text-center text-white text-[0.75rem] font-montserrat font-normal">
//             &copy; 2023 Company Inc. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import imagePaths from "../data/imagePaths.json";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-4 md:mb-0">
            <div className="foot_info">
              <a className="navbar-brand" href="https://cybergen.com">
                <img
                  src="https://cybergen.com/uploads/images/footer_logo.png?v=1719999801"
                  alt="Logo"
                  className="w-48 mb-4"
                />
              </a>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center">
                  <i className="bi bi-house mr-3"></i>
                  <a
                    href="https://www.google.com/maps/dir//2875+S+Ocean+Blvd+%23200+Palm+Beach,+FL+33480+USA/@26.6163634,-80.038212,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d8d9c696155555:0x1c62d8017f4ff797"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span>
                      Florida Office
                      <br />
                      2875 S Ocean Blvd, Ste. 200
                      <br />
                      Palm Beach, FL 33480
                    </span>
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-envelope mr-3"></i>
                  <a
                    href="mailto:info@cybergen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span>info@cybergen.com</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-phone mr-3"></i>
                  <a
                    href="tel:+1-800-561-2713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span>+1-800-561-2713</span>
                  </a>
                </li>
              </ul>
              <div className="social_icons flex space-x-4 mt-4">
                <a
                  href="https://twitter.com/TheCyberGen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/thecybergen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-cyber-generation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/cybergen1team/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCnlC6DWQ_dXpSebcZ1YLnzg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="terms mt-4">
                <span className="mr-3">
                  <i className="fal fa-file-contract"></i>
                </span>
                <a href="terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="links">
              <div className="cont">
                <h6 className="link_title font-bold">Services</h6>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://cybergen.com/cyber-security-solutions"
                      className="hover:underline"
                    >
                      Cyber Security Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/software-development"
                      className="hover:underline"
                    >
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/digital-branding-services"
                      className="hover:underline"
                    >
                      Digital Branding
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/managed-services"
                      className="hover:underline"
                    >
                      Managed Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/professional-services"
                      className="hover:underline"
                    >
                      Professional Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/strategic-staffing"
                      className="hover:underline"
                    >
                      Strategic Staffing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/cybergen-academy"
                      className="hover:underline"
                    >
                      Technical Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/ai"
                      className="hover:underline"
                    >
                      Artificial Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/procurement-services"
                      className="hover:underline"
                    >
                      Procurement Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="links">
              <div className="cont">
                <h6 className="link_title font-bold">Information</h6>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://cybergen.com/about-us"
                      className="hover:underline"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/blog"
                      className="hover:underline"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/pressrelease"
                      className="hover:underline"
                    >
                      Press Release
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/careers"
                      className="hover:underline"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/contact-us"
                      className="hover:underline"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/partner-with-us"
                      className="hover:underline"
                    >
                      Partner With Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="foot_subscribe">
              <h6 className="link_title font-bold">Newsletter</h6>
              <p className="text-sm">
                Register now to get the latest updates on promotions.
              </p>
              <form id="Newsletter" noValidate>
                <div className="input-group my-4 flex">
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-gray-800 text-white border border-gray-700 p-2 rounded-l"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    aria-describedby="button-addon2"
                    control-id="ControlID-8"
                  />
                  <button
                    className="btn butn-gard border-0 text-white px-3 bg-gray-700 hover:bg-gray-600 rounded-l"
                    type="submit"
                    id="button-addon2"
                    control-id="ControlID-9"
                  >
                    <span>Subscribe</span>
                  </button>
                </div>
                <div
                  className="col-lg-12 mt-2 alert-class alert-danger text-center error-msg"
                  id="error-msg"
                ></div>
                <div
                  className="col-lg-12 text-center msg"
                  id="footer-msg"
                ></div>
              </form>
              <p className="fst-italic text-xs">
                By subscribing, I have accepted the{" "}
                <a
                  href="https://cybergen.com/privacy-policy"
                  className="text-decoration-underline"
                >
                  Policy
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="foot">
            <p className="text-sm">
              © 2024 Copyrights by <b className="text-white">CyberGen.</b> All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

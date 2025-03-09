import Image from "next/image";
import { Header } from "./components/Header";
import { FaTruck } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Header active={"Home"}></Header>
      <main className="bg-[#FFFFFF]">
        <div
          id="hero-section"
          className="h-screen bg-image-hero flex flex-col lg:flex-row bg-cover bg-left"
          style={{ backgroundImage: "url(/hero-banner.jpg)" }}
        >
          <div className="flex flex-col justify-center items-center p-10 gap-6 text-center bg-[#FFFFFF] h-full">
            <h1 className="text-4xl font-bold text-[#2f2f2f]">
              Guarantee the comfort of your home
            </h1>
            <h4 className="text-2xl text-[#2f2f2f]">
              and live to the fullest Maintenance Services and repair AC system
              Heating and Dryer Vent Cleaning
            </h4>
            <a className="p-3 w-[60%] bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Get In Touch
            </a>
            <div className="flex gap-4 text-[#0170b9]">
              <div className="flex flex-col gap-4 items-center justify-center">
                <FaTruck className="text-4xl" />
                <p className="text-[#2f2f2f]">Rapid Response</p>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <BiSolidLike className="text-4xl" />
                <p className="text-[#2f2f2f]">Premium Service</p>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <FaStar className="text-4xl" />
                <p className="text-[#2f2f2f]">Top Rated Business</p>
              </div>
            </div>
          </div>
          <div className="w-3/4 bg-gradient-to-r from-[#FFFFFF] to-transparent h-0 lg:h-auto"></div>
        </div>
        <div id="about-us" className="bg-[#353941] p-10 rounded-b-[16%]">
          <div className="flex flex-col justify-center p-10 gap-4 text-[#FFFFFF]">
            <h2 className="text-4xl">About Us</h2>
            <h3 className="text-2xl">
              Committed to keeping your home Confortable!
            </h3>
            <p>
              Sanchez Brothers AC, is a family company specialized in providing
              maintenance and repair solutions for air conditioning systems in
              homes and businesses, with years of experience, our team of
              technicians is dedicated to delivering reliable, fast, and
              effective services to keep your environment cool and comfortable.
            </p>
          </div>
        </div>
        <div id="experience" className="bg-[#2563eb] flex flex-col">
          <div className="p-10 flex justify-center items-center bg-[#FFFFFF] rounded-b-[16%]">
            <h2 className="text-[#2f2f2f] text-2xl">
              Our Experience Speaks for itself
            </h2>
          </div>
          <div className="w-1/2 self-center pt-10 pb-10 flex flex-col gap-4 lg:flex-row">
            <ul className="lg:self-center text-[#FAFAFA]">
              <li>Over 10 years of experience</li>
              <li>100% satisfied customers</li>
              <li>+800 homes served in Dallas and the surrounding areas</li>
              <li>+1000 Free Diagnostics</li>
              <li>+200 AC Repaired and Restored</li>
              <li>+500 Dryer cleaning</li>
              <li>+800 Ducts Services</li>
            </ul>
            <div
              className="rounded-xl h-[400px] w-[400px] bg-center bg-cover"
              style={{ backgroundImage: "url(/hero-banner.jpg)" }}
            ></div>
          </div>
        </div>
        <div
          id="services"
          className="p-10 flex flex-wrap gap-4 justify-between"
        >
          <h2 className="text-[#2f2f2f] text-4xl w-full text-center">
            Our Services
          </h2>
          <div className="lg:w-[30%] p-4 flex flex-col items-center gap-4 shadow-2xl justify-between">
            <div className="h-[370px] overflow-hidden">
              <Image
                src="/ac-maintenance.jpeg"
                alt="AC Maintenance"
                height={370}
                width={470}
              />
            </div>
            <h3 className="text-2xl font-bold text-[#2f2f2f]">
              AC Maintenance
            </h3>
            <p className="text-[#2f2f2f]">
              Keep your Air Conditioning system running with our professional
              service. Regular maintenance ensures optimal performance, extends
              the life of your unit, and helps lower energy bills by improving
              efficiency.
            </p>
            <a className="w-full text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Schedule Service
            </a>
          </div>
          <div className="lg:w-[30%] p-4 flex flex-col items-center gap-4 shadow-2xl justify-between">
            <div className="h-[370px] overflow-hidden">
              <Image
                src="/dryer-vent-cleaning.jpeg"
                alt="Dryer Vent Cleaning"
                height={370}
                width={470}
              />
            </div>
            <h3 className="text-2xl font-bold text-[#2f2f2f]">
              Dryer Vent Cleaning
            </h3>
            <p className="text-[#2f2f2f]">
              Our service ensures your home stays safe and your dryer runs
              efficiently. Over time, lint and debris accumulate in dryer vents,
              reducing performance. With our cleaning process, we remove
              built-up lint, improve airflow and help your dryer more
              efficiently, saving your time and energy.​
            </p>
            <a className="w-full text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Schedule Service
            </a>
          </div>
          <div className="lg:w-[30%] p-4 flex flex-col items-center gap-4 shadow-2xl justify-between">
            <div className="h-[370px]">
              <Image
                src="/air-duct-cleaning.jpeg"
                alt="Air Duct Cleaning"
                height={370}
                width={370}
              />
            </div>
            <h3 className="text-[#2f2f2f] text-2xl font-bold">
              Air Duct Cleaning
            </h3>
            <p className="text-[#2f2f2f]">
              Essential for Maintaining Good air quality in your home. Dust and
              Dirt build up in the ducts, affecting the efficiency of your air
              conditioning system. We recommend your air ducts receive a
              cleaning every two years.
            </p>
            <a className="w-full text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Schedule Service
            </a>
          </div>
        </div>
        <div id="benefits" className="p-10 flex flex-col gap-4 items-center">
          <h2 className="text-[#2f2f2f] text-4xl">
            Our Clients&apos; Benefits
          </h2>
          <ul className="text-xl">
            <li>Free Visit and Estimate.</li>
            <li>
              Specialized Assistance during the Repair, Maintenance, or
              Installation of your AC System.
            </li>
            <li>Warranty on Completed work.</li>
            <li>We help you save money with the best prices.</li>
          </ul>
        </div>
        <div
          id="business"
          className="flex flex-col lg:flex-row lg:flex-wrap justify-center p-10 items-center grayscale-100 bg-[#FFFFFF]"
        >
          <div className="h-[250px] lg:w-1/2 lg:flex lg:justify-center lg:items-center">
            <Image
              src="https://sanchezbrothersac.com/wp-content/uploads/2025/01/dryer-certified.webp"
              alt="Dryer Certified"
              height={250}
              width={250}
            />
          </div>
          <div className="h-[250px] lg:w-1/2 lg:flex lg:justify-center lg:items-center">
            <Image
              src="/epa-certification.jpg"
              height={250}
              width={250}
              alt="Epa Certification"
            />
          </div>
          <div
            className="h-[250px] w-full lg:flex lg:justify-center bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/esco-logo.png')" }}
          ></div>
        </div>
        <div
          id="contact"
          className="p-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6"
        >
          <div className="flex flex-col gap-4 md:w-1/2">
            <h2 className="text-[#2f2f2f] text-4xl">Contact Us Today</h2>
            <p className="text-[#2f2f2f]">
              If you are interested in quality maintenance service for your AC
              system, call now 940-758-3617 or filling out{" "}
              <strong>&quot;Schedule your free visit&quot;</strong> form. Our
              team is happy to assist you in maintaining the quality and comfort
              of your home.
            </p>
            <a className="p-3 w-full bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer text-center">
              Get In Touch
            </a>
          </div>
          <form className="flex flex-col gap-4 text-[#2f2f2f]">
            <h2 className=" text-4xl md:text-3xl">Schedule your Free Visit</h2>
            <label>
              Your Name <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <label>
              Your Phone Number{" "}
              <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <label>
              Email Address <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="email"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <label>
              Service Needed <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <button className="p-3 w-full bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Request My Visit
            </button>
          </form>
        </div>
        <div></div>
      </main>
    </>
  );
}

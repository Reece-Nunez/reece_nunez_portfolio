import React, { useRef, useEffect, useContext } from "react";
import NavBar from "../components/navbar/NavBar.jsx";
import Footer from "../components/footer/Footer.jsx";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCogs, FaBolt, FaRocket, FaGem, FaWrench, FaShieldAlt, FaCrown, FaRegClock, FaGift } from "react-icons/fa";

function Pricing() {
  const heroRef = useRef(null);
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactNavigation = () => {
    navigate("/", { state: { scrollTo: "#contact" } });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const pricingTiers = [
    {
      title: "Starter Project",
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
      price: "$300 – $1,000",
      features: ["1-2 core pages", "Mobile-friendly design", "Basic interactive components"]
    },
    {
      title: "Basic Project",
      icon: <FaCogs className="text-yellow-500 text-3xl" />,
      price: "$1,000 – $5,000",
      features: ["Up to 10 pages", "Responsive design", "Initial SEO optimization"]
    },
    {
      title: "Intermediate Project",
      icon: <FaRocket className="text-yellow-500 text-3xl" />,
      price: "$5,000 – $10,000",
      features: ["Custom backend", "Role-based access", "Advanced frontend"]
    },
    {
      title: "Advanced Project",
      icon: <FaGem className="text-yellow-500 text-3xl" />,
      price: "$15,000+",
      features: ["Cloud-hosted app", "Analytics & optimization", "Scalable architecture"]
    },
  ];

  const maintenanceTiers = [
    {
      title: "Lite Tier",
      icon: <FaRegClock className="text-yellow-500 text-2xl" />,
      price: "$75/month",
      features: ["Basic hosting coverage", "Uptime and SSL monitoring", "No code updates included"]
    },
    {
      title: "Tier 1: Essential",
      icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
      price: "$120–$150/month",
      features: ["Infrastructure coverage", "Security updates", "2 hours/month updates"]
    },
    {
      title: "Tier 2: Standard",
      icon: <FaWrench className="text-yellow-500 text-2xl" />,
      price: "$150–$200/month",
      features: ["All Tier 1 features", "5 hours/month updates", "Priority support"]
    },
    {
      title: "Tier 3: Premium",
      icon: <FaCrown className="text-yellow-500 text-2xl" />,
      price: "$200–$600/month",
      features: ["All Tier 2 features", "10 hours/month updates", "Emergency support"]
    },
  ];

  const discountBenefits = [
    "Annual Prepayment: 5–10% discount",
    "Loyalty Upgrade: Complimentary service upgrades after 6 months",
    "Hour Rollover: Unused hours roll over for 2 months"
  ];

  const serviceTerms = [
    "Clear service level agreements (SLAs)",
    "Response times based on package tier",
    "Client portal for requests and tracking"
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar heroRef={heroRef} />
      <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <motion.h1 className="text-4xl font-bold text-center mb-12 dark:text-white" initial="hidden" whileInView="visible" variants={fadeUp}>
          Project-Based Pricing
        </motion.h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" variants={fadeUp}>
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]" whileHover={{ scale: 1.03 }}>
              <div className="flex flex-col items-center space-y-4">
                {tier.icon}
                <h2 className="text-xl font-semibold dark:text-white">{tier.title}</h2>
                <p className="text-yellow-500 font-medium text-lg">{tier.price}</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  {tier.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl font-bold mt-24 mb-10 text-center dark:text-white" initial="hidden" whileInView="visible" variants={fadeUp}>
          Maintenance & Update Packages
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" variants={fadeUp}>
          {maintenanceTiers.map((tier, index) => (
            <motion.div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]" whileHover={{ scale: 1.03 }}>
              <div className="flex flex-col items-center space-y-4">
                {tier.icon}
                <h2 className="text-xl font-semibold dark:text-white text-center">{tier.title}</h2>
                <p className="text-yellow-500 font-medium text-lg">{tier.price}</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  {tier.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-20" initial="hidden" whileInView="visible" variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Discounts & Retention Benefits</h2>
          <ul className="list-disc pl-5 text-yellow-600 text-lg font-medium">
            {discountBenefits.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </motion.div>

        <motion.div className="mt-12" initial="hidden" whileInView="visible" variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Service Terms</h2>
          <ul className="list-disc pl-5 text-yellow-600 text-lg font-medium">
            {serviceTerms.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </motion.div>

        <motion.div className="mt-20 text-center" initial="hidden" whileInView="visible" variants={fadeUp}>
          <h2 className="text-3xl font-bold dark:text-white">Let’s Build Something Amazing</h2>
          <p className="text-lg mt-3 dark:text-gray-300">
            Whether you're launching your MVP or redesigning your platform, let's make it happen.
          </p>
          <button
            onClick={handleContactNavigation}
            className="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
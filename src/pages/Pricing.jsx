import React, { useRef, useEffect, useContext } from "react";
import NavBar from "../components/navbar/NavBar.jsx";
import Footer from "../components/footer/Footer.jsx";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar heroRef={heroRef} />
      <div className="container mx-auto mt-24 p-5">
        {/* Sticky Section Navigation */}
        <nav className="sticky top-20 bg-white dark:bg-gray-900 shadow-md z-10 py-4 mb-8">
          <ul className="flex space-x-6 justify-center text-lg font-medium">
            <li>
              <a
                href="#project-pricing"
                className="hover:text-yellow-500 dark:text-white"
              >
                Project-Based Pricing
              </a>
            </li>
            <li>
              <a
                href="#maintenance-packages"
                className="hover:text-yellow-500 dark:text-white"
              >
                Maintenance Packages
              </a>
            </li>
            <li>
              <a
                href="#custom-plans"
                className="hover:text-yellow-500 dark:text-white"
              >
                Custom Plans
              </a>
            </li>
            <li>
              <a
                href="#discounts"
                className="hover:text-yellow-500 dark:text-white"
              >
                Discounts
              </a>
            </li>
          </ul>
        </nav>

        {/* Project-Based Pricing Section */}
        <section className="mb-12">
          <h1
            id="project-pricing"
            className="text-4xl font-bold mb-8 dark:text-white"
          >
            Project-Based Pricing
          </h1>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Starter Project
              </h2>
              <p className="text-lg font-medium text-yellow-600 mt-2">
                <strong>Price Range:</strong> $500 – $2,000
              </p>
              <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                <li>1-2 core pages or sections</li>
                <li>Mobile-friendly, responsive design</li>
                <li>Basic interactive components</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Basic Project
              </h2>
              <p className="text-lg font-medium text-yellow-600 mt-2">
                <strong>Price Range:</strong> $3,000 – $7,000
              </p>
              <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                <li>Up to 10 pages</li>
                <li>Mobile-first, responsive design</li>
                <li>Initial SEO setup and optimization</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Intermediate Project
              </h2>
              <p className="text-lg font-medium text-yellow-600 mt-2">
                <strong>Price Range:</strong> $8,000 – $15,000
              </p>
              <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                <li>Full-stack development with custom backend</li>
                <li>Role-based access control</li>
                <li>Advanced front-end with React or Angular</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Advanced Project
              </h2>
              <p className="text-lg font-medium text-yellow-600 mt-2">
                <strong>Price Range:</strong> $20,000+
              </p>
              <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                <li>Cloud-hosted full-stack application</li>
                <li>Advanced analytics and performance optimization</li>
                <li>Scalable and maintainable architecture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Maintenance and Update Packages Section */}
        <section>
          <h1
            id="maintenance-packages"
            className="text-4xl font-bold mb-8 dark:text-white"
          >
            Maintenance & Update Packages
          </h1>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Tier 1: Essential Maintenance
              </h2>
              <p className="text-lg font-medium text-yellow-600 mt-2">
                <strong>Monthly Fee:</strong> $150 to $200
              </p>
              <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                <li>Coverage of infrastructure costs</li>
                <li>Security updates and performance monitoring</li>
                <li>Up to 2 hours of updates per month</li>
                <li>Email-based support</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Tier 2: Standard Support
              </h2>
              <p className="text-lg font-medium text-yellow-600 mt-2">
                <strong>Monthly Fee:</strong> $300 to $500
              </p>
              <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                <li>All services included in Tier 1</li>
                <li>Up to 5 hours of updates per month</li>
                <li>Priority support</li>
                <li>Basic SEO or analytics reports</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Tier 3: Premium Support
              </h2>
              <p className="text-lg font-medium text-yellow-600 mt-2">
                <strong>Monthly Fee:</strong> $600 to $1,000
              </p>
              <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                <li>All services included in Tier 2</li>
                <li>Up to 10 hours of updates per month</li>
                <li>Emergency support</li>
                <li>New feature development</li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold dark:text-white">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold dark:text-white">
                  Extra Hours
                </h3>
                <p className="mt-2 dark:text-gray-300">
                  $100/hour for additional updates
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold dark:text-white">
                  New Features
                </h3>
                <p className="mt-2 dark:text-gray-300">
                  Custom quotes for major feature development
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold dark:text-white">
                  Full Redesigns
                </h3>
                <p className="mt-2 dark:text-gray-300">
                  Project-based pricing for large updates
                </p>
              </div>
            </div>
          </div>

          {/* Custom Plans */}
          <div className="mt-12">
            <h2
              id="custom-plans"
              className="text-2xl font-semibold dark:text-white"
            >
              Custom Plans
            </h2>
            <p className="text-lg font-medium text-yellow-600 mt-2">
              We offer tailored solutions based on your specific business needs.
            </p>
          </div>

          {/* Discounts & Retention Benefits */}
          <div className="mt-12">
            <h2
              id="discounts"
              className="text-2xl font-semibold dark:text-white"
            >
              Discounts & Retention Benefits
            </h2>
            <ul className="list-disc pl-5 mt-4 text-lg font-medium text-yellow-600 mt-2">
              <li>
                <strong>Annual Prepayment:</strong> 5-10% discount for annual
                payments
              </li>
              <li>
                <strong>Loyalty Upgrade:</strong> Complimentary service upgrades
                after six months
              </li>
              <li>
                <strong>Hour Rollover:</strong> Unused hours can be rolled over
                for up to two months
              </li>
            </ul>
          </div>

          {/* Service Terms */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold dark:text-white">
              Service Terms
            </h2>
            <ul className="list-disc pl-5 mt-4 text-lg font-medium text-yellow-600 mt-2">
              <li>Clear service level agreements (SLAs)</li>
              <li>Response times based on package tier</li>
              <li>Client portal for requests and tracking</li>
            </ul>
          </div>
        </section>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg dark:text-gray-300">
            Contact us today to discuss your project or maintenance needs.
          </p>
          <button
            onClick={handleContactNavigation}
            className="mt-6 inline-block bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-yellow-600"
          >
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pricing;

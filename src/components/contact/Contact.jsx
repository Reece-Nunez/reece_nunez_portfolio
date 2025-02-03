import React, { useState, useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import AOS from "aos";
import 'aos/dist/aos.css';


const Contact = () => {
  // Initialize useForm and destructure the necessary methods
  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check if the form submission is successful using the formState
  useEffect(() => {
    if (isFormSubmitted && !isFormSubmitted) {
      setShowModal(true);
      setIsFormSubmitted(true);
    }
  }, [isFormSubmitted]);

  const emailRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const focusEmail = () => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (formRef.current) {
      formRef.current.reset();
    }
    setIsFormSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        "https://fng8qev76i.execute-api.us-east-1.amazonaws.com/amplify/sendEmail",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      setIsLoading(false);

      if (!response.ok) {
        // If the response is not 200, handle as error
        const errorData = await response.json();
        console.error("Error sending email:", errorData.error);
        alert(
          "An error occurred while sending your message. Please try again."
        );
      } else {
        // SUCCESS! Show modal or message
        setIsFormSubmitted(true);
        setShowModal(true);

        // Clear form fields if you like
        if (formRef.current) {
          formRef.current.reset();
        }

        // Optionally do anything else, like console.log or a toast
        console.log("Message sent successfully!");
      }
    } catch (error) {
      console.error("Network or other error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="container m-auto mt-16">
      {/* Loading Overlay (spinner) */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Example spinner */}
          <div
            className="w-16 h-16 border-4 border-yellow-500 
                    border-t-transparent rounded-full animate-spin"
          />
        </div>
      )}

      {/* Modal for showing success message */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full dark:bg-gray-700">
            <p className="text-lg font-semibold mb-4 dark:text-white">
              Message Sent Successfully!
            </p>
            <button
              onClick={closeModal}
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 dark:bg-black"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* heading */}
      <div
        // data-aos="fade-up"
        className="relative mb-5"
      >
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl dark:text-white">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-4xl font-bold sm:text-3xl dark:text-white">
                Do You Want To
              </h1>
              <h3 className="text-xl sm:text-lg dark:text-white">
                Collaborate on a New Software Solution? Leave a Request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              onClick={focusEmail}
              className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]"
            >
              <BsArrowRight className=" md:rotate-90 dark:text-white hover:scale-125" />
            </button>
          </div>
        </div>

        <div className="right flex-1">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            data-aos="zoom-in"
            className="flex flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            {/* form fields */}
            <label>Email:</label>
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.4)] p-2 rounded-lg w-full dark:bg-gray-700 dark:text-white"
              type="email"
              ref={emailRef}
              placeholder="e.g. example@email.com"
              name="email"
              required
            />
            <label>Name:</label>
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.4)] p-2 rounded-lg w-full dark:bg-gray-700 dark:text-white"
              type="text"
              placeholder="e.g. John Doe"
              name="name"
              required
            />
            <label>Message:</label>
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.4)] p-2 rounded-lg w-full dark:bg-gray-700 dark:text-white"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="message"
              id=""
              required
            />
            <button
              type="submit"
              disabled={isFormSubmitted || isLoading}
              className="relative bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-2 dark:bg-gray-700
                         hover:bg-yellow-600 transition-colors group"
            >
              <span>Send</span>
              <RiSendPlaneFill className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

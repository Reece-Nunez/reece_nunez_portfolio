import React, {useState, useEffect, useRef} from "react";
import { useForm } from '@formspree/react'
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {

  // Initialize useForm and destructure the necessary methods
  const [state, handleSubmit] = useForm("meqbvyqz");
  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formRef = useRef(null);

  // Check if the form submission is successful using the formState
  useEffect(() => {
    if (state.succeeded && !isFormSubmitted) {
      setShowModal(true);
      setIsFormSubmitted(true);
    }
  }, [state.succeeded]);

  // Close modal and reset form state
  const closeModal = () => {
    setShowModal(false);
    if(formRef.current) {
      formRef.current.reset();
    }
    setIsFormSubmitted(false);
  };

  return (
    <div id="contact" className="container m-auto mt-16">
      {/* Modal for showing success message */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-lg font-semibold mb-4">Thanks for your message!</p>
            <button onClick={closeModal} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600">Close</button>
          </div>
        </div>
      )}

      {/* heading */}
      <div
      // data-aos="fade-up"
      className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div
            data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
          // data-aos="fade-up"
            ref={formRef}
            onSubmit={handleSubmit}
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            {/* form fields */}
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name="email"
              required
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. John Doe"
              name="name"
              required
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="message"
              id=""
              required
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
              disabled={state.submitting}
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaPencilAlt } from "react-icons/fa";
import LoadingSpinner from "../Loading/LoadingSpinner";

function ContactUsSection({ selectedPackage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    message: selectedPackage ? `I'm interested in ${selectedPackage}` : "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [step, setStep] = useState(0);
  const formRef = useRef(null);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prevData => ({
        ...prevData,
        message: `I'm interested in ${selectedPackage}`
      }));
      setStep(3); // Move to the message step
    }
  }, [selectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "name" && value !== "") setStep(1);
    if (name === "email" && value !== "") setStep(2);
    if (name === "phoneNumber" && value !== "") setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setFormData({
        name: "",
        email: "",
        phoneCode: "",
        phoneNumber: "",
        message: "",
      });
      setStep(0);
    }, 3000);
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [step]);

  const renderField = (
    name,
    type = "text",
    placeholder,
    icon,
    showIf = true
  ) => (
    <AnimatePresence>
      {showIf && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full mb-4"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center text-primary">
                {icon}
                <span className="ml-2">{placeholder}</span>
              </span>
            </div>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className="input input-bordered w-full transition-all duration-300 focus:ring-2 focus:ring-primary bg-white text-primary"
              value={formData[name]}
              onChange={handleChange}
            />
          </label>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderPhoneField = (showIf = true) => (
    <AnimatePresence>
      {showIf && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full mb-4"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center text-primary">
                <FaPhone />
                <span className="ml-2">What is your phone number?</span>
              </span>
            </div>
            <div className="flex">
              <select
                className="select select-bordered w-1/3 mr-2 bg-white text-primary"
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Code
                </option>
                <option value="+62">+62 (Indonesia)</option>
              </select>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                className="input input-bordered w-2/3 transition-all duration-300 focus:ring-2 focus:ring-primary bg-white text-primary"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </label>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br pt-20 px-4 relative transition-all duration-500">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-primary mb-4">
            We'd love to hear from you! Fill out the form and we'll be in touch
            as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <div className="mockup-phone border-primary shadow-lg">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 overflow-y-auto bg-white">
                <div className="p-4" ref={formRef}>
                  <h2 className="text-2xl font-bold text-center mb-4 text-primary">
                    Contact Form
                  </h2>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(step + 1) * 25}%` }}
                    ></div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {renderField(
                      "name",
                      "text",
                      "What is your name?",
                      <FaUser className="text-primary" />
                    )}
                    {renderField(
                      "email",
                      "email",
                      "What is your email?",
                      <FaEnvelope className="text-primary" />,
                      step >= 1
                    )}
                    {renderPhoneField(step >= 2)}
                    <AnimatePresence>
                      {step >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="w-full mb-4"
                        >
                          <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text flex items-center text-primary">
                                <FaPencilAlt className="text-primary" />
                                <span className="ml-2">Your message</span>
                              </span>
                            </div>
                            <textarea
                              className="textarea textarea-bordered h-24 w-full transition-all duration-300 focus:ring-2 focus:ring-primary bg-white text-primary"
                              placeholder="Type your message here"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                            ></textarea>
                          </label>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {formData.message && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center"
                      >
                        <button
                          type="submit"
                          className="btn bg-secondary text-primary w-full hover:bg-primary hover:text-secondary border-secondary hover:border-secondary transition-all duration-300"
                        >
                          Send
                        </button>
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {isLoading && <LoadingSpinner />}

      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 right-4 z-50"
          >
            <div role="alert" className="alert alert-success shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your message has been sent!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default ContactUsSection;
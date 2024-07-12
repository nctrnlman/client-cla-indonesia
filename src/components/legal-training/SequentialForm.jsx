import React, { useState, useRef, useEffect } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";

function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const mailtoLink = `mailto:uzlahfirmansyah@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phoneCode}${formData.phoneNumber}%0D%0AMessage: ${formData.message}`;
    window.open(mailtoLink, "_blank");

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
    }, 3000);
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [formData.email, formData.phoneNumber]);

  const renderField = (name, type = "text", placeholder, showIf = true) => (
    <div
      className={`transition-all duration-500 ease-in-out w-full ${
        showIf ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{placeholder}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="input input-bordered w-full"
          value={formData[name]}
          onChange={handleChange}
        />
      </label>
    </div>
  );

  const renderPhoneField = (showIf = true) => (
    <div
      className={`transition-all duration-500 ease-in-out w-full ${
        showIf ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">What is your phone number?</span>
        </div>
        <div className="flex">
          <select
            className="select select-bordered w-1/3 mr-2"
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
            className="input input-bordered w-2/3"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </label>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-darkBlue pt-20 px-4 relative">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row">
        {/* Section hanya terlihat di desktop */}
        <div className="hidden lg:flex card bg-transparent rounded-box grid flex-grow place-items-center p-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-center mb-4">
            Get in touch with us for any inquiries
          </p>
        </div>

        {/* Formulir kontak */}
        <div className="card bg-transparent rounded-box grid flex-grow place-items-center p-8">
          <div className="mockup-phone border-primary shadow-lg shadow-blue-500/50">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 overflow-y-auto bg-white">
                <div className="p-4" ref={formRef}>
                  <h2 className="text-2xl font-bold text-center mb-4 text-primary">
                    Contact Form
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {renderField("name", "text", "What is your name?")}
                    {renderField("email", "email", "What is your email?", formData.name !== "")}
                    {renderPhoneField(formData.email !== "")}
                    <div
                      className={`transition-all duration-500 ease-in-out w-full ${
                        formData.phoneNumber !== "" ? "max-h-60 opacity-100 mb-4" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">Your message</span>
                        </div>
                        <textarea
                          className="textarea textarea-bordered h-24 w-full"
                          placeholder="Type your message here"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </label>
                    </div>
                    {formData.message && (
                      <div className="flex justify-center">
                        <button type="submit" className="btn btn-primary w-full">
                          Send
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading && <LoadingSpinner />}

      {showAlert && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
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
        </div>
      )}
      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default ContactUsSection;

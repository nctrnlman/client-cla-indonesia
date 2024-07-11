import React, { useState, useEffect } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";

function ContactUsSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setName("");
      setEmail("");
      setPhoneCode("");
      setPhoneNumber("");
      setMessage("");
    }, 3000);
  };

  const renderField = (
    value,
    setValue,
    type = "text",
    placeholder,
    showIf = true
  ) => (
    <div
      className={`transition-all duration-500 ease-in-out w-full ${
        showIf
          ? "max-h-40 opacity-100 mb-4"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{placeholder}</span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  );

  const renderPhoneField = (showIf = true) => (
    <div
      className={`transition-all duration-500 ease-in-out w-full ${
        showIf
          ? "max-h-40 opacity-100 mb-4"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">What is your phone number?</span>
        </div>
        <div className="flex">
          <select
            className="select select-bordered w-1/3 mr-2"
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
          >
            <option value="" disabled>
              Code
            </option>
            <option value="+62">+62 (Indonesia)</option>
          </select>
          <input
            type="tel"
            placeholder="Phone number"
            className="input input-bordered w-2/3"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </label>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-darkBlue pt-20 px-4 relative">
      <div className="flex w-full max-w-6xl">
        <div className="card bg-base-300 rounded-box grid flex-grow place-items-center p-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-center mb-4">
            Get in touch with us for any inquiries
          </p>
        </div>
        <div className="divider divider-horizontal text-gray-300">OR</div>
        <div className="card bg-base-300 rounded-box grid flex-grow place-items-center p-8">
          <div className="mockup-phone border-primary shadow-lg shadow-blue-500/50">
            {" "}
            {/* Added shadow for underglow */}
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 overflow-y-auto bg-white">
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-center mb-4 text-primary">
                    Contact Form
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {renderField(name, setName, "text", "What is your name?")}
                    {renderField(
                      email,
                      setEmail,
                      "email",
                      "What is your email?",
                      name !== ""
                    )}
                    {renderPhoneField(email !== "")}

                    <div
                      className={`transition-all duration-500 ease-in-out w-full ${
                        phoneNumber !== ""
                          ? "max-h-60 opacity-100 mb-4"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">Your message</span>
                        </div>
                        <textarea
                          className="textarea textarea-bordered h-24 w-full"
                          placeholder="Type your message here"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </label>
                    </div>

                    {message && (
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="btn btn-primary w-full"
                        >
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
        <div className="fixed top-4 right-4 z-50">
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
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

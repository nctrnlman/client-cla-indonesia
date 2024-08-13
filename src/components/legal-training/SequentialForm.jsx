import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaPencilAlt } from "react-icons/fa";
import LoadingSpinner from "../global/Loading/LoadingSpinner";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

function ContactUsSection({ selectedPackage }) {
  const { t } = useTranslation("contactUs");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    message: t("interestedIn", { package: selectedPackage }),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [step, setStep] = useState(0);
  const [showPackageNotification, setShowPackageNotification] = useState(
    !!selectedPackage
  );
  const formRef = useRef(null);

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prevData) => ({
        ...prevData,
        message: t("interestedIn", { package: selectedPackage }),
      }));
      setShowPackageNotification(true);
      setTimeout(() => setShowPackageNotification(false), 5000);
    }
  }, [selectedPackage, t]);

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
    try {
      await emailjs.send(
        "service_wx9ykwp",
        "template_nyyswl6",
        formData,
        "t-2dF4yUyNrBIBT45"
      );
      setShowAlert(true);
      setFormData({
        name: "",
        email: "",
        phoneCode: "",
        phoneNumber: "",
        message: "",
      });
      setStep(0);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };
  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [step]);

  const renderField = (
    name,
    type = "text",
    placeholderKey,
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
                <span className="ml-2">{t(placeholderKey)}</span>
              </span>
            </div>
            <input
              type={type}
              name={name}
              placeholder={t(placeholderKey)}
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
                <span className="ml-2">{t("phoneNumber")}</span>
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
                  {t("code")}
                </option>
                <option value="+62">+62 (Indonesia)</option>
              </select>
              <input
                type="tel"
                name="phoneNumber"
                placeholder={t("phoneNumberPlaceholder")}
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br py-20 px-4 relative transition-all duration-500">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 pr-6"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">
            {t("contactUs")}
          </h1>
          <p className="text-lg text-primary mb-4">
            {t("contactUsSubtitle")} <br />
            <br />
            {t("termsAndConditions")}
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
                    {t("contactForm")}
                  </h2>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${(step + 1) * 25}%` }}
                    ></div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {renderField(
                      "name",
                      "text",
                      "namePlaceholder",
                      <FaUser className="text-primary" />
                    )}
                    {renderField(
                      "email",
                      "email",
                      "emailPlaceholder",
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
                                <span className="ml-2">{t("message")}</span>
                              </span>
                            </div>
                            <textarea
                              className="textarea textarea-bordered h-24 w-full transition-all duration-300 focus:ring-2 focus:ring-primary bg-white text-primary"
                              placeholder={t("messagePlaceholder")}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                            ></textarea>
                          </label>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {step >= 3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center"
                      >
                        <button
                          type="submit"
                          className="btn bg-secondary text-primary w-full hover:bg-primary hover:text-secondary border-secondary hover:border-secondary transition-all duration-300"
                        >
                          {t("submit")}
                        </button>
                      </motion.div>
                    )}
                  </form>
                  {isLoading && (
                    <div className="text-center mt-4">
                      <LoadingSpinner />
                    </div>
                  )}
                  {showAlert && (
                    <div className="alert alert-success mt-4 text-center">
                      <div className="flex-1">
                        <div className="text-white">
                          {t("submissionSuccess")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showPackageNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
          >
            <span>{t("interestedIn", { package: selectedPackage })}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default ContactUsSection;

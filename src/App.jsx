import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/bar/Navbar";
import Footer from "./components/bar/Footer";
import LegalAssociate from "./pages/LegalAssociate";
import LegalTraining from "./pages/LegalTraining";
import OtherService from "./pages/OtherService";
import ConsultationButton from "./components/navigation/ConsultationButton";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import OtherServiceDetail from "./pages/OtherServiceDetail";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Navbar />
      {isLoading && <LoadingSpinner />}
      <Routes>
        <Route path="/" element={<Home setIsLoading={setIsLoading} />} />
        <Route
          path="/legal-associate"
          element={<LegalAssociate setIsLoading={setIsLoading} />}
        />
        <Route
          path="/legal-training"
          element={<LegalTraining setIsLoading={setIsLoading} />}
        />
        <Route
          path="/other-services"
          element={<OtherService setIsLoading={setIsLoading} />}
        />
        <Route
          path="/other-service/:slug"
          element={<OtherServiceDetail setIsLoading={setIsLoading} />}
        />
      </Routes>
      <ConsultationButton />
      <Footer />
    </>
  );
}

export default App;

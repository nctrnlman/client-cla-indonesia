import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LegalAssociate from "./pages/LegalAssociate";
import LegalTraining from "./pages/LegalTraining";
import OtherService from "./pages/OtherService";
import OtherServiceDetail from "./pages/OtherServiceDetail";
import Navbar from "./components/global/bar/Navbar";
import LoadingSpinner from "./components/global/Loading/LoadingSpinner";
import ConsultationButton from "./components/global/navigation/ConsultationButton";
import Footer from "./components/global/bar/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Navbar />
      {isLoading && <LoadingSpinner />}
      <Routes>
        <Route path="/" element={<Home setIsLoading={setIsLoading} />} />

        <Route
          path="/other-services"
          element={<OtherService setIsLoading={setIsLoading} />}
        />
        <Route
          path="/other-service/:slug"
          element={<OtherServiceDetail setIsLoading={setIsLoading} />}
        />
        <Route
          path="/legal-associate"
          element={<LegalAssociate setIsLoading={setIsLoading} />}
        />
        <Route
          path="/legal-training"
          element={<LegalTraining setIsLoading={setIsLoading} />}
        />
      </Routes>
      <ConsultationButton />
      <Footer />
    </>
  );
}

export default App;

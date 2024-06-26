import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/bar/Navbar";
import Footer from "./components/bar/Footer";
import LegalAssociate from "./pages/LegalAssociate";
import LegalTraining from "./pages/LegalTraining";
import OtherService from "./pages/OtherService";
import ConsultationButton from "./components/navigation/ConsultationButton";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal-associate" element={<LegalAssociate />} />
        <Route path="/legal-training" element={<LegalTraining />} />
        <Route path="/other-service" element={<OtherService />} />
      </Routes>
      <ConsultationButton />
      <Footer />
    </>
  );
}

export default App;

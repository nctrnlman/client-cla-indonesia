import Hero from "../components/home/Hero";
import Subscription from "../components/home/Subscription";
import About from "../components/home/About";
import FAQ from "../components/home/FAQ";
import LegalityPackages from "../components/home/LegalityPackages";
import OtherService from "../components/home/OtherService";
import PackageSubcription from "../components/home/PackageSubcription";

function Home() {
  return (
    <div>
      <Hero />
      <PackageSubcription />
      <Subscription />
      <LegalityPackages />
      <About />
      <OtherService />
      <FAQ />
    </div>
  );
}

export default Home;

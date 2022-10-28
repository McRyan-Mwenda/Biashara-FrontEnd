import Footer from "../../components/Footer";
import AboutSummary from "../../components/Home/AboutSummary";
import AppCategories from "../../components/Home/AppCategories";
import Banner from "../../components/Home/Banner";
import Features from "../../components/Home/Features";
import SampleProducts from "../../components/Home/SampleProducts";
import SiteResources from "../../components/Home/SiteResources";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* navbar */}

      {/* current page */}
      <div>
        {/* banner */}
        <Banner />
        {/* banner */}

        {/* features */}
        <Features />
        {/* features */}

        {/* sample products */}
        <SampleProducts />
        {/* sample products */}

        {/* about company */}
        <AboutSummary />
        {/* about company */}

        {/* resources */}
        <SiteResources />
        {/* resources */}

        {/* categories */}
        <AppCategories />
        {/* categories */}
      </div>
      {/* current page */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;

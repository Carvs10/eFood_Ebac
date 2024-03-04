import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Restaurants from "../../components/Restaurants";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Restaurants />
      </div>
      <Footer />
    </>
  );
};

export default Home;

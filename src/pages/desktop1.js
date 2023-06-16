import Hero from "../Components/Hero.jsx";
import Steps from "../Components/Steps";
import WhyHalondo from "../Components/WhyHalondo";
import How from "../Components/How";
import Questions from "../Components/Questions";
import Footer from "../Components/Footer";

const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <Hero/>
        <Steps/>
        <WhyHalondo/>
        <How/>
        <Questions/>
        <Footer/>
    </div>
  );
};

export default Desktop1;

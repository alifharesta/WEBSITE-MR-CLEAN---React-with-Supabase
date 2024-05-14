import LogoHero from "../assets/man.png";
import Rectangle from "../assets/kotakbiru.png";
const HeroSection = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-6xl font-bold mb-4 text-black px-10">
            Make Your Day Shine <br></br> Brighter with The Best <br></br>{" "}
            Cleaning Service From Our Company
          </h1>
          <p className="text-2xl text-black px-10 py-5 font-light  italic">
            Experience the difference with cleaning service that not only clean,
            but also provide special care for every detail, so you can truly
            feel at home
          </p>
        </div>
        <div className="flex items-center order-1 md:order-2 justify-center mt-8 relative">
          <img
            src={Rectangle}
            alt="rectangle"
            className="w-1/2 max-w-sm ablosute bottom-0"
          />
          <img
            src={LogoHero}
            alt="hero"
            className="w-1/2 max-w-sm absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

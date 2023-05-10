import HomeHeroImg from "assets/home/home-hero.jpg";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="home-hero__image-wrapper">
        <img className="home-hero__image" src={HomeHeroImg} alt="home hero" />
      </div>
      <div className="home-hero__text">
        <h1>quality and accessible pyjamas</h1>
        <p>sleepwear that brings frequent and lasting happiness</p>
        <button className="home-hero__btn">Shop Now</button>
      </div>
    </div>
  );
};

export default HomeHero;

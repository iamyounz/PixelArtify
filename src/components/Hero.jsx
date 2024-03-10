import FeatureImage from "../assets/features-img1.png";

const Hero = () => {
   return (
      <>
         <section id="hero" className="hero">
            <div className="container">
               <div className="hero-content">
                  <div className="hero-image">
                     <img src={FeatureImage} alt="" />
                  </div>
                  <div className="hero-content">
                     <h1 className="title">pixelartify</h1>
                     <h2 className="tagline">
                        Transform images into pixel art.
                     </h2>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Hero;

import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
   return (
      <div id="pixel-home" className="pixel-home">
         <div className="pixel-home-container">
            <Header />
            <Hero />
         </div>
      </div>
   );
};

export default Home;

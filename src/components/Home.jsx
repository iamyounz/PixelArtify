const Home = () => {
   return (
      <div id="pixel-home" className="pixel-home">
         <div className="pixel-home-container">
            <div className="pixel-brand">
               <div className="pixel-logo">
                  <span className="icon icon-one"></span>
                  <span className="icon icon-two"></span>
                  <span className="icon icon-three"></span>
                  <span className="icon icon-four"></span>
               </div>
               <h1 className="pixel-artify-title">Pixel Artify</h1>
            </div>
            <div className="pixel-tagline">
               Transform images into pixel art.
            </div>
            <div className="pixel-buttons">
               <button>Upload Image </button>
               <button>Demo</button>
            </div>
         </div>
      </div>
   );
};

export default Home;

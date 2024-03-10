import Logo from "../assets/logo-icon.svg";

const Header = () => {
   return (
      <>
         <header id="header">
            <div className="container header">
               <div className="pixel-logo">
                  <img src={Logo} alt="" />
                  <h1 className="pixel-artify-title"> Pixel Craftify</h1>
               </div>
               <nav className="navbar">
                  <ul>
                     <li>
                        <a href="#">Features</a>
                     </li>
                     <li>
                        <a href="#">Example</a>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
      </>
   );
};

export default Header;

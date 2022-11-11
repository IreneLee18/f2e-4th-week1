import logo from "./style/resource/logo/logo.png";

// component
import Home from "./component/Home/HomePage";
import LayoutSide from "./component/Layout/LayoutSide/LayoutSide";
import Confuse from "./component/Confuse/Confuse";
import Participant from "./component/Participant/Participant";
import Challenge from "./component/Challenge/Challenge";
import Instruction from "./component/Instruction/Instruction";
import Award from "./component/Award/Award";
import Sponsor from "./component/Sponsor/Sponsor";
import Finish from "./component/Finish/Finish";

// use
import GSAP from "./utils/GSAP";
import { useEffect } from "react";
import Footer from "./component/Layout/Footer/Footer";
import Main from "./component/Layout/Main/Main";

function App() {
  useEffect(() => {
    GSAP();
    // when flash the website, keep page always start at (0, 0)
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, []);
  const handleClickSignUp = () => {
    window.location.href = "https://2022.thef2e.com/";
  };
  return (
    <>
      <header>
        <img className="header-logo" src={logo} alt="" />
        <div className="user-btn" onClick={handleClickSignUp}></div>
      </header>
      <main>
        <LayoutSide />
        <Home />
        <Confuse />
        <Participant />
        <Challenge />
        <Instruction />
        <Award />
        <Sponsor />
        <Finish handleClickSignUp={handleClickSignUp} />
        <section className="main">
          <Main />
        </section>
      </main>
      <footer>
        <Footer handleClickSignUp={handleClickSignUp} />
      </footer>
    </>
  );
}

export default App;

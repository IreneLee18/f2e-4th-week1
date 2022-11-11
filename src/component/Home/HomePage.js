import logo from "../../style/resource/logo/logo_text.png";
function Home() {
  return (
    <>
      <section className="home">
        <div className="home-background"></div>
        <div className="home-flag"></div>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h4 className="color-white">互動式網頁設計</h4>
        </div>
        <div className="home-decorate">
          <ul className="decorate">
            <li className="decorate-1"></li>
            <li className="decorate-2"></li>
          </ul>
          <div className="frame">
            <h4 className="frame-text color-hight">READY?</h4>
            <ul>
              <li className="ready ready-3"></li>
              <li className="ready ready-2"></li>
              <li className="ready ready-1"></li>
              <li className="ready-frame"></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

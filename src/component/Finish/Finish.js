import logo from "../../style/resource/logo/logo.png";
function Finish({ handleClickSignUp }) {
  return (
    <>
      <section className="finish">
        <div className="finish-background"></div>
        <div className="finish-flag"></div>
        <ul className="finish-decorate">
          <li className="finish-decorate-1"></li>
          <li className="finish-decorate-2"></li>
          <li className="finish-decorate-3"></li>
          <li className="finish-decorate-4"></li>
        </ul>
        <div className="finish-sign-up">
          <img src={logo} alt="" />
          <div className="finish-sign-up-btn-group">
            <div className="finish-sign-up-hand"></div>
            <div
              className="finish-sign-up-btn"
              onClick={handleClickSignUp}
            ></div>
          </div>
          <h2 className="color-hight">立即報名</h2>
        </div>
      </section>
    </>
  );
}

export default Finish;

import line from "../../style/resource/main/date_weekLine.png";
function Instruction() {
  return (
    <section className="instruction">
      <div className="instruction-background"></div>
      <ul className="instruction-item">
        <li className="sign-up">
          <div className="join-btn-icon">
            <div className="hand"></div>
            <div className="btn"></div>
          </div>
          <div className="content">
            <h2 className="color-hight">SIGN UP</h2>
            <h4 className="color-white">10/13 - 11/6</h4>
            <h5 className="color-dark-secondary">截止前可修改報名組別</h5>
          </div>
          <div className="line">
            <img src={line} alt="" />
          </div>
        </li>
        <li className="start">
          <div className="icon">
            <div className="start-icon"></div>
          </div>
          <div className="content">
            <h2 className="color-hight">START</h2>
            <h4 className="color-white">10/31 - 11/28</h4>
            <h5 className="color-dark-secondary">
              10/31(一) UI、團體組開賽
              <br />
              11/7(一) 前端組開賽
            </h5>
          </div>
          <div className="line">
            <img src={line} alt="" />
          </div>
        </li>
        <li className="upload">
          <div className="icon">
            <div className="upload-icon"></div>
          </div>
          <div className="content">
            <h2 className="color-hight">UPLOAD</h2>
            <h4 className="color-white">10/31 - 11/28</h4>
            <h5 className="color-dark-secondary">
              依賽程登錄作品
              <br />
              <span className="color-hight">額外競賽： 主題豐厚獎金等著你</span>
            </h5>
          </div>
          <div className="line">
            <img src={line} alt="" />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Instruction;

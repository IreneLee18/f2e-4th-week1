import talking from "../../style/resource/bg/bg_talking.png";
function Challenge() {
  return (
    <section className="challenge">
      <div className="challenge-background"></div>
      <div className="challenge-title">
        <img src={talking} alt="" />
        <h2 className="color-primary">年度最強合作，三大主題來襲</h2>
        <p className="little-title color-dark-secondary">
          各路廠商強強聯手
          <br />
          共同設計出接地氣的網頁互動挑戰關卡
        </p>
      </div>
      <ul className="challenge-item">
        <li className="week1-item">
          <div className="week week1"></div>
          <div>
            <h2 className="color-hight">WEEK 1</h2>
            <h3 className="color-primary">The F2E 活動網站設計</h3>
            <div className="challenge-by-who">
              <p className="color-dark-secondary">Parallax Scrolling</p>
              <p className="color-dark-secondary">#版塊設計</p>
            </div>
            <div className="challenge-detail">
              <p className="color-white">查看關卡細節</p>
            </div>
          </div>
        </li>
        <li className="week2-item">
          <div className="week week2"></div>
          <div>
            <h2 className="color-hight">WEEK 2</h2>
            <h3 className="color-primary">今晚，我想來點點簽</h3>
            <div className="challenge-by-who">
              <p className="color-dark-secondary">Canvas</p>
              <p className="color-dark-secondary">#凱鈿行動科技</p>
            </div>
            <div className="challenge-detail">
              <p className="color-white">查看關卡細節</p>
            </div>
          </div>
        </li>
        <li className="week3-item">
          <div className="week week3"></div>
          <div>
            <h2 className="color-hight">WEEK 3</h2>
            <h3 className="color-primary">Scrum 新手村</h3>
            <div className="challenge-by-who">
              <p className="color-dark-secondary">JS draggableg</p>
              <p className="color-dark-secondary">#鈦坦科技</p>
            </div>
            <div className="challenge-detail">
              <p className="color-white">查看關卡細節</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Challenge;

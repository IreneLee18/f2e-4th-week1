import talking from "../../style/resource/bg/bg_talking.png";
function Award() {
  return (
    <section className="award">
      <div className="award-background"></div>
      <div className="award-title title-hight">
        <h2 className="color-hight">區區修煉已經無法滿足了嗎？</h2>
      </div>
      <div className="award-title title-talking">
        <img src={talking} alt="" />
        <h2 className="color-primary">還有比賽等著你！</h2>
      </div>
      <ul className="award-decorate">
        <li className="award-decorate-1"></li>
        <li className="award-decorate-2"></li>
      </ul>
      <ul className="award-item">
        <li>
          <div className="award-icon"></div>
        </li>
        <li>
          <div className="award-content">
            <h4 className="color-hight">評審機制</h4>
            <ul>
              <li className="color-primary">
                初選： 將由六角學院前端、UI 評審進行第一波篩選。
              </li>
              <li className="color-primary">
                決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                由評審進行直播公布名單！
              </li>
            </ul>
          </div>
          <div className="award-content">
            <h4 className="color-hight">獎項</h4>
            <ul>
              <li className="color-primary">1. 初選佳作 共六十位 數位獎狀</li>
              <li className="color-primary">
                2. 個人企業獎 共六位 NTD 3,000 /位
              </li>
              <li className="color-primary">
                3. 團體企業獎 共三組 NTD 10,000 /組
              </li>
              <li className="color-primary"> 4. 以上皆提供完賽數位獎狀</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Award;

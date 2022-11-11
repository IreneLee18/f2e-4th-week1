import talking from "../../style/resource/bg/bg_talking.png";
function Confuse() {
  return (
    <section className="confuse">
      <div className="confuse-background"></div>
      <div className="confuse-title">
        <img src={talking} alt="" />
        <h2 className="color-primary">你是否也有以下困擾？</h2>
      </div>
      <ul className="confuse-item">
        <li className="cool-item">
          <h5 className="color-hight">羨慕別人的酷酷網頁動畫？</h5>
          <div className="cool"></div>
        </li>
        <li className="wish-item">
          <h5 className="color-hight">滿足不了同事的許願？</h5>
          <div className="wish"></div>
        </li>
        <li className="start-item">
          <h5 className="color-hight">動畫技能樹太雜無從下手？</h5>
          <div className="start"></div>
        </li>
      </ul>
    </section>
  );
}

export default Confuse;

import talking from "../../style/resource/bg/bg_talking.png";
function Sponsor() {
  return (
    <section className="sponsor">
      <div className="sponsor-background"></div>
      <div className="sponsor-title">
        <img src={talking} alt="" />
        <h2 className="color-primary">贊助單位</h2>
      </div>
      <ul className="sponsor-item">
        <li className="block-item">
          <div className="block"></div>
          <p className="color-dark-secondary">#版塊設計</p>
        </li>
        <li className="tita-item">
          <div className="tita"></div>
          <p className="color-dark-secondary">#鈦坦科技</p>
        </li>
        <li className="kdan-item">
          <div className="kdan"></div>
          <p className="color-dark-secondary">#凱鈿科技</p>
        </li>
      </ul>
    </section>
  );
}

export default Sponsor;

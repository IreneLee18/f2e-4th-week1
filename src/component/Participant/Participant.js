import talking from "../../style/resource/bg/bg_talking.png";
function Participant() {
  return (
    <section className="participant">
      <div className="participant-background"></div>
      <div className="participant-title">
        <img src={talking} alt="" />
        <h2 className="color-primary">本屆主題：互動式網頁設計</h2>
        <p className="color-dark-secondary">以下兩個角色進行攜手合作</p>
      </div>
      <ul className="participant-item">
        <li>
          <div></div>
          <h5 className="color-primary">前端工程師</h5>
        </li>
        <li>
          <div></div>
          <h5 className="color-primary">ＵＩ設計師</h5>
        </li>
        <li>
          <div></div>
          <h5 className="color-primary">團體組(UI+前端)</h5>
        </li>
      </ul>
    </section>
  );
}

export default Participant;

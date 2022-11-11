import f2e from "../../../style/resource/character/character_f2e.gif";
import ui from "../../../style/resource/character/character_ui.gif";
import team from "../../../style/resource/character/character_team.gif";
function Main() {
  return (
    <>
      <div className="main-main">
        <ul className="applicant ">
          <li>
            <div className="applicant-f2e">
              <p className="color-primary">前端工程師</p>
              <p className="color-white">920</p>
            </div>
            <img
              className="applicant-img"
              src={f2e}
              alt="f2e"
              style={{ width: "70%" }}
            />
          </li>
          <li>
            <div className="applicant-ui">
              <p className="color-primary">UI設計師</p>
              <p className="color-white">110</p>
            </div>
            <img
              className="applicant-img"
              src={ui}
              alt="ui"
              style={{ width: "70%" }}
            />
          </li>
          <li>
            <div className="applicant-team">
              <p className="color-primary">團體組</p>
              <p className="color-white">41</p>
            </div>
            <img
              className="applicant-img"
              src={team}
              alt="team"
              style={{ width: "70%" }}
            />
          </li>
        </ul>
      </div>
      <ul className="main-footer">
        <li className="main-footer-left"></li>
        <li className="main-footer-sponsor-left"></li>
        <li className="main-footer-center"></li>
        <li className="main-footer-sponsor-right"></li>
        <li className="main-footer-right"></li>
      </ul>
    </>
  );
}

export default Main;

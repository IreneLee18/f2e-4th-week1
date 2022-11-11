import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function GSAP() {
  // homeScroll
  const homeScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-background", // 決定scrollTrigger要以哪一個元素作為觸發基準點
      // markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "25% top",
      pin: true,
      scrub: true, // 物件動畫根據卷軸捲動程度跑
      duration: 0.5,
    },
  });
  homeScroll
    // red
    .to(".ready-2", { opacity: 0 })
    .to(".ready-1", { opacity: 0 }, "<")
    .to(".frame-text", { text: "" }, "<")
    .to(".decorate-1", { left: "300px", backgroundSize: "80%" }, "<")
    .to(".decorate-2", { right: "300px", backgroundSize: "80%" }, "<")
    // yellow
    .to(".ready-3", { opacity: 0 })
    .to(".ready-2", { opacity: 1 }, "<")
    .to(".decorate-1", { left: "700px", backgroundSize: "0%" }, "<")
    .to(".decorate-2", { right: "200px", backgroundSize: "0%" }, "<")
    // green
    .to(".ready-2", { opacity: 0 })
    .to(".ready-1", { opacity: 1 }, "<")
    .to(".frame-text", { text: "GO!", paddingLeft: "95px" }, "<")
    // finish: frame & applicant
    .to(".frame", { display: "none" })
    .to(".applicant-f2e", { display: "none" }, "<")
    .to(".applicant-ui", { display: "none" }, "<")
    .to(".applicant-team", { display: "none" }, "<")
    // finish: logo & flag
    .to(".home-flag", { display: "none" })
    .to(".logo", { display: "none" }, "<")
    .to(".header-logo", { opacity: 1 });

  // confuseScroll
  const confuseScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".confuse-background",
      // markers: true,
      pin: true,
      scrub: true,
      duration: 0.5,
    },
  });
  confuseScroll
    .to(".map-now", { top: "0px", left: "35px" })
    // show title
    .to(".confuse-title", { opacity: 1 })
    .to(".applicant", { width: "50vw" }, "<")
    .to(".main-footer-center", { width: "50vw", bottom: "-50px" }, "<")
    .to(".main-footer-left", { opacity: 1 }, "<")
    .to(".main-footer-right", { opacity: 1 }, "<")
    // show cool
    .to(".cool-item", { opacity: 1 })
    .to(".main-footer-left", { left: "300px", backgroundSize: "90%" }, "<")
    .to(".main-footer-right", { right: "300px", backgroundSize: "90%" }, "<")
    // show wish
    .to(".wish-item", { opacity: 1 })
    .to(
      ".main-footer-left",
      { left: "400px", bottom: "-85px", backgroundSize: "50%" },
      "<"
    )
    .to(
      ".main-footer-right",
      { right: "400px", bottom: "-85px", backgroundSize: "50%" },
      "<"
    )
    // show start
    .to(".start-item", { opacity: 1 })
    .to(".main-footer-left", { display: "none" }, "<")
    .to(".main-footer-right", { display: "none" }, "<")
    // finish
    .to(".confuse", { opacity: 0 })
    .to(".applicant", { width: "80vw" }, "<")
    .to(".main-footer-center", { width: "80vw", bottom: "0px" }, "<");

  // participantScroll
  const participantScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".participant-background",
      // markers: true,
      pin: true,
      scrub: true,
      duration: 0.5,
    },
  });
  participantScroll
    .to(".map-now", { top: "9px", left: "98px" })
    // show title
    .to(".participant-title", { opacity: 1 })
    // show item
    .to(".participant-item", { opacity: 1, top: "268px" })
    // finish
    .to(".participant", { opacity: 0 });

  // challengeScroll
  const challengeScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".challenge-background",
      // markers: true,
      pin: true,
      scrub: true,
      duration: 0.5,
    },
  });
  challengeScroll
    .to(".map-now", { top: "9px", left: "169px" })
    // show title
    .to(".challenge-title", { opacity: 1 })
    .to(".applicant", { width: "40vw" }, "<")
    .to(".main-footer-center", { width: "40vw", bottom: "-70px" }, "<")
    // show week1
    .to(".week1-item", { opacity: 1, display: "flex" })
    // show week2
    .to(".week1-item", { opacity: 0, display: "none", y: "-150px" })
    .to(".week2-item", { opacity: 1, display: "flex" }, "<")
    // show week3
    .to(".week2-item", { opacity: 0, display: "none", y: "-150px" })
    .to(".week3-item", { opacity: 1, display: "flex" }, "<")
    // finish
    .to(".week3-item", { opacity: 0, display: "none", y: "-150px" })
    .to(".challenge", { opacity: 0 })
    .to(".applicant", { width: "80vw" }, "<")
    .to(".main-footer-center", { width: "80vw", bottom: "0px" }, "<");

  // instructionScroll
  const instructionScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".instruction-background",
      // markers: true,
      pin: true,
      scrub: true,
      duration: 0.5,
    },
  });
  instructionScroll
    .to(".map-now", { top: "53px", left: "160px" })
    // show line
    .to(".instruction-item", { opacity: 1 })
    .to(".applicant", { width: "40vw" }, "<")
    .to(".main-footer-center", { width: "40vw", bottom: "-70px" }, "<")
    // show sign-up
    .to(".sign-up", { opacity: 1, display: "block" })
    // show start
    .to(".start", { opacity: 1, display: "block" })
    // show upload
    .to(".upload", { opacity: 1, display: "block" })
    // finish
    .to(".week3-item", { opacity: 0, y: "-150px" })
    .to(".instruction", { opacity: 0 })
    .to(".applicant", { width: "50vw" }, "<")
    .to(".main-footer-center", { width: "50vw", bottom: "-50px" }, "<")
    .to(".award", { opacity: 1 }, "<");

  // awardScroll
  const awardScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".award-background",
      // markers: true,
      pin: true,
      scrub: true,
      duration: 0.5,
    },
  });
  awardScroll
    .to(".map-now", { top: "75px", left: "112px" })
    // title-hight
    .to(".title-hight", { opacity: 1, top: "65px", scale: 1 })
    .to(".title-hight", { top: "65px", scale: 1 }, "<=+.2")
    .to(
      ".award-decorate-1",
      { top: "200px", left: "100px", backgroundSize: "80%" },
      "<"
    )
    .to(
      ".award-decorate-2",
      { top: "170px", right: "100px", backgroundSize: "90%" },
      "<"
    )
    // title-talking & award-item(award-icon)
    .to(".award-decorate", { opacity: 0 }, "+=1")
    .to(".title-hight", { opacity: 0 }, "<")
    .to(".title-talking", { opacity: 1 }, "<")
    .to(".award-item", { opacity: 1, display: "flex" }, "<")
    .to(".award-icon", { rotation: 360, repeat: 2 }, "<")
    // finish
    .to(".title-talking", { opacity: 0 })
    .to(".award-icon", { rotation: 360, repeat: 2 }, "<")
    .to(".award-item", { opacity: 0, x: "100px", display: "none" }, "<")
    .to(".award", { opacity: 0 })
    .to(".applicant", { width: "50vw" }, "<")
    .to(".main-footer-center", { width: "50vw", bottom: "-50px" }, "<");

  // sponsorScroll
  const sponsorScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".sponsor-background",
      // markers: true,
      pin: true,
      scrub: true,
      duration: 0.5,
    },
  });
  sponsorScroll
    .to(".map-now", { top: "106px", left: "72px" })
    .to(".sponsor", { opacity: 1 }, "<")
    .to(
      ".main-footer-sponsor-left",
      { opacity: 1, bottom: "-350px", left: "170px" },
      "<"
    )
    .to(
      ".main-footer-sponsor-right",
      { opacity: 1, bottom: "-350px", right: "170px" },
      "<"
    )
    // show item
    .to(".main-footer-sponsor-left", { left: "300px", backgroundSize: "90%" })
    .to(
      ".main-footer-sponsor-right",
      { right: "300px", backgroundSize: "90%" },
      "<"
    )
    .to(".block-item", { opacity: 1, display: "flex", y: 0 }, "<")
    .to(".tita-item", { opacity: 1, display: "flex", y: 0 }, "<+=.2")
    .to(".kdan-item", { opacity: 1, display: "flex", y: 0 }, "<+=.2")
    // finish
    .to(".sponsor", { opacity: 0 })
    .to(".kdan-item", { opacity: 0, display: "none", y: 100 }, "<")
    .to(".tita-item", { opacity: 0, display: "none", y: 100 }, "<+=.2")
    .to(".block-item", { opacity: 0, display: "none", y: 100 }, "<+=.2")
    .to(".main-footer-sponsor-left", { opacity: 0 }, "<")
    .to(".main-footer-sponsor-right", { opacity: 0 }, "<")
    .to(".finish", { opacity: 1 }, "<");

  // finishScroll
  const finishScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".finish-background",
      // markers: true,
      pin: true,
      scrub: true,
      duration: 0.5,
    },
  });
  finishScroll
    .to(".map-finish", { opacity: 1 })
    .to(".map-now", { opacity: 0 }, "<")
    .to(".map-map", { opacity: 0 }, "<")
    // show flag & ribbon
    .to(".applicant", { width: "70vw" })
    .to(".main-footer-center", { width: "70vw", bottom: "-10px" }, "<")
    .to(".finish-flag", { opacity: 1, display: "block" }, "<+=.2")
    .to(".finish-decorate-1", { left: "100px" }, "<")
    .to(".finish-decorate-2", { right: "100px" }, "<")
    .to(".finish-decorate-3", { opacity: 1 }, "<")
    .to(".finish-decorate-4", { opacity: 1 }, "<")
    // cut of ribbon
    .to(".applicant", { width: "80vw" })
    .to(".main-footer-center", { width: "80vw", bottom: "-10px" }, "<")
    .to(".finish-decorate-1", { left: "400px", backgroundSize: "60%" }, "<")
    .to(".finish-decorate-2", { right: "200px", backgroundSize: "60%" }, "<")
    .to(".finish-decorate-3", { width: "48%" }, "<")
    .to(".finish-decorate-4", { width: "48%" }, "<")
    // run finish but applicant still show
    .to(".applicant-img", { width: "100%" })
    .to(".finish-decorate-1", { opacity: 0 }, "<")
    .to(".finish-decorate-2", { opacity: 0 }, "<")
    .to(".finish-decorate-3", { width: "0%" }, "<")
    .to(".finish-decorate-4", { width: "0%" }, "<")
    // final finish (applicant is not show)
    .to(".applicant-img", { display: "none" })
    .to(".finish-flag", { opacity: 0, display: "none" }, "<+=1")
    .to(".finish-sign-up", { opacity: 1, display: "flex" })
    .to(".header-logo", { opacity: 0 }, "<");
}
export default GSAP;

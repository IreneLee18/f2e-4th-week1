function Footer({ handleClickSignUp }) {
  return (
    <footer>
      <div className="map">
        <div className="map-map"></div>
        <div className="map-now"></div>
        <div className="map-finish"></div>
      </div>
      <div className="join">
        <div className="join-text color-primary">JOIN</div>
        <div className="join-hand"></div>
        <div className="join-us" onClick={handleClickSignUp}></div>
      </div>
    </footer>
  );
}

export default Footer;

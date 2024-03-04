import "./search.css";

function Search() {
  return (
    <div className="main">
      <div>
        <img
          src="https://www.beautybebo.com/pub/media/ads/home-slider/OFFER_HOME.jpeg"
          alt=""
          className="topImg"
        />
      </div>
      <div className="second">
        <img
          src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
          alt="beautyLogo"
        />
          <div className="inputSearch">
        <input type="text" placeholder="Search items" className="search" />
        <span><img src="/images/search.png" alt="searchIcon" className="searchIcon"/></span>
        </div>

        <div className="icons">
          <img src="/images/heart.png" alt="" />
          <img src="/images/person.png" alt="" />
          <span>My Account</span>
        </div>
      </div>
    </div>
  );
}
export default Search;

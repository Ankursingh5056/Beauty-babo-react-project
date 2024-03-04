import { Link } from "react-router-dom";
import "./navbar.css"

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/skin">Skin</Link>
      <Link to="/momBaby">Mom $ Baby</Link>
      <Link to="womenFashion">Women Fashion</Link>
    </div>
  );
}
export default NavBar;

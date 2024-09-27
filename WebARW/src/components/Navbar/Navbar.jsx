import React from "react";
import "./Navbar.css";
import logo from "../../assets/gdscLogoBanner.png";

const Navbar = () => {
  const [sticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="GDSC Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

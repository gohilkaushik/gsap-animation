import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#eee] py-3">
      <nav>
        <Link to="/" style={{ margin: "0 10px" }}>
          simple-animation
        </Link>
        <Link to="/timeline-animation" style={{ margin: "0 10px" }}>
          timeline-animation
        </Link>
        <Link to="/scroll-animation" style={{ margin: "0 10px" }}>
          ScrollAnimation
        </Link>
        <Link to="/custom-cursor" style={{ margin: "0 10px" }}>
          CustomCursor
        </Link>
        <Link to="/demo" style={{ margin: "0 10px" }}>
          demo
        </Link>
        <Link to="/sidebar" style={{ margin: "0 10px" }}>
          sidebar
        </Link>
        <Link to="/scroll-smoth" style={{ margin: "0 10px" }}>
          scroll-smoth
        </Link>
      </nav>
    </header>
  );
};

export default Header;

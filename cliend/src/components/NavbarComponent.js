import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item pr-3 pt-3 pb-3">
          <Link to={`/`}>หน้าหลัก</Link>
        </li>
        <li className="nav-item pr-3 pt-3 pb-3">
          <Link to={`/create`}>เขียนบทความ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;

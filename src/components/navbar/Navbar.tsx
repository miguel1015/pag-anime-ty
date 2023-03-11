import "./navbar.css"
import { Outlet, Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc"
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/animes">Buscar anime <FcSearch style={{fontSize: "25px"}}/> </Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

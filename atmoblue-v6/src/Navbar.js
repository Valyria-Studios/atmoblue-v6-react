import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <header>
        <nav>
          <h1>ATMOBlue</h1>
          <div className="links">
            <NavLink to="/">My Air</NavLink>
            <NavLink to="cityview">City View</NavLink>
            <NavLink to="maskview">Mask View</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
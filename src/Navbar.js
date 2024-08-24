import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-background p-2 flex justify-between items-center">
        <div className="text-white text-3xl text- font-bold">
          <Link to="/">
            <span className="text-accent">4</span>
            <span>v</span>
            <span className="text-accent">0</span>
            <span>n</span>
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/about" className="text-white hover:underline">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:underline">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr className="border-primary border-t-2"></hr>
    </div>
  );
}

export default Navbar;

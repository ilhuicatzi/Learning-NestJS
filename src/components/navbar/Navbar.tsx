import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link to="/" className="text-3xl font-extrabold">
        App
      </Link>
      <div className="flex items-center gap-3">
        <Link
          className="px-3 py-1.5 hover:bg-muted rounded-md hover:text-primary"
          to="/introduction"
        >
          Introducción
        </Link>
        <Link
          className="px-3 py-1.5 hover:bg-muted rounded-md hover:text-primary"
          to="/modulos"
        >
          Módulos
        </Link>
        <Link
          className="px-3 py-1.5 hover:bg-muted rounded-md hover:text-primary"
          to="/controllers"
        >
          Controladores
        </Link>
        <Link
          className="px-3 py-1.5 hover:bg-muted rounded-md hover:text-primary"
          to="/servises"
        >
          Servicios
        </Link>
        <Link
          className="px-3 py-1.5 hover:bg-muted rounded-md hover:text-primary"
          to="/about"
        >
          About
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;

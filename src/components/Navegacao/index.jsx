import { useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import logo from "./logo.png";

export default function Nav() {
  const { pathname } = useLocation();
  const resolve =
    pathname === "/" ? { backgroundColor: "" } : { backgroundColor: "#090f16" };

  return (
    <div
      className="flex items-center justify-between p-4 border-b-2 border-emphisis"
      style={resolve}
    >
      <img src={logo} alt="Logo Alura flix" className="max-h-9" />
      <div className="flex justify-start gap-2 px-4 py-2 lg:justify-end xl:justify-end">
        <NavLink url="/">Home</NavLink>
        <NavLink url="/novo-video">Novo vídeo</NavLink>
      </div>
    </div>
  );
}

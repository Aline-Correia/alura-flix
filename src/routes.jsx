import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comum from "./pages/Comum";
import Inicio from "./pages/Inicio";
import NovoVideo from "./pages/NovoVideo";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comum />}>
          <Route index element={<Inicio />}></Route>
          <Route path="novo-video" element={<NovoVideo />}></Route>
          <Route path="*" element={<PaginaNaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

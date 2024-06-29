import Rodape from "components/Rodape";
import Navegacao from "components/Navegacao";
import VideosProvider from "context/VideosContext";
import { Outlet } from "react-router-dom";

export default function Comum() {
  return (
    <div className="bg-background">
      <VideosProvider>
        <div>
          <Navegacao />

          <Outlet />
          <Rodape />
        </div>
      </VideosProvider>
    </div>
  );
}

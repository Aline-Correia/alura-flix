import { useLocation } from "react-router-dom";
import { useVideosContext } from "hooks/useVideosContext";
import Button from "../Botao";
import Titulo from "./Titulo";
import Select from "./Select";
import Id from "./Id";

export default function Form({ fnSubmit }) {
  const { fnResetForm } = useVideosContext();
  const { pathname } = useLocation();

  return (
    <form
      method="dialog"
      className={
        pathname === "/" ? "flex flex-col *:grow gap-2 lg:min-w-[350px]" : ""
      }
      onSubmit={fnSubmit}
    >
      <Titulo />
      <Select />
      <Id />

      <div className="flex gap-4 *:grow my-6">
        <Button type="submit" reset={() => {}}>
          Salvar
        </Button>
        <Button type="reset" reset={fnResetForm}>
          Limpar
        </Button>
      </div>
    </form>
  );
}

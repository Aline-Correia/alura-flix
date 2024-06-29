import { v4 as uuidv4 } from "uuid";
import { useVideosContext } from "hooks/useVideosContext";
import Category from "./Categoria";

export default function ContainerCategoria() {
  const { fnListNameCategory } = useVideosContext();

  return (
    <div className="p-4 my-12 space-y-24">
      {fnListNameCategory().map((name) => (
        <Category key={uuidv4()} nameCategory={name} />
      ))}
    </div>
  );
}

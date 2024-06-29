import { useVideosContext } from "hooks/useVideosContext";

export default function Titulo() {
  const { valorInputAttrNomeTitulo, setValorInputAttrNomeTitulo } =
    useVideosContext();

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-white md:text-lg lg:text-lg xl:text-lg">
        Título
      </h2>
      <input
        className="text-ellipsis bg-[#141c2f] rounded-lg outline-none border-2 border-emphisis px-6 py-3 text-white w-full"
        type="text"
        placeholder="Como a plataforma da Alura funciona?"
        value={valorInputAttrNomeTitulo}
        required
        onChange={(e) => setValorInputAttrNomeTitulo(() => e.target.value)}
      />
    </div>
  );
}

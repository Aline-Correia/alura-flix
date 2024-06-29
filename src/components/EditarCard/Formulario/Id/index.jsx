import { useVideosContext } from "hooks/useVideosContext";

export default function Id() {
  const { valorInputAttrNomeImagem, setValorInputAttrNomeImagem } =
    useVideosContext();

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-white md:text-lg lg:text-lg xl:text-lg">
        Id do vídeo
      </h2>
      <input
        className="text-ellipsis bg-[#141c2f] rounded-lg outline-none border-2 border-emphisis px-6 py-3 text-white w-full"
        type="text"
        value={valorInputAttrNomeImagem}
        placeholder="sda89kAl"
        onChange={(e) => setValorInputAttrNomeImagem(() => e.target.value)}
        required
      />
    </div>
  );
}

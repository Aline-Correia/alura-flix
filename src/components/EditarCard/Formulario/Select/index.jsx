import { useVideosContext } from "hooks/useVideosContext";

export default function Select() {
  const { valorSelect, setValorSelect } = useVideosContext();

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-white md:text-lg lg:text-lg xl:text-lg">
        Categoria
      </h2>
      <select
        onChange={(e) => {
          const selectedValue = e.target.value;
          setValorSelect(selectedValue);
        }}
        required
        value={valorSelect}
        className="text-ellipsis bg-[#141c2f] rounded-lg outline-none border-2 border-emphisis px-6 py-3 text-white w-full *:text-white"
      >
        <option></option>
        {["front-end", "back-end", "mobile"].map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>
    </div>
  );
}

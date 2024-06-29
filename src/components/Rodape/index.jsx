import logo from "./logo.png";

export default function Rodape() {
  return (
    <>
      <figure className="p-4 border-t-4 border-emphisis bg-[#030910]">
        <img src={logo} alt="Logo Alura Flix" className="mx-auto max-h-8" />
      </figure>
    </>
  );
}

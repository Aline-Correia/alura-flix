import Descricao from "./Descricao";

export default function Banner() {
  return (
    <div
      className="grid grid-cols-1 bg-cover bg-center bg-no-repeat gap-6 p-6 justify-center items-center min-h-[500px] overflow-hidden bg-black/75 bg-blend-multiply lg:grid-cols-2 xl:grid-cols-2"
      style={{
        backgroundImage:
          "url('https://img.youtube.com/vi/5MzOCxSWrrc/hqdefault.jpg')",
      }}
    >
      <Descricao title="Como nasceu a Alura com Gui SIlveira | #HipstersPontoTube" />

      <iframe
        width="75%"
        height="315"
        src="https://www.youtube.com/embed/5MzOCxSWrrc"
        title=" Como fazer o React e aprender a ideia do Virtual DOM na prática | Como implementar o ReactJS "
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="mx-auto border-4 border-emphisis"
      ></iframe>
    </div>
  );
}

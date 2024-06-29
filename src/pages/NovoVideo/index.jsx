import AdicionarVideo from "components/AdicionarVideo";

export default function NovoVideo() {
  return (
    <main className="max-w-5xl px-4 py-12 mx-auto space-y-12 lg:p-16 xl:p-24">
      <div className="space-y-4">
        <h2 className="text-4xl font-medium text-center text-white lg:text-5xl xl:text-5xl">
          Novo vídeo
        </h2>
        <h4 className="text-center text-white">
          Complete o formulário para criar um novo card de vídeo.
        </h4>
      </div>
      <h4 className="text-white text-xl lg:text-2xl xl:text-2xl border-[#374151] py-4 font-medium border-y-2">
        Criar Card
      </h4>
      <AdicionarVideo />
    </main>
  );
}

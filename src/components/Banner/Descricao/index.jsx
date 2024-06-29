import Label from "components/Label";

export default function Descricao({ title }) {
  return (
    <section className="max-w-2xl mx-auto space-y-12">
      <Label color="#2873c4">React do zero</Label>

      <div className="*:text-white space-y-4">
        <h2 className="text-4xl font-semibold line-clamp-2">{title}</h2>
        <p className="line-clamp-4">
          Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
          uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
          dicas sobre performance e de quebra conhecer uma plataforma
          sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse
          vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
        </p>
      </div>
    </section>
  );
}

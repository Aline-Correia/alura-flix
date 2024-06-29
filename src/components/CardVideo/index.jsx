import { IoMdClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useVideosContext } from "hooks/useVideosContext";

export default function CardVideo({ video, color }) {
  const { cover, title } = video;
  const { setVideoSelecionado, fnDeleteVideo } = useVideosContext();

  return (
    <div className="relative border-4" style={{ borderColor: `${color}` }}>
      <img src={cover} alt={title} />

      <div className="flex items-center justify-center gap-4 p-4 text-white uppercase bg-black cursor-pointer">
        <div
          className="flex items-center justify-center gap-2"
          title="Editar"
          name="Editar"
          aria-label="Editar card de imagem"
        >
          <FaEdit
            className="text-white"
            size="24px"
            onClick={() => setVideoSelecionado(video)}
          />
          Editar
        </div>

        <div className="flex items-center justify-center gap-2">
          <IoMdClose
            color="white"
            size="32px"
            onClick={() => fnDeleteVideo(video)}
          />
          Deletar
        </div>
      </div>
    </div>
  );
}

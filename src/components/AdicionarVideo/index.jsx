import Formulario from "components/EditarCard/Formulario";
import { useVideosContext } from "hooks/useVideosContext";

export default function AdicionarVideo() {
  const { videoFormulario, fnResetForm, fnAddVideo } = useVideosContext();

  function fnSubmit() {
    fnAddVideo(videoFormulario);
    alert("Vídeo adicionado");
    return fnResetForm();
  }

  return <Formulario fnSubmit={fnSubmit} />;
}

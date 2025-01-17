import { VideosContext, objectDefault } from "context/VideosContext";
import { useContext } from "react";

export function useVideosContext() {
  const {
    videos,
    setVideos,
    videoSelecionado,
    setVideoSelecionado,
    videoFormulario,
    setVideoFormulario,
    valorInputAttrNomeTitulo,
    setValorInputAttrNomeTitulo,
    valorInputAttrNomeImagem,
    setValorInputAttrNomeImagem,
    valorSelect,
    setValorSelect,
  } = useContext(VideosContext);

  function fnListNameCategory() {
    const categorySet = new Set();

    videos.forEach((item) => {
      if (item.category) {
        categorySet.add(item.category);
      }
    });

    return Array.from(categorySet);
  }

  function fnColorPerCategory(nameCategory) {
    switch (nameCategory) {
      case "front-end":
        return "#115baa";
      case "back-end":
        return "#c52281";
      case "mobile":
        return "#d45437";
      default:
        return "#313336";
    }
  }

  async function fnDeleteVideo(video) {
    const { id } = video;
    const url = `http://localhost:5500/videos/${id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar o vídeo");
      }

      return setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar o vídeo:", error);
      alert("Houve um problema ao deletar o vídeo. Tente novamente.");
    }
  }

  async function fnAddVideo(video) {
    const url = "http://localhost:5500/videos";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
      });

      if (!response.ok) {
        throw new Error(`Erro ao adicionar o vídeo: ${response.statusText}`);
      }

      const newVideo = await response.json();

      return setVideos((prevVideos) => [...prevVideos, newVideo]);
    } catch (error) {
      console.error("Erro ao adicionar o vídeo:", error);
      alert("Houve um problema ao adicionar o vídeo. Tente novamente.");
    }
  }

  async function fnEditVideo(idVideoCurrent, newVideo) {
    const url = `http://localhost:5500/videos/${idVideoCurrent}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVideo),
      });

      if (!response.ok) {
        throw new Error(`Erro ao editar o vídeo: ${response.statusText}`);
      }

      const editedVideo = await response.json();

      return setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === idVideoCurrent ? editedVideo : video
        )
      );
    } catch (error) {
      console.error("Erro ao editar o vídeo:", error);
      alert("Houve um problema ao editar o vídeo. Tente novamente.");
    }
  }

  function fnResetForm() {
    setTimeout(() => {
      setVideoFormulario(objectDefault);
      setValorInputAttrNomeTitulo("");
      setValorInputAttrNomeImagem("");
      setValorSelect("");
    }, 500);
  }

  return {
    videos,
    setVideos,
    videoSelecionado,
    setVideoSelecionado,
    videoFormulario,
    setVideoFormulario,
    valorInputAttrNomeTitulo,
    setValorInputAttrNomeTitulo,
    valorInputAttrNomeImagem,
    setValorInputAttrNomeImagem,
    valorSelect,
    setValorSelect,
    fnListNameCategory,
    fnColorPerCategory,
    fnDeleteVideo,
    fnAddVideo,
    fnEditVideo,
    fnResetForm,
  };
}

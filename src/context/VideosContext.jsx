import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export const objectDefault = {
  title: "",
  category: "",
  cover: "",
  id: uuidv4(),
};

export default function VideosProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [videoSelecionado, setVideoSelecionado] = useState(null);
  const [videoFormulario, setVideoFormulario] = useState(objectDefault);
  const [valorInputAttrNomeTitulo, setValorInputAttrNomeTitulo] = useState("");
  const [valorInputAttrNomeImagem, setValorInputAttrNomeImagem] = useState("");
  const [valorSelect, setValorSelect] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5500/videos")
      .then((body) => body.data)
      .then((resolve) => setVideos(resolve));
  }, []);

  useEffect(() => {
    setVideoFormulario((prevForm) => ({
      ...prevForm,
      category: valorSelect,
      title: valorInputAttrNomeTitulo,
      cover: `https://img.youtube.com/vi/${valorInputAttrNomeImagem}/hqdefault.jpg`,
    }));
  }, [
    valorInputAttrNomeImagem,
    valorInputAttrNomeTitulo,
    valorInputAttrNomeImagem,
    valorSelect,
  ]);

  return (
    <VideosContext.Provider
      value={{
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
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

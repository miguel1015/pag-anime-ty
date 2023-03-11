import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillSkipBackwardBtnFill } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "../App.css";

//  interface Api{
//      personaje:any
//  }

export default function Api() {
  const [apiNat, setApiNat] = useState([]);
  const [mostrarInforacion, setMostarInformacion] = useState(false);
  const [searchKey] = useState("");
  const [buscador, setBuscador] = useState("");
  const [buscadoranime, setBuscadorAnime] = useState("");

  const search = searchKey ? "search" : buscador;
  const API = `https://api.jikan.moe/v4/anime?q=${search}&limit=20`;

  const VerNaruto = async (searchKey: string) => {
    const {
      data: { data },
    } = await axios.get(API, {
      params: {
        query: searchKey,
      },
    });
    setApiNat(data);
  };

  useEffect(() => {
    VerNaruto(searchKey);
  });

  console.log(apiNat);

  const mostar = () => {
    if (mostrarInforacion) {
      setMostarInformacion(false);
    } else {
      setMostarInformacion(true);
    }
  };

  const hanldeForm = (e: any) => {
    e.preventDefault();
    VerNaruto(searchKey);
    console.log(searchKey);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <button
          className="botonX"
          onClick={() => {
            navigate("/");
          }}
        >
          <BsFillSkipBackwardBtnFill />
        </button>
        <h1 className="h1api">Api's mike</h1>
        <button
          className="botonRegresar"
          onClick={() => {
            navigate("/");
          }}
        >
          volver a home
        </button>
        <form onSubmit={hanldeForm}>
          {/* <input
            onChange={(e) => {
              setBuscador(e.target.value);
            }}
          /> */}

          <div className="box">
            <input
              type="text"
              className="input"
              name="txt"
              onChange={(e) => {
                setBuscador(e.target.value);
              }}
            />
            <i className="isearch">
              <FcSearch />
            </i>
          </div>
        </form>
      </div>

      <div className="row">
        {apiNat.map((personaje: any, id: any) => {
          return (
            <div
              key={id}
              className="divmedia"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="divmediacont"
               
              >
                <h2>{personaje.title}</h2>
                <img
                  style={{ cursor: "pointer", width: "100%" }}
                  src={personaje.images.jpg.large_image_url}
                  alt=""
                  onClick={() => {
                    mostar();
                    setBuscadorAnime(personaje.mal_id);
                  }}
                />
                {buscadoranime === personaje.mal_id && mostrarInforacion ? (
                  <ul>
                    <li
                    className="mediali"
                    >
                      {personaje.synopsis}
                    </li>
                    <li className="mediali" >{personaje.duration}</li>
                    <li className="mediali">

                    <a  href={personaje.url} target="_blank" rel="noreferrer">
                      {personaje.url}
                    </a>
                    </li>
                    <h2  >episodes:{personaje.episodes}</h2>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

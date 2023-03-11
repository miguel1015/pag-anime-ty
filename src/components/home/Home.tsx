import "./Home.css";
import Logo from "../images/anuime.jpg";
import Kimetsu from "../images/kimetsu.webp";
import Dragon from "../images/dragon-ball-super.jpg";
import Ataque from "../images/atacaso a los titanes.jpg";
import Jujutsu from "../images/jujutsu kaisennn.jpg";
import OnePuch from "../images/one puch man.jpg";
import Boku from "../images/boku no hero.jpg";
import Death from "../images/deathnote.jpg";
import One from "../images/one piecee.jpg";
import { FaAngleDoubleRight, FaBars } from "react-icons/fa";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";
import Navbar from "../navbar/Navbar";

export default function Home() {
  return (
    <div>
      <button
        onClick={() => {
          document.querySelector(".nav-menu")?.classList.toggle("show");
        }}
      >
        <div className="menu-btn">
          <FaBars></FaBars>
        </div>
      </button>

      <div className="conteiner">
        <h1 className="h1mike">Anime's Mike</h1>

        <img src={Logo} alt="logo" className="nav-brand"  style={{position: "absolute"}} />
        <nav className="nav-main">
          <ul className="nav-menu show">
            <Navbar />
            <li>
              <a href="https://inmanga.com/" target={"_blank"} rel="noreferrer">
                Mangas
              </a>
            </li>
            <li>
              <a
                href="https://www.crunchyroll.com/es/"
                target={"_blank"}
                rel="noreferrer"
              >
                Ver animes
              </a>
            </li>
            <li>
              <a
                href="https://www.minijuegos.com/juegos-de-anime-y-manga"
                target={"_blank"}
                rel="noreferrer"
              >
                Juegos
              </a>
            </li>
            <li>
              <a
                href="https://www.viaje.jp/cultura/anime-japon/anime_japon.html*:~:text=El%20anime%20es%20una%20de,la%20tierra%20del%20sol%20naciente."
                target={"_blank"}
                rel="noreferrer"
              >
                Sobre la cultura
              </a>
            </li>
            <li>
              <a
                href="https://japonpedia.com/historia-del-manga-y-el-anime-cultura-japonesa/"
                target={"_blank"}
                rel="noreferrer"
              >
                Historia
              </a>
            </li>
            <li>
              <a
                href="https://www.ecured.cu/Anime"
                target={"_blank"}
                rel="noreferrer"
              >
                More
              </a>
            </li>
          </ul>
          <ul className="nav-menu-right">
            <li>
              <i className="fa fa-search" aria-hidden="true"></i>
            </li>
          </ul>
        </nav>
        <hr />

        <header className="showcase">
          <h1 className="besth1">THE BEST ANIMES</h1>
          <p className="parraf">
            Los mejores animes de la epoca y que han trazado una linea a lo
            largo de nuestras generaciones.
          </p>
          <a
            href="https://naruto-official.com/es"
            target={"_blank"}
            rel="noreferrer"
            className="btn"
          >
            read more <FaAngleDoubleRight />{" "}
          </a>
          <div className="scene-2">
            <h1 className="besth1">THE BEST ANIMES</h1>
            <p className="parraf">
              Los mejores animes de la epoca y que han trazado una linea a lo
              largo de nuestras generaciones.
            </p>
            <a
              href="https://naruto-official.com/es"
              target={"_blank"}
              rel="noreferrer"
              className="btn"
            >
              read more <FaAngleDoubleRight />{" "}
            </a>
          </div>
        </header>

        <div className="news-cards">
          <div>
            <img src={Kimetsu} alt="news 1" />
            <h3>Kimetsu no yaiba</h3>
            <p>
              Kimetsu no Yaiba (鬼滅の刃, La espada exterminadora de Demonios?),
              conocida en España como Kimetsu no Yaiba: Guardianes de la Noche y
              en inglés Demon Slayer: Kimetsu no Yaiba. Es una obra de Koyoharu
              Gotoge que se publicó semanalmente en las páginas de la revista
              Shūkan Shōnen Jump de la editorial japonesa Shueisha.
            </p>
            <a
              href="https://kimetsu-no-yaiba.fandom.com/es/wiki/Kimetsu_no_Yaiba_(franquicia)"
              target={"_blank"}
              rel="noreferrer"
            >
              learn more <FaAngleDoubleRight />
            </a>
          </div>
          <div>
            <img src={Dragon} alt="news 2" />
            <h3>Dragon ball</h3>
            <p>
              Dragon Ball (ドラゴンボール lit. Bola de dragón/Esfera del
              dragón?) es un manga escrito e ilustrado por Akira Toriyama. Fue
              publicado originalmente en la revista Shōnen Jump, de la editorial
              japonesa Shūeisha, entre 1984 y 1995 Su trama describe las
              aventuras de Gokū, un guerrero saiyajin, experto en artes
              marciales que en su infancia inicia sus viajes y aventuras.{" "}
            </p>
            <a
              href="https://es.dragon-ball-official.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              learn more <FaAngleDoubleRight />
            </a>
          </div>
          <div>
            <img src={Ataque} alt="news 3" />
            <h3>Shingeki no kyojin</h3>
            <p>
              Shingeki no Kyojin (進撃の巨人 Lit. "Titán de Ataque"?), también
              conocida en países de habla hispana como Ataque a los titanes y
              Ataque de los titanes,2​n. 2​ es una serie de manga japonesa
              escrita e ilustrada por Hajime Isayama. La historia se desarrolla
              en un mundo ficticio en el que la humanidad está al borde de la
              extinción a causa de unas criaturas humanoides llamadas «titanes»
            </p>
            <a
              href="https://shingeki-no-kyojin.fandom.com/es/wiki/Shingeki_no_Kyojin_Wiki"
              target={"_blank"}
              rel="noreferrer"
            >
              learn more <FaAngleDoubleRight />
            </a>
          </div>
          <div>
            <img src={Jujutsu} alt="news 4" />
            <h3>Jujutsu kaisen</h3>
            <p>
              Jujutsu Kaisen (呪術廻戦 lit. Guerra de magia?), también conocida
              como Jujutsu Kaisen: Guerra de hechiceros en España, es una serie
              de manga japonés escrita e ilustrada por Gege Akutami. Yūji
              Itadori es un estudiante de secundaria que vive en Sendai con su
              abuelo. Se une al Club de Investigación de lo Oculto, a pesar de
              poseer un talento innato para el deporte.
            </p>
            <a
              href="https://jujutsukaisen.jp/"
              target={"_blank"}
              rel="noreferrer"
            >
              learn more <FaAngleDoubleRight />
            </a>
          </div>
        </div>

        <section className="cards-banner-one">
          <div className="content">
            <h2 className="parraf">More anime</h2>
            <a
              href="https://www.espinof.com/listas/mejores-animes-ultimos-anos-donde-puedes-ver-streaming"
              className="btn"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaAngleDoubleRight />
            </a>
          </div>
        </section>

        <div className="news-cards">
          <div>
            <img src={OnePuch} alt="news 1" />
            <h3>One puch man</h3>
            <p>
              One Punch-Man (ワンパンマン lit. Hombre-Un Golpe?) es un webcómic
              de acción y comedia japonés, creado por el artista One e iniciado
              en 2009. El mundo se ve invadido por extraños monstruos que
              aparecen misteriosamente y que causan numerosos desastres a la
              población. Saitama es un poderoso superhéroe calvo que derrota
              fácilmente a los monstruos u otros villanos con un único golpe de
              su puño.
            </p>
            <a
              href="https://onepunchman.fandom.com/es/wiki/Portada"
              target={"_blank"}
              rel="noreferrer"
            >
              learn more <FaAngleDoubleRight />
            </a>
          </div>
          <div>
            <img src={Boku} alt="news 2" />
            <h3>Boku no hero</h3>
            <p>
              My Hero Academia (僕のヒーローアカデミア Boku no Hīrō Akademia?)
              es una serie de manga escrita e ilustrada por Kōhei Horikoshi. Se
              basa en un one-shot realizado por el mismo autor y publicado en el
              quinto volumen del manga Ōmagadoki Dōbutsuen bajo el nombre de My
              Hero. La historia tiene lugar en un mundo donde el 80% de la
              población ha desarrollado «dones», surgiendo así héroes y
              villanos. Entre el 20% de personas sin dones, se encuentra Izuku
              Midoriya, cuyo mayor deseo es poder estudiar en la U.A.
            </p>
            <a href="https://heroaca.com/" target={"_blank"} rel="noreferrer">
              learn more <FaAngleDoubleRight />
            </a>
          </div>
          <div>
            <img src={Death} alt="news 3" />
            <h3>Death note</h3>
            <p>
              Death Note (デスノート Desu Nōto?) es una serie de manga escrita
              por Tsugumi Ōba e ilustrada por Takeshi Obata, y cuya adaptación a
              serie de anime fue dirigida por Tetsurō Araki. Cuenta, además, con
              varias películas y videojuegos. La historia se centra en Light
              Yagami, un estudiante de escuela secundaria. Un día, encuentra un
              cuaderno con poderes sobrenaturales llamado «Death Note»
            </p>
            <a
              href="https://deathnote.fandom.com/es/wiki/Death_Note_(Serie)"
              target={"_blank"}
              rel="noreferrer"
            >
              learn more <FaAngleDoubleRight />
            </a>
          </div>
          <div>
            <img src={One} alt="news 4" />
            <h3>One piece</h3>
            <p>
              One Piece (ワンピース?) (estilizado en mayúsculas) es un manga
              escrito e ilustrado por el mangaka japonés Eiichirō Oda. Comenzó a
              publicarse en la revista Japonesa Weekly Shōnen Jump el 22 de
              julio de 1997 y a la fecha se han publicado 104 volúmenes. Luffy
              es un chico que intenta convertirse en el rey de los piratas, pero
              en su camino encontrara muchos retos.
            </p>
            <a href="https://one-piece.com/" target={"_blank"} rel="noreferrer">
              learn more <FaAngleDoubleRight />
            </a>
          </div>
        </div>

        <section className="cards-banner-two">
          <div className="content">
            <h2 className="parraf">More anime</h2>
            <p></p>
            <a
              href="https://www.espinof.com/listas/mejores-animes-ultimos-anos-donde-puedes-ver-streaming"
              target={"_blank"}
              rel="noreferrer"
              className="btn"
            >
              <FaAngleDoubleRight />
            </a>
          </div>
        </section>

        <section className="social">
          <p>follow</p>
        </section>
      </div>

      <div className="container"></div>
      <div className="footer-links">
        <div className="footer-container">
          <div className="links">
            <a href="*">
              <a
                href="https://www.youtube.com/@miguelsalazar3743"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <BsYoutube />
              </a>
            </a>
            <a href="*">
              <a
                href="https://es-la.facebook.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <BsFacebook />{" "}
              </a>
            </a>
            <a href="*">
              <a
                href="https://www.instagram.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <BsInstagram></BsInstagram>{" "}
              </a>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h2>Miguel salazar</h2>
      </footer>
    </div>
  );
}

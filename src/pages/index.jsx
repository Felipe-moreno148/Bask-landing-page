import "./Home.css";
import logo from "../assets/logo.svg";
import img1 from "../assets/IMG_7997.jpeg";
import img2 from "../assets/IMG_7998.jpeg";
import img3 from "../assets/IMG_8001.jpeg";
import behance from "../icons/behance.png"
import instagram from "../icons/instagram.png"

function Home() {
  return (
    <div>
      <div id="headerContainer">
        <header>
          <img src={logo} id="logo" />
          <ul typeof="">
            <li>
              <a href="#sobre">Sobre nós</a>
            </li>
            <li>
              <a href="#portifolio">Portifolio</a>
            </li>
            <li>
              <a href="#contato">Contatos</a>
            </li>
          </ul>
        </header>
      </div>
      <section id="sobre">
        <h1>Sobre nós</h1>
        <img src={logo} id="logosite" />
        <p>
          Uma empresa design moderna que presa pela acessibilidade <br />{" "}
          preservando o custo-benefício,tem como público alvo pequenas empresas{" "}
          <br /> e empreendedores autômonos.
        </p>
        <p>
          A empresa foi criada em 2022 atendendo diversos países de diversas
          línguas, criamos soluções <br /> prezando pela estética e
          funcionalidade, temos como objetivo fazer seu negócio crescer dando um{" "}
          <br /> ar moderno e profissional.
        </p>
      </section>
      <section id="portifolio">
        <h1>Portifolio</h1>
        <div className="exemplos"><img src={img1} alt="imagem 1"  />
          <p>Flyer de sorveteria com o fundo fazendo alusão a movimento</p>
        </div>
        <div className="exemplos"><img src={img2} alt="imagem 1"  />
        <p>Flyer de academia monocromático utilizando apenas verde escalas de cinza</p>
        </div>
        <div className="exemplos"><img src={img3} alt="imagem 1"  />
        <p>Flyer esportivo od jogador Júnior Santos, com cores quentes e fundo com escudo do time</p>
        </div>
      </section>
      <footer id="contato">
        <h1>Contate-nos</h1>
        <a href="instagram.com/baskdzn" target="_blank"><img src={behance} alt="Behance logo" /></a>
        <a href="https://www.behance.net/baskdzn" target="_blank"><img src={instagram} alt="Behance logo" /></a> <br />
        <p>&copy; 2024 Todos diretos reservados a BASK</p>
      </footer>
    </div>
  );
}

export default Home;

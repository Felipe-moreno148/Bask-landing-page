import "./Home.css";
import logo from "../assets/logo.svg";
import img1 from "../assets/IMG_7997.jpeg";
import img2 from "../assets/IMG_7998.jpeg";
import img3 from "../assets/IMG_8001.jpeg";

function Home() {
  return (
    <div>
      <div id="headerContainer">
        <header>
          <img src={logo} id="logo" />
          <ul typeof="">
            <li>
              <a href="">Sobre nós</a>
            </li>
            <li>
              <a href="">Portifolio</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </header>
      </div>
      <section>
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
      <h1>Portifolio</h1>

    </div>
  );
}

export default Home;

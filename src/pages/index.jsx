import "./Home.css";
import logo from "../assets/logo.svg";

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
        <img src={logo} id="logosite"/>
        <p>Uma empresa design moderna que presa pela acessibilidade <br /> preservando o custo-benefício,tem como público alvo pequenas empresas <br /> e empreendedores autômonos.</p>
        <p>A empresa foi criada em 2022 atendendo diversos países de diversas línguas, criamos soluções <br /> prezando pela estética e funcionalidade, temos como objetivo fazer seu negócio crescer dando um <br /> ar moderno e profissional.</p>
      </section>
      <section id="portfolio">
        
      </section>
    </div>
  );
}

export default Home;

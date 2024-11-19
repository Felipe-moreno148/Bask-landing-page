import './Home.css'
import logo from '../assets/logo.svg'

function Home() {
  return (
    <div>
      <div id='headerContainer'>
          <header>
            <img src={logo} id='logo'/>
            <ul typeof=''>
              <li><a href="">Sobre nós</a></li>
              <li><a href="">Portifolio</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </header>
      </div>
    </div>
  )
}

export default Home;

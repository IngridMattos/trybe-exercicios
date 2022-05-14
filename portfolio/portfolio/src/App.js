import './App.css';
import './fotoDePerfil.png'

function App() {
  return (
    <>
    <header>
      <button>Sobre</button>
      <button>Contatos</button>
      <button>Recomendações</button>
      <button>Projetos</button>
    </header>
    <div className="fullPage">
        <h1>Olá, eu sou Ingrid Mattos</h1>
        <h2>Desenvolvedora Web Full-stack</h2>
        <h3>Seja bem-vindo ao meu portfólio</h3>
    </div>
    {/* <figure>
    <img src="fotoDePerfil.png" alt="foto de perfil"/>
    </figure> */}
    </>
  );
}

export default App;

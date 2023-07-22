import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css";
import TitleForm from "./components/TitleForm";

function App() {
  return (
    <>
      <header>
        <TitleForm />
      </header>
      <main>
        <h3>Hola mundo</h3>
      </main>
      <footer>
        <h5>&copy; Todos los derechos reservados</h5>
      </footer>
    </>
  );
}

export default App;

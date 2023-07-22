import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css";

import TitleForm from "./components/TitleForm.jsx";
import SimpleForm from "./components/SimpleForm.jsx";

function App() {
  return (
    <>
      <header>
        <TitleForm />
      </header>
      <main>
        <SimpleForm />
      </main>
      <footer>
        <h5>&copy; Todos los derechos reservados</h5>
      </footer>
    </>
  );
}

export default App;

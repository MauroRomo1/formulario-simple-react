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
        <h6 className="text-center my-3">
          &copy; Todos los derechos reservados
        </h6>
      </footer>
    </>
  );
}

export default App;

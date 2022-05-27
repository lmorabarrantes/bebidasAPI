import { Container, Form } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import { CategoriaProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import ModalBebida from "./components/ModalBebida";

function App() {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />

          <ListadoBebidas />

          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  );
}

export default App;

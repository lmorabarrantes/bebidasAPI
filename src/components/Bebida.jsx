import { Card, Col, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ strDrink, strDrinkThumb, idDrink }) => {
  const { handleBebidaIDClick, handleModalClick } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={strDrinkThumb} alt="imagen bebida" />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button
            variant="warning"
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleModalClick();
              handleBebidaIDClick(idDrink);
            }}
          >
            Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;

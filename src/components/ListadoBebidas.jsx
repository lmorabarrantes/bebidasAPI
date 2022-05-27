import useBebidas from "../hooks/useBebidas";
import { Row } from "react-bootstrap";
import Bebida from "./Bebida";
import { useEffect, useState } from "react";

const ListadoBebidas = () => {
  const [bebidaState, setbebidaState] = useState();
  const { bebidas } = useBebidas();
  useEffect(() => {
    const { drinks } = bebidas;
    setbebidaState(drinks);
  }, [bebidas]);
  return (
    <Row className="mt-5">
      {bebidaState &&
        bebidaState.map((bebida) => {
          return (
            <Bebida
              key={bebida.idDrink}
              strDrink={bebida.strDrink}
              strDrinkThumb={bebida.strDrinkThumb}
              idDrink={bebida.idDrink}
            />
          );
        })}
    </Row>
  );
};

export default ListadoBebidas;

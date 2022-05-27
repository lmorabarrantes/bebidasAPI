import { useState } from "react"
import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import useBebidas from "../hooks/useBebidas"

const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        nombre: "",
        categoria: ""
    })
    const [alerta, setAlerta] = useState("")
    const {categoria}= useCategorias()
    const {consultarBebida} = useBebidas()


    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(busqueda).includes("")){
            setAlerta("Todos los espacios son Obligatorios")
            return
        } 
        setAlerta("")
        consultarBebida(busqueda)
    }
  return (
    <Form
        onSubmit={handleSubmit}
    >
        {alerta && <Alert className="alert alert-danger text-center">{alerta} </Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                    <Form.Control
                        id="nombre"
                        type="text"
                        placeholder="Ej: Tequila, Vodca etc"
                        name="nombre"
                        value={busqueda.nombre}
                        onChange={e => setBusqueda ({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        }) }
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="categoria">Bebida Categoria</Form.Label>
                    <Form.Select
                        id="categoria"
                        name="categoria"
                        value={busqueda.categoria}
                        onChange={e => setBusqueda ({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        }) }
                    >
                        <option>-Selecciona Categoria-</option>
                        {categoria.map(category =>(
                            <option
                                key={category.strAlcoholic}
                                value={category.strAlcoholic}
                            >
                                {category.strAlcoholic}
                            </option>
                        ) )}
                    </Form.Select>
                </Form.Group>

            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md={3}>
                <Button 
                    variant="danger" 
                    className="text-uppercase w-100"
                    type="submit"
                >
                   Buscar Bebidas
               </Button>
                
            </Col>
        </Row>

    </Form>
  )
}

export default Formulario
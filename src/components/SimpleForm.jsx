import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

const SimpleForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    dni: "",
    email: "",
    check: false,
  });

  const { name, lastname, dni, email, check } = formValues;

  const handleChange = (e) => {
    if (e.target.name === "check") {
      setFormValues({ ...formValues, [e.target.name]: e.target.checked });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      lastname.trim() === "" ||
      dni === "" ||
      email.trim() === "" ||
      check === false
    ) {
      Swal.fire({
        icon: "error",
        title: "<h5>Debes completar todos los datos</h5>",
      });
    } else {
      setFormValues({
        name: "",
        lastname: "",
        dni: "",
        email: "",
        check: false,
      });
      Swal.fire({
        icon: "success",
        title: "Datos enviados",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="container my-3">
      <Form onSubmit={handleSubmit}>
        <Row className=" justify-content-center">
          <Col xs lg={7}>
            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="formGridEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  maxLength={12}
                  required
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="formGridPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  maxLength={12}
                  required
                  value={lastname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type="number"
                name="dni"
                value={dni}
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                maxLength={50}
                required
                value={email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                name="check"
                checked={check}
                required
                onChange={handleChange}
                label="Acepto los terminos y condiciones"
              />
            </Form.Group>

            <Button variant="primary" title="enviar datos" type="submit">
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default SimpleForm;

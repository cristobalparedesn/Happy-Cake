import { Container, Button, Form } from "react-bootstrap";

const Contact = () => {
  return(
    <>
      <Container className="container-contact-form">
        <h1>Contacto</h1>
        <br />
        <p>Cuentanos, ¿en qué te podemos ayudar?</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo" />
            <Form.Text className="text-muted">
              Nos pondremos en contacto a la brevedad.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Describe como quieres tu pastel </Form.Label>
            <br />
            <textarea rows="4" cols="50"></textarea>
          </Form.Group>
          <Button variant="dark" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
      
    </>
    
  );
}

export default Contact;
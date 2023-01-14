import { Container } from "react-bootstrap";

const Home = () => {
  return(
    <Container className="container-pages">
      <h1>Bienvenido a Happy Cake</h1><br />
      <p className="home-p">El lugar de los pasteles felices</p>
      <img className="size-img" src="https://media.admagazine.com/photos/618a6634532cae908aaf2cb4/master/w_1600,c_limit/73037.jpg" />
    </Container>
    
  );
}

export default Home;
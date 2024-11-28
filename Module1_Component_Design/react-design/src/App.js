import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./template/header";
import Menu from "./template/menu";
import Main from "./template/main";
import Footer from "./template/footer";
import Banner from "./template/banner";

function App() {
  return (
    <Container fluid>
      <Header/>
      <Menu/>
      <Banner/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;

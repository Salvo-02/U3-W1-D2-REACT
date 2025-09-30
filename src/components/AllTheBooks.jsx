import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import Card from "react-bootstrap/Card";
import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    selectedCategory: fantasy,
  };
  render() {
    return (
      <Container className=" justify-content-center">
        <Container className="d-flex justify-content-center gap-2 mb-3">
          <Button className="btn btn-danger  " onClick={() => this.setState({ selectedCategory: fantasy })}>
            Fantasy
          </Button>
          <Button className="btn btn-danger" onClick={() => this.setState({ selectedCategory: history })}>
            History
          </Button>
          <Button className="btn btn-danger" onClick={() => this.setState({ selectedCategory: horror })}>
            Horror
          </Button>
          <Button className="btn btn-danger" onClick={() => this.setState({ selectedCategory: romance })}>
            Romance
          </Button>
          <Button className="btn btn-danger" onClick={() => this.setState({ selectedCategory: scifi })}>
            Scifi
          </Button>
        </Container>
        <Row className="gap-3">
          {this.state.selectedCategory.map((movie) => (
            <Col key={movie.asin} className="">
              <Card style={{ width: "18rem", height: "40rem" }}>
                <Card.Img variant="top" src={movie.img} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Badge bg="dark">{movie.price}</Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
          ;
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;

import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
const category = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};
import Card from "react-bootstrap/Card";
import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    selectedCategory: "fantasy",
  };
  render() {
    return (
      <Container>
        <Button onClick={() => this.setState({ selectedCategory: "fantasy" })}> Fantasy</Button>
        <Button onClick={() => this.setState({ selectedCategory: "history" })}> History</Button>
        <Button onClick={() => this.setState({ selectedCategory: "horror" })}> Horror</Button>
        <Button onClick={() => this.setState({ selectedCategory: "romance" })}> Romance</Button>
        <Button onClick={() => this.setState({ selectedCategory: "scifi" })}> Scifi</Button>
        <Row className="gap-2">
          {category[this.state.selectedCategory].map((movie) => (
            <Col key={movie.asin} className="">
              <Card style={{ width: "18rem" }}>
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

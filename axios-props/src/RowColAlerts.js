import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Pagination,
  Navbar,
  Row,
  Col,
  Alert,
  Container,
} from "react-bootstrap";
export default function RowColAlerts() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">리엑트</Navbar.Brand>
          <Navbar.Brand href="#home">리엑트</Navbar.Brand>
          <Navbar.Brand href="#home">리엑트</Navbar.Brand>
          <Navbar.Brand href="#home">리엑트</Navbar.Brand>
        </Container>
      </Navbar>
      {/*페이지 네이션*/}
      <Row>
        <Col>
          <h2>페이지 네이션</h2>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis /> {/* Ellipsic => ...으로 처리 */}
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <h2>컬럼 1번</h2>
          </Col>
          <Col>
            <h2>컬럼 2번</h2>
          </Col>
        </Row>
      </Container>
      <Alert>
        <Alert.Heading>알람 성공</Alert.Heading>
        <p>이것은 알람~</p>
      </Alert>
    </div>
  );
}

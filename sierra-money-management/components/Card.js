import React from 'react';
import { Card, Button } from 'react-bootstrap';
function RectangleCard({ p, content }) {
  return (
    <Card className="m-4 p-3">
      <Card.Body>
        <Card.Title>{p}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Square({ img, header, para }) {
  return (
    <Card style={{ width: '20rem', margin: '40px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Text>{para}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export { RectangleCard, Square };

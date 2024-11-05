"use client"
import style from './style.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardProfessor({nome, foto}) {
  return (
    <Card className={style.card} style={{ width: '18rem' }}>
      <Card.Img variant="top" className={style.cardImg} src={foto} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className={style.btn}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


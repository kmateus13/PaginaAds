"use client"
import { Button } from 'react-bootstrap';
import style from './style.module.css'
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function LayoutCard({ titulo, professor, descricao, href }) {
    return (
        <Card className='mb-4' style={{ width: '18rem' }}>
            <Card.Body className='d-flex flex-column'>
                <Card.Title>{titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{professor}</Card.Subtitle>
                <Card.Text>
                    {descricao}
                </Card.Text>
                <div className="mt-auto">
                    <Link className="btn btn-primary"  href={href}>
                        Acessar
                    </Link>
                    
                </div>

            </Card.Body>
        </Card>
    );
}
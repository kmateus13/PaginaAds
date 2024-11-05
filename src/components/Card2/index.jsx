"use client"
import { Button } from 'react-bootstrap';
import style from './style.module.css'
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

export default function LayoutCard2({ turma }) {
    return (
        <div className={style.card} >

            <Image src={turma} fill alt='Banner Turma' />

        </div>
    );
}
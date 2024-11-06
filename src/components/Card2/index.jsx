"use client"
import style from './style.module.css'
import Image from 'next/image';

export default function LayoutCard2({ turma }) {
    return (
        <div className={style.card} >

            <Image src={turma} fill alt='Banner Turma' />

        </div>
    );
}
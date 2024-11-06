"use client"
import style from "./style.module.css";
import LayoutCard2 from "../components/Card2";
import CardProfessor from "../components/CardProfessores";
import ControlledCarousel from "../components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import { turmas } from "./api/turmas";
import Image from "next/image";





const professores = [
    {
        id: 1,
        nome: "Daniel Abella",
        foto: "/daniel.jpg"

    },
    {
        id: 2,
        nome: "Fulano",
        foto: "/fulano.jpg"

    },
    {
        id: 3,
        nome: "Alguem",
        foto: "/alguem.jpg"

    },

];


export default function home() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <FaArrowAltCircleRight color="#000" />,
        prevArrow: <FaArrowAltCircleLeft color="#000" />,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 992, 
              settings: {
                slidesToShow: 2, 
              },
            },
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 1,
              },
            },
          ],
    };



    return (
        <main>
            <ControlledCarousel />
            <section>
                <div className="container mt-3 py-5">
                    <h1>TURMAS</h1>

                    <Slider {...settings}  >
                        {turmas.map((turma) => (
                            <Link key={turma.id} href={`/${turma.id}`} >
                                <Image key={turma.id} src={turma.turma} width={288} height={388}   alt='Banner Turma' />
                            </Link>



                        ))}
                    </Slider>


                </div>
            </section>

            <section className={style.sessaoProfessores}>
                <div className="container mt-3 py-5">
                    <h1>PROFESSORES</h1>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

                        {professores.map((professor) => (
                            <CardProfessor
                                key={professor.id}
                                nome={professor.nome}
                                foto={professor.foto}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
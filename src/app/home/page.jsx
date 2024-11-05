"use client"
import style from "./style.module.css"
import LayoutCard2 from "@/components/Card2";
import CardProfessor from "@/components/CardProfessores";
import ControlledCarousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import OffcanvasExample from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import DifyChatbot from "../bot";
import Link from "next/link";
import { turmas } from "../api/turmas";




// const turmas = [
//     {
//         id: "M1",
//         turma: "/3.png",

//     },
//     {
//         id: "M2",
//         turma: "/2.png",

//     },
//     {
//         id: "M3",
//         turma: "/4.png",

//     },
//     {
//         id: "M4",
//         turma: "/5.png",

//     },
// ];

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
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <FaArrowAltCircleRight color="#000" />,
        prevArrow: <FaArrowAltCircleLeft color="#000" />
    };



    return (
        <div>
            <OffcanvasExample />
            <ControlledCarousel />
            <section>
                <div className="container mt-3 py-5">
                    <h1>TURMAS</h1>
                    <div>
                        <Slider {...settings} >
                            {turmas.map((turma) => (
                                <Link key={turma.id} href={`/${turma.id}`}>
                                    <LayoutCard2
                                        key={turma.id}
                                        turma={turma.turma}
                                    />
                                </Link>

                            ))}
                        </Slider>
                    </div>

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

            <Footer />
        </div>
    );
}
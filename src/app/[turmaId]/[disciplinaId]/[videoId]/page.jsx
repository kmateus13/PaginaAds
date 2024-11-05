"use client";
import Footer from "@/components/Footer";
import OffcanvasExample from "@/components/Navbar";
import style from "./style.module.css";
import { getVideos } from "@/utils/verificadorKey";
import { turmas } from "@/app/api/turmas";
import { notFound } from "next/navigation";
import { verificarKey } from "@/utils/verificarKey";
import { useEffect, useState } from "react";

function verificarDisciplinaExistente(turmaId, disciplinaId) {
    const turma = turmas.find((turma) => turma.id === turmaId);
    if (turma) {
        return turma.cursos.find((curso) => curso.id.toString() === disciplinaId);
    }
    return null;
}

export default function Video({ params }) {
    const { turmaId, disciplinaId, videoId } = params;
    const [videoAtual, setVideoAtual] = useState("");
    const [linkVideos, setLinkVideos] = useState([]);
    const [verificarPage, setVerificarPage] = useState(false);
    const disciplina = verificarDisciplinaExistente(turmaId.toString(), disciplinaId.toString());
    if (!disciplina) {
        notFound();
    }

    useEffect(() => {
        const executar = async () => {
            try {
                const verificador = await verificarKey(videoId.toString());

                if (verificador === true) {
                    setVerificarPage(true)
                    const videos = await getVideos(videoId.toString());
                    setLinkVideos(videos);
                    if (videos.length > 0) {
                        setVideoAtual(videos[0].id); // Exibir o primeiro vídeo como padrão
                    }
                }
            } catch (error) {
                console.log(error.message)
            }
        };

        executar();
    }, [videoId]);

    return (
        <div className="pageContainer">
            <OffcanvasExample />
            {verificarPage === false ? (<div className="content">ERROR</div>) :
                (<main className="content">
                    <div className="container">
                        <h1 className="mt-3 py-5">Aula dia 01-12-2024</h1>
                        <div className="mb-5 d-flex gap-2">
                            <div className={style.containerVideo}>
                            {videoAtual ? (
                                    <iframe
                                        src={`https://drive.google.com/file/d/${videoAtual}/preview`}
                                        width="950"
                                        height="600"
                                        allow="autoplay"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div style={{width:"950px", height:"600px"}}>Sem Vídeo</div>
                                )}
                            </div>
                            <div className={style.containerOutros}>
                                <h4>Outros Videos:</h4>
                                <ul>
                                    {linkVideos.slice().reverse().map((video) => (
                                        <li key={video.id}>
                                            <a href="#" onClick={(e) => { e.preventDefault(); setVideoAtual(video.id) }}>
                                                {video.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
                )}
            <Footer />
        </div>
    );
}

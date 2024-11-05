import { turmas } from "@/app/api/turmas";
import { listarSubpastas } from "@/utils/apiGoogleDrive";
import Link from "next/link";
import { notFound } from "next/navigation";



function verificarDisciplinaExistente(turmaId, disciplinaId) {
    const turma = turmas.find(turma => turma.id === turmaId);
    if (turma) {
        return turma.cursos.find(curso => curso.id.toString() === disciplinaId.toString());
    }
    return null;
}


export default async function Disciplina({ params }) {
    const { turmaId, disciplinaId } = params;
    const disciplina = verificarDisciplinaExistente(turmaId.toString(), disciplinaId.toString());

    if (!disciplina) {
        notFound();
    }

    const folderId = disciplina.keyPasta; // Insira o ID da pasta pública aqui
    let subpastas = [];
    let error = null;

    try {
        subpastas = await listarSubpastas(folderId.toString());
    } catch (err) {
        error = err.message;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }



    return (
            <main>
                <div className="container mt-3 py-5">
                    <h1>{disciplina.titulo}</h1>
                    <h2>Professor: {disciplina.professor}</h2>
                    <p>{disciplina.descricao}</p>
                    <h3>Aulas:</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                        {subpastas.slice().reverse().map(pasta => (
                            <div key={pasta.id}>
                                <h4>{pasta.name}</h4>
                                <Link href={`/${turmaId}/${disciplinaId}/${pasta.id}`}>Acessar</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
    );
}
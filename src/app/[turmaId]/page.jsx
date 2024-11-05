
import OffcanvasExample from '@/components/Navbar';
import Footer from '@/components/Footer';
import LayoutCard from '@/components/Card';
import { notFound } from 'next/navigation';
import { turmas } from '../api/turmas';



function verificarTurmaExistente(turmaID) {
    return turmas.find((turma) => turma.id === turmaID);
}


export default async function Disciplinas({ params }) {

    const { turmaId } = params;

    const turma = await verificarTurmaExistente(turmaId);

    if (!turma) {
        notFound();
    }



    return (
        <div className='pageContainer'>
            <OffcanvasExample />
            <main className='content'>
                <div className="container mt-3 py-5">
                    <h1>Disciplinas da Turma {turmaId}</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                        {turma.cursos.length > 0 ?
                            (turma.cursos.map((curso) => (<LayoutCard key={curso.id} titulo={curso.titulo} professor={curso.professor} descricao={curso.descricao} href={`/${turmaId}/${curso.id}`} />)))
                            :
                            <h2>Pasta Vazia</h2>
                        }
                    </div>
                </div>
            </main >


            <Footer />
        </div >
    );
}

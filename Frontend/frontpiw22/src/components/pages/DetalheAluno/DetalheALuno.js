import { useParams } from "react-router-dom";
import { Navegador } from "../../commom/Navegador/navegador";

export function DetalheAluno(){
    let parametros = useParams();
    let matricula = parametros.matricula;

    return (
        <div>
            <Navegador></Navegador>
            <h2>Detalhe Aluno {matricula}</h2>
        </div>
    )
}
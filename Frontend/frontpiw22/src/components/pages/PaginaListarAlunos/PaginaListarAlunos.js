import { Navegador } from "../../commom/Navegador/navegador";

function ListaAlunos(){
    return (
        <ul>
            <li>Pedro</li>
            <li>Thiago Silva</li>
            <li>Vini Jr</li>
        </ul>
    )
}

export function PaginaListarAlunos (){
    return (
        <div>
            <Navegador></Navegador>
            <h2>Listar Alunos</h2>
            <ListaAlunos></ListaAlunos>
        </div>
    )
}
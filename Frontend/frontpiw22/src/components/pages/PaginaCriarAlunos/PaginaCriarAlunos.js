import { Navegador } from "../../commom/Navegador/navegador";

function FormularioAlunos (){
    return (
        <form>
            Nome: <imput></imput>
            <submit></submit>
        </form>
    )
}

export function CriarAlunos (){
    return (
        <div>
            <Navegador></Navegador>
            <FormularioAlunos></FormularioAlunos>
        </div>
    )
}
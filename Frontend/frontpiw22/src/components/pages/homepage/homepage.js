import { Card } from "../../commom/Card/card";
import { Navegador } from "../../commom/Navegador/navegador";

// function add(a, b) {
//     return (a + b);
// }

export function PaginaPrincipal() {
    return (
        <div>
            <Navegador></Navegador>
            {/* {add(5,6)} */}
            <Card titulo="Copa do Mundo" conteudo="Vem Hexa!"></Card>
            <Card titulo="Filme do Ano" conteudo="Comer, Rezar e Amar"></Card>
            <Card titulo="Melhor Série" conteudo="HOTD"></Card>
        </div>
    )
}
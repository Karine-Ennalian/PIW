// export function Card(props){
//     console.log(props);
//     return (<div>
//         <h2>{props.titulo}</h2>
//         <p>{props.conteudo}</p>
//     </div>)
// }

export function Card({titulo, conteudo}){
    // console.log(props);
    return (<div>
        <h2>{titulo}</h2>
        <p>{conteudo}</p>
    </div>)
}
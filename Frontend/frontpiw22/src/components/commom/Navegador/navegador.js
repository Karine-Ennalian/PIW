import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export function Navegador(){
    return (
        <div>
            {/* <a href="https://www.google.com/">Google</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
            <a href="">Link 4</a> */}
            <NavLink end to='/'>Pagina Principal</NavLink>
            <NavLink end to='/alunos'>Lista de Alunos</NavLink>
            <NavLink end to='/alunos/create'>Matricular Alunos</NavLink>
        </div>
    );
}
import logo from './logo.svg';
import './App.css';
import { PaginaPrincipal } from './components/pages/homepage/homepage';
import { PaginaListarAlunos } from './components/pages/PaginaListarAlunos/PaginaListarAlunos';
import { CriarAlunos } from './components/pages/PaginaCriarAlunos/PaginaCriarAlunos';

// import {Seila, Card} from './Componente'

// function Paragrafo(){
//   return <h2> Deu bom caraio!! </h2>
// }



function App() {
  return (
    <div className="App">
      {/* <Paragrafo></Paragrafo>
      <Seila></Seila>
      <Card></Card> */}
      {/* <PaginaPrincipal></PaginaPrincipal> */}
      {<BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaPrincipal></PaginaPrincipal>}></Route>
          <Route path='/alunos' element={<PaginaListarAlunos></PaginaListarAlunos>}></Route>
          <Route path='/alunos/create' element={<CriarAlunos></CriarAlunos>}></Route>
          <Route path='/alunos/:matricula' element={<DetalheAluno></DetalheAluno>}></Route>
        </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;

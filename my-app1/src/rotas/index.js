import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Cadastrar from "../pages/cadastrar";
import Home from '../pages/home';
import CursosPage from "../pages/CursosPage";

// Configuração de rotas

const RoutersApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/login/" element={<Login/>}></Route>
                <Route path="/cadastrar/" element={<Cadastrar/>}></Route>
                <Route path="/home/" element={<Home/>}></Route>
                <Route path="/cursos" element={<CursosPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutersApp;
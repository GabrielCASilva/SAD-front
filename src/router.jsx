import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tasks from "./pages/Tasks"
import Layout from "./layout"
import Goals from "./pages/Goals"
import Employees from "./pages/Employees"
import Sector from "./pages/Sector"

export default function Routers(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Tasks/>} />
                    <Route path="metas" element={<Goals/>} />
                    <Route path="funcionarios" element={<Employees/>} />
                    <Route path="setor" element={<Sector/>} />
                </Route>
                <Route path="/teste" element={<h1>TESTE</h1>}/>
            </Routes>
        </Router>
    )
}
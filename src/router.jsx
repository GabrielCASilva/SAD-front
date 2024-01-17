import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tasks from "./pages/Tasks"
import Layout from "./layout"
import Goals from "./pages/Goals"
import Employees from "./pages/Employees"
import Sector from "./pages/Sector"
import EmployeeDetail from "./pages/EmployeeDetail"

// COMENTÁRIOS
export default function Routers(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Tasks/>} />
                    <Route path="metas" element={<Goals/>} />
                    <Route path="funcionarios" element={<Employees/>} />
                    <Route path="funcionarios/:id" element={<EmployeeDetail/>} />
                    <Route path="setor" element={<Sector/>} />
                </Route>
            </Routes>
        </Router>
    )
}
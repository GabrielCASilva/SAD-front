import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tasks from "./pages/Tasks"
import Layout from "./layout/GlobalLayout"
import Goals from "./pages/Goals"
import Employees from "./pages/Employees"
import Sector from "./pages/Sector"
import EmployeeDetail from "./pages/EmployeeDetail"
import Appraisal from "./pages/Appraisal"
import GoalDetail from "./pages/GoalDetail"

export default function Routers(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Tasks/>} />
                    <Route path="metas" element={<Goals/>} />
                    <Route path="metas/:id" element={<GoalDetail/>} />
                    <Route path="funcionarios" element={<Employees/>} />
                    <Route path="funcionarios/:id" element={<EmployeeDetail/>} />
                    <Route path="setor" element={<Sector/>} />
                    <Route path="avaliacao" element={<Appraisal />} />
                </Route>
            </Routes>
        </Router>
    )
}
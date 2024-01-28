import PerformanceAppraisalModal from "../../components/Modal/modals/PerformanceAppraisalModal"
import { Title } from "../../components/Titles"
import { useGetEmployee } from "../../hooks/employees/useGetEmployee"
import { useParams } from "react-router-dom"
import { useGetTasks } from "../../hooks/tasks/useGetTasks"
import Button from "../../components/Button"
import EmployeeDetailCard from "../../components/Card/cards/EmployeeDetailCard"

export default function EmployeeDetail(){
    const {id} = useParams()
    const {data: employee, isLoading: isEmployeeLoading} = useGetEmployee({id, params:{
        _expand: "cargo",
    }})

    const {data: tasks, isLoading: isTasksLoading} = useGetTasks()

    const employeeTasks = tasks.filter((task) => {
        if(employee.cargo.nome === "Servidor"){
            return task.funcionarioAlocadoId === employee.id
        }
        return [] 
    })

    return (
        <>
            <Title><span style={{color: 'var(--white-gray)'}}>Funcionários {">"}</span> {employee.nome}</Title>
            <div className="flex" style={{gap: "var(--base-2-4rem)"}}>
                <div className="flex column" style={{gap: "var(--base-1-4rem)"}}>
                    <div></div>
                    <div></div>
                    <PerformanceAppraisalModal employeeTasks={employeeTasks} />
                    <Button>Desativar funcionário</Button>
                    <Button>Editar dados</Button>
                </div>
                <div className="flex column" style={{width: '100%'}}>
                    <EmployeeDetailCard />
                </div>
            </div>
        </>
    )
}
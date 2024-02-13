import PerformanceAppraisalModal from "../../components/Modal/modals/PerformanceAppraisalModal"
import { useGetEmployee } from "../../hooks/employees/useGetEmployee"
import { useParams } from "react-router-dom"
import { useGetTasks } from "../../hooks/tasks/useGetTasks"
import Button from "../../components/Button"
import EmployeeDetailCard from "../../components/Card/cards/EmployeeDetailCard"
import { SimpleCard } from "../../components/Card"
import DetailLayout from "../../layout/DetailLayout"

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

    console.log(employee)

    const title = <><span style={{color: 'var(--white-gray)'}}>Funcionários {">"}</span> {employee.nome}</>

    return (
        <DetailLayout title={title} card="employees">
            <SimpleCard containerClasses="align-center">
                <div className="flex justify-center" 
                    style={{width: "18.5rem", 
                    height: "18.5rem", 
                    borderRadius: "50%", 
                    overflow: "hidden"
                }}>
                    <img src={employee.foto} alt="Foto do funcionário" style={{maxHeight: "100%"}}/>
                </div>
                <p className="b-500">{employee.nome}</p>
                <p className="b-500">Servidor</p>
            </SimpleCard>
            <SimpleCard>
                <p>Setor: [SETOR]</p>
                <p>Tarefas realizadas: [QTD]</p>
                <p>Tempo de empresa: [ANOS]</p>
            </SimpleCard>
            <PerformanceAppraisalModal employeeTasks={employeeTasks} />
            <Button>Desativar funcionário</Button>
            <Button>Editar dados</Button>
        </DetailLayout>
    )
}
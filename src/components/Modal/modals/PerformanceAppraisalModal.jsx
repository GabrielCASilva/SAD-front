import Modal from "..";
import { DatePicker } from 'antd';
import { useEffect, useState } from "react";
import TaskService from "../../../api/services/TaskService";
import { DATE_FORMATS, formatISODate, isDateSameOrAfter, isDateSameOrBefore } from "../../../utils/date";

const { RangePicker } = DatePicker

export default function PerformanceAppraisalModal(props){
    const { employee } = props
    const [date, setDate] = useState({initDate: "", finalDate: ""})
    const [tasks, setTasks] = useState([])
    const [phase, setPhase] = useState(1)

    const handleChangeDate = (value) => {
        const initDate = formatISODate(value[0])
        const finalDate = formatISODate(value[1])

        setDate({
            initDate, finalDate
        })
    }

    const handleSubmitDate = () => {
        switch(phase){
            case 1:
                getTasksQuantity(employee, date).then(
                    (e) => {
                        console.log(e)
                        setTasks(e)
                        setPhase(2)
                    }
                )
                break
            case 2:
                break
            case 3:
                break
            default:
                break
        }
    }

    const footerProps = () => {
        switch(phase){
            case 1:
                return {
                    type: "confirm",
                    handleClick: handleSubmitDate
                }
            case 2:
                return {}
            case 3:
                return {
                    type: "close",
                    handleClick: () => {}
                }
            default:
                return {}
        }
    }

    const displayProps = {
        phase: phase,
        handleChangeDate: handleChangeDate,
        tasks: tasks,
        setPhase: setPhase
    }

    useEffect(() => {
        // TODO: Requisição de avaliação de desempenho AQUI!!!
        // postTasksToPerformanceAppraisal()
        if(phase === 2){
            setTimeout(() => {
                setPhase(3)
            }, 10000)
        }
    }, [phase])

    return (
        <Modal titleButton="Avaliação de desempenho" onClick={handleSubmitDate} footer={footerProps}>
            <DisplayModalContent {...displayProps}/>
        </Modal>
    )
}

function DisplayModalContent(props){
    const {phase, handleChangeDate, tasks = [], setPhase} = props

    switch(phase){
        case 1:
            return (
                <>
                    <p>Selecione o intervalo de tempo que deseja proceguir com a avaliação</p>
                    <RangePicker defaultValue={[]} format={DATE_FORMATS.BR_DATE} onChange={handleChangeDate}/>
                </>
            )
        case 2:
            return (
                <>
                    <p>{tasks.length} Tarefas foram encontradas.</p>
                    <p>Realizando o cálculo da avaliação de desempenho...</p>
                </>
            )
        case 3:
            return (
                <>
                    <p>Avaliação completa!</p>
                    <p>Feche para visualizar a avaliação</p>
                </>
            )
    }
}

const getTasksQuantity = async (employee, date) => {
    // TODO: Tarefas vão vir de outro componente
    // getTasksFromPerson()
    const tasks = await TaskService.getTasks()
    console.log(tasks)

    const employeeTasks = tasks.filter((task) => {
        const isEmployeesTasks = task.idFuncionarioAlocado === employee.id
        const initialBefore = isDateSameOrBefore(date.initDate, task.dataCriacao)
        const finalAfter = task.dataConclusao !== "" ? isDateSameOrAfter(date.finalDate, task.dataConclusao) : true

        return isEmployeesTasks && initialBefore && finalAfter 
    })
    
    return employeeTasks
}
import Modal from "..";
import { DatePicker } from 'antd';
import { useEffect, useState } from "react";
import { DATE_FORMATS, formatISODate, isDateSameOrAfter, isDateSameOrBefore } from "../../../utils/date";
import { useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker

export default function PerformanceAppraisalModal(props){
    const { employeeTasks = [] } = props
    const [date, setDate] = useState({initDate: "", finalDate: ""})
    const [tasks, setTasks] = useState(employeeTasks)
    const [phase, setPhase] = useState(1)
    const navigate = useNavigate()

    const handleChangeDate = (value) => {
        const initDate = formatISODate(value[0])
        const finalDate = formatISODate(value[1])

        setDate({
            initDate, finalDate
        })
    }

    const handleSubmitDate = () => {
        let data
        switch(phase){
            case 1:
                data = getTasksQuantity(employeeTasks, date)
                setTasks(data)
                setPhase(2)
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
                    handleClick: () => {
                        navigate("/avaliacao", {state: {teste: "teste"}})
                    }
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
        <Modal titleButton="Avaliação de desempenho" typeButton="a" footer={footerProps}>
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

const getTasksQuantity = (tasks, date) => {
    // TODO: Tarefas vão vir de outro componente
    // getTasksFromPerson()
    const employeeTasks = tasks.filter((task) => {
        const initialBefore = isDateSameOrBefore(date.initDate, task.dataCriacao)
        const finalAfter = task.dataConclusao !== "" ? isDateSameOrAfter(date.finalDate, task.dataConclusao) : true

        return initialBefore && finalAfter 
    })
    
    return employeeTasks
}
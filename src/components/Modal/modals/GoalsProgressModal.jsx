import Modal from "..";
import { DatePicker } from 'antd';
import { useEffect, useState } from "react";
import { DATE_FORMATS, formatISODate, isDateSameOrAfter, isDateSameOrBefore } from "../../../utils/date";
import { useNavigate } from "react-router-dom";
import Spin from "../../Spin";

const { RangePicker } = DatePicker

export default function GoalsProgressModal(props){
    const { goalsTasks = [] } = props
    const [date, setDate] = useState({initDate: "", finalDate: ""})
    const [tasks, setTasks] = useState(goalsTasks)
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
                data = getTasksQuantity(goalsTasks, date)
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
                        navigate("/progresso", {state: {teste: "teste"}})
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
        // postTasksToGoalsProgress()
        if(phase === 2){
            setTimeout(() => {
                setPhase(3)
            }, 10000)
        }
    }, [phase])

    return (
        <Modal titleButton="Progresso da meta" styleButton="yellow" footer={footerProps}>
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
                    <p style={{marginBottom: "2.4rem"}}>Selecione o intervalo de tempo que deseja prosseguir com o progresso</p>
                    <RangePicker defaultValue={[]} format={DATE_FORMATS.BR_DATE} onChange={handleChangeDate}/>
                </>
            )
        case 2:
            return (
                <div className="flex gap-14">
                    <Spin />
                    <p>Realizando o cálculo do progresso da meta...</p>
                </div>
            )
        case 3:
            return (
                <>
                    <p>Calculo concluído!</p>
                    <p>Feche para visualizar o progresso da meta</p>
                </>
            )
    }
}


const getTasksQuantity = (tasks, date) => {
    // TODO: Tarefas vão vir de outro componente
    // getTasksFromGoals()
    const goalsTasks = tasks.filter((task) => {
        const initialBefore = isDateSameOrBefore(date.initDate, task.dataCriacao)
        const finalAfter = task.dataConclusao !== "" ? isDateSameOrAfter(date.finalDate, task.dataConclusao) : true

        return initialBefore && finalAfter 
    })
    
    return goalsTasks
}
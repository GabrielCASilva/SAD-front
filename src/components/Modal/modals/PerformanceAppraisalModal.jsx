import Modal from "..";
import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import { useState } from "react";

const { RangePicker } = DatePicker

const SEND_FORMAT = "YYYY-MM-DD"
const COMPONENT_FORMAT = "DD/MM/YYYY"

export default function PerformanceAppraisalModal(props){
    const { employee } = props
    const [date, setDate] = useState({initDate: "", finalDate: ""})

    const handleChangeDate = (value) => {
        const initDate = dayjs(value[0]).format(SEND_FORMAT)
        const finalDate = dayjs(value[1]).format(SEND_FORMAT)

        setDate({
            initDate, finalDate
        })
    }

    const handleSubmitDate = () => {
        console.log(employee)
    }

    const footerProps = {
        type: "confirm",
        handleClick: handleSubmitDate
    }

    return (
        <Modal titleButton="Avaliação de desempenho" onClick={handleSubmitDate} footer={footerProps}>
            <h1>Avaliação de desempenho</h1>
            <p>Selecione o intervalo de tempo que deseja proceguir com a avaliação</p>
            <RangePicker defaultValue={[]} format={COMPONENT_FORMAT} onChange={handleChangeDate}/>
        </Modal>
    )
}

// Reunindo lista de tarefas

// 6 Tarefas foram encontradas, Realizando o cálculo da avaliação de desenpenho...

// Avaliação completa! Feche para visualizar a avaliação
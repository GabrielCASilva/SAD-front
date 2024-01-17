import Modal from "..";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker

export default function PerformanceAppraisalModal(){
    return (
        <Modal titleButton="Avaliação de desempenho" onClick={()=>{}}>
            <h1>Avaliação de desempenho</h1>
            <p>Selecione o intervalo de tempo que deseja proceguir com a avaliação</p>
            <RangePicker defaultValue={[]} format="DD/MM/YYYY"/>
        </Modal>
    )
}
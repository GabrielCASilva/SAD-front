import Table from '..'
import { Tag } from 'antd';

const COLUMNS = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Título',
        dataIndex: 'titulo',
        key: 'titulo',
    },
    {
        title: 'Data Inicio',
        dataIndex: 'dataInicio',
        key: 'dataInicio'
    },
    {
        title: 'Data Final',
        dataIndex: 'dataFinal',
        key: 'dataFinal'
    },
    {
        title: 'Estado',
        dataIndex: 'estado',
        key: 'estado',
        render: (estado) => (
            <Tag color="var(--dark-green)" key={estado}>
                {estado}
            </Tag>
        )
    },

]

export default function TasksStateTable(){

    return <Table columns={COLUMNS} data={[]} url="tarefas" />
}
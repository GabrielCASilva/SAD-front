import Table from '..'
import Tag from '../../Tag';

const COLUMNS = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Título',
        dataIndex: 'nome',
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
        title: 'Sitação',
        dataIndex: 'situacao',
        key: 'situacao',
        render: (situacao) => 
            <Tag type={situacao}/>
    },

]

export default function TasksStateTable(props){
    const { data } = props;

    return <Table columns={COLUMNS} data={data} url="tarefas" />
}
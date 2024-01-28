import Table from '..'

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
        title: 'Setor',
        dataIndex: 'setor',
        key: 'setor',
        render: (setor) =>
            setor.nome
    },
    {
        title: 'Servidor',
        dataIndex: 'servidor',
        key: 'servidor',
        render: (servidor) => 
            servidor.nome
    },
    {
        title: 'Conclusao',
        dataIndex: 'conclusao',
        key: 'conclusao',
        render: (conclusao) => (
            <Tag color="var(--dark-green)" key={conclusao}>
                {conclusao}
            </Tag>
        )
    },

]

export default function TasksTable(){

    return <Table columns={COLUMNS} data={[]} url="tarefas" />
}
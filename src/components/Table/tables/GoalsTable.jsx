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
        title: 'Autor',
        dataIndex: 'autor',
        key: 'autor',
    },
    {
        title: 'Setor',
        dataIndex: 'setor',
        key: 'setor',
        render: (setor) =>
            setor.nome
    },
]

export default function GoalsTable(){
    return <Table columns={COLUMNS} data={[]} url="metas" />
}
import Table from '..'

const COLUMNS = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
    },
    {
        title: 'Supervidor',
        dataIndex: 'supervisor',
        key: 'supervisor',
        render: (setor) =>
            setor.nome
    },
]

export default function SectorTable(){

    return <Table columns={COLUMNS} data={[]} url="setor" />
}
import Table from '..'
import { useGetSectors } from '../../../hooks/sectors/useGetSectors';

const COLUMNS = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Ramal',
        dataIndex: 'ramal',
        key: 'ramal',
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
        render: (supervisor) =>
            supervisor.nome
    },
]

export default function SectorTable(){
    const {data} = useGetSectors();

    return <Table columns={COLUMNS} data={data} url="setor" />
}
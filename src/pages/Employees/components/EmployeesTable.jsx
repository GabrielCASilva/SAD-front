import Table from '../../../components/Table';
import { useGetEmployees } from '../../../hooks/employees/useGetEmployees';

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
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Cargo',
        dataIndex: 'cargo',
        key: 'cargo',
        render: (cargo) => 
            cargo.nome
    },
    {
        title: 'Setor',
        dataIndex: 'setor',
        key: 'setor',
        render: (setor) =>
            setor.nome
    },
]

export default function EmployeesTable(){
    const { data } = useGetEmployees()

    return <Table columns={COLUMNS} data={data} url="funcionarios" />
}
import Table from '..';
import { EMPLOYEES_COLUMNS } from '../../../constants/tablesColumns';
import { useGetEmployees } from '../../../hooks/employees/useGetEmployees';

export default function EmployeesTable() {
	const { data } = useGetEmployees();

	return <Table columns={EMPLOYEES_COLUMNS} data={data} url="funcionarios" />;
}

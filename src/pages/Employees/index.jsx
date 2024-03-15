import { EMPLOYEES_OPTIONS } from '../../constants/ordering';
import PageLayout from '../../layout/PageLayout';

const ROLE_OPTIONS = [
	{
		value: 'todos',
		label: 'Todos',
	},
	{
		value: 'servidor',
		label: 'Servidor',
	},
	{
		value: 'supervisor',
		label: 'Supervisor',
	},
];

export default function Employees() {
	return (
		<PageLayout
			title="Funcionários"
			role="employees"
			buttonTitle="Cadastrar funcionário"
			orderOptions={EMPLOYEES_OPTIONS}
			roleOptions={ROLE_OPTIONS}
		/>
	);
}

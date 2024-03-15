import PageLayout from '../../layout/PageLayout';

const ORDER_OPTIONS = [
	{
		value: 'id',
		label: 'id',
	},
	{
		value: 'nome',
		label: 'Nome',
	},
	{
		value: 'email',
		label: 'Email',
	},
	{
		value: 'cargo',
		label: 'Cargo',
	},
	{
		value: 'setor',
		label: 'Setor',
	},
];

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
			orderOptions={ORDER_OPTIONS}
			roleOptions={ROLE_OPTIONS}
		/>
	);
}

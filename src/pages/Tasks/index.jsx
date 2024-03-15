import PageLayout from '../../layout/PageLayout';

const ORDER_OPTIONS = [
	{
		value: 'id',
		label: 'Id',
	},
	{
		value: 'nome',
		label: 'Título',
	},
	{
		value: 'setor',
		label: 'Setor',
	},
	{
		value: 'servidor',
		label: 'Servidor',
	},
	{
		value: 'situacao',
		label: 'Situação',
	},
];

export default function Tasks() {
	return (
		<PageLayout
			title="Tarefas"
			role="tasks"
			buttonTitle="Cadastrar Tarefa"
			orderOptions={ORDER_OPTIONS}
		/>
	);
}

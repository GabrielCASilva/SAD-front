import PageLayout from '../../layout/PageLayout';

const ORDER_OPTIONS = [
	{
		value: 'id',
		label: 'Id',
	},
	{
		value: 'ramal',
		label: 'Ramal',
	},
	{
		value: 'nome',
		label: 'Nome',
	},
	{
		value: 'supervisor',
		label: 'Supervisor',
	},
];

export default function Sector() {
	return (
		<PageLayout
			title="Setor"
			role="sectors"
			buttonTitle="Cadastrar Setor"
			orderOptions={ORDER_OPTIONS}
		/>
	);
}

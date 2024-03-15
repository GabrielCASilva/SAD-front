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
		value: 'responsavel',
		label: 'Autor',
	},
	{
		value: 'setor',
		label: 'Setor',
	},
];

export default function Goals() {
	return (
		<PageLayout
			title="Metas"
			role="goals"
			buttonTitle="Cadastrar Meta"
			orderOptions={ORDER_OPTIONS}
		/>
	);
}

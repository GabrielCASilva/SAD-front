import { GOALS_OPTIONS } from '../../constants/ordering';
import PageLayout from '../../layout/PageLayout';

export default function Goals() {
	return (
		<PageLayout
			title="Metas"
			role="goals"
			buttonTitle="Cadastrar Meta"
			orderOptions={GOALS_OPTIONS}
		/>
	);
}

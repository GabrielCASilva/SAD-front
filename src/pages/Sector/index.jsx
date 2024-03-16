import { SECTOR_OPTIONS } from '../../constants/options';
import PageLayout from '../../layout/PageLayout';

export default function Sector() {
	return (
		<PageLayout
			title="Setor"
			role="sectors"
			buttonTitle="Cadastrar Setor"
			orderOptions={SECTOR_OPTIONS}
		/>
	);
}

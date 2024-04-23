
import Modal from '..';
import ReportService from '../../../api/services/ReportService';

export function ReportModal() {
	const footerProps = () => {
		return {
			type: 'close',
			handleClick:  () => {
			},
		};
	};

	const onOpen = async () => {
		await ReportService.download();
	};

	return (
		<Modal
			titleButton="Salvar Relatório"
			styleButton="green"
			onOpen={onOpen}
			footer={footerProps}>
			Relatório salvo com sucesso
		</Modal>
	);
}

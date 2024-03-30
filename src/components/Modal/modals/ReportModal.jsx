
import Modal from '..';
import ReportService from '../../../api/services/ReportService';

export function ReportModal() {
	const footerProps = () => {
		return {
			type: 'close',
			handleClick:  async () => {
				const resp = await ReportService.download();
				console.log(resp)
			},
		};
	};

	return (
		<Modal
			titleButton="Salvar Relatório"
			styleButton="green"
			footer={footerProps}>
			Relatório salvo com sucesso
		</Modal>
	);
}

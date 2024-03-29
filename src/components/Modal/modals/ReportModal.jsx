import Modal from '..';

export function ReportModal() {
	const footerProps = () => {
		return {
			type: 'close',
			handleClick: () => {
				// download report
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

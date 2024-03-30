import Service, { METHOD } from '../core';

export default class ReportService extends Service {
	static async download() {
		try {
			const resp = await this.call({
				method: METHOD.GET,
				url: '/downloadRelatorio',
				responseType: 'blob',
			});

			const url = window.URL.createObjectURL(new Blob([resp]));
			const link = document.createElement('a');
			link.href = url;

			link.setAttribute('download', 'relatorio.docx');
			document.body.appendChild(link);
			link.click();
		} catch (error) {
			console.error(error);
		}
	}
}

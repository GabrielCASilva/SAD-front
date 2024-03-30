import Service, { METHOD } from '../core';

const URL = '/tarefas';

export default class TaskService extends Service {
	static async getTasks(props) {
		const { signal = null, params } = props || {};

		const response = await this.call({
			method: METHOD.GET,
			url: URL,
			signal,
			params,
		});

		return response;
	}

	static async getTask(props) {
		const { signal, id } = props;

		const response = await this.call({
			method: METHOD.GET,
			url: `${URL}/${id}`,
			signal: signal,
		});

		return response;
	}

	static async postTask(props) {
		const { signal, data } = props;

		await this.call({
			method: METHOD.POST,
			url: URL,
			signal: signal,
			data: data,
		});
	}

	static async updateTaks(props) {
		const { signal, data, id } = props;

		await this.call({
			method: METHOD.PATCH,
			url: `${URL}/${id}`,
			signal: signal,
			data: data,
		});
	}

	///servidor/12?dataInicio=2022-10-15&dataFim=2023-03-15
	static async servidorAppraisal(props) {
		const { signal, params, id } = props;

		const response = await this.call({
			method: METHOD.GET,
			url: `${URL}/servidor/${id}`,
			signal: signal,
			params: params,
		});

		return response;
	}

	//supervisor/11?dataInicio=2022-10-15&dataFim=2023-03-15
	static async supervisorAppraisal(props) {
		const { signal, params, id } = props;

		const response = await this.call({
			method: METHOD.GET,
			url: `${URL}/supervisor/${id}`,
			signal: signal,
			params: params,
		});

		return response;
	}

	//meta/1?dataInicio=2022-10-15&dataFim=2023-03-15
	static async metaProgress(props) {
		const { signal, params, id } = props;

		const response = await this.call({
			method: METHOD.GET,
			url: `${URL}/meta/${id}`,
			signal: signal,
			params: params,
		});

		return response;
	}
}

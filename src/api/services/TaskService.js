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
}

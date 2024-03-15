import { TASKS_OPTIONS } from '../../constants/ordering';
import PageLayout from '../../layout/PageLayout';

export default function Tasks() {
	return (
		<PageLayout
			title="Tarefas"
			role="tasks"
			buttonTitle="Cadastrar Tarefa"
			orderOptions={TASKS_OPTIONS}
		/>
	);
}

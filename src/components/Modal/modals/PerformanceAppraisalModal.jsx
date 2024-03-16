import Modal from '..';
import { DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import {
	DATE_FORMATS,
	formatISODate,
	isDateSameOrAfter,
	isDateSameOrBefore,
} from '../../../utils/date';
import { useNavigate } from 'react-router-dom';
import Spin from '../../Spin';
import { usePerformanceAppraisal } from '../../../hooks/performanceAppraisal/usePerformanceAppraisal';

const { RangePicker } = DatePicker;

//TODO: REVER
export default function PerformanceAppraisalModal(props) {
	const { employeeTasks = [] } = props;
	const [date, setDate] = useState({ initDate: '', finalDate: '' });
	const [tasks, setTasks] = useState(employeeTasks);
	const [phase, setPhase] = useState(1);
	const [performance, setPerformance] = useState({});
	const navigate = useNavigate();

	const handleChangeDate = (value) => {
		const initDate = formatISODate(value[0]);
		const finalDate = formatISODate(value[1]);

		setDate({
			initDate,
			finalDate,
		});
	};

	const handleSubmitDate = () => {
		let data;
		switch (phase) {
			case 1:
				data = getTasksQuantity(employeeTasks, date);
				setTasks(data);
				setPhase(data.length > 0 ? 2 : 4);
				break;
			case 2:
				break;
			case 3:
				break;
			default:
				break;
		}
	};

	const footerProps = () => {
		switch (phase) {
			case 1:
				return {
					type: 'confirm',
					handleClick: handleSubmitDate,
				};
			case 2:
				return {};
			case 3:
				return {
					type: 'close',
					handleClick: () => {
						navigate('/avaliacao', { state: performance });
					},
				};
			case 4:
				return {
					type: 'close',
					handleClick: () => {
						setPhase(1);
					},
				};
			default:
				return {};
		}
	};

	const displayProps = {
		phase: phase,
		tasks: tasks,
		handleChangeDate: handleChangeDate,
		setPhase: setPhase,
	};

	useEffect(() => {
		if (phase === 2) {
			setTimeout(() => {
				const data = usePerformanceAppraisal(tasks, date);
				setPhase(3);
				setPerformance(data);
			}, 10000);
		}
	}, [phase]);

	return (
		<Modal
			titleButton="Avaliação de desempenho"
			styleButton="yellow"
			footer={footerProps}>
			<DisplayModalContent {...displayProps} />
		</Modal>
	);
}

function DisplayModalContent(props) {
	const { phase, handleChangeDate, tasks = [], setPhase } = props;

	switch (phase) {
		case 1:
			return (
				<>
					<p style={{ marginBottom: '2.4rem' }}>
						Selecione o intervalo de tempo que deseja proceguir com a avaliação
					</p>
					<RangePicker
						defaultValue={[]}
						format={DATE_FORMATS.BR_DATE}
						onChange={handleChangeDate}
					/>
				</>
			);
		case 2:
			return (
				<div className="flex gap-14">
					<Spin />
					<div>
						<p>
							<span style={{ color: 'var(--dark-green)' }}>{tasks.length}</span>{' '}
							Tarefas foram encontradas.
						</p>
						<p>Realizando o cálculo da avaliação de desempenho...</p>
					</div>
				</div>
			);
		case 3:
			return (
				<>
					<p>Avaliação completa!</p>
					<p>Feche para visualizar a avaliação</p>
				</>
			);
		case 4:
			return (
				<>
					<p>Nenhuma tarefa foi encontrada no período selecionado.</p>
				</>
			);
	}
}

// filter tasks in respective date interval select by user
const getTasksQuantity = (tasks, date) => {
	const employeeTasks = tasks.filter((task) => {
		const initialBefore = isDateSameOrBefore(date.initDate, task.dataCriacao);
		const finalAfter = isDateSameOrAfter(date.finalDate, task.dataCriacao);

		return initialBefore && finalAfter;
	});

	return employeeTasks;
};

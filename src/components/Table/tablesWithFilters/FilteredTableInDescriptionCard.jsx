import { useEffect, useState } from 'react';
import { SubTitle } from '../../Titles';
import TasksStateTable from '../tables/TasksStateTable';
import { Input, Select } from 'antd';
import {
	SITUATION_TASKS_OPTIONS,
	TASKS_STATE_OPTIONS,
} from '../../../constants/options';
import { SITUACAO_SERVICO } from '../../../constants/situacoes';
const { Search } = Input;

export default function FilteredTableInDescriptionCard(props) {
	const {
		data,
		orderingOptions = TASKS_STATE_OPTIONS,
		subTitle = 'Todas as tarefas',
		hasFilterBySituation = false,
		situationOptions = SITUATION_TASKS_OPTIONS,
		existentsSituations = SITUACAO_SERVICO,
	} = props;

	const [tableData, setTableData] = useState([]);
	const [search, setSearch] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	const [selectedOrdering, setSelectedOrdering] = useState('Ordernar por: Id');
	const [selectedSituation, setSelectedSituation] = useState(
		'Mostrar tarefas: Todas',
	);

	const onSearchChange = (e) => {
		setIsSearching(true);
		setSearch(e.target.value);
	};

	const onSearchClick = () => {
		const dataFiltered = data?.filter((item) => {
			if (!search) return item;

			const lower = item.nome.toLowerCase();
			return lower.includes(search);
		});

		setTableData(dataFiltered);
	};

	const onOrderingChange = (e) => {
		setSelectedOrdering(`Ordernar por: ${e}`);

		const dataSorted = [...data]?.sort(dynamicSort(e));

		setTableData(dataSorted);
	};

	const onSituationChange = (e) => {
		setSelectedSituation(`Mostrar tarefas: ${existentsSituations[e]}`);

		const dataFiltered = data?.filter((item) => {
			if (e === 'TODAS') return item;

			return item.situacao === e;
		});

		setTableData(dataFiltered);
	};

	useEffect(() => {
		if (!search && isSearching && data !== tableData) {
			setTableData([]);
			setIsSearching(false);
		}
	}, [search, data, isSearching]);

	const _data = tableData.length > 0 ? tableData : data;
	return (
		<>
			<SubTitle>{subTitle}</SubTitle>
			<div className="flex column gap-24 ant-border-color">
				<div className="flex gap-24">
					<div className="w-fit-content">
						<Select
							value={selectedOrdering}
							options={orderingOptions}
							onChange={onOrderingChange}
							placeholder="Ordenação"
						/>
					</div>

					{hasFilterBySituation && (
						<div className="w-fit-content">
							<Select
								placeholder="Situação"
								value={selectedSituation}
								options={situationOptions}
								onChange={onSituationChange}
							/>
						</div>
					)}
				</div>
				<Search onChange={onSearchChange} onSearch={onSearchClick} />
				<TasksStateTable data={_data} />
			</div>
		</>
	);
}

function dynamicSort(property) {
	let sortOrder = 1;
	if (property[0] === '-') {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a, b) {
		let result =
			a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
		return result * sortOrder;
	};
}

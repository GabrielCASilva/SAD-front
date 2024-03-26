import { useEffect, useState } from 'react';
import { SubTitle } from '../../Titles';
import TasksStateTable from '../tables/TasksStateTable';
import { Input, Select } from 'antd';
import {
	OPTIONS_LABEL,
	SITUATION_TASKS_OPTIONS,
	TASKS_STATE_OPTIONS,
} from '../../../constants/options';
import { dynamicSort } from '../../../utils/dynamicSort';
const { Search } = Input;

export default function FilteredTableInDescriptionCard(props) {
	const {
		data,
		orderingOptions = TASKS_STATE_OPTIONS,
		subTitle = 'Todas as tarefas',
		hasFilterBySituation = false,
		situationOptions = SITUATION_TASKS_OPTIONS,
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

			const searchLower = search.toLowerCase();
			const lower = item.nome.toLowerCase();
			return lower.includes(searchLower);
		});

		setTableData(dataFiltered);
	};

	const onOrderingChange = (e) => {
		setSelectedOrdering(`Ordernar por: ${OPTIONS_LABEL[e]}`);

		const dataSorted = [...data]?.sort(dynamicSort(e));

		setTableData(dataSorted);
	};

	const onSituationChange = (e) => {
		setSelectedSituation(`Mostrar tarefas: ${OPTIONS_LABEL[e]}`);

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

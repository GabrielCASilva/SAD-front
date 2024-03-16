import { useEffect, useState } from 'react';
import { SubTitle } from '../../Titles';
import TasksStateTable from '../tables/TasksStateTable';
import { Input, Select } from 'antd';
const { Search } = Input;

export default function FilteredTableInDescriptionCard(props) {
	const { data, orderingOptions = [], subTitle = 'Todas as tarefas' } = props;

	const [tableData, setTableData] = useState([]);
	const [search, setSearch] = useState('');
	const [isSearching, setIsSearching] = useState(false);
	const [selectedOrdering, setselectedOrdering] = useState('Ordernar por: Id');

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
		setselectedOrdering(`Ordernar por: ${e}`);

		const dataSorted = [...data]?.sort(dynamicSort(e));

		setTableData(dataSorted);
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
				<div className="w-fit-content">
					<Select
						value={selectedOrdering}
						options={orderingOptions}
						onChange={onOrderingChange}
						placeholder="Ordenação"
					/>
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

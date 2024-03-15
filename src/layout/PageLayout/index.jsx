import Button from '../../components/Button';
import EmployeesTable from '../../components/Table/tables/EmployeesTable';
import GoalsTable from '../../components/Table/tables/GoalsTable';
import SectorTable from '../../components/Table/tables/SectorTable';
import TasksTable from '../../components/Table/tables/TasksTable';
import { Title } from '../../components/Titles';
import { Input, Select } from 'antd';
import './style.css';
import { useStore } from '../../store';
import { useEffect, useMemo, useState } from 'react';

const { Search } = Input;

const TABLES = {
	employees: <EmployeesTable />,
	tasks: <TasksTable />,
	goals: <GoalsTable />,
	sectors: <SectorTable />,
};

export default function PageLayout(props) {
	const {
		title,
		buttonTitle,
		role,
		orderOptions = [],
		roleOptions = [],
	} = props;

	const store = useStore();

	const [search, setSearch] = useState('');
	const [modify, setModfy] = useState(0);
	const [selectedRole, setSelectedRole] = useState('Cargo: Todos');
	const [selectedOrder, setSelectedOrder] = useState('Ordernar por: Id');

	const data = useMemo(() => {
		return !store[role].loading && store[role]?.dataRef?.length > 0
			? store[role]
			: [];
	}, [store]);

	const onSearchChance = (e) => {
		setModfy(1);
		setSearch(e.target.value);
	};

	const onSearchClick = () => {
		const dataFiltered = data?.dataRef.filter((item) => {
			if (!search) return item;

			const lower = item.nome.toLowerCase();
			return lower.includes(search);
		});

		data?.filterData({ data: dataFiltered });
	};

	const onOrderChange = (e) => {
		setSelectedOrder(`Ordernar por: ${e}`);
		const dataSorted = [...data.dataRef]?.sort(dynamicSort(e));

		data?.setData({ data: dataSorted });
	};

	const onRoleChange = (e) => {
		setSelectedRole(`Cargo: ${e}`);
		const dataFiltered = data?.dataRef.filter((item) => {
			if (e === 'todos') return item;
			const lower = item.cargo.nome.toLowerCase();
			return lower.includes(e.toLowerCase());
		});

		data?.filterData({ data: dataFiltered });
	};

	useEffect(() => {
		if (!search && modify && data?.data !== data?.dataRef) {
			data?.filterData({ data: data?.dataRef });
			setModfy(0);
		}
	}, [search, data, modify]);

	if (data && data?.loading) {
		return <Title>Carregando...</Title>;
	}

	return (
		<>
			<Title>{title}</Title>
			<div className="flex column gap-24">
				<div className="flex justify-between">
					<div className="search-input ant-border-color">
						<Search
							styles={{ height: '100%' }}
							size="large"
							onChange={onSearchChance}
							onSearch={onSearchClick}
						/>
					</div>
					<div style={{ maxWidth: 'fit-content' }}>
						<Button onClick={() => {}} style="green">
							{buttonTitle}
						</Button>
					</div>
				</div>
				<div className="flex gap-24 ant-border-color">
					<Select
						value={selectedOrder}
						options={orderOptions}
						onChange={onOrderChange}
						placeholder="Ordenação"
					/>
					{role === 'employees' && (
						<Select
							value={selectedRole}
							options={roleOptions}
							onChange={onRoleChange}
							placeholder="Cargo"
						/>
					)}
				</div>
				{TABLES[role]}
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

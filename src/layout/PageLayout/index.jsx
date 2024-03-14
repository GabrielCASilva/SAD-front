import Button from '../../components/Button';
import EmployeesTable from '../../components/Table/tables/EmployeesTable';
import GoalsTable from '../../components/Table/tables/GoalsTable';
import SectorTable from '../../components/Table/tables/SectorTable';
import TasksTable from '../../components/Table/tables/TasksTable';
import { Title } from '../../components/Titles';
import { Input, Select } from 'antd';
import './style.css';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';

const { Search } = Input;

const TABLES = {
	employees: <EmployeesTable />,
	tasks: <TasksTable />,
	goals: <GoalsTable />,
	sector: <SectorTable />,
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
	const data = store[role].dataRef.length > 0 ? store[role] : undefined;
	const [search, setSearch] = useState('');

	const onSearchChance = (e) => {
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

	// TODO: FAZER O FILTRO POR ORDER E POR ROLE
	const onOrderChange = (e) => {
		console.log(e);
	};

	const onRoleChange = (e) => {
		console.log(e);
	};

	if (data && data?.loading) {
		return <Title>Carregando...</Title>;
	}

	useEffect(() => {
		if (!search && data?.data !== data?.dataRef) {
			data?.filterData({ data: data?.dataRef });
		}
	}, [search, data]);

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
						options={orderOptions}
						onChange={onOrderChange}
						placeholder="Ordenação"
					/>
					{role === 'employees' && (
						<Select
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

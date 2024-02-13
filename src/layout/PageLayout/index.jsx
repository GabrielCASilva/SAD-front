import Button from "../../components/Button";
import EmployeesTable from "../../components/Table/tables/EmployeesTable";
import GoalsTable from "../../components/Table/tables/GoalsTable";
import SectorTable from "../../components/Table/tables/SectorTable";
import TasksTable from "../../components/Table/tables/TasksTable";
import { Title } from "../../components/Titles";
import { Input, Select } from 'antd';
import "./style.css"

const { Search } = Input;

const TABLES = {
  employees: <EmployeesTable />,
  tasks: <TasksTable />,
  goals: <GoalsTable />,
  sector: <SectorTable />
}

export default function PageLayout(props){
  const {
    title, 
    buttonTitle,
    role,
    orderOptions = [],
    roleOptions = [],
    onClick = () => {}
  } = props

  const onSearchChance = () => {} 
  const onOrderChange = () => {} 
  const onRoleChange = () => {}

  return (
    <>
      <Title>{title}</Title>
      <div className="flex column gap-24">
        <div className="flex justify-between">
          <div className="search-input ant-border-color">
            <Search styles={{height: "100%"}} size="large" onChange={onSearchChance}/>
          </div>
          <div style={{maxWidth: "fit-content"}}>
            <Button onClick={onClick} style="green">{buttonTitle}</Button>
          </div>
        </div>
        <div className="flex gap-24 ant-border-color">
          <Select options={orderOptions} onChange={onOrderChange} placeholder="Ordenação"/>
          {role === "employees" && <Select options={roleOptions} onChange={onRoleChange} placeholder="Cargo"/>}
        </div>
        {TABLES[role]}
      </div>
    </>
  );
}
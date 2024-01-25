import { Title } from "../../components/Titles";
import { Input, Button, Select } from 'antd';
import EmployeesTable from "./components/EmployeesTable";
const { Search } = Input;

export default function Employees(){
    return (
        <div style={{
            maxWidth: 1620,
            width: "100%"
        }}> 
            <Title>Funcionários</Title>
            <div className="flex column" style={{gap: "var(--base-2-4rem)"}}>
                <div className="flex">
                    <Search/>
                    <Button>Cadastrar funcionário</Button>
                </div>
                <div className="flex">
                    <Select options={[
                        {
                            value: 'nome',
                            label: 'Nome',
                        }
                    ]} placeholder="Ordernação" />
                    <Select placeholder="Mostrar apenas"/>
                </div>
                <EmployeesTable />
            </div>
        </div>
    )
}
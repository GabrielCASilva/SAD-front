import Button from "../../components/Button";
import EmployeesTable from "../../components/Table/tables/EmployeesTable";
import { Title } from "../../components/Titles";
import { Input, Select } from 'antd';
const { Search } = Input;

export default function Employees(){
    return (
        <> 
            <Title>Funcionários</Title>
            <div className="flex column" style={{gap: "var(--base-2-4rem)"}}>
                <div className="flex">
                    <Search/>
                    <div style={{maxWidth: "fit-content"}}>
                        <Button style="green">Cadastrar funcionário</Button>
                    </div>
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
        </>
    )
}
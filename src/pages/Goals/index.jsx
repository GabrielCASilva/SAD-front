import GoalsTable from "../../components/Table/tables/GoalsTable";
import { Title } from "../../components/Titles";
import { Input, Button, Select } from 'antd';
const { Search } = Input;

export default function Goals(){
    return (
        <>
            <Title>Metas</Title>
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
                <GoalsTable />
            </div>
        </>
    )
}
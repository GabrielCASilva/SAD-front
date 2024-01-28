import SectorTable from "../../components/Table/tables/SectorTable";
import { Title } from "../../components/Titles";
import { Input, Button, Select } from 'antd';
const { Search } = Input;

export default function Sector(){
    return (
        <>
            <Title>Setor</Title>
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
                <SectorTable />
            </div>
        </>
    )
}
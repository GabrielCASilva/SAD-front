import Button from "../../components/Button";
import TasksTable from "../../components/Table/tables/TasksTable";
import { Title } from "../../components/Titles";
import { Input, Select } from 'antd';
const { Search } = Input;

export default function Tasks(){
    return (
        <>
            <Title>Tarefas</Title>
            <div className="flex column" style={{gap: "var(--base-2-4rem)"}}>
                <div className="flex">
                    <Search/>
                    <div style={{maxWidth: "fit-content"}}>
                        <Button style="green">Cadastrar tarefa</Button>
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
                <TasksTable />
            </div>
        </>
    )
}
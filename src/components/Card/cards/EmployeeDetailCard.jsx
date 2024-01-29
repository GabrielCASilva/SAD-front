import { Input, Select } from "antd";
import Card, { SimpleCard } from "..";
import Button from "../../Button";
import { SubTitle } from "../../Titles";
import TasksStateTable from "../../Table/tables/TasksStateTable";
import ProgressBar from "../../ProgressBar";

const { Search } = Input;


const tabList = [
    {
      key: 'tab1',
      tab: 'Tarefas',
    },
    {
      key: 'tab2',
      tab: 'Informações pessoais',
    },
];

const contentList = {
    tab1: Tab1(),
    tab2: <p>content2</p>,
};

export default function EmployeeDetailCard(){
    return (
        <Card
            contentList={contentList}
            tabList={tabList}
        />
    )
}

function Tab1(props){
    return(
        <div className="flex column gap-4-8rem container-top-bottom">
            <EmployeesCurrentTask />
            <AllEmployeesTasks />
        </div>
    )
}

function EmployeesCurrentTask(){
    return (
        <div className="flex column gap-2-4rem">
            <div className="flex justify-between container">
                <SubTitle>Tarefa Atual</SubTitle>
                <div style={{width: "fit-content"}}>
                    <Button>Concluir tarefas</Button>
                </div>
            </div>
            <div style={{position: "relative"}}>
                <div className="flex gap-2-4rem container" style={{position: "relative",
                    zIndex: 1}}>
                    <div className="w-100" style={{maxWidth: "32.2rem"}}>
                        <SimpleCard>
                            <h4>Titulo da tarefa</h4>
                            <p>Descrição da tarefa</p>
                        </SimpleCard>
                    </div>
                    <div className="flex column justify-center w-100">
                        <div className="flex">
                            <p>Inicio: </p>
                            <p>Final: </p>
                            <p>Previsao: </p>
                        </div>
                        <div>
                            <p style={{fontSize: "1.4rem", fontWeight: 700}}>Tempo de progresso</p>
                            <ProgressBar />
                        </div>
                    </div>
                </div>
                <BackgroundEmployeesCurrentTask />
            </div>
        </div>
    )
}

function BackgroundEmployeesCurrentTask(){
    return (
        <div style={{backgroundColor: "var(--background-gray)", position: "absolute",
            height: "70%",
            width: "100%",
            top: "15%"}}></div>
    )
}

function AllEmployeesTasks(){
    return (
        <div className="container">
            <div style={{paddingBottom: "2.4rem"}}>
                <SubTitle>Todas as tarefas</SubTitle>
            </div>
            <div className="flex column gap-2-4rem">
                <Select placeholder="Ordenação"/>
                <Search />
                <TasksStateTable />
            </div>
        </div>
    )
}
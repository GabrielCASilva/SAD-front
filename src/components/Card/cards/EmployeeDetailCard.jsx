import { Input, Select } from "antd";
import Card, { CardRow, SimpleCard, TabContainer } from "..";
import Button from "../../Button";
import { SubTitle } from "../../Titles";
import TasksStateTable from "../../Table/tables/TasksStateTable";
import ProgressBar from "../../ProgressBar";
import { useStore } from "../../../store";

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
    tab1: <Tab1 />,
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

function Tab1(){
    return(
        <TabContainer>
            <CardRow>
                <EmployeesCurrentTask />
            </CardRow>
            <CardRow classes="container">
                <AllEmployeesTasks />
            </CardRow>
        </TabContainer>
    )
}

function EmployeesCurrentTask(){
    const { employee } = useStore();
    const { data } = employee;

    // TODO: TAREFA ATUAL
    return (
        <>
            <div className="flex justify-between container">
                <SubTitle>Tarefa Atual</SubTitle>
                <div style={{width: "fit-content"}}>
                    <Button>Concluir tarefas</Button>
                </div>
            </div>
            <div style={{position: "relative"}}>
                <div className="flex gap-24 container" style={{position: "relative",
                    zIndex: 1}}>
                    <div className="w-100" style={{maxWidth: "32.2rem", minHeight: "16rem"}}>
                        <SimpleCard cardClasses="h-100">
                            <p className="b-600">Titulo da tarefa</p>
                            <p>Descrição da tarefa</p>
                        </SimpleCard>
                    </div>
                    <div className="flex column justify-center w-100 b-500 gap-14">
                        <div className="flex justify-between">
                            <p>Inicio: [DATA]</p>
                            <p>Final: [DATA]</p>
                            <p>Previsao: [DATA]</p>
                        </div>
                        <div>
                            <p>Tempo de progresso</p>
                            <ProgressBar />
                        </div>
                    </div>
                </div>
                <BackgroundEmployeesCurrentTask />
            </div>
        </>
    )
}


function AllEmployeesTasks(){
    const { employee } = useStore();
    const { data } = employee;

    return (
        <>
            <SubTitle>Todas as tarefas</SubTitle>
            <div className="flex column gap-24 ant-border-color">
                <div className="w-fit-content">
                    <Select placeholder="Ordenação"/>
                </div>
                <Search />
                <TasksStateTable data={data.tarefas} />
            </div>
        </>
    )
}

// BACKGROUND STYLE COMPONENT
function BackgroundEmployeesCurrentTask(){
    return (
        <div style={{backgroundColor: "var(--background-gray)", position: "absolute",
            height: "70%",
            width: "100%",
            top: "15%"}}></div>
    )
}
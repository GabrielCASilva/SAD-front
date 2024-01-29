import Card from "..";

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
        <>
            <div>
                <div>
                    <h3>Tarefa Atual</h3>
                    <button>Concluir tarefas</button>
                </div>
                <div>Tarefa</div>
            </div>
            <div>
                <div>
                    <h3>Todas as tarefas</h3>
                </div>
                <div>
                    <input type="checkbox" />
                    <input type="text" />
                    <p>table</p>
                </div>
            </div>
        </>
    )
}
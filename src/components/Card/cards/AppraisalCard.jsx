import { CardWithoutTabs, SimpleCard } from "..";
import TasksStateTable from "../../Table/tables/TasksStateTable";
import { SubTitle } from "../../Titles";

import { Input, Select } from "antd";

const { Search } = Input;

export default function AppraisalCard(){
    return (
        <CardWithoutTabs>
            <div className="container flex column gap-4-8rem container-top-bottom">
                <div className="flex column gap-2-4rem">
                    <SubTitle>Relatório geral</SubTitle>
                    <p>O Funcionário conseguiu atingir aproximadamente 
                        <span className="b-500"> [X] </span> 
                        do total das métricas do período avaliado
                    </p>
                    <div className="flex gap-2-4rem">
                        <SimpleCard cardClasses="w-max-fit-content card-border-color--green">
                            [X] tarefas concluidas
                        </SimpleCard>
                        <SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
                            [X] tarefas incompletas
                        </SimpleCard>
                        <SimpleCard cardClasses="w-max-fit-content card-border-color-gray">
                            [X] tarefas pendentes
                        </SimpleCard>
                    </div>
                </div>
                <div className="flex column gap-2-4rem ant-border-color">
                    <SubTitle>Todas as tarefas</SubTitle>
                    <div className="flex gap-2-4rem">
                        <div className="w-fit-content">
                            <Select placeholder="Ordenação"/>
                        </div>
                        <div className="w-fit-content">
                            <Select placeholder="Estado"/>
                        </div>
                    </div>
                    <Search />
                    <TasksStateTable />
                </div>
            </div>
        </CardWithoutTabs>
    );
}
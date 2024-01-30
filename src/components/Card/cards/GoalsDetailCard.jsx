import { Input } from "antd";
import Card from "..";

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
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};

export default function GoalsDetailCard(){
    return (
        <Card
            contentList={contentList}
            tabList={tabList}
        />
    )
}
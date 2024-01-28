import { Card as AntdCard } from 'antd'; 
import { useState } from 'react';

const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
];

const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};

export default function Card(){
    const [activeTabKey, setActiveTabKey] = useState('tab2');

    const onTab2Change = (key) => {
        setActiveTabKey(key);
      };

    return (
        <AntdCard style={{width: '100%'}} 
            tabList={tabList} 
            onTabChange={onTab2Change} 
            activeTabKey={activeTabKey}
            tabProps={{
                size: 'middle',
            }}>
            {contentList[activeTabKey]}
        </AntdCard>
    )
}
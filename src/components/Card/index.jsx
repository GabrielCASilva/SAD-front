import { Card as AntdCard } from 'antd'; 
import { useState } from 'react';
import "./style.css";

export default function Card(props){
    const {contentList, tabList} = props;
    const [activeTabKey, setActiveTabKey] = useState('tab1');

    const onTabChange = (key) => {
        setActiveTabKey(key);
    };

    return (
        <AntdCard className="w-100 h-100 card"
            tabList={tabList} 
            onTabChange={onTabChange} 
            activeTabKey={activeTabKey}
            tabProps={{
                size: 'middle',
            }}>
            {contentList[activeTabKey]}
        </AntdCard>
    )
}

export function SimpleCard(props){
    const {children, containerClasses} = props;

    return (
        <AntdCard className="w-100 card">
            <div className={`simple-card flex column ${containerClasses}`}>
                {children}
            </div>
        </AntdCard>
    )
}
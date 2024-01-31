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
        <AntdCard className="w-100 h-100 card p-none f-size-16"
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
    const {children, containerClasses = "", cardClasses = ""} = props;

    return (
        <AntdCard className={`w-100 card f-size-16 ${cardClasses}`}>
            <div className={`flex column gap-1-4rem ${containerClasses}`}>
                {children}
            </div>
        </AntdCard>
    )
}

export function CardWithoutTabs(props){
    const {children} = props
    return (
        <AntdCard className="w-100 h-100 card p-none-m f-size-16">
            {children}
        </AntdCard>
    )
}
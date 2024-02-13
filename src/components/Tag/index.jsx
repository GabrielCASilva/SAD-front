import { Tag as AntdTag } from 'antd';
import "./style.css";

const TAGS = {
    concluida: {
        color: "var(--dark-green)",
        menssage: "Concluida",
        textColor: "white"
    },
    pendente: {
        color: "var(--background-gray)",
        menssage: "Pendente"
    },
    incompleta: {
        color: "var(--yellow)",
        menssage: "Incompleta",
        textColor: "white"
    }
};

export default function Tag(props){
    const { type } = props;
    const { color, menssage, textColor } = TAGS[type.toLowerCase()];

    return (
        <AntdTag color={color} className={textColor || ""}>
            {menssage}
        </AntdTag>
    )
}
import { Button as AntdButton } from 'antd';
import "./style.css"

export default function Button(props){
    const {children, onClick, style = "white"} = props

    const BUTTON_STYLE = {
        yellow: "button-yellow",
        white: "button-white",
        gray: "button-gray",
        green: "button-green",
    }

    return (
        <AntdButton onClick={onClick} className={`button ${BUTTON_STYLE[style]}`}>
            {children}
        </AntdButton>
    )

}
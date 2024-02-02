import { Progress } from "antd";
import "./style.css";

export default function ProgressBar(){
    return  <Progress percent={30} showInfo={false} 
        className="m-zero"
        strokeColor={{
          from: "#ffbc39",
          to: "#ffbc39",
        }}/>
}
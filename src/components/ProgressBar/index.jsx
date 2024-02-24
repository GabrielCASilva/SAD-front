import { Progress } from "antd";
import "./style.css";

export default function ProgressBar(props){
  const {progress} = props;
  return  <Progress percent={progress} showInfo={false} 
      className="m-zero"
      strokeColor={{
        from: "#ffbc39",
        to: "#ffbc39",
      }}/>
}
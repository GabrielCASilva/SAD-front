import AppraisalCard from "../../components/Card/cards/AppraisalCard";
import EmployeeDetailCard from "../../components/Card/cards/EmployeeDetailCard";
import GoalsDetailCard from "../../components/Card/cards/GoalsDetailCard";
import ProgressCard from "../../components/Card/cards/ProgressCard";
import { Title } from "../../components/Titles";

const CARDS = {
  employees: <EmployeeDetailCard />,
  goals: <GoalsDetailCard />,
  appraisal: <AppraisalCard />,
  progress: <ProgressCard />
}


export default function DetailLayout(props) {
  const { title, children, card } = props;
  return (
    <>
      <Title>{title}</Title>
      <div className="flex h-100 gap-24 min-h-0">
        <div className="flex column w-100 gap-14" style={{maxWidth: "26.5rem"}}>
          {children}
        </div>
        <div className="flex column w-100">
          {CARDS[card]}
        </div>
      </div>
    </>
  )
}
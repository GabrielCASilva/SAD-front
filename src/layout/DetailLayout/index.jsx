import EmployeeDetailCard from "../../components/Card/cards/EmployeeDetailCard";
import GoalsDetailCard from "../../components/Card/cards/GoalsDetailCard";
import { Title } from "../../components/Titles";

const CARDS = {
  employees: <EmployeeDetailCard />,
  goals: <GoalsDetailCard />,
  appraisal: <p>[CARD]</p>
}


export default function DetailLayout(props) {
  const { title, children, card } = props;
  return (
    <>
      <Title>{title}</Title>
      <div className="flex h-100 gap-2-4rem min-h-0">
        <div className="flex column w-100 gap-1-4rem" style={{maxWidth: "26.5rem"}}>
          {children}
        </div>
        <div className="flex column w-100">
          {CARDS[card]}
        </div>
      </div>
    </>
  )
}
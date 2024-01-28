import { useLocation } from "react-router-dom"
import { ReportModal } from "../../components/Modal/modals/ReportModal"

export default function Appraisal(){
  const location = useLocation()
  const { state } = location
  console.log(state)
  return (
    <div>
      <h1>Avaliação de desenpenho</h1>
      <ReportModal />
    </div>
  )
}
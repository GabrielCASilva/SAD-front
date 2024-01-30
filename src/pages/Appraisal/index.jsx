import { useLocation } from "react-router-dom"
import { ReportModal } from "../../components/Modal/modals/ReportModal"
import { SimpleCard } from "../../components/Card"
import DetailLayout from "../../layout/DetailLayout"
import { SubTitle } from "../../components/Titles"

export default function Appraisal(){
  const location = useLocation()
  const { state } = location
  console.log(state)

  return (
    <DetailLayout title="[DATA] - [NOME]" card="appraisal">
      <SimpleCard>
          <SubTitle>Meta atual</SubTitle>
          <p>[META]</p>
      </SimpleCard>
      <SimpleCard>
          <SubTitle>Período calculado</SubTitle>
          <p>[PERIODO]</p>
          <p>Início: [DATA]</p>
          <p>Final: [DATA]</p>
      </SimpleCard>
      <ReportModal />
    </DetailLayout>
  );
}
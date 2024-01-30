import Button from "../../components/Button";
import { SimpleCard } from "../../components/Card";
import { SubTitle } from "../../components/Titles";
import DetailLayout from "../../layout/DetailLayout";

export default function GoalDetail(){

  const title = <><span style={{color: 'var(--white-gray)'}}>Metas {">"}</span> Meta</> 
  return (
    <DetailLayout title={title} card="goals">
      <SimpleCard>
          <SubTitle>Autor</SubTitle>
          <p>[NOME]</p>
      </SimpleCard>
      <SimpleCard>
          <SubTitle>Datas</SubTitle>
          <p>Início: [DATA]</p>
          <p>Final: [DATA]</p>
      </SimpleCard>
      <Button>Progresso da meta</Button>
      <Button>Desativar funcionário</Button>
      <Button>Editar dados</Button>
    </DetailLayout>
  );
}
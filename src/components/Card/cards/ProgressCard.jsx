import { CardContainer, CardRow, CardWithoutTabs } from '..';
import { useStore } from '../../../store';
import AppraisalStatisticsReport from '../../AppraisalStatisticsReport';
import FilteredTableInDescriptionCard from '../../Table/tablesWithFilters/FilteredTableInDescriptionCard';
import { SubTitle } from '../../Titles';

export default function ProgressCard() {
	const { progress } = useStore();
	const {
		indiceAgilidade,
		indiceEficacia,
		indiceProdutividade,
		resumo_tarefas: resumoTarefas,
		tarefasAvaliacao,
	} = progress?.data;

	const metricas = {
		indiceAgilidade,
		indiceEficacia,
		indiceProdutividade,
	};
	return (
		<CardWithoutTabs>
			<CardContainer>
				<CardRow>
					<SubTitle>Concluão da meta</SubTitle>
					<AppraisalStatisticsReport
						resumoTarefas={resumoTarefas}
						metricas={metricas}
					/>
				</CardRow>
				<CardRow classes="ant-border-color">
					<FilteredTableInDescriptionCard
						SubTitle="Lista das tarefas associadas"
						data={tarefasAvaliacao}
						hasFilterBySituation={true}
					/>
				</CardRow>
			</CardContainer>
		</CardWithoutTabs>
	);
}

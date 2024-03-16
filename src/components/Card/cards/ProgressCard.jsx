import { CardContainer, CardRow, CardWithoutTabs } from '..';
import { useStore } from '../../../store';
import AppraisalStatisticsReport from '../../AppraisalStatisticsReport';
import FilteredTableInDescriptionCard from '../../Table/tablesWithFilters/FilteredTableInDescriptionCard';
import { SubTitle } from '../../Titles';

export default function ProgressCard() {
	const { progress } = useStore();
	const { metricas, resumo_tarefas: resumoTarefas, tarefas } = progress?.data;
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
						data={tarefas}
						hasFilterBySituation={true}
					/>
				</CardRow>
			</CardContainer>
		</CardWithoutTabs>
	);
}

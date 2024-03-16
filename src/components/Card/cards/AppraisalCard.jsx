import { CardContainer, CardRow, CardWithoutTabs } from '..';
import { SITUATION_PARTIAL_TASKS_OPTIONS } from '../../../constants/options';
import { SITUACAO_PARCIAL_SERVICO } from '../../../constants/situacoes';
import { useStore } from '../../../store';
import AppraisalStatisticsReport from '../../AppraisalStatisticsReport';
import FilteredTableInDescriptionCard from '../../Table/tablesWithFilters/FilteredTableInDescriptionCard';
import { SubTitle } from '../../Titles';

//TODO: Atualizar
export default function AppraisalCard() {
	const { appraisal } = useStore();
	const { metricas, resumo_tarefas: resumoTarefas, tarefas } = appraisal?.data;

	return (
		<CardWithoutTabs>
			<CardContainer>
				<CardRow>
					<SubTitle>Relatório geral</SubTitle>
					<AppraisalStatisticsReport
						resumoTarefas={resumoTarefas}
						metricas={metricas}
					/>
				</CardRow>
				<CardRow classes="ant-border-color">
					<FilteredTableInDescriptionCard
						data={tarefas}
						hasFilterBySituation={true}
						situationOptions={SITUATION_PARTIAL_TASKS_OPTIONS}
						existentsSituations={SITUACAO_PARCIAL_SERVICO}
					/>
				</CardRow>
			</CardContainer>
		</CardWithoutTabs>
	);
}

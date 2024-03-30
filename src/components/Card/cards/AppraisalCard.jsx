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
	const {
		indiceAgilidade,
		indiceComprometimento,
		indiceEficacia,
		indiceProdutividade,
		resumo_tarefas: resumoTarefas,
		tarefasAvaliacao,
	} = appraisal?.data;

	const metricas = {
		indiceAgilidade,
		indiceComprometimento,
		indiceEficacia,
		indiceProdutividade,
	};

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
						data={tarefasAvaliacao}
						hasFilterBySituation={true}
						situationOptions={SITUATION_PARTIAL_TASKS_OPTIONS}
						existentsSituations={SITUACAO_PARCIAL_SERVICO}
					/>
				</CardRow>
			</CardContainer>
		</CardWithoutTabs>
	);
}

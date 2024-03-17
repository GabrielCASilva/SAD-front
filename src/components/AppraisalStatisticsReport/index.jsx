import { SimpleCard } from '../Card';

export default function AppraisalStatisticsReport(props) {
	const { metricas, resumoTarefas } = props;

	return (
		<>
			<p>Métricas atingidas</p>
			<div className="flex gap-24">
				<SimpleCard cardClasses="w-max-fit-content card-border-color--green">
					<p className="m-zero">
						<span className="b-500 block">{metricas?.agilidade}% </span>
						Agilidade
					</p>
				</SimpleCard>
				<SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
					<p className="m-zero">
						<span className="b-500 block">{metricas?.produtividade}% </span>
						Produtividade
					</p>
				</SimpleCard>
				<SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
					<p className="m-zero">
						<span className="b-500 block">{metricas?.eficacia}% </span>
						Eficacia
					</p>
				</SimpleCard>
				{metricas?.comprometimento && (
					<SimpleCard cardClasses="w-max-fit-content card-border-color--green">
						<p className="m-zero">
							<span className="b-500 block">{metricas?.comprometimento}% </span>
							Comprometimento
						</p>
					</SimpleCard>
				)}
			</div>

			<p>Tarefas avaliadas</p>
			<div className="flex gap-24">
				<SimpleCard cardClasses="w-max-fit-content card-border-color--green">
					<p className="m-zero">
						<span className="b-500 block">{resumoTarefas?.concluidas} </span>
						Concluídas
					</p>
				</SimpleCard>
				{resumoTarefas?.ativas && (
					<SimpleCard cardClasses="w-max-fit-content card-border-color--black">
						<p className="m-zero">
							<span className="b-500 block">{resumoTarefas?.ativas} </span>
							Ativas
						</p>
					</SimpleCard>
				)}
				<SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
					<p className="m-zero">
						<span className="b-500 block">{resumoTarefas?.andamento} </span>
						Em andamento
					</p>
				</SimpleCard>
				<SimpleCard cardClasses="w-max-fit-content card-border-color--gray">
					<p className="m-zero">
						<span className="b-500 block">{resumoTarefas?.inativas} </span>
						Inativas
					</p>
				</SimpleCard>
			</div>
		</>
	);
}

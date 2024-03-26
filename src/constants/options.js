export const TASKS_STATE_OPTIONS = [
	{
		value: 'id',
		label: 'Id',
	},
	{
		value: 'nome',
		label: 'Título',
	},
	{
		value: 'dataInicio',
		label: 'Data Inicio',
	},
	{
		value: 'dataPrevistaConclusao',
		label: 'Data Final',
	},
	{
		value: 'situacao',
		label: 'Situação',
	},
];

export const TASKS_OPTIONS = [
	{
		value: 'id',
		label: 'Id',
	},
	{
		value: 'nome',
		label: 'Título',
	},
	{
		value: 'supervisor',
		label: 'Supervisor',
	},
	{
		value: 'servidor',
		label: 'Servidor',
	},
	{
		value: 'situacao',
		label: 'Situação',
	},
];

export const GOALS_OPTIONS = [
	{
		value: 'id',
		label: 'Id',
	},
	{
		value: 'nome',
		label: 'Título',
	},
	{
		value: 'diretor',
		label: 'Diretor',
	},
	{
		value: 'setor',
		label: 'Setor',
	},
];

export const EMPLOYEES_OPTIONS = [
	{
		value: 'id',
		label: 'id',
	},
	{
		value: 'nome',
		label: 'Nome',
	},
	{
		value: 'email',
		label: 'Email',
	},
	{
		value: 'cargo',
		label: 'Cargo',
	},
	{
		value: 'setor',
		label: 'Setor',
	},
];

export const SECTOR_OPTIONS = [
	{
		value: 'id',
		label: 'Id',
	},
	{
		value: 'ramal',
		label: 'Ramal',
	},
	{
		value: 'nome',
		label: 'Nome',
	},
	{
		value: 'supervisor',
		label: 'Supervisor',
	},
];

export const SITUATION_TASKS_OPTIONS = [
	{
		value: 'TODAS',
		label: 'Todas',
	},
	{
		value: 'ATIVO',
		label: 'Ativa',
	},
	{
		value: 'INATIVO',
		label: 'Inativa',
	},
	{
		value: 'EM_ANDAMENTO',
		label: 'Em andamento',
	},
	{
		value: 'CONCLUÍDO',
		label: 'Concluída',
	},
];

export const SITUATION_PARTIAL_TASKS_OPTIONS = [
	{
		value: 'TODAS',
		label: 'Todas',
	},
	{
		value: 'ATIVO',
		label: 'Ativa',
	},
	{
		value: 'EM_ANDAMENTO',
		label: 'Em andamento',
	},
	{
		value: 'CONCLUÍDO',
		label: 'Concluída',
	},
];

export const OPTIONS_LABEL = {
	id: 'id',
	nome: 'Título',
	cargo: 'Cargo',
	email: 'Email',
	situacao: 'Situação',
	supervisor: 'Supervisor',
	servidor: 'Servidor',
	setor: 'Setor',
	ramal: 'Ramal',
	diretor: 'Diretor',
	dataInicio: 'Data Inicio',
	dataPrevistaConclusao: 'Data final',

	todos: 'Todos',
	TODAS: 'Todas',
	EM_ANDAMENTO: 'Em andamento',
	ATIVO: 'Ativa',
	CONCLUÍDO: 'Concluída',
};

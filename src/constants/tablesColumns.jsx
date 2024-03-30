import Tag from '../components/Tag';
import { formateBRDate } from '../utils/date';

export const TASKS_STATE_COLUMNS = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Título',
		dataIndex: 'nome',
		key: 'titulo',
	},
	{
		title: 'Data Inicio',
		dataIndex: 'dataInicio',
		key: 'dataInicio',
		render: (date) => formateBRDate(date),
	},
	{
		title: 'Data Final',
		dataIndex: 'dataConclusao',
		key: 'dataConclusao',
		render: (date) => formateBRDate(date),
	},
	{
		title: 'Sitação',
		dataIndex: 'situacao',
		key: 'situacao',
		render: (situacao) => <Tag type={situacao} />,
	},
];

export const TASKS_COLUMNS = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Título',
		dataIndex: 'nome',
		key: 'nome',
	},
	{
		title: 'Servidor',
		dataIndex: 'servidor',
		key: 'servidor',
		render: (servidor) => servidor.nome,
	},
	{
		title: 'Supervisor',
		dataIndex: 'supervisor',
		key: 'supervisor',
		render: (supervisor) => supervisor.nome,
	},
	{
		title: 'Situação',
		dataIndex: 'situacao',
		key: 'situacao',
		render: (situacao) => <Tag type={situacao} />,
	},
];

export const SECTOR_COLUMNS = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Ramal',
		dataIndex: 'ramal',
		key: 'ramal',
	},
	{
		title: 'Nome',
		dataIndex: 'nome',
		key: 'nome',
	},
	{
		title: 'Supervidor',
		dataIndex: 'supervisor',
		key: 'supervisor',
		render: (supervisor) => supervisor.nome,
	},
];

export const GOALS_COLUMNS = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Título',
		dataIndex: 'nome',
		key: 'nome',
	},
	{
		title: 'Diretor',
		dataIndex: 'diretor',
		key: 'diretor',
		render: (diretor) => diretor.nome,
	},
	{
		title: 'Setor',
		dataIndex: 'setor',
		key: 'setor',
		render: (setor) => setor.nome,
	},
];

export const EMPLOYEES_COLUMNS = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Nome',
		dataIndex: 'nome',
		key: 'nome',
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: 'Cargo',
		dataIndex: 'cargo',
		key: 'cargo',
		render: (cargo) => cargo.nome,
	},
	{
		title: 'Setor',
		dataIndex: 'setor',
		key: 'setor',
		render: (setor) => setor.nome,
	},
];

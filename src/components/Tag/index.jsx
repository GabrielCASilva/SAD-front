import { Tag as AntdTag } from 'antd';
import './style.css';

const TAGS = {
	CONCLUIDA: {
		color: 'var(--dark-green)',
		menssage: 'Concluida',
		textColor: 'white',
	},
	ATIVA: {
		color: 'var(--background-gray)',
		menssage: 'Pendente',
	},
	ANDAMENTO: {
		color: 'var(--yellow)',
		menssage: 'Incompleta',
		textColor: 'white',
	},
	INATIVA: {
		color: 'var(--background-gray)',
		menssage: 'Inativa',
	},
};

export default function Tag(props) {
	const { type } = props;
	const { color, menssage, textColor } = TAGS[type];

	return (
		<AntdTag color={color} className={textColor || ''}>
			{menssage}
		</AntdTag>
	);
}

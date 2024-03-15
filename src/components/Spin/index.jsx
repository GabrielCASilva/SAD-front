import { LoadingOutlined } from '@ant-design/icons';
import { Spin as AntdSpin } from 'antd';

export default function Spin() {
	const style = {
		fontSize: 24,
		color: 'var(--dark-green)',
	};

	return <AntdSpin indicator={<LoadingOutlined style={style} spin />} />;
}

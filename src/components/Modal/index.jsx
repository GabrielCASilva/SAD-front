import { Modal as AntdModal } from 'antd';
import { useState } from 'react';
import Button from '../Button';
import './style.css';

const FOOTER_CONTENT = {
	confirm: ConfirmButton,
	close: CloseButton,
};

export default function Modal(props) {
	const { titleButton, styleButton, footer, children, onOpen = () => {} } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { type = null, handleClick = null } = footer();

	const showModal = async () => {
		setIsModalOpen(true);
		await onOpen();
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const footerType =
		type !== null ? FOOTER_CONTENT[type]({ handleClick, closeModal }) : null;
	return (
		<>
			<Button style={styleButton} onClick={showModal}>
				{titleButton}
			</Button>

			<AntdModal
				centered
				open={isModalOpen}
				onCancel={closeModal}
				footer={footerType}
				width={687}>
				{children}
			</AntdModal>
		</>
	);
}

function ConfirmButton(props) {
	const { handleClick } = props;
	return (
		<div className="modal-button">
			<Button onClick={handleClick} style="green">
				Confirmar
			</Button>
		</div>
	);
}

function CloseButton(props) {
	const { handleClick, closeModal } = props;

	const onClick = () => {
		handleClick();
		closeModal();
	};

	return (
		<div className="modal-button">
			<Button onClick={onClick} style="gray">
				Fechar
			</Button>
		</div>
	);
}

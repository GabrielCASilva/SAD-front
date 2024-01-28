import { Modal as AntdModal } from 'antd';
import { useState } from 'react';
import Button from '../Button';

const FOOTER_CONTENT = {
    confirm: ConfirmButton,
    close: CloseButton
}

export default function Modal(props){
    const {titleButton, styleButton, footer, children} = props
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {type = null, handleClick = null} = footer()

    const showModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const footerType = type !== null ? FOOTER_CONTENT[type]({handleClick, closeModal}) : null
    return (
        <>
            <Button style={styleButton} onClick={showModal}>{titleButton}</Button>

            <AntdModal open={isModalOpen} onCancel={closeModal} footer={footerType}>
                {children}
            </AntdModal>
        </>
    )
}

function ConfirmButton(props){
    const {handleClick} = props
    return (
        <Button onClick={handleClick}>Confirmar</Button>
    )
}

function CloseButton(props){
    const {handleClick, closeModal} = props

    const onClick = () => {
        handleClick()
        closeModal()
    }

    return (
        <Button onClick={onClick}>Fechar</Button>
    )
}

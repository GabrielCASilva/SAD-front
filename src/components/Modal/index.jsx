import { Button, Modal as AntdModal } from 'antd';
import { useState } from 'react';

// corrigir esse enum
const FOOTER_CONTENT = {
    confirm: ConfirmButton,
    close: CloseButton
}

export default function Modal(props){
    const {titleButton, footer, children} = props
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {type} = footer

    const showModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const footerType = FOOTER_CONTENT[type]({...footer, closeModal})
    return (
        <>
            <Button onClick={showModal}>{titleButton}</Button>

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

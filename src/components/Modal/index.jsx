import { Button, Modal as AntdModal } from 'antd';
import { useState } from 'react';

export default function Modal(props){
    const {titleButton, children} = props
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Button onClick={showModal}>{titleButton}</Button>

            <AntdModal open={isModalOpen} onCancel={closeModal}>
                {children}
            </AntdModal>
        </>
    )
}
import { useState } from "react";
import { Modal } from '@/components/Modal'

export default function ModalExample(){
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const anotherAction = () => {
        console.log('Qualquer ação para qualquer botão!');
    }

    return (
        <>
            <div className="flex w-full justify-center pb-8">Modal Example</div>

            <button onClick={handleOpenModal}>Open Modal</button>

            <Modal.Root isOpen={isOpen}>
                <Modal.Header>
                    <Modal.Title>Modal Title</Modal.Title>
                    <Modal.Action onClick={handleCloseModal} title="close">
                        X
                    </Modal.Action>
                </Modal.Header>
                <Modal.Content>
                    <h2 className="text-gray-800">Qualquer coisa que seu modal possa querer!</h2>
                </Modal.Content>

                <Modal.Actions>
                    <Modal.Action color='error' onClick={handleCloseModal}>Close</Modal.Action>
                    <Modal.Action color='success' onClick={anotherAction}>Submit</Modal.Action>
                </Modal.Actions>
            </Modal.Root>
        </>
    )
}
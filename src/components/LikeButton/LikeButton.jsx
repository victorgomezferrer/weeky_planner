import React, { useState } from "react";
import Heart from "react-animated-heart";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react";

export default function LikeButton() {
    const [isClick, setClick] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const handleLikeClick = () => {
        setClick(!isClick);
        toggleModal();
    };

    return (
        <div className="App">
            <Heart isClick={isClick} onClick={handleLikeClick} />
            <Modal isOpen={modalIsOpen} onClose={toggleModal} size="sm">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>¡Receta añadida con éxito a tus favoritos!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Button colorScheme="blue" onClick={toggleModal}>
                            Cerrar
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}


import React, { useState } from 'react';
import { Flex, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';

function BasketButton() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const agregarAlCarrito = () => {
        toggleModal();
        console.log("Añadiendo a carrito");
    };

    return (
        <>
            <Button
                onClick={agregarAlCarrito}
                px={4}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
                _hover={{ bg: 'blue.500' }}
                _focus={{ bg: 'blue.500' }}>
                Añadir a la cesta
            </Button>

            <Modal isOpen={modalIsOpen} onClose={toggleModal} size="sm">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>¡Ingredientes añadidos al carrito!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Tus ingredientes han sido añadidos al carrito con éxito.
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default BasketButton;

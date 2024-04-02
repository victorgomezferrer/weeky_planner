import React, { useState } from 'react';
import { Card as ChakraCard, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, UnorderedList, Flex, ListItem, Stack, Divider, ButtonGroup, Box, Text, CardBody, Link, Heading, Button } from '@chakra-ui/react';
import BasketButton from '../BasketButton/BasketButton';
import LikeButton from '../LikeButton/LikeButton';

const Card = ({ recipe }) => {
    console.log(recipe)
    const { image, label, dishType, cuisineType, ingredients, url } = recipe;
    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    return (
        <ChakraCard maxW='sm'>
            <CardBody>
                <Image src={image} alt={label} borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading as="label" size='md' htmlFor="modal-trigger" cursor="pointer" onClick={handleModalOpen}>
                        {label}
                    </Heading>
                    <Text>{cuisineType}</Text>
                    <Text color='blue.600' fontSize='md'>
                        {dishType}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <ButtonGroup display={"flex"} flexDir={"row"} gap={"10px"} alignItems={"center"} margin={"15px"}>
                <BasketButton />
                <LikeButton />
            </ButtonGroup>

            <Modal isOpen={isOpen} onClose={handleModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{label}</ModalHeader>
                    <Text color={'blue.600'} margin={"20px"} size='lg' textAlign={"center"}>Todos los ingredientes:</Text>
                    <ModalCloseButton />
                    <ModalBody>
                        <UnorderedList>
                            {ingredients.map((ingredient, index) => (
                              
                                <ListItem key={index} py="2" borderBottom="1px" borderColor="gray.200">
                                    <Text fontSize={"lg"}>{ingredient.text}</Text>
                                </ListItem>
                                
                            ))}
                        </UnorderedList>

                        <Button as={Link} href={url} isExternal variant="solid" colorScheme="blue" size="md" mt="4" mx="100px" display="flex" textAlign={"center"}>
                            Consulta la receta
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </ChakraCard>
    );
};

export default Card;
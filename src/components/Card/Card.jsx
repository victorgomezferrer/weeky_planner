import { Card as ChackraCard, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, UnorderedList, Link, Stack, Divider, ButtonGroup, Box, Text, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import BasketButton from '../BasketButton/BasketButton'
import LikeButton from '../LikeButton/LikeButton'

const Card = ({ recipe }) => {
    let { image, label, dishType, cuisineType, ingredients } = recipe



    return (
        <ChackraCard maxW='sm'>
            <CardBody>
                <Image
                    src={image}
                    alt={label}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{label}</Heading>
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

        </ChackraCard>

    )
}

export default Card
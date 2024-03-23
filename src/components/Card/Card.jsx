import { Card as ChackraCard, Image, Stack, Divider, ButtonGroup, Box, Text, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'
import React from 'react'

const Card = ({ recipe }) => {
    console.log(recipe)
    let { image, label, dishType, cuisineType } = recipe

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
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Añadir a la cesta de la compra
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </ChackraCard>

    )
}

export default Card
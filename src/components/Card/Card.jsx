import { Card as ChackraCard, Image, Text, CardBody, CardFooter, Heading, Button, Box } from '@chakra-ui/react'
import React from 'react'

const Card = ({ recipe }) => {
    let { image, label, dishType } = recipe

    return (
        <ChackraCard
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={image}
                alt={label}
            />

            <Box>
                <CardBody>
                    <Heading size='md'>{label}</Heading>

                    <Text py='2'>
                        {dishType}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy Latte
                    </Button>
                </CardFooter>
            </Box>
        </ChackraCard>
    )
}

export default Card

import { Card as CackraCard, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({ label, src }) => {
    console.log('en la card ', label, src)
    return (
        <CackraCard>
            <Text>{label}</Text>
            <Image src={src}></Image>
        </CackraCard>
    )
}

export default Card

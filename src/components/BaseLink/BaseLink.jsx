import { Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactRouterLink } from "react-router-dom"

const BaseLink = ({ ...props }) => {
    const { to, text } = props
    return (
        <Link to={to} as={ReactRouterLink}>
            <Text>{text}</Text>
        </Link>
    )
}

export default BaseLink

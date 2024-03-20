import React from 'react'
import { Flex } from "@chakra-ui/layout"
import BaseLink from '../BaseLink/BaseLink'


const Footer = () => {
    const FOOTER_LINKS = [
        {
            link: "/use_terms",
            text: "Terminos de uso"
        },
        {
            link: "/privacity",
            text: "Politica de privacidad"
        }, {
            link: "/legal_info",
            text: "Aviso legal"
        }, {
            link: "/cookies",
            text: "Cookies"
        },
    ]
    return (
        <Flex>
            {FOOTER_LINKS.map(({ link, text }) => {
                return (
                    <BaseLink to={link} text={text} key={text}></BaseLink>
                )
            })}
        </Flex>
    )
}

export default Footer

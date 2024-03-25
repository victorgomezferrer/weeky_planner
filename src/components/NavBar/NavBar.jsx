import { Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'
import BaseLink from '../BaseLink/BaseLink'

const NavBar = () => {
    const NAVBAR_LINKS = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'Encuentra tu receta',
            link: '/search'
        },
        {
            text: 'Menu semanal',
            link: '/weekly_menu'
        },
        {
            text: 'Sobre WeeklyPlanner',
            link: '/about'
        }
    ]
    return (<>
        <Flex
            padding={"20px"}
            justifyContent={'space-between'}
            alignItems={"center"}
            backgroundColor={"seashell"}
        >
            <Link to="/">
                <img
                    width={"60px"}
                    src="/logo.png" alt="Logo" />
            </Link>
            {NAVBAR_LINKS.map(({ text, link }) => {
                return <BaseLink
                    key={text} text={text} to={link}
                    fontWeight={"bold"}

                ></BaseLink>
            })}
        </Flex>
    </>
    )
}

export default NavBar


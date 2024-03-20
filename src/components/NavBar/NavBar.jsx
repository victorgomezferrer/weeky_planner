import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import BaseLink from '../BaseLink/BaseLink'

const NavBar = () => {
    const NAVBAR_LINKS = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'Recetas',
            link: '/recipes'
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
        <Flex>
            <BaseLink to='/' text='Weekly Planner'> </BaseLink>
        </Flex>
        <Flex>
            {NAVBAR_LINKS.map(({ text, link }) => {
                return <BaseLink key={text} text={text} to={link} ></BaseLink>
            })}
        </Flex>
    </>
    )
}

export default NavBar

import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Avatar, Box, Flex, Stack, Text, Button } from '@chakra-ui/react'
import RecipesCards from '../RecipesGrid/RecipesGrid'
const Profile = () => {

    const { user } = useContext(AuthContext)

    let [usuario, setUsuario] = useState({})


    useEffect(() => { setUsuario(user.user) }, [])

    console.log(user.recipe)

    return (
        <Box
            p={4}
            boxShadow="md"
            borderRadius="md"
            bg="white"
            maxW="800px"
            mx="auto"
            my={8}
        >
            <Flex alignItems="center" justifyContent="center">
                <Avatar size="xl" name={usuario.username} src={usuario.avatar} />
                <Box ml={10}>
                    <Text fontSize="2xl" fontWeight="bold">{usuario.username}</Text>
                    <Stack spacing={2}>
                        <Text fontSize="lg">
                            <Text as="span" fontWeight="bold">Email:</Text> {usuario.email}
                        </Text>
                        <Text fontSize="lg">
                            <Text as="span" fontWeight="bold">Usuario registrado:</Text> {usuario.createdAt}
                        </Text>
                    </Stack>
                </Box>
            </Flex>
            <Button mt={4} colorScheme="teal" variant="outline" width="full">
                Editar perfil
            </Button>
            <RecipesCards recipes={user.recipe}></RecipesCards>
        </Box>
    );
};



export default Profile

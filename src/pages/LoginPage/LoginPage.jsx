import {
    Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Text, useColorModeValue,
} from '@chakra-ui/react'

import React, { useState } from 'react'

export default function Login() {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
    });


    const onChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    const onSubmit = (e) => {
        e.preventDefault();
        // Aquí deberías agregar la lógica para la autenticación
        console.log('Datos del usuario:', userData);
        // Limpia el formulario
        setUserData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} color={'pink.500'} >Accede a tu cuenta</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form id='loginForm' onSubmit={onSubmit}>
                        <Stack spacing={4}>
                            <FormControl id="username">
                                <FormLabel>Nombre</FormLabel>
                                <Input type="text" name='username' value={userData.username} onChange={onChange} />
                            </FormControl>

                            <FormControl id="email">
                                <FormLabel>Correo electrónico</FormLabel>
                                <Input type="email" name='email' value={userData.email} onChange={onChange} />
                            </FormControl>

                            <FormControl id="password">
                                <FormLabel>Contraseña</FormLabel>
                                <Input type='password' name='password' value={userData.password} onChange={onChange} />
                            </FormControl>

                            <Stack spacing={10} pt={2}>
                                <Button
                                    type='submit'
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'pink.500'}
                                    color={'white'}
                                    _hover={{ bg: 'blue.600' }}
                                >
                                    Iniciar sesión
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}

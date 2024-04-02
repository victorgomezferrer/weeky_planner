import { Flex, Box, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, } from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function SignUp() {

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const onChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('Nuevo usuario', userData)
    }

    const [showPassword, setShowPassword] = useState(false)

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'} color={'pink.500'}>
                        ¡REGÍSTRATE!
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        para disfrutar de todas las ventajas
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <form id='signup' onSubmit={onSubmit}>

                                <label htmlFor='username'>Nombre</label>
                                <Input type="text" name='username' value={userData.username} onChange={onChange} />

                                <label htmlFor='email' >Correo electrónico</label>
                                <Input type="email" name='email' onChange={onChange} value={userData.email} />


                                <label htmlFor='password'>Contraseña</label>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} onChange={onChange} value={userData.password} name='password' />
                                    <InputRightElement h={'full'}>
                                        <Button variant={'ghost'}
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>

                                <Stack spacing={10} pt={2}>
                                    <Button type='submit' loadingText="Submitting" size="lg" bg={'pink.500'} color={'white'} _hover={{ bg: 'blue.500' }}>Regístrate </Button>
                                </Stack>
                            </form>
                        </HStack>

                        <Stack pt={6}>
                            <Text align={'center'}>
                                ¿Ya tienes cuenta con nosotros? <Link to='/login' color={'pink.500'}>Inicia sesión</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )

}
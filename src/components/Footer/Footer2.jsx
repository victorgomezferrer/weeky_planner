import { ReactNode } from 'react'
import {  Box,  Container,  SimpleGrid,  Stack,  Text,  useColorModeValue} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Logo = (props: any) => {
    return (
        <img src="" alt="" />
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Logo color={useColorModeValue('gray.700', 'white')} />
                        </Box>
                      
                    </Stack>
                    
                    <Stack align={'flex-start'}>
                        <ListHeader>Weeky Planner</ListHeader>
                        <Box as={Link} to={'/about'}>
                            Sobre nosotros
                        </Box>
                        <Box as="a" href={'#'}>
                            Press
                        </Box>
                        <Box as="a" href={'#'}>
                            Careers
                        </Box>
                        <Box as="a" href={'#'}>
                            Contact
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Soporte</ListHeader>
                        <Box as={Link} to={'/cookies'}>
                            Cookies
                        </Box>
                        <Box as={Link} to={'/use_terms'}>
                            Términos de Uso
                        </Box>
                        <Box as={Link} to={'/legal_info'}>
                            Información Legal
                        </Box>
                        <Box as={Link} to={'/privacity'}>
                            Política de Privacidad
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Síguenos</ListHeader>
                        <Box as="a" href={'#'}>
                            Facebook
                        </Box>
                        <Box as="a" href={'#'}>
                            Twitter
                        </Box>
                        <Box as="a" href={'#'}>
                            Instagram
                        </Box>
                        <Box as="a" href={'#'}>
                            LinkedIn
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
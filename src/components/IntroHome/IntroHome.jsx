import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function IntroHome() {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url(https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Deja a WeekyPlanner haga la cesta de la compra por ti
                    </Text>
                    <Stack direction={'row'}>
                        <Button
                            as={Link}
                            to={'/recipes'}
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Encuentra tu receta!
                        </Button>
                        <Button
                            as={Link}
                            to={'/about'}
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            Más información
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    )
}
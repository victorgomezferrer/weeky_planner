import { Box, Heading, Text, Link, Button } from '@chakra-ui/react'

function NotFoundPage() {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                Lo sentimos, la página que buscas no existe.
            </Text>

            <Button
                as={Link}
                href='/'
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="white"
                variant="solid">
                Volver a inicio
            </Button>
        </Box>
    )
}

export default NotFoundPage
import React from 'react'
import { Text, Heading, Flex, ListItem, UnorderedList } from '@chakra-ui/react'

function Cookies() {
    return (
        <Flex flexDirection="column" alignItems="center">
            <Heading as="h1" fontSize="3xl" mb={4} margin={"20px"}>POLÍTICA DE COOKIES</Heading>
            <UnorderedList styleType="none" textAlign="left" maxWidth="600px">
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>¿Qué son las cookies?</Text>
                    <Text>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Se utilizan ampliamente para que el sitio funcione correctamente y para proporcionar información sobre cómo se utiliza.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Tipos de cookies que utilizamos</Text>
                    <Text>Utilizamos cookies esenciales para el funcionamiento del sitio, cookies de rendimiento para analizar cómo se utiliza el sitio y cookies de publicidad para proporcionar anuncios relevantes para ti. Puedes gestionar tus preferencias de cookies en cualquier momento.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Cómo controlar las cookies</Text>
                    <Text>Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las cookies que ya están en tu dispositivo y puedes configurar la mayoría de los navegadores para evitar que se almacenen. Sin embargo, esto puede afectar tu experiencia de navegación y algunas funciones del sitio pueden no funcionar correctamente.</Text>
                </ListItem>
                <ListItem>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Cambios en nuestra política de cookies</Text>
                    <Text>Nos reservamos el derecho de modificar esta política de cookies en cualquier momento. Cualquier cambio significativo será notificado en nuestro sitio web junto con la fecha de entrada en vigencia de la nueva política.</Text>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
}

export default Cookies;
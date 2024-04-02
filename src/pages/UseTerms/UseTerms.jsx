import React from 'react'
import { Text, Heading, Flex, UnorderedList, ListItem } from '@chakra-ui/react'

function UseTerms() {
    return (
        <Flex flexDirection="column" alignItems="center">
            <Heading as="h1" fontSize="3xl" mb={4}>TÉRMINOS DE USO</Heading>
            <UnorderedList styleType="none" textAlign="left" maxWidth="600px">
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Aceptación de los términos</Text>
                    <Text>Al acceder y utilizar nuestro sitio web, aceptas cumplir con estos términos de uso y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, no puedes utilizar nuestro sitio.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Uso del contenido</Text>
                    <Text>El contenido de este sitio web es para tu uso personal y no comercial. No puedes copiar, distribuir, transmitir, mostrar, realizar, reproducir, publicar, licenciar, crear trabajos derivados, transferir o vender ningún contenido.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Derechos de propiedad intelectual</Text>
                    <Text>Todos los derechos de propiedad intelectual del contenido de este sitio web son propiedad de nosotros o de nuestros licenciantes. Estos derechos están protegidos por las leyes de propiedad intelectual y tratados internacionales.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Limitación de responsabilidad</Text>
                    <Text>No seremos responsables de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que surja del uso o la imposibilidad de utilizar este sitio web, incluso si hemos sido advertidos de la posibilidad de tales daños.</Text>
                </ListItem>
                <ListItem>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Modificaciones</Text>
                    <Text>Nos reservamos el derecho de modificar estos términos de uso en cualquier momento sin previo aviso. Es tu responsabilidad revisar periódicamente estos términos para estar al tanto de las modificaciones.</Text>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
}

export default UseTerms

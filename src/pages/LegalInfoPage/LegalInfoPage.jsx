import React from 'react'
import { Text, Heading, Flex, ListItem, UnorderedList } from '@chakra-ui/react'

function LegalInfoPage() {
    return (
        <Flex flexDirection="column" alignItems="center">
            <Heading as="h1" fontSize="3xl" mb={4} margin={"20px"}>INFORMACIÓN LEGAL</Heading>
            <UnorderedList styleType="none" textAlign="left" maxWidth="600px">
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Responsabilidad</Text>
                    <Text>Nos esforzamos por garantizar la precisión y actualización de la información en nuestro sitio web, pero no ofrecemos garantías explícitas o implícitas sobre la integridad, precisión, confiabilidad, idoneidad o disponibilidad con respecto al sitio web o la información, productos, servicios o gráficos relacionados.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Enlaces a otros sitios web</Text>
                    <Text>Nuestro sitio web puede contener enlaces a otros sitios web que no están bajo nuestro control. No tenemos control sobre la naturaleza, el contenido y la disponibilidad de esos sitios. La inclusión de cualquier enlace no implica necesariamente una recomendación o respaldo de las opiniones expresadas en ellos.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Limitaciones</Text>
                    <Text>En ningún caso seremos responsables por daños de ningún tipo, incluidos, entre otros, los daños directos, indirectos, especiales, incidentales o consecuentes o pérdidas de datos que surjan del uso o la imposibilidad de usar nuestro sitio web.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Jurisdicción</Text>
                    <Text>Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes del país, y cualquier disputa relacionada con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los tribunales de ese país.</Text>
                </ListItem>
                <ListItem>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>Actualización de información</Text>
                    <Text>Nos reservamos el derecho de actualizar, modificar o eliminar cualquier información en nuestro sitio web sin previo aviso. Es tu responsabilidad revisar periódicamente esta información para estar al tanto de cualquier cambio.</Text>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
}

export default LegalInfoPage;
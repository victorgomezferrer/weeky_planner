import React from 'react'
import { Text, UnorderedList,Flex, ListItem, Heading } from '@chakra-ui/react'

function PolicityPage() {
    return (
        <Flex flexDirection="column" alignItems="center">
            <Heading as="h1" fontSize="3xl" mb={4} margin={"20px"}>POLÍTICA DE PRIVACIDAD</Heading>
            <UnorderedList styleType="none" textAlign="left" maxWidth="600px">
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>¿Quiénes somos?</Text>
                    <Text>Somos PULL & BEAR ESPAÑA, S.A y tratamos tus datos personales como Responsable del tratamiento. Esto quiere decir que nos hacemos cargo de cómo usar y proteger tus datos. Ver más.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>¿Qué datos personales recopilamos?</Text>
                    <Text>Recopilamos datos personales que nos proporcionas directamente, como tu nombre, dirección de correo electrónico, información de contacto o detalles de pago.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>¿Cómo usamos tus datos personales?</Text>
                    <Text>Usamos tus datos personales para procesar tus pedidos, proporcionarte información sobre productos y servicios, personalizar tu experiencia de compra y mejorar nuestros servicios.</Text>
                </ListItem>
                <ListItem mb={8}>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>¿Con quién compartimos tus datos?</Text>
                    <Text>Solo compartimos tus datos personales con terceros que nos ayudan a proporcionar servicios, como empresas de transporte o procesadores de pagos, y siempre bajo estrictas medidas de seguridad y confidencialidad.</Text>
                </ListItem>
                <ListItem>
                    <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>¿Cómo protegemos tus datos personales?</Text>
                    <Text>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, la divulgación, la alteración o la destrucción.</Text>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
}

export default PolicityPage;
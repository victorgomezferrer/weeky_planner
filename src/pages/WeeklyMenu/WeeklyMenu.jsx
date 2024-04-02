import React from 'react'
import { Flex, List, ListItem, Heading, Checkbox, Text, Box } from '@chakra-ui/react'
import GoogleMap from '../../components/GoogleMap/GoogleMap'

function WeeklyMenu() {
    const ingredientes = ["patata", "arroz", "pasta", "tomate", "cebolla", "atún"];

    const ingredienteLista = ingredientes.map((ingrediente, index) => {
        return (
            <ListItem key={index} borderRadius="md" backgroundColor="gray.100" padding="3" boxShadow="md">
                <Checkbox defaultChecked>{ingrediente}</Checkbox>
            </ListItem>
        );
    });


    return (
        <Flex direction={{ base: 'column', md: 'row' }} minHeight="100vh" align="center" justify="center" gap="20">
            <Box flex="1" p="5" maxW={{ md: "50%" }}>
                <Heading textAlign="center" padding="22px 56px"  > Tu lista de la compra </Heading>
                <List spacing={3} textAlign="center">{ingredienteLista} </List>
            </Box>
            <Box flex="1" p="5" maxW={{ md: "50%" }}>
                <Heading textAlign="center" padding="22px 56px"  > Encuentra tu supermercado más cercano </Heading>
                <GoogleMap />
            </Box>
        </Flex>
    );
}
   


export default WeeklyMenu;
import React, { useContext, useEffect } from 'react'
import { Flex, List, ListItem, Heading, Checkbox, Text, Box, Button } from '@chakra-ui/react'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import { AuthContext } from '../../contexts/AuthContext';
import userService from '../../services/user.service';
import { Navigate } from 'react-router-dom';

function WeeklyMenu() {


    const { user, getToken } = useContext(AuthContext)




    const deleteIngredient = async (_id) => {
        let token = getToken()
        try {
            await userService.deleteIngredient(token, _id)
        } catch (e) { console.log(e) }
    }





    return (
        <>
            {user ? (
                <Flex direction={{ base: 'column', md: 'row' }} minHeight="100vh" align="center" justify="center" gap="20">
                    <Box flex="1" p="5" maxW={{ md: "50%" }}>
                        <Heading textAlign="center" padding="22px 56px"  > Tu lista de la compra </Heading>
                        <List spacing={3} textAlign="center">{user.user.myBasketIngredients.map(({ name, quantity, measure, _id }, index) => {
                            return (
                                <ListItem key={index} borderRadius="md" backgroundColor="gray.100" padding="3" boxShadow="md">
                                    <Checkbox defaultChecked>{name}:{quantity} {measure}</Checkbox>
                                    <Button onClick={() => { deleteIngredient(_id) }}>Eliminar</Button>
                                </ListItem>
                            );
                        })} </List>
                    </Box>
                    <Box flex="1" p="5" maxW={{ md: "50%" }}>
                        <Heading textAlign="center" padding="22px 56px"  > Encuentra tu supermercado más cercano </Heading>
                        <GoogleMap />
                    </Box>
                </Flex>
            ) : (<Heading textAlign="center" padding="22px 56px"  >Inicia sesion para generar una cesta</Heading>)}
        </>
    );
}



export default WeeklyMenu;
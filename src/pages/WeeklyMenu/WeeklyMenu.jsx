import React, { useContext, useEffect, useState } from 'react'
import { Flex, List, ListItem, Heading, Checkbox, Text, Box, Button, Toast, useToast } from '@chakra-ui/react'

import { AuthContext } from '../../contexts/AuthContext';
import userService from '../../services/user.service';
import { Navigate } from 'react-router-dom';

function WeeklyMenu() {

    const toast = useToast();
    let [ingredient, setIngredient] = useState([])


    const { user, getToken, getUser } = useContext(AuthContext)

    const deleteIngredient = async (_id) => {
        let token = getToken()
        try {
            const response = await userService.deleteIngredient(token, _id)


            toast({
                title: "Ingrediente eliminado",
                description: response.deleteItem.name,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            getUser()
            if (user) { setIngredient(user.user.myBasketIngredients) }
        } catch (e) { console.log(e) }
    }

    useEffect(() => {
        if (user) {
            setIngredient(user.user.myBasketIngredients)
        }
    }, [user]);



    return (
        <>
            {user ? (
                <Flex direction={{ base: 'column', md: 'row' }} minHeight="100vh" align="center" justify="center" gap="20">
                    <Box flex="1" p="5" maxW={{ md: "60%" }}>
                        <Heading textAlign="center" padding="22px 56px"  > Tu lista de la compra </Heading>
                        <List spacing={3} textAlign="center">{ingredient.map(({ name, _id }, index) => {
                            return (
                                <ListItem key={index} borderRadius="md" backgroundColor="gray.100" padding="3" boxShadow="md">
                                    <Checkbox defaultChecked>{name}</Checkbox>
                                    <Button onClick={() => { deleteIngredient(_id) }}>Eliminar</Button>
                                </ListItem>
                            );
                        })} </List>
                    </Box>


                </Flex>
            ) : (<Heading textAlign="center" padding="22px 56px"  >Inicia sesion para generar una cesta</Heading>)}
        </>
    );
}



export default WeeklyMenu;
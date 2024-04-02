import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Heading, VStack, HStack, IconButton, useToast,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function AddRecipeForm() {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);
    const toast = useToast();

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index][event.target.name] = event.target.value;
        setIngredients(newIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { name: '', quantity: '' }]);
    };

    const removeIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // Aquí deberías agregar la lógica para manejar la receta, por ejemplo, enviarla a un servidor.
        toast({
            title: "Receta añadida.",
            description: "Tu receta ha sido añadida exitosamente.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        // Reinicia el formulario
        setRecipeName('');
        setIngredients([{ name: '', quantity: '' }]);
    };

    return (
        <Flex direction="column" align="center" justify="center" minHeight="100vh">
            <Box mb={8} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading as="h1" size="xl" mb={4}>
                    Añadir nueva receta
                </Heading>
                <form onSubmit={onSubmit}>
                    <VStack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Nombre de la receta</FormLabel>
                            <Input
                                placeholder="Ej: Pastel de chocolate"
                                value={recipeName}
                                onChange={(e) => setRecipeName(e.target.value)}
                            />
                        </FormControl>
                        {ingredients.map((ingredient, index) => (
                            <HStack key={index} width="full">
                                <FormControl isRequired flex="1">
                                    <FormLabel>Ingrediente</FormLabel>
                                    <Input
                                        name="name"
                                        placeholder="Ej: Harina"
                                        value={ingredient.name}
                                        onChange={(e) => handleIngredientChange(index, e)}
                                    />
                                </FormControl>
                                <FormControl isRequired flex="1">
                                    <FormLabel>Cantidad</FormLabel>
                                    <Input
                                        name="quantity"
                                        placeholder="Ej: 2 tazas"
                                        value={ingredient.quantity}
                                        onChange={(e) => handleIngredientChange(index, e)}
                                    />
                                </FormControl>
                                <IconButton
                                    aria-label="Eliminar ingrediente"
                                    icon={<CloseIcon />}
                                    onClick={() => removeIngredient(index)}
                                />
                            </HStack>
                        ))}
                        <Button onClick={addIngredient} variant="outline">
                            + Añadir otro ingrediente
                        </Button>
                        <Button type="submit" colorScheme="teal" size="lg" mt={4}>
                            Añadir receta
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Flex>
    );
}
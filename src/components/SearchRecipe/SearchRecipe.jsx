import React, { useEffect, useState } from 'react';
import { Button, Input, Flex, Heading, Box } from '@chakra-ui/react';
import recipesService from '../../services/recipes.service';
import RecipesCards from '../../components/RecipesGrid/RecipesGrid';

const SearchRecipes = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const onChange = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value)
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await recipesService.getRecipeByName(inputValue);
            console.log(response)
            setSearchResults(response);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {

    }, [setSearchResults]);
    console.log(searchResults, 'desde fuera');
    return (
        <Flex direction="column" align="center" justify="center" minHeight="100vh">
            <Box mb={8}>
                <Heading as="h1" size="xl" mb={4}>
                    Busca tu receta
                </Heading>
                <form onSubmit={onSubmit}>
                    <Input
                        onChange={onChange}
                        value={inputValue}
                        placeholder="Ingresa el nombre de la receta"
                        name="searchInput"
                        variant="filled"
                        size="lg"
                    />
                    <Button type="submit" variant="solid" colorScheme="teal" size="lg" mt={4}>
                        Buscar
                    </Button>
                </form>
            </Box>

            {searchResults.count > 0 && (
                <Box width="100%" maxWidth="800px">
                    <Heading as="h2" size="lg" mb={4}>
                        Resultados de la búsqueda
                    </Heading>
                    <RecipesCards recipes={searchResults} />
                </Box>
            )}
        </Flex>
    );
};

export default SearchRecipes;
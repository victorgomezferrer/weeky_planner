import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import AddRecipe from '../../components/AddRecipe/AddRecipe'
import SearchRecipes from '../../components/SearchRecipe/SearchRecipe';

function RecipePage() {
    return (
        <Flex direction={{ base: 'column', md: 'row' }} minHeight="100vh" align="center" justify="center" gap="20">
            <Box flex="1" p="5" >
                <SearchRecipes />
            </Box>

        </Flex>
    );
}

export default RecipePage;
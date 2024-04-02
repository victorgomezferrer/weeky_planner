import React from 'react'
import { Grid, Heading } from '@chakra-ui/react'
import Card2 from '../Card/Card2'

const RecipesCards = ({ recipes }) => {
    console.log(recipes, 'desde RecipesGrid')
    return (
        <>
        <Heading
        textAlign={"center"}
        padding={"22px 56px"}
        >TODAS LAS RECETAS</Heading>
        <Grid
            templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
            ]}
            gap={"40px"}
            margin={"30px"}
        >
        <>
            {recipes.hits.map(({ recipe, index }) => {

                return <Card2 key={index} recipe={recipe}></Card2>
            })}
        </>
        </Grid>
        </>
    )
}

export default RecipesCards

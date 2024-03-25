import React from 'react'
import Card from '../Card/Card'
import { Grid, Heading } from '@chakra-ui/react'


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
            >
                <>
                    {recipes.hits.map(({ recipe }) => {

                        return <Card recipe={recipe}></Card>
                    })}
                </>
            </Grid>
        </>
    )
}

export default RecipesCards

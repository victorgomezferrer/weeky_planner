import React from 'react'
import Card from '../Card/Card'

const RecipesCards = ({ recipes }) => {


    console.log(recipes)
    return (
        <>
            {recipes.hits.map(({ recipe }) => {

                return <Card label={recipe.label} src={recipe.image}></Card>
            })}
        </>
    )
}

export default RecipesCards

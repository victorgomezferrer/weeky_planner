import React from 'react'
import Card from '../Card/Card'


const RecipesCards = ({ recipes }) => {


    return (
        <>
            {recipes.hits.map(({ recipe }) => {

                return <Card recipe={recipe}></Card>
            })}
        </>
    )
}

export default RecipesCards

import React from 'react'
import RecipesCards from '../../components/RecipesCards/RecipesCards'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const recipes = useLoaderData()


    return (
        <>
            <RecipesCards recipes={recipes}></RecipesCards>
        </>
    )
}

export default Home

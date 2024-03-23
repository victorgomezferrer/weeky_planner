import React from 'react'
import RecipesCards from '../../components/RecipesGrid/RecipesGrid'
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

import React from 'react'
import RecipesCards from '../../components/RecipesGrid/RecipesGrid'
import { useLoaderData } from 'react-router-dom';
import IntroHome from '../../components/IntroHome/IntroHome';

const Home = () => {

    const recipes = useLoaderData()


    return (
        <>
            <IntroHome></IntroHome>
            <RecipesCards recipes={recipes}></RecipesCards>
        </>
    )
}

export default Home

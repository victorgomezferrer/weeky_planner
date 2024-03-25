import React from 'react'
import { Button, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import recipesService from '../../services/recipes.service'
import RecipesCards from '../../components/RecipesGrid/RecipesGrid'



const SearchRecipes = () => {

    let [inputValues, setImputValues] = useState()
    let [searchResults, setSearchResults] = useState([])

    const onChange = (e) => {
        const searchInput = e.target.value
        setImputValues(searchInput)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await recipesService.getRecipeByName(inputValues)
            console.log(response)
            setSearchResults(response)

        } catch (err) {
            console.error(err)
        }
    }
    console.log(searchResults)
    return (
        <>
            <h1>hola</h1>
            <form onSubmit={onSubmit}>
                <Input onChange={onChange} name={'searchInput'} ></Input>
                <Button type='submit'>eeeeee</Button>
            </form>


        </>
    )
}

export default SearchRecipes;
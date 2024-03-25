
import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import recipesService from '../../services/recipes.service'
import RecipesCards from '../../components/RecipesGrid/RecipesGrid'


const SearchRecipes = () => {

    let [inputValues, setImputValues] = useState('')
    let [searchResults, setSearchResults] = useState([])

    const onChange = (e) => {
        setImputValues(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await recipesService.getRecipeByName(inputValues)

            setSearchResults(response)

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>

            <form onSubmit={onSubmit}>
                <Input onChange={onChange} name={'searchInput'} ></Input>
                <Button type='submit'>Busca tu receta!</Button>
            </form>
            {searchResults.count > 0 && <RecipesCards recipes={searchResults} />}



        </>
    )
}

<<<<<<< HEAD
export default SearchRecipes
=======
export default SearchRecipes;
>>>>>>> 3b74e4af1108feed2f0714bc53d70627be64d105

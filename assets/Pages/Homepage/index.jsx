import React, { useState } from 'react'
import Search from '../../components/Food-managing-app/search'

const Homepage = () => {
    //loading state
     const [loadingState, setLoadingState] = useState(false);

    // //save results that we receive from API
    const [recipes, setRecipes] = useState([]);

    const getDataFromSearch = (getData) => {
        console.log(getData, 'getdata');
    

    //keep the loading state as true before we are calling API
    setLoadingState(true);



    async function getRecipes() {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=8f2d913221884bdca40b2d3a5e72ef99&query=${getData}`);
        const result = await response.json()
        const { results } = result;

        if (results && results.length > 0) {
            //set loading state as false again
            //set the recipes state

            setLoadingState(false);
            setRecipes(results);
        }
        console.log(result);
    }

    getRecipes()
}
    console.log(loadingState, recipes, 'loadingState, recipes');

    return (
        <div className='homepage'>
            <Search getDataFromSearch={getDataFromSearch} />
        </div>
    )
}

export default Homepage

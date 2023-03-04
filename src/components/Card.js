import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './Card.css';

function Card(props){
    //State hook 
    const [characters, setCharacter] = useState([]);

    useEffect(() => {

        //Fetching data from API

        async function fetchData() {
            // Call fetch as usual
            const res = await fetch(
                `https://rickandmortyapi.com/api/character?page=${props.page}`
            );

            // Pull out the data as usual
            const json = await res.json();

            //creating an object with API data
            setCharacter(json.results.map(
                c => { 
                    return{
                        'id': c.id,
                        'characterImage': c.image,
                        'name': c.name, 
                        'gender': c.gender, 
                        'species': c.species,
                        'characterStatus': c.status 
                    }

                }

            ));
        }   

        fetchData();
    }); // we want to run fetch when the subreddit changes 
    // (this is happens on submit)

    return (

        characters.map(character =>(
        <div id="card">
            <img id ="character-image" src = {character.characterImage} alt="Character Image"/>
            <ul>
                <li>{character.name}</li>
                <li>{character.gender}</li>
                <li>{character.species}</li>
                <li>{character.characterStatus}</li>
            </ul>
        </div>



        )
        )
    );
}

// // Hook designed for changing pages
// function pageButtons() {
//     const [page, setPage] = useState(1)
 
//     useEffect(() => {
//     });
  
//     if(page >= 42){
//         page = 42;
//     }
//     else if(page <= 1){
//         page = 1;
//     }
//     return (
//     <div id="buttons">
//         <button onClick={() => setPage(page - 1)}>Previous</button>
//         <button onClick={() => setPage(page + 1)}>Next</button>          
//     </div>  
//     );
// }

export default Card;
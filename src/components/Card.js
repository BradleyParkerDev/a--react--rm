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
                        'characterStatus': c.status,
                        'episodesFeatured': c.episode.length,
                        'location': c.location.name,
                        'origin': c.origin.name

                         
                    }

                }

            ));
        }   

        fetchData();
    });

    // function flipCard(){
    //     if()
    // }
    return (

        characters.map(character =>(
        
        <div id="card" >
            <img id ="character-image" src = {character.characterImage} alt="Character Image"/>
            <ul>
                <li>{character.name}</li>
                <li>{character.gender}</li>
                <li>{character.species}</li>
                <li>{character.characterStatus}</li>
                <li># of Episodes Featured: {character.episodesFeatured}</li>
                <li>{character.location}</li>
                <li>{character.origin}</li>

            </ul>
        </div>



        )
        )
    );
}

export default Card;
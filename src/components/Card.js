import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './Card.css';

function Card(){
  // Initialize state to hold the posts
  const [characters, setCharacter] = useState([]);

  // effect functions can't be async, so declare the
  // async function inside the effect, then call it
  useEffect(() => {
    async function fetchData() {
        // Call fetch as usual
        const res = await fetch(
        `https://rickandmortyapi.com/api/character`
        );

        // Pull out the data as usual
        const json = await res.json();

        // Save the posts into state
        // (look at the Network tab to see why the path is like this)
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
  }, [ ]); // we want to run fetch when the subreddit changes 
  // (this is happens on submit)

  // Render as usual
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


export default Card;
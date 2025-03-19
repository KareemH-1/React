import React from "react";
 
import Button from "./Button";
import './index.css';

const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const fetchApi = () => {
        fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke))
            .catch((err) => console.error("Error fetching joke:", err));
    };
    

    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            <p>{Joke}</p>    
        </div>
    );
}

export default Joke;
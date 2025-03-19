import React from "react";
import Joke from "./Joke";

function App() {
    return (
        <div className="app-container">
            <h1>Joke Generator Using React and Joke API</h1>
            <div className="joke-box">
                <Joke />
            </div>
        </div>
    );
}

export default App;

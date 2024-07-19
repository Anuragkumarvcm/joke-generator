import React from 'react'
import { useState } from 'react'

export default function Joke() {
    const [jokes, setJokes] = useState([])

    const new_jokes = async () => {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        setJokes(data);

    }

    const useEffect = (() => {
        new_jokes();
    }, [])

    return (
        <div>
            <h1 className='heading'>Jokes Generator</h1>
            <p className='para'>{jokes.value}</p>
            <button className='jokes-btn' onClick={new_jokes}>Generate Jokes</button>
        </div>
    )
}

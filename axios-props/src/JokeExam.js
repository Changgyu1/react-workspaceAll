import React, {useState, useEffect} from 'react';

const Joke = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        axios.get('')
        .then(response => {
        setJoke(response.data.joke || `${response.data.setup} ${response.data.delivery}`)
        .catch
        })
    })
}

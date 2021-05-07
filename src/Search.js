import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons = false }) {

    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        console.log('You hit the search button');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={event => setInput(event.target.value)}/>
                <MicIcon />
            </div>

            {
                !hideButtons ? (
                    <div className="search__butons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
                ) : (
                    <div className="search__butons">
                    <Button className="search__butonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search__butonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
                )
            }
           
        </form>
    )
}

export default Search

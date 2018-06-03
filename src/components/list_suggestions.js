import React from 'react';
import MovieShowcase from './movie_showcase';
import {Link, Route} from 'react-router-dom';

const ListSuggestions = (props) => {
    let suggestionItems = [];
    if(props.where == "search") {
        suggestionItems = props.suggestions.slice(0, 2).map((movie) => {
            return <MovieShowcase movie={movie} key={movie.imdbID} where={props.where} />
        })
    } else {
        suggestionItems = props.suggestions.map((movie) => {
            return <MovieShowcase movie={movie} key={movie.imdbID} where={props.where} />
        })
    }
    
    if (props.suggestions.length > 2) {
        return (
            <div className="row">
                {suggestionItems}
                {props.where == "search" &&
                    <div className="col-12 show-more">
                        <Link 
                            to={{
                                pathname: '/movies',
                                state: { 
                                    suggestions: props.suggestions,
                                    searchTerm: props.searchTerm
                                }
                            }}
                            className="btn btn-default btn-large btn-block"
                            >DAHA FAZLA SONUÇ » 
                        </Link>
                    </div>
                }
            </div>
        ) 
    }

    if (props.suggestions.length == 0) {
        return null;
    }
    return (
        <div className="row">
            {suggestionItems} 
        </div>
    )
}

export default ListSuggestions;
import React from 'react';
import Parser from 'html-react-parser';
import {Link} from 'react-router-dom';

const MovieShowcase = (props) => {
    return (
        <div className={props.where == "search" ? "col-12" : "col-6"}> 
            <div className="movie-showcase">
                <Link to={`/movies/${props.movie.imdbID}`}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="movie-image">
                                <img src={props.movie.Poster} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="movie-details">
                                <div className="movie-title"> {Parser(props.movie.Title)} ({props.movie.Year})</div>
                                <div className="movie-type"> <span className="showcase-heading">Türü: </span> {props.movie.Type} </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MovieShowcase;
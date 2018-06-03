import React, {Component} from 'react';
import ListSuggestions from './list_suggestions';
import {Link} from 'react-router-dom';

class MovieList extends Component {
    render() {
        const data = this.props.location.state;
        return (
            <div>
                <div className="search-info">
                    <div className="turn-back text-center"> 
                        <Link to="/" > <i className="material-icons">arrow_back</i> Geri Dön</Link>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span className="result-head"> {data.searchTerm} için Sonuçlar</span>
                        </div>
                        <div className="col text-right">
                            <span className="movie-count">{data.suggestions.length} film bulundu </span>
                        </div>
                    </div>
                </div>
                <div className="search-results">
                    <ListSuggestions
                        suggestions={data.suggestions}
                        where="list"
                    />
                </div>
            </div>
        )
    }
}

export default MovieList;
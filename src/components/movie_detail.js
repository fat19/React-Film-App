import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { ROOT_URL } from './App';
import { API_KEY} from './App';

class MovieDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieDetail: null
        }

        console.log(props)
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchMovieDetail(id);
    }

    fetchMovieDetail(id) {
        const currentView = this;
        fetch(`${ROOT_URL}i=${id}&${API_KEY}&plot=full`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            currentView.setState({
                movieDetail: data
            })
        })
    }

    render() {
        if (!this.state.movieDetail) {
            return <div> Loading Movie</div>;
        }
        return(
            <div className="row">
                <div className="col-12"> 
                     <div className="turn-back text-center"> 
                        <Link to="/" > <i className="material-icons">arrow_back</i> Geri Dön</Link>
                    </div>
                </div>
                <div className="col-12"> 
                    <div className="detail-movie-title"> 
                        {this.state.movieDetail.Title} 
                        (<span className="year"> {this.state.movieDetail.Year}</span>) 
                        <span className="rate"> {this.state.movieDetail.imdbRating} </span> 
                    </div> 
                </div>
                <div className="col-12"> 
                    <span className="language"> {this.state.movieDetail.Language} </span> 
                    <span className="runtime"> {this.state.movieDetail.Runtime} </span> 
                    <span className="genre"> {this.state.movieDetail.Genre}</span>
                    <span className="release"> {this.state.movieDetail.Release}</span>
                </div>
                <div className="col-12 col-md-6">
                    <div className="detail-movie-image">
                        <img src={this.state.movieDetail.Poster} />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="detail-movie-details">
                        <div className="row"> 
                            <div className="col"> 
                                <div className="detail-movie-description"> {this.state.movieDetail.Plot} </div> 
                            </div>
                        </div>
                         <div className="row"> 
                            <div className="col"> 
                                <div className="director"> <strong> Director:</strong> {this.state.movieDetail.Director} </div> 
                            </div>
                        </div>
                         <div className="row"> 
                            <div className="col"> 
                                <div className="writer"> <strong> Writer:</strong> {this.state.movieDetail.Writer} </div> 
                            </div>
                        </div>
                         <div className="row"> 
                            <div className="col"> 
                                <div className="stars"> <strong> Stars:</strong> {this.state.movieDetail.Actors} </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail;
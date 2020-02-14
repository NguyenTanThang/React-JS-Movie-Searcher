import React, { Component } from 'react';
import {Link} from "react-router-dom"

class MovieItem extends Component {

    render() {
        let {Title, Poster, imdbID, Year} = this.props.movieItem;

        Poster = !Poster || Poster == "N/A" ? "https://img.freepik.com/free-vector/404-found-vector-flat-concept-illustration_97231-125.jpg?size=338&ext=jpg" : Poster;

        return (
            <div className="col-lg-3 col-md-6 col-sm-12 movie-item">
                <div className="card">
                    <img className="card-img-top lazyload" src={Poster} alt={Title}/>
                    <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                        <p className="card-text">
                            Created In: {Year}
                        </p>
                        <Link to={`/movie/${imdbID}`} className="btn btn-primary btn-block">
                            View Detail
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieItem

import React, { Component } from 'react';
import {Link} from "react-router-dom"

class MovieItem extends Component {

    render() {
        let {Title, Poster, imdbID} = this.props.movieItem;
        console.log(this.props.movieItem)

        Poster = !Poster || Poster == "N/A" ? "https://img.freepik.com/free-vector/404-found-vector-flat-concept-illustration_97231-125.jpg?size=338&ext=jpg" : Poster;

        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 movie-item">
                <Link to={`/movie/${imdbID}`}>
                    <div className="card">
                        <img className="card-img-top lazyload" src={Poster} alt={Title}/>
                        <div className="card-body">
                                <h5 className="card-title">
                                    {Title}
                                </h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default MovieItem

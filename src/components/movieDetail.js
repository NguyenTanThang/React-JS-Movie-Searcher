import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from "react-router-dom"

class MovieDetail extends Component {

    state = {
        movieItem: {}
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        Axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a8ef1841&plot=full`)
        .then(response => {
            this.setState({
                movieItem: response.data
            })
        })
    }

    render() {

        let {Title, Poster, Director, Country, Runtime, Rated, Plot, imdbRating, Genre, Actors} = this.state.movieItem;
        const {id} = this.props.match.params;

        let mainActors = Actors || "";
        mainActors = mainActors.split(", ");

        let mainCountry = Country || "";
        mainCountry = mainCountry.split(", ");

        return (
            <div className="movie-detail">
            <div className="container">
                <div className='movie-detail-header'>
                    <div className="left">
                        <h2>{Title}</h2>
                        <p>
                            {Genre}
                        </p>
                    </div>
                    <div className="right">
                        <p><span>{imdbRating}</span>/10</p>
                    </div>
                </div>

                <div className="row align-items-center">

                    <div className="col-lg-3 col-md-6 col-sm-12 movie-detail-img">
                        <img src={Poster} className="img-fluid" alt={Title}/>
                    </div>

                    <div className="col-lg-9 col-md-6 col-sm-12 movie-detail-desc row">
                        <div className="col-12">
                            <h5>About the Movie</h5>
                            <p>{Plot}</p>
                        </div>
                        <div className="col-lg-4 col-6 list-desc">
                            <h5>Actors</h5>
                            <ul>{mainActors.map(actor => {
                                return <li>{actor}</li>
                            })}</ul>
                        </div>
                        <div className="col-lg-4 col-6 list-desc">
                            <h5>Director</h5>
                            <ul><li>{Director}</li></ul>
                        </div>
                        <div className="col-lg-4 col-12 list-desc">
                            <h5>Country</h5>
                            <ul>{mainCountry.map(country => {
                                return <li>{country}</li>
                            })}</ul>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default MovieDetail

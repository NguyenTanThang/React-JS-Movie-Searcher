import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from "react-router-dom"

class MovieDetail extends Component {

    state = {
        movieItem: {}
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        Axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a8ef1841`)
        .then(response => {
            this.setState({
                movieItem: response.data
            })
        })
    }

    render() {

        let {Title, Poster, Released, Awards, Runtime, Rated, Plot, imdbRating} = this.state.movieItem;
        const {id} = this.props.match.params;

        return (
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-4 col-md-6 col-sm-12 movie-detail-img">
                        <img src={Poster} alt={Title}/>
                    </div>

                    <div className="col-lg-8 col-md-6 col-sm-12 movie-detail-desc">
                        <ul>
                            <li>
                                <p><b>Title:</b>{Title}</p>
                            </li>
                            <li>
                                <p><b>Released:</b>{Released}</p>
                            </li>
                            <li>
                                <p><b>Awards:</b>{Awards}</p>
                            </li>
                            <li>
                                <p><b>Runtime:</b>{Runtime}</p>
                            </li>
                            <li>
                                <p><b>Rated:</b>{Rated}</p>
                            </li>
                            <li>
                                <p><b>Plot:</b>{Plot}</p>
                            </li>
                            <li>
                                <p><b>IMDBRating:</b>{imdbRating}</p>
                            </li>
                        </ul>
                        <Link to="/" className="btn btn-light btn-block">Back</Link>
                        <a target="_blank" href={`https://www.imdb.com/title/${id}/?ref_=nv_sr_srsg_0`} className="btn btn-info btn-block">Go To IMDB</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieDetail

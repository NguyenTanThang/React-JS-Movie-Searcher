import React, { Component } from 'react';
import axios from "axios";
import MovieItem from "./movieItem";
import Pagination from "./pagination"

class MovieList extends Component {

    state = {
        currentPage: 1,
        searchTitle: "",
        movieList: [],
        errorMessage: "",
        totalResults: 0
    }

    componentDidMount() {
        this.setState({
            searchTitle: localStorage.getItem("searchTitle")
        })
    }

    callTheOMDB = () => {
        const {currentPage} = this.state;
        const movieTitle = this.state.searchTitle;

        axios.get(`https://www.omdbapi.com/?s=${movieTitle}&page=${currentPage}&apikey=a8ef1841`)
            .then(response => {
                console.log(response.data)
                if (response.data.Error !== undefined){
                    this.setState({
                        errorMessage: response.data.Error
                    })
                } else {
                    this.setState({
                        movieList: response.data.Search,
                        totalResults: response.data.totalResults,
                        errorMessage: ""
                    })
                }
            })
    }

    onNextPage = (e) => {
        this.setState({
            currentPage: this.state.currentPage + 1
        }, () => {
            this.callTheOMDB()
        })
    }

    onPreviousPage = (e) => {
        this.setState({
            currentPage: this.state.currentPage - 1
        }, () => {
            this.callTheOMDB()
        })
    }

    onFirstPage = (e) => {
        this.setState({
            currentPage: 1
        }, () => {
            this.callTheOMDB()
        })
    }

    onLastPage = (e) => {
        this.setState({
            currentPage: Math.ceil(this.state.totalResults / 10)
        }, () => {
            this.callTheOMDB()
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {currentPage} = this.state;
        const movieTitle = this.state.searchTitle;

        localStorage.setItem("searchTitle", movieTitle);

        if (movieTitle == ""){
            this.setState({
                errorMessage: "There is no movie match the search parameters"
            })
        } else {
            this.callTheOMDB()
        }
    }

    onChange = (e) => {
        const movieTitle = e.target.value;
        if (movieTitle == ""){
            this.setState({
                currentPage: 1,
                searchTitle: "",
                movieList: [],
                errorMessage: "",
                totalResults: 0
            })
        } else {
            this.setState({
                currentPage: 1,
                searchTitle: movieTitle
            })
        }

        
    }

    render() {

        const movieItems = (this.state.errorMessage !== "") 
        ? 
        (
            <h3 className="text-center">{this.state.errorMessage}</h3>
        ) 
        : 
        (
            <div className="row">
                        {this.state.movieList.map((movieItem) => {
                            return <MovieItem key={movieItem.imdbID} movieItem={movieItem}/>  
                        })}
                    </div>
        )

        const pagination = (this.state.movieList.length == 0) ? 
        (
            <div></div>
        ) :
        (
            <div className="container">
                <h6 className="text-center page-num">
                    {this.state.currentPage} / {Math.ceil(this.state.totalResults / 10)}
                </h6>
                <Pagination onNextPage={this.onNextPage} onPreviousPage={this.onPreviousPage} onFirstPage={this.onFirstPage} onLastPage={this.onLastPage}  currentPage={this.state.currentPage} totalResults={this.state.totalResults}/>
            </div>
        )

        console.log(this.state)

        return (
            <div>

                <div className="container mt-4 mb-4 header">
                    <h1 className="text-center">Movie Searcher</h1>
                </div>

                <form id="search-form" onSubmit={this.onSubmit}>
                    <div className="container">

                        <div className="form-group">
                            <input type="text" id="searchTitle" name="searchTitle" className="form-control" placeholder="Your movie title" value={this.state.searchTitle} onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-danger btn-block">
                                Search
                            </button>
                        </div>

                    </div>
                </form>

                <div className="container">
                    {movieItems}
                </div>

                
                {pagination}

            </div>
        )
    }
}

export default MovieList;

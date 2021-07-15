import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5MsKNj8DErYr2T86RDtVIAOOh8tCKIIT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input 
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
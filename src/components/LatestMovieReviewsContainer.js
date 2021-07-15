import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5MsKNj8DErYr2T86RDtVIAOOh8tCKIIT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h4>The Latest Movie Reivews</h4>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(json => {
      this.setState({reviews: json.results})
    })
  }
}

export default LatestMovieReviewsContainer
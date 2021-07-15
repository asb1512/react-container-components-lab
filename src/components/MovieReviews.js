// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => {
        return (
          <div className="review">
            <h3>{review.display_title}</h3>
            <img src={review.multimedia.src} alt={review.display_title}/>
            <p>Published: {review.publication_date}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MovieReviews
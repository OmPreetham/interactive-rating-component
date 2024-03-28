import React, { useState } from 'react'

const InteractiveRating = () => {
  const ratings = [1, 2, 3, 4, 5]
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  function handleRatingSelection(selectedRating) {
    setRating(selectedRating)
  }

  function handleSubmitRating() {
    setSubmitted(true)
  }

  function renderRatingContent() {
    return (
      <div className="layout-flex">
        <div>
          <img src="/images/icon-star.svg" alt="Star Icon" />
        </div>
        <div className="heading-wrapper">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div>
          <ul>
            {ratings.map((value) => (
              <li key={value}>
                <button onClick={() => handleRatingSelection(value)}>
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="submit-wrapper">
          <button type="submit" onClick={handleSubmitRating}>
            Submit
          </button>
        </div>
      </div>
    )
  }

  function renderSubmittedContent() {
    return (
      <div className="submit-layout-flex">
        <div className="image-wrapper">
          <img
            src="/images/illustration-thank-you.svg"
            alt="Thank You Illustration"
          />
        </div>
        <div>
          <p className="selected-rating">
            You selected <span>{rating}</span> out of 5
          </p>
        </div>
        <div className="thank-you-wrapper">
          <p className="thank-you__name">Thank you!</p>
          <p className="thank-you__description">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <section id="rating">
        {submitted ? renderSubmittedContent() : renderRatingContent()}
      </section>
    </div>
  )
}

export default InteractiveRating

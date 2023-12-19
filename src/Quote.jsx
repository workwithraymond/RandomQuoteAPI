import React from "react"


const Quote = ({content, author, getNewQuote, tweetQuote}) => {
  return (
    <div className="box-centerside">
        <div className="text">
            <p>{content}</p>

        </div>
        <div className="author">
            <h5>{author}</h5>
            <div className="button-container">
                <button className="twitter-button" onClick={tweetQuote}>
                    <i className="fab fa-twitter"></i>
                </button>
                <button onClick={getNewQuote}>New Quote</button>
            </div>

        </div>

    </div>
  )
}
export default Quote
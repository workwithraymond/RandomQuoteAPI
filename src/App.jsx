import { useState, useEffect } from 'react'
import Loading from './Loading'
import Quote from './Quote'


const url = "https://api.quotable.io/random";

function App() {
  const [loading, setLoading] = useState(true)
  const [quote, setQuote] = useState([])



const fetchData = async () => {
  setLoading(true)
  try {
    const response = await fetch(url)
    const newQuote = await response.json()
    setQuote(newQuote)
  } catch (error) {
    console.log(error)
  }
  setLoading(false)
}

useEffect(() => {
  fetchData()
}, [])

const getNewQuote = () => {
  fetchData()
}

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`;
window.open(twitterUrl, '_blank')
}

if(loading) {
  return(
    <main>
      <Loading />
    </main>
  )
}

  return (
    <div>
      <h1 style={{textAlign: 'center', color: 'black'}}>Random Quote</h1>
    <Quote 
      content={quote.content}
      author={quote.author}
      getNewQuote={getNewQuote}
      tweetQuote={tweetQuote} 
    />
    </div>
  )
}

export default App

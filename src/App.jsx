import { useEffect, useState } from 'react'



function App() {
  const title = "Quotes Api Test"

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');


  useEffect(() => {
    fetch('https://api.allorigins.win/get?url=https://zenquotes.io/api/random')
      .then(res => res.json())
      .then(data => {
        const json = JSON.parse(data.contents);
        setQuote(json[0].q);
        setAuthor(json[0].a);
      }, [])
  });

  return (

    <div className="container">
      <video autoPlay muted loop className="background-video">
        <source src="src/assets/background1.mp4" type="video/mp4" />
      </video>
      <div className="content-title">
        <h1 className='title'>{title}</h1>
      </div>
      <div className="quotes">
        <div className="main-quotes">
          <h2 >{quote}</h2>
        </div>
        <div className="quotes-descr">
          <p className='descr'>{author}</p>
        </div>
      </div>
    </div>
  )
}

export default App

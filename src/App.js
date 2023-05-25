import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [bgColor, setBgColor] = useState("")
  useEffect(()=>{
  async function getQuotes(){
   try{
    const response= await fetch('https://api.quotable.io/random');
    const quoteData = await response.json()
    console.log(quoteData.content)
    setQuote(quoteData.content);
    setAuthor(quoteData.author);
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    setBgColor(`rgb(${randomR}, ${randomG}, ${randomB})`)
    document.querySelector('body').style.backgroundColor=bgColor;
    document.querySelector('button').style.backgroundColor=bgColor;
    document.getElementById('text').style.color=bgColor;
    document.getElementById('author').style.color=bgColor;
  } catch (error){
    alert(error)
  }
  }


document.querySelector('button').addEventListener('click', getQuotes);
window.addEventListener('load', getQuotes)

return ()=>{
  document.querySelector('button').removeEventListener('click', getQuotes);
  window.removeEventListener('load', getQuotes)
}
}, [quote, bgColor])
  
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote}</p>
        <p id="author">- {author}</p>
        <div id="btnContainer">
        <button type="button" >New quote</button>
        </div>
        
      </div>
      <footer>
      <p>Copyright &copy; 
           Silanurs<a href="https://github.com/silanurs" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github"></i></a></p>
          

      </footer>
    </div>
  );
}

export default App;

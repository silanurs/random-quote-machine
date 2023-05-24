
import './App.css';

function App() {
  async function getQuotes(){
   try{
    const response= await fetch('https://api.quotable.io/random');
    const quoteData = await response.json()
    console.log(quoteData)
  } catch (error){
    alert(error)
  }
  }
  getQuotes()
/* fetch('https://api.quotable.io/random').then(function(response){
  return response.json();
 }).then(function(response){
 console.log(response.content);
 }).catch(function(err){alert(err)})*/
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"</p>
        <p id="author">- Anne Frank</p>
        <div id="btnContainer">
        <button type="button">New quote</button>
        </div>
        
      </div>
      <footer>
      <p>Copyright &copy; <script>
document.write({new Date().getFullYear()})
          </script> Silanurs<a href="https://github.com/silanurs" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github"></i></a></p>
          

      </footer>
    </div>
  );
}

export default App;

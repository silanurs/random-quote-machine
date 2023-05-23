
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"How wonderful it is that nobody need wait a single moment before starting to improve the world.</p>
        <p id="author">- Anne Frank</p>
        <div id="btnContainer">
        <button type="button">New quote</button>
        </div>
        
      </div>
      <footer>
      <p>Copyright &copy; <script>
document.write({new Date().getFullYear()})
          </script> Silanurs<a href="https://github.com/silanurs" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-github"></i></a></p>
          

      </footer>
    </div>
  );
}

export default App;

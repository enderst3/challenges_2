
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
    
  
  );
}


const JSX = (
  <div className='myDiv'>
    {/* Test jsx notes */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>

  </div>
)

ReactDOM.render(
  JSX,
  document.getElementById('root')
);

export default App;

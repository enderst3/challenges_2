
import './App.css';
import ReactDOM, { render } from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
    
  
  );
}


const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  )
}


class ParentComponent extends React.Component {
  constructor(props) { 
    super(props)
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent/>
      </div>
    )


    
  }
}


// const JSX = (
//   <div className='myDiv'>
//     {/* Test jsx notes */}
//     <h1>This is a block of JSX</h1>
//     <p>Here's a subtitle</p>

//   </div>
//)

ReactDOM.render(
  JSX,
  document.getElementById('root')
);

export default App;


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


// const ChildComponent = () => {
//   return (
//     <div>
//       <p>I am the child</p>
//     </div>
//   )
// }


// class ParentComponent extends React.Component {
//   constructor(props) { 
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         <h1>I am the parent</h1>
//         <ChildComponent/>
//       </div>
//     )


    
//   }
// }

// const TypesOfFruit = () => {
//   return (
//     <div>
//       <h2>Fruits:</h2>
//       <ul>
//         <li>Apples</li>
//         <li>Blueberries</li>
//         <li>Strawberries</li>
//         <li>Bananas</li>
//       </ul>
//     </div>
//   );
// };

// const Fruits = () => {
//   return (
//     <div>
//       { /* Change code below this line */ }
//       <TypesOfFruit/>
//       { /* Change code above this line */ }
//     </div>
//   );
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* Change code below this line */ }
//           <Fruits/>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         <h1>My First React Component!</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <MyComponent />,
//   document.getElementById('challenge-node')
// )


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

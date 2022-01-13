
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

// const CurrentDate = (props) => {
//   return (
//     <div>
//       { /* Change code below this line */ }
//       <p>The current date is: {props.date}</p>
//       { /* Change code above this line */ }
//     </div>
//   );
// };

// class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>What date is it?</h3>
//         { /* Change code below this line */ }
//         <CurrentDate date={Date()}/>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// const List = (props) => {
//   { /* Change code below this line */ }
//   return <p>{props.tasks.join(', ')}</p>
//   { /* Change code above this line */ }
// };

// class ToDo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>To Do Lists</h1>
//         <h2>Today</h2>
//         { /* Change code below this line */ }
//         <List tasks={["work out", "practice", "order food"]}/>
//         <h2>Tomorrow</h2>
//         <List tasks={['work out', 'practice', 'pickup order']}/>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// const ShoppingCart = (props) => {
//   return (
//     <div>
//       <h1>Shopping Cart Component</h1>
//     </div>
//   )
// };
// // Change code below this line

// ShoppingCart.defaultProps = {
//   items: 0
// }

// const Items = (props) => {
//   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// }

// Items.defaultProps = {
//   quantity: 0
// }

// // Change code below this line
// Items.propTypes = {
//   quantity: PropTypes.number.isRequired
// }
// // Change code above this line

// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     { /* Change code below this line */ }
//     return <Items quantity = {10}/>
//     { /* Change code above this line */ }
//   }
// };

// class CampSite extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <Camper/>
//       </div>
//     );
//   }
// };
// // Change code below this line

// const Camper = (props) => {
//   return <p>{props.name}</p>
// }
// Camper.defaultProps = {
//   name: "CamperBot"
// }

// Camper.propTypes = {
//   name: PropTypes.string.isRequired
// }

// class StatefulComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // Only change code below this line
//     this.state = {
//       name: 'name'
//     }
//     // Only change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'freeCodeCamp'
//     }
//   }
//   render() {

//     // Change code below this line
//     const name = this.state.name
//     // Change code above this line

//     return (
//       <div>
//         { /* Change code below this line */ }
//         <h1>{name}</h1>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Initial State'
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     // Change code below this line
//     this.setState({
//       name: 'React Rocks!'
//     })
//     // Change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

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

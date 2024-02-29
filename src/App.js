import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css//bootstrap.min.css'

// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World</h1>

//     </div>
//   );
// }

// function App() {
//   return ("Hello World"
//   );
// }

// function App() {
//   const composante = (<div>
//     <p>un Div dans une variable</p>
//   </div>
//   );
//   return composante
// }

// function App() {
//   return (
//     <div>
//       <p id="s1">Meow</p>
//       <p id="s2">Meow</p>
//     </div>
//   );
// }

function App() {
  return(
    <div className='container p-5'>
      {<div class="container">
      </div> }
    <div class="row">

    <div class = "col-md-12">
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">Élément 1</a>
        <div className='container2 p-2'></div>
        <a href="#" id= 'a2' class="list-group-item list-group-item-action">Élément 2</a>
        <a href="#" id= 'a3' class="list-group-item list-group-item-action">Élément 3</a>
        <a href="#" id= 'a4'class="list-group-item list-group-item-action">Élément 4</a>
        <a href="#" id= 'a5'class="list-group-item list-group-item-action">Élément 5</a>
        </div>
      </div>
    </div>
  </div>

  );
}

export default App;

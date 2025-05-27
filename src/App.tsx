// import './App.css'

// function App() {

//   const name: String = "홍";

//   return (
//     <>
//       <h1 className="react">Hello {name}!</h1>
//     </>
//   )
// }

// export default App

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name: String = "홍";
    return <div className="react">Hello, {name}!</div>;
  }
}

export default App;
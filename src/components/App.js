import React from 'react'
import '../styles/App.css';
const App = () => {


  return (
    <div id="main">
      <form onSubmit = "console.log('form submited'); return flase">
        <label htmlFor='name'>Name</label>
        <input id="name" type={"text"} />

        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;

import React,{useState} from 'react';

import "./App.css";

function App(){
  const [count,setCount] = useState(0)


  return (
    <div className='App'>
      <header>
        <h1>Counter app using State/Hook</h1>
      </header>
      <h2>Current Value of count is {count}</h2>
      <button>Reset Counter</button>
      <button>Increase Counter</button>
      <button>Decrease Counter</button>
    </div>
  );
}

export default App;
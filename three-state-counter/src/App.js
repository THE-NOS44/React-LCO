import React,{useState} from 'react';
import "./App.css";

function App(){
  const [count,setCount] = useState(0) //this is the default value


  return (
    <div className='App'>
      <header>
        <h1>Counter app using State/Hooks</h1>
      </header>
      <h2>Current Value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => setCount(count+1)}>Increase Counter</button>
      <button onClick={() => setCount(count-1)}>Decrease Counter</button>
    </div>
  );
}

export default App;
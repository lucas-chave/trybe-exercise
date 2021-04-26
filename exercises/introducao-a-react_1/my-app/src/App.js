import React from 'react';

const task = () => {
  const array = ['estudar', 'aprender', 'beber água']
  return (
    <ul>{array.map(element => <li>{element}</li>)}</ul>
  );
}

function App() {
  return (
    <div className="App">
      {task()}
    </div>
  );
}

export default App;

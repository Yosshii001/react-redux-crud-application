import React from 'react';
function App() {
  return (
  <React.Fragment>
    <h1>edit src/App.js and save to reload.</h1>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </React.Fragment>
  );
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;

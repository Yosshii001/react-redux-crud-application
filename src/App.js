import React from 'react';
import PropTypes from 'prop-types';

function App() {

  const profiles = [
    {name: "Taro", age: 10 },
    {name: "Hanako", age:  5 }
  ];

  return (
  <React.Fragment>
    <h1>edit src/App.js and save to reload.</h1>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    <User name={"Taro"} age={10} />
    <User name={"Hanako"} age={5} />
  </React.Fragment>
  );
}

// const Cat = () => {
//   return <div>Meow!</div>
// }

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;

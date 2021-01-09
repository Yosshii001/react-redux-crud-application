import React, {Component} from 'react';
// import PropTypes from 'prop-types';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    const count = this.state.count
    this.setState({ count: count + 1})
  }

  handleMinusButton = () => {
    const count = this.state.count
    this.setState({ count: count - 1})
  }

  render() {
    console.log(this.state)
    
    return (
      <React.Fragment>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
        <div> count: { this.state.count }</div>
      </React.Fragment>
    )
  }


}


// const User = (props) => {
//   return <div>Hi, I am {props.name}, and {props.age} years old.</div>
// }
// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired
// }

export default App;

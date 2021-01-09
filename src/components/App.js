import React, {Component} from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <div> value: { props.value }</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

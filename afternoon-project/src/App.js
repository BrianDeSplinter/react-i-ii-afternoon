import React, {Component} from 'react';
import './App.css';
// import Person from './Components/Person'
import People from './Components/People'
// import MoveNext from './Components/MoveNext'
import MovePrevious from './Components/MovePrevious'
import MoveNext from './Components/MoveNext';

class App extends Component{
  constructor(){
    super()
    this.state ={
      currentPerson: 1
    }
    this.moveNext = this.moveNext.bind(this)
  }

  moveNext(){
    let value = this.state.currentPerson
    console.log(this.state.currentPerson)
    value++
    console.log(this.state.currentPerson)
    this.setState({
      currentPerson: value
    })
  }

  render(){
    const arrow = '<'
    return(
      <div>
        <div className='App-header'>Home</div>
        <div className='App'>
          <div className='Info'>
            <div className='Person'><People/></div>
            <div className='Count'>1/25</div>
          </div>
          <div className='Controls'>
            <div className='Previous'>
              <button onClick= {()=> MovePrevious}>{arrow} Previous</button>
            </div>
            <div className='Options'>
              <div className='Edit'>Edit</div>
              <div className='Delete'>Delete</div>
              <div className='New'>New</div>
            </div>
            <div className='Next'>
              <button onClick={() => <MoveNext person = {this.state}/> }>Next ></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

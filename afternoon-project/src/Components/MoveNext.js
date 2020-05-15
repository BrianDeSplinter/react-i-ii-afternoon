import React, {Component} from 'react'

class MoveNext extends Component{
    constructor(){
        super()
        this.state={
            current: this.props.number
        }
    }
    render(){
        return console.log(this.state.current)
    }
}



export default MoveNext
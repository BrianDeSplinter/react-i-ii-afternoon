import React, {Component} from 'react'
import Person from './Person'
import data from './Data'

class People extends Component{
    constructor(){
        super()
        this.state = {
            people: data,
            personNumber: 1
        }
    }
    
    render(){
        const peopleMap = this.state.people.map((e)=> {
            return <Person key={e.id} person={e}/>
        })
        return <div>{peopleMap[this.state.personNumber]}</div>
    }
}

export default People
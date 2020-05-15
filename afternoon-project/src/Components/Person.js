import React from 'react'
import '../App.css'

function Person(props){
    return <div className='PersonInfo'>
        <h2><u>{props.person.name.first} {props.person.name.last}</u></h2>
        <p><b>From: </b>{props.person.city}, {props.person.country}</p>
        <p><b>Job Title: </b>{props.person.title}</p>
        <p><b>Employer: </b>{props.person.employer}</p>
        <br/>
        <h4><b>Favorite Movies:</b></h4>
        <div className='MovieList'>
            <ul>1. {props.person.favoriteMovies[0]}</ul>
            <ul>2. {props.person.favoriteMovies[1]}</ul>
            <ul>3. {props.person.favoriteMovies[2]}</ul>
        </div>
    </div>
}

export default Person
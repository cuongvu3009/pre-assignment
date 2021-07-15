import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import React from 'react';
import Hero from './Hero.js'
import DetailCard from './DetailCard.js';
import Loading from './Loading'
import './App.css'

const url = 'https://jsonplaceholder.typicode.com/users/';
const getUsers = () => fetch(url).then(res => res.json())

function App() {
  const [data, setData] = useState()

  useEffect(()=> {
    getUsers().then(data => setData(data))
  },[])
  
 
  if (data) {
    return (
      <Router>
        <Route exact path="/">
          <Hero data={data}/>
        </Route>
        <Route  path="/:id">
          <DetailCard  data={data}/>
        </Route>
      </Router>
    )
  } 
  return <Loading/>
}

export default App

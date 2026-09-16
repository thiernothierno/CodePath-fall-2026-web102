import { useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'

const App = () => {
  return (
    <div className='App'>
      <h1>Itinerary for 7 Days in Chicago <img src="/chicago-city.jpg" alt="Chicago" width="20px" height="20px" /></h1>
      <h2>Welcome to Chicago, Thierno check out this calender to get to know the city and see all the sights during your stay.</h2>
      <Calendar/>
    </div>
  )
}

export default App


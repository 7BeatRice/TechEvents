import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations.jsx'
import LocationEvents from './pages/LocationEvents.jsx'
import Event from './components/Event.jsx'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/San Francisco, CA',
      element: <LocationEvents index={1} />
    },
    {
      path: '/Silicon Valley, CA',
      element: <LocationEvents index={2} />
    },
    {
      path: '/Austin, TX',
      element: <LocationEvents index={3} />
    },
    {
      path: '/New York, NY',
      element: <LocationEvents index={4} />
    },
    {
      path: '/Las Vegas, NV',
      element: <LocationEvents index={5} />
    },

    {
      path: '/events',
      element: <Event />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App
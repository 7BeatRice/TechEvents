import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations.jsx'
import LocationEvents from './pages/LocationEvents.jsx'
import AllEvents from './pages/AllEvents.jsx'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/san-francisco',
      element: <LocationEvents index={0} />
    },
    {
      path: '/silicon-valley',
      element: <LocationEvents index={1} />
    },
    {
      path: '/austin',
      element: <LocationEvents index={2} />
    },
    {
      path: '/new-york',
      element: <LocationEvents index={3} />
    },
    {
      path: '/las-vagas',
      element: <LocationEvents index={4} />
    },
    {
      path: '/all-events',
      element: <AllEvents />
    }]);

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/all-events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App
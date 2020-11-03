import React, { useState, useEffect } from 'react'

// Navigation Component
import RootNavigationContainer from './src/navigations/RootNavigation'

export default function App() {
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false)
    }, 2000)
  }, [])

  return <>{loaded ? null : <RootNavigationContainer />}</>
}

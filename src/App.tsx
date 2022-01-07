import { useState } from 'react'
import { Footer } from './components/modules/footer/Footer'
import { MyRoutes } from './components/modules/content/MyRoutes'
import { Navbar } from './components/modules/navbar/Navbar'

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div
        className="
      bg-gray-100 dark:bg-gray-900 dark:text-gray-200 
      min-h-screen
      "
      >
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <MyRoutes />
        <Footer />
      </div>
    </div>
  )
}

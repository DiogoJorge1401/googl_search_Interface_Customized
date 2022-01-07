import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Results } from './Results'

export const MyRoutes = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/news':
      case '/images':
      case '/videos':
        return
      default:
        navigate('/search')
        return
    }
  }, [location.pathname, navigate])

  const links = [
    { path: '/search' },
    { path: '/news' },
    { path: '/images' },
    { path: '/videos' },
  ]

  return (
    <div className="p-4">
      <Routes>
        {links.map((e, idx) => (
          <Route key={idx} path={e.path} element={<Results />} />
        ))}
      </Routes>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/videos', text: '📹 Videos' },
  { url: '/images', text: '📷 Images' },
]

export const Link = () => {
  const location = useLocation()
  const [isActive, setIsActive] = useState('')
  useEffect(() => {
    setIsActive(location.pathname)
  }, [location.pathname])
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, idx) => (
        <NavLink
          to={url}
          key={idx}
          className={
            url === isActive
              ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0'
              : 'm-2 mb-0'
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  )
}

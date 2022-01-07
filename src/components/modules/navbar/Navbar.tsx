import { Link } from 'react-router-dom'
import { Search } from './Search'

interface NavbarProps {
  setDarkTheme(dt: boolean): void
  darkTheme: boolean
}

export const Navbar = ({ setDarkTheme, darkTheme }: NavbarProps) => {
  return (
    <div
      className="
      p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200
    "
    >
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p
            className="
            text-xl sm:text-2xl bg-blue-500 font-bold text-white
            py-0 sm:py-1 px-2
            rounded-full dark:bg-gray-500 dark:text-gray-900
          "
          >
            Google 🔎
          </p>
        </Link>
        <button
          type="button"
          className="
          text-xl dark:bg-gray-50 dark:text-gray-900
          bg-white rounded-full
          py-0 sm:py-1 px-2
          hover:shadow-lg
          "
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? 'Light 💡' : 'Dark 🌒'}
        </button>
      </div>
      <Search />
    </div>
  )
}

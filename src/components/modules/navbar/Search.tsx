/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useResulContext } from '../../../context/ResultContextProvider'
import { Link } from './Link'

export const Search = () => {
  const { setSearchTerm } = useResulContext()
  const [text, setText] = useState('')
  const [debounceValue] = useDebounce(text, 300)

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue)
  }, [debounceValue])

  return (
    <div className="relative mt-6 md:mt-4 mx-auto">
      <input
        value={text}
        type="text"
        className="
        sm:w-80 md:w-96 w-60 h-0
        ml-10 px-10 py-4 sm:py-6 sm:px-14 md:px-16 sm:h-10
        dark:bg-gray-200 border rounded-full
        shadow-sm outline-none text-black hover:shadow-lg
        placeholder:text-sm placeholder:text-center
        "
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Googl or type URL"
      />
      {text && (
        <button
          type="button"
          className="absolute sm:top-2.5 top-0 right-9 text-2xl text-gray-500"
          onClick={() => setText('')}
        >
          X
        </button>
      )}
      <Link />
    </div>
  )
}

import { createContext, useContext, useState } from 'react'
import { IResultContext, ResultContextProviderProps } from './interfaces'

const ResultContext = createContext<IResultContext>(
  {} as unknown as IResultContext
)
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({
  children,
}: ResultContextProviderProps) => {
  const [results, setResults] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('Javascript')

  const getResults = async (type: string): Promise<void> => {
    setIsLoading(true)
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
      },
    })
    const data = await response.json()
    setResults(data)
    setIsLoading(false)
  }

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  )
}
export const useResulContext = () => useContext(ResultContext)

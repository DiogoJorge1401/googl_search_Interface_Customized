/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResulContext } from '../../../context/ResultContextProvider'
import { Loading } from './Loading'
import { ImagesResult } from './Results/ImagesResult'
import { NewsResult } from './Results/NewsResult'
import { SearchsResult } from './Results/SearchsResult'
import { VideosResults } from './Results/VideosResult'

export const Results = () => {
  const {
    getResults,
    isLoading,
    results: { entries: news, image_results, results },
    searchTerm,
  } = useResulContext()

  const location = useLocation()

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`)
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  }, [location.pathname, searchTerm])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return <SearchsResult results={results} />
    case '/news':
      return <NewsResult news={news} />
    case '/videos':
      return <VideosResults results={results} />
    case '/images':
      return <ImagesResult image_results={image_results} />
    default:
      return <div>ERROR</div>
  }
}

import { Result } from '../../../../context/interfaces'

interface SearchProps {
  results?: Result[]
}

export const SearchsResult = ({ results }: SearchProps) => {
  return (
    <div 
    className="
    flex flex-wrap sm:justify-between space-y-6 sm:px-40 md:px-20 xl:px-56 mt-4
    ">
      {results?.length ? (
        results.map(({ link, title }, idx) => (
          <div key={idx} className="md:w-2/5 w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <p className="text-sm">
                {link.length > 30 ? link.substring(0, 30) : link}
              </p>
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                {title}
              </p>
            </a>
          </div>
        ))
      ) : (
        <h1 className="mx-auto my-8 text-2xl sm:text-4xl">
          Tamo sem money 😭😭
        </h1>
      )}
    </div>
  )
}

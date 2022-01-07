import { New } from '../../../../context/interfaces'

interface NewsResultProps {
  news?: New[]
}

export const NewsResult = ({ news }: NewsResultProps) => {
  return (
    <div className="flex flex-wrap justify-between space-y-6 sm:px-40 md:px-48 xl:px-56 mt-4 items-center">
      {news?.length ? (
        news.map(({ links, id, source, title }) => (
          <div key={id} className="md:w-2/5 w-full">
            <a
              href={links[0].href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <p className="text-lg dark:text-blue-300 text-blue-700">
                {title}
              </p>
            </a>
            <div className="flex gap-4 hover:underline">
              <a href={source.href} target="_blank" rel="noreferrer">
                {source.href}
              </a>
            </div>
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

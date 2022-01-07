import { Image } from '../../../../context/interfaces'

interface ImagesResultProps {
  image_results?: Image[]
}

export const ImagesResult = ({ image_results }: ImagesResultProps) => {
  // <div className="flex flex-wrap justify-center items-center">
  return (
    <div className="flex flex-wrap justify-between space-y-6 sm:px-40 md:px-48 xl:px-56 mt-4">
      {image_results?.length ? (
        image_results?.map(({ link: { href, title }, image }, idx) => (
          <a
            href={href}
            className="sm:p-5 p-3"
            key={idx}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.src} alt={title} loading="lazy" />
            <p className="w-36 break-words text-sm mt-2">{title}</p>
          </a>
        ))
      ) : (
        <h1 className="mx-auto my-8 text-2xl sm:text-4xl">
          Tamo sem money 😭😭
        </h1>
      )}
    </div>
  )
}

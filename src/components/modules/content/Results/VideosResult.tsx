import ReactPlayer from 'react-player'
import { Result } from '../../../../context/interfaces'
import { isVideo } from '../../../../utils/isVideo'

interface VideosResultsProps {
  results?: Result[]
}

export const VideosResults = ({ results }: VideosResultsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:px-40 md:px-48 xl:px-56">
      {results?.length ? (
        results.map((video, idx) => (
          <div key={idx} className='m-2'>
            {isVideo(video.additional_links[0].href) && (
              <ReactPlayer
                url={video.additional_links[0].href}
                controls
                width="355px"
                height="200px"
              />
            )}
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

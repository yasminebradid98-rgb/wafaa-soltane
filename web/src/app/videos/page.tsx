import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4z3hno31',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export default async function VideosPage() {
  const videos = await client.fetch(
    `*[_type == "video"]{ _id, title, description, "videoUrl": videoFile.asset->url }`
  )

  return (
    <div className="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
      {/* Header */}
      <header className="flex w-full overflow-hidden pt-10 pb-1">
        <nav role="navigation" className="w-full">
          <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
            <div className="mr-4 md:mr-8">
              <a href="/" className="text-2xl font-signika font-bold tracking-wide">
                WAFAA SOLTANE
              </a>
            </div>
            <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
              <ul className="flex flex-col md:space-x-5 mt-5 md:flex-row md:items-center md:ml-auto md:mt-0">
                <li><a href="/" className="font-signika text-2xl">PHOTOGRAPHY</a></li>
                <li>
                  <a href="/videos" className="font-signika text-2xl">
                    VIDEOGRAPHY
                    <span className="block h-0.5 bg-black dark:bg-white"></span>
                  </a>
                </li>
                <li><a href="/about" className="font-signika text-2xl">ABOUT ME</a></li>
                <li><a href="/contact" className="font-signika text-2xl">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Videos Content */}
      <main className="container mx-auto pt-10 pb-16">
        <h1 className="text-4xl font-bold">VIDEOGRAPHY</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 font-serif">Motion & Storytelling</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {videos && videos.length > 0 ? (
            videos.map((video: any) => (
              <div key={video._id} className="space-y-2">
                {video.videoUrl && (
                  <video controls className="w-full rounded-sm bg-zinc-900 aspect-video">
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                )}
                {video.title && <h3 className="text-xl font-bold mt-2">{video.title}</h3>}
                {video.description && <p className="text-gray-400 text-sm">{video.description}</p>}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No videos uploaded yet.</p>
          )}
        </div>
      </main>
    </div>
  )
}
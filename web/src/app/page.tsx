import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4z3hno31',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export default async function Home() {
  const photos = await client.fetch(`*[_type == "photo"]{ _id, title, caption, "imageUrl": image.asset->url }`)
  const videos = await client.fetch(`*[_type == "video"]{ _id, title, description, "videoUrl": videoFile.asset->url }`)

  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>

      {/* Photos Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo: any) => (
            <div key={photo._id} className="border p-4 rounded-lg space-y-2">
              {photo.imageUrl && <img src={photo.imageUrl} alt={photo.title || 'Photo'} className="w-full h-64 object-cover rounded-md" />}
              <h3 className="font-bold">{photo.title}</h3>
              <p className="text-gray-600">{photo.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video: any) => (
            <div key={video._id} className="border p-4 rounded-lg space-y-2">
              {video.videoUrl && (
                <video controls className="w-full rounded-md">
                  <source src={video.videoUrl} />
                </video>
              )}
              <h3 className="font-bold">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
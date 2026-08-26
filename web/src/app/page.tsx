import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4z3hno31',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export default async function Home() {
  const photos = await client.fetch(`*[_type == "photo"]{ _id, title, caption, "imageUrl": image.asset->url }`)

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header Navigation */}
      <header className="flex justify-between items-center px-12 py-8 border-b border-zinc-900">
        <h1 className="text-xl font-bold tracking-widest uppercase">Wafaa Soltane</h1>
        <nav className="flex space-x-8 text-sm font-semibold tracking-wider uppercase">
          <a href="#photography" className="border-b-2 border-white pb-1">Photography</a>
          <a href="#videography" className="text-zinc-400 hover:text-white transition-colors">Videography</a>
          <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About Me</a>
          <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="px-12 py-10 space-y-8">
        <div>
          <h2 className="text-4xl font-extrabold tracking-wider uppercase">Photography</h2>
          <p className="text-zinc-400 text-lg mt-1 font-serif italic">Photographer & Visual Artist</p>
        </div>

        {/* Dynamic Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo: any) => (
            <div key={photo._id} className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
              {photo.imageUrl && (
                <img
                  src={photo.imageUrl}
                  alt={photo.title || 'Portfolio Image'}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
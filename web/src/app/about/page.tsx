import Link from 'next/link'
import { createClient } from 'next-sanity'

export const dynamic = 'force-dynamic'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4z3hno31',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export default async function Home() {
  const photos = await client.fetch(
    `*[_type == "photo"]{ _id, title, caption, "imageUrl": image.asset->url }`
  )

  return (
    <div className="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
      {/* Header / Navigation */}
      <header className="flex w-full overflow-hidden pt-10 pb-1">
        <nav id="nav" role="navigation" className="w-full">
          <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
            <div className="mr-4 md:mr-8">
              <Link href="/" className="text-2xl font-signika font-bold tracking-wide">
                WAFAA SOLTANE
              </Link>
            </div>

            <div id="menu" className="w-full transition-all ease-out duration-500 md:w-auto md:flex-grow md:flex md:items-center">
              <ul id="ulMenu" className="flex flex-col duration-300 ease-out md:space-x-5 mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
                <li className="group transition duration-300">
                  <Link href="/" className="font-signika text-2xl tap-highlight-transparent">
                    PHOTOGRAPHY
                    <span className="hidden md:block h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>
                <li className="group transition duration-300">
                  <Link href="/videos" className="font-signika text-2xl tap-highlight-transparent">
                    VIDEOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>
                <li className="group transition duration-300">
                  <Link href="/about" className="font-signika text-2xl tap-highlight-transparent">
                    ABOUT ME
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>
                <li className="group transition duration-300">
                  <Link href="/contact" className="font-signika text-2xl tap-highlight-transparent">
                    CONTACT
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="pt-10 pb-6">
          <h1 className="text-4xl font-bold">PHOTOGRAPHY</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 font-serif">
            Photographer & Visual Artist
          </p>
        </div>

        {/* Dynamic Photos Section */}
        <section className="text-neutral-700 py-4">
          <div className="container w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos && photos.length > 0 ? (
                photos.map((photo: any) => (
                  <div key={photo._id} className="p-1">
                    <div className="overflow-hidden h-full w-full rounded-sm bg-zinc-900">
                      {photo.imageUrl && (
                        <img
                          alt={photo.title || photo.caption || 'Gallery Image'}
                          className="block h-full w-full object-cover object-center transition duration-500 transform scale-100 hover:scale-110"
                          src={photo.imageUrl}
                        />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 col-span-full">No photos published yet in Sanity Studio.</p>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <div className="max-w-screen-xl py-16 mx-auto">
          <div className="grid grid-cols-1 gap-8 text-center mx-auto">
            <div>
              <p className="font-signika"><b>WAFAA SOLTANE</b></p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Photographer & Visual Artist
              </p>
              <div className="flex mx-auto">
                <div className="mx-auto space-x-6 flex mt-6 text-gray-600 dark:text-gray-300">
                  <a
                    className="transition duration-300 hover:opacity-75"
                    href="https://www.instagram.com/wafaa_sol/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-600 dark:text-gray-300 text-center">
            © 2026 Wafaa Soltane
          </p>
        </div>
      </footer>
    </div>
  )
}
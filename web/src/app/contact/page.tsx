import Link from 'next/link'
import { createClient } from 'next-sanity'

export const dynamic = 'force-dynamic'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4z3hno31',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export default async function ContactPage() {
  const projects = await client.fetch(`
    *[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      "hasPhotos": defined(photos) && count(photos) > 0,
      "hasVideos": defined(videos) && count(videos) > 0,
      "hasAudios": defined(audios) && count(audios) > 0
    }
  `)

  const photoProjects = projects.filter((p: any) => p.hasPhotos)
  const videoProjects = projects.filter((p: any) => p.hasVideos)
  const audioProjects = projects.filter((p: any) => p.hasAudios)

  return (
    <div className="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
      {/* Header */}
      <header className="flex w-full pt-10 pb-1">
        <nav id="nav" role="navigation" className="w-full">
          <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
            <div className="mr-4 md:mr-8">
              <Link href="/" className="text-2xl font-signika font-bold tracking-wide">
                WAFAA SOLTANE
              </Link>
            </div>

            <div id="menu" className="w-full transition-all ease-out duration-500 md:w-auto md:flex-grow md:flex md:items-center">
              <ul id="ulMenu" className="flex flex-col duration-300 ease-out md:space-x-8 mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
                
                {/* PHOTOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <Link href="/" className="font-signika text-2xl tap-highlight-transparent">
                    PHOTOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl min-w-[200px] py-2 z-50 rounded-sm">
                    {photoProjects.length > 0 ? (
                      photoProjects.map((project: any) => (
                        <Link
                          key={project._id}
                          href={`/projects/${project.slug}`}
                          className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-sans normal-case transition duration-150"
                        >
                          {project.title}
                        </Link>
                      ))
                    ) : (
                      <span className="block px-4 py-2 text-xs text-gray-400 font-sans normal-case">
                        Aucun projet
                      </span>
                    )}
                  </div>
                </li>

                {/* VIDEOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <Link href="/videos" className="font-signika text-2xl tap-highlight-transparent">
                    VIDEOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl min-w-[200px] py-2 z-50 rounded-sm">
                    {videoProjects.length > 0 ? (
                      videoProjects.map((project: any) => (
                        <Link
                          key={project._id}
                          href={`/projects/${project.slug}`}
                          className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-sans normal-case transition duration-150"
                        >
                          {project.title}
                        </Link>
                      ))
                    ) : (
                      <span className="block px-4 py-2 text-xs text-gray-400 font-sans normal-case">
                        Aucun projet
                      </span>
                    )}
                  </div>
                </li>

                {/* AUDIOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <Link href="/audiography" className="font-signika text-2xl tap-highlight-transparent">
                    AUDIOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl min-w-[200px] py-2 z-50 rounded-sm">
                    {audioProjects.length > 0 ? (
                      audioProjects.map((project: any) => (
                        <Link
                          key={project._id}
                          href={`/projects/${project.slug}`}
                          className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-sans normal-case transition duration-150"
                        >
                          {project.title}
                        </Link>
                      ))
                    ) : (
                      <span className="block px-4 py-2 text-xs text-gray-400 font-sans normal-case">
                        Aucun projet
                      </span>
                    )}
                  </div>
                </li>

                {/* ABOUT ME */}
                <li className="group transition duration-300 py-2">
                  <Link href="/about" className="font-signika text-2xl tap-highlight-transparent">
                    ABOUT ME
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>

                {/* CONTACT */}
                <li className="group transition duration-300 py-2">
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
      <div className="container mx-auto py-10 max-w-xl">
        <h1 className="text-4xl font-bold uppercase mb-6">Contact</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-serif mb-6">
          For inquiries, collaborations, or print requests:
        </p>
        <a
          href="https://www.instagram.com/wafaa_sol/"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-xl font-semibold hover:underline"
        >
          Instagram: @wafaa_sol
        </a>
      </div>
    </div>
  )
}
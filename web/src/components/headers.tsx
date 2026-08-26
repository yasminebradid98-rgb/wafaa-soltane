import Link from 'next/link'

export interface ProjectItem {
  title: string
  slug: string
  hasPhotos?: boolean
  hasVideos?: boolean
  hasAudios?: boolean
}

interface HeaderProps {
  projects?: ProjectItem[]
}

export default function Header({ projects = [] }: HeaderProps) {
  const photoProjects = projects.filter((p) => p.hasPhotos)
  const videoProjects = projects.filter((p) => p.hasVideos)
  const audioProjects = projects.filter((p) => p.hasAudios)

  return (
    <header className="flex w-full pt-10 pb-6 border-b border-zinc-200 dark:border-zinc-800 font-sans">
      <nav role="navigation" className="w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-wide uppercase">
            WAFAA SOLTANE
          </Link>

          <ul className="flex space-x-8 items-center mt-4 md:mt-0 text-sm font-medium uppercase tracking-wider">
            {/* PHOTOGRAPHY DROPDOWN */}
            <li className="relative group py-2">
              <Link href="/" className="hover:opacity-70 transition duration-200">
                PHOTOGRAPHY
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[220px] py-2 z-50 rounded-sm">
                {photoProjects.length > 0 ? (
                  photoProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs normal-case transition duration-150"
                    >
                      {project.title}
                    </Link>
                  ))
                ) : (
                  <span className="block px-4 py-2 text-xs text-gray-400 normal-case">
                    Aucun projet
                  </span>
                )}
              </div>
            </li>

            {/* VIDEOGRAPHY DROPDOWN */}
            <li className="relative group py-2">
              <Link href="/videos" className="hover:opacity-70 transition duration-200">
                VIDEOGRAPHY
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[220px] py-2 z-50 rounded-sm">
                {videoProjects.length > 0 ? (
                  videoProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs normal-case transition duration-150"
                    >
                      {project.title}
                    </Link>
                  ))
                ) : (
                  <span className="block px-4 py-2 text-xs text-gray-400 normal-case">
                    Aucun projet
                  </span>
                )}
              </div>
            </li>

            {/* AUDIOGRAPHY DROPDOWN */}
            <li className="relative group py-2">
              <Link href="/audiography" className="hover:opacity-70 transition duration-200">
                AUDIOGRAPHY
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[220px] py-2 z-50 rounded-sm">
                {audioProjects.length > 0 ? (
                  audioProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs normal-case transition duration-150"
                    >
                      {project.title}
                    </Link>
                  ))
                ) : (
                  <span className="block px-4 py-2 text-xs text-gray-400 normal-case">
                    Aucun projet
                  </span>
                )}
              </div>
            </li>

            {/* ABOUT */}
            <li className="py-2">
              <Link href="/about" className="hover:opacity-70 transition duration-200">
                ABOUT ME
              </Link>
            </li>

            {/* CONTACT */}
            <li className="py-2">
              <Link href="/contact" className="hover:opacity-70 transition duration-200">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
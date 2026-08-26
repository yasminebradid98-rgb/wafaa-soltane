import Link from 'next/link'
export default function AboutPage() {
  return (
    <div className="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
      import Link from 'next/link'

// Inside your component layout:
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
              <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
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

      <main className="container mx-auto pt-10 pb-16 max-w-4xl space-y-6">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <p className="text-lg text-gray-400 font-serif leading-relaxed">
          Wafaa Soltane is a photographer and visual artist capturing moments, stories, and human connections across landscape and portrait medium.
        </p>
      </main>
    </div>
  )
}
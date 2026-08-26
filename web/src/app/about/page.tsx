export default function AboutPage() {
  return (
    <div className="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
      <header className="flex w-full overflow-hidden pt-10 pb-1">
        <nav role="navigation" className="w-full">
          <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
            <div className="mr-4 md:mr-8">
              <a href="/" className="text-2xl font-signika font-bold tracking-wide">WAFAA SOLTANE</a>
            </div>
            <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
              <ul className="flex flex-col md:space-x-5 mt-5 md:flex-row md:items-center md:ml-auto md:mt-0">
                <li><a href="/" className="font-signika text-2xl">PHOTOGRAPHY</a></li>
                <li><a href="/videos" className="font-signika text-2xl">VIDEOGRAPHY</a></li>
                <li>
                  <a href="/about" className="font-signika text-2xl">
                    ABOUT ME
                    <span className="block h-0.5 bg-black dark:bg-white"></span>
                  </a>
                </li>
                <li><a href="/contact" className="font-signika text-2xl">CONTACT</a></li>
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
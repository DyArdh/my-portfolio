'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

const MoonIcon = dynamic(() => import('./icons/MoonIcon'), { ssr: false })
const SunIcon = dynamic(() => import('./icons/SunIcon'), { ssr: false })
const GripLinesIcon = dynamic(() => import('./icons/GripLinesIcon'), {
  ssr: false,
})
const XmarkIcon = dynamic(() => import('./icons/XmarkIcon'), {
  ssr: false,
})
const LinkedinIcon = dynamic(() => import('./icons/LinkedinIcon'), {
  ssr: false,
})
const SquareGithubIcon = dynamic(() => import('./icons/SquareGithubIcon'), {
  ssr: false,
})

interface navProps {
  navOpen: Boolean
}

interface socialDataProps {
  name: string
  icon: React.ComponentType
  link: string
}

const navLinkData = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
]

const socialData: socialDataProps[] = [
  {
    name: 'LN',
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/in/dyardh',
  },
  {
    name: 'GH',
    icon: SquareGithubIcon,
    link: 'https://github.com/DyArdh',
  },
]

const SocialMediaItem: React.FC<socialDataProps> = ({
  name,
  icon: Icon,
  link,
}) => (
  <>
    <Icon />
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {name}
    </Link>
  </>
)

const NavLink: React.FC<navProps> = ({ navOpen }) => {
  const pathName = usePathname()

  return (
    <div>
      <div
        className="w-full h-screen flex flex-col justify-between items-center fixed backdrop-blur bg-light-100 dark:bg-dark-900 transition-transform ease-in-out duration-500 z-40 md:hidden"
        style={{
          transform: navOpen
            ? 'translateY(0%) translateZ(0px)'
            : 'translateY(-100%) translateZ(0px)',
        }}
      >
        <div></div>
        <div className="py-4">
          <div className="flex flex-col items-center text-2xl space-y-5">
            {navLinkData.map((data, index) => (
              <Link
                key={index}
                href={data.link}
                scroll={false}
                className={`${
                  pathName === data.link
                    ? 'border border-light-900 rounded-full px-8 py-2 dark:border-light-100'
                    : ''
                } px-8 py-2 hover:border hover:border-light-900 hover:rounded-full hover:px-8 hover:py-2 font-openSans dark:hover:border-dark-100`}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-center text-base">Social</h1>
          <div className="flex gap-x-4 mt-2">
            {socialData.map((data, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <SocialMediaItem {...data} />
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<Boolean>(false)
  const [loaded, setLoaded] = useState<Boolean>(false)
  const { theme, setTheme } = useTheme()
  const pathName = usePathname()

  useEffect(() => {
    setLoaded(true)
  }, [setLoaded])

  useEffect(() => {
    setNavOpen(false)
  }, [pathName])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setNavOpen(!event.matches)
    }

    handleMediaQueryChange({
      matches: mediaQuery.matches,
    } as MediaQueryListEvent)

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <>
      <nav className="fixed w-full backdrop-blur z-50 bg-white dark:bg-dark-900">
        <div className="flex justify-between items-center px-5 py-4">
          <div className="text-light-900 dark:text-dark-100">
            <h1 className="text-sm font-bold">Andiko Yoga Wardhana</h1>
            <h2 className="text-xs font-medium">Full Stack Developer</h2>
          </div>

          {/* Mobile Navbar */}
          <div className="flex gap-4 md:hidden">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {loaded ? (
                theme === 'light' ? (
                  <MoonIcon className="w-4 h-4 text-light-900" />
                ) : (
                  <SunIcon className="w-4 h-4 text-dark-100" />
                )
              ) : (
                <span className="animate-pulse">...</span>
              )}
            </button>
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? (
                <XmarkIcon className="w-5" />
              ) : (
                <GripLinesIcon className="w-5" />
              )}
            </button>
          </div>

          <div className="hidden w-fit p-1 rounded-full text-light-900 bg-light-300 md:flex md:items-center md:gap-x-4 dark:text-dark-100 dark:bg-dark-800">
            {navLinkData.map((data, index) => (
              <Link
                key={index}
                href={data.link}
                scroll={false}
                className={`${
                  pathName === data.link
                    ? 'px-4 py-2 w-fit text-dark-100 bg-light-500 dark:bg-[#4A4A4A]'
                    : ''
                } px-4 py-2 w-fit rounded-full text-light-900 font-Quicksand font-medium text-xs dark:text-dark-100 cursor-pointer`}
              >
                {data.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-x-5 items-center">
            <div>
              <p className="text-end text-sm text-light-900 dark:text-dark-50">
                Social
              </p>
              <div className="flex gap-x-2 text-sm">
                {socialData.map((data, index) => (
                  <Link
                    key={index}
                    href={data.link}
                    className="text-light-500 hover:text-light-900 dark:text-dark-300 dark:hover:text-dark-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {loaded ? (
                theme === 'light' ? (
                  <MoonIcon className="w-5 h-5 text-light-900" />
                ) : (
                  <SunIcon className="w-5 h-5 text-dark-100" />
                )
              ) : (
                <span className="animate-pulse">...</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <NavLink navOpen={navOpen} />
    </>
  )
}

export default Navbar

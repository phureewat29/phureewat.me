import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ThemeToggle } from './themeToggle'
import { NavLink } from './atoms'
import avatar from '../../public/images/the-avatar.png'

const routes = [
  {
    path: '/',
    label: 'HOME',
    exact: true,
  },
  {
    path: '/about',
    label: 'ABOUT',
  },
]

export function Header() {
  const router = useRouter()
  return (
    <header className="container h-32 max-w-3xl px-5 m-auto overflow-hidden sm:px-12 md:px-20">
      <nav
        className="flex items-center justify-start h-full mt-auto space-x-6 text-sm md:justify-start"
        aria-label="Main Navigation"
      >
        <div className="items-center flex-grow hidden space-x-6 sm:flex">
          {routes.map(route => (
            <NavLink
              key={route.path}
              to={route.path}
              title={route.label}
              selected={
                route.exact === true
                  ? route.path === router.asPath
                  : router.asPath.startsWith(route.path)
              }
            />
          ))}
        </div>
        <ThemeToggle className="hidden mt-1 transition-transform ease-in-out focus:outline-none sm:block hover:text-accent hover:-translate-y-1 focus-visible:outline-accent" />
      </nav>
    </header>
  )
}

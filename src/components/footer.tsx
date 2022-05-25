import { NavLink } from './atoms'
import { GitHub24, MailAt24, Twitter24 } from './icons'

const routes = [
  {
    path: '/',
    label: 'HOME',
  },
  {
    path: '/principles',
    label: 'PRINCIPLES',
  },
  {
    path: '/about',
    label: 'ABOUT',
  },
]

export function Footer() {
  return (
    <footer className="relative w-full h-56 text-gray-800 dark:text-gray-200 overflow-hidden">
      <div className="container h-full px-5 pt-24 pb-12 m-auto max-w-3xl md:px-20">
        <div className="container flex-col justify-between md:space-y-8">
          <nav className="flex-row items-center justify-center hidden space-x-6 text-sm lg:flex md:justify-end">
            {routes.map(route => (
              <NavLink key={route.path} to={route.path} title={route.label}>
                {route.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col-reverse space-y-8 space-y-reverse md:flex-row md:justify-between md:space-y-0">
            <span
              className="self-center text-xs tracking-wider md:self-end"
              aria-label="Copyright"
            >
              © 2022 Phureewat Aphibansri. All Rights Reserved.
            </span>
            <div className="flex flex-row items-center justify-center space-x-6 md:justify-end">
              <span>
                <a
                  href="mailto:a.phureewat@gmail.com"
                  aria-label="Email a.phureewat@gmail.com"
                  title="Email"
                  className="focus-visible:outline-accent focus:text-accent"
                >
                  <MailAt24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/phureewat29"
                  aria-label="Visit GitHub profile"
                  title="Visit GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-accent focus:text-accent"
                >
                  <GitHub24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/phureewat29"
                  aria-label="Visit Twitter profile"
                  title="Visit Twitter profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-accent focus:text-accent"
                >
                  <Twitter24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

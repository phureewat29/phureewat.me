import Link from 'next/link'
import { Fragment } from 'react'
import { Contact } from '@/components/contact'
import { SEO } from '@/components/seo'

export default function About() {
  return (
    <Fragment>
      <SEO title="About" />
      <div className="container">
        <h1 className="font-bold text-4xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/phureewat29">@phureewat29</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/phureewat29">@phureewat29</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://phureewat.me">
                <a>https://phureewat.me</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/phureewat/">
                hhttps://www.linkedin.com/in/phureewat/
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <p>
            Phureewat Aphibansri graduated from Chulalongkorn University with a BS in
            Computer Engineering.
          </p>
        </div>
      </div>
      <Contact />
    </Fragment>
  )
}

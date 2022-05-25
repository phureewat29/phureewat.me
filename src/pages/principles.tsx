import { Fragment } from 'react'
import { Contact } from '@/components/contact'
import { SEO } from '@/components/seo'

export default function Principles() {
  return (
    <Fragment>
      <SEO title="Principles" />
      <div className="container">
        <h1 className="font-bold text-4xl tracking-tight mb-4 text-black dark:text-white">
          Principles
        </h1>
        <div className="prose dark:prose-dark">
          <p>
            Here are some of my favorite books, and blogs that influenced my life's principles.
            Each has shaped, and continues to influence, my thinking in some way.
          </p>
          <h3>Books</h3>
          <p>
            <li>Work Rules!: Insights from Inside Google That Will Transform</li>
            <li>No Rules Rules: Netflix and the Culture of Reinvention</li>
            <li>Good to Great: Why Some Companies Make the Leap and Others</li>
            <li>High Output Management</li>
            <li>Zero to One: Notes on Startups, or How to Build the Future</li>
            <li>Principles: Life and Work</li>
            <li>Trillion Dollar Coach</li>
            <li>What I Wish I Knew When I Was 20</li>
            <li>The Subtle Art of Not Giving a F*ck</li>
          </p>
        </div>
      </div>
      <Contact />
    </Fragment>
  )
}

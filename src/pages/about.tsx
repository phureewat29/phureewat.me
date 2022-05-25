import { Fragment } from 'react'
import { About24 } from '@/components/icons'
import { Contact } from '@/components/contact'
import { SEO } from '@/components/seo'
import { components as mdx } from '@/components/mdxComponents'

export default function About() {
  return (
    <Fragment>
      <SEO title="About" />
      <div className="container">
        <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
          About Me
        </h1>
        <article className="max-w-2xl min-w-0 text-base lg:text-lg text-fore-subtle">
          <mdx.p>
            I'm Phureewat Aphibansri, I work full-time as a game programmer at&nbsp;
            <mdx.a href="https://secret6.com">Secret 6, Inc</mdx.a>. In my free
            time, I study front-end development with React. My goal is to write
            useful apps and contribute to open source projects while working a
            full-time job.
          </mdx.p>
          <mdx.h3>Why make this website?</mdx.h3>
          <mdx.p>
            I made this website to learn what actually goes into web
            development. From planning, design, development, launch, and
            maintenance. For sure there are other things that I have yet to
            encounter, and I’m ready to learn them. This also serves a
            motivation for me to continue making projects because now I finally
            have a place to showcase them.
          </mdx.p>
        </article>
      </div>
      <Contact />
    </Fragment>
  )
}

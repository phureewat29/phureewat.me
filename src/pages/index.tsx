import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { SEO } from '@/components/seo'
import { Contact } from '@/components/contact'
import { getAllFrontMatters } from '@/lib/mdx'
import avatar from '../../public/images/the-avatar.png'

import type { Frontmatter } from '@/types/frontmatter'

interface IndexPageProps {
  posts: Frontmatter[]
}

export default function IndexPage({ posts }: IndexPageProps) {
  return (
    <Fragment>
      <SEO />
      <div className="flex flex-col-reverse items-center mt-20 lg:flex-row lg:justify-between lg:space-x-6">
        <div className="max-w-3xl mt-12 lg:mt-0 sm:text-center md:text-center lg:text-left">
          <p className="font-bold text-4xl mb-1 text-black dark:text-white">
          Phureewat Aphibansri
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
            Engineering Lead | Payments and Blockchains Enthusiast
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I'm crafting meaningful software to enhance people's lives.
          </p>
          <p className="mb-16 text-gray-700 dark:text-gray-300 ">
            A leader who believes in developing trust, empowering others, and continually drives and delegates the ownership.
          </p>
        </div>
        <div className="relative w-32 h-32">
          <div className="top-0 flex items-center justify-center w-full h-full">
            <div className="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-48 lg:w-48">
              <Image
                src={avatar}
                alt="Phureewat Aphibansri"
                width={256}
                height={256}
                quality={100}
                priority={true}
                placeholder="blur"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFrontMatters()

  return {
    props: { posts },
  }
}

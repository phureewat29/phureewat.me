import { useState, useEffect } from 'react'
import classNames from 'classnames'

export function QuickNav() {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    )
    setHeadings(headingElements)
  }, [])

  const getLevel = nodeName => {
    return Number(nodeName.replace('H', ''))
  }

  return (
    <nav className="toc text-fore-subtle">
      <h2 className="mb-2 font-normal text-accent tracking-widestest">
        TABLE OF CONTENTS
      </h2>

      {headings.map(heading => {
        return (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={classNames(
              'block mt-3 text-sm hover:text-accent focus-visible:outline-accent',
              {
                'ml-3': getLevel(heading.nodeName) === 3,
              }
            )}
          >
            {heading.innerText}
          </a>
        )
      })}
    </nav>
  )
}

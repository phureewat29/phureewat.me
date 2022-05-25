import { ExtLink, Button } from './atoms'

export function Contact() {
  return (
    <div className="mt-32 full-width-container bg-back-secondary">
      <div className="container max-w-3xl pt-16 pb-16 mx-auto">
        <h1 className="text-2xl font-semibold text-center">
          Get in touch{' '}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className="px-4 mt-2 text-gray-800 dark:text-gray-200 text-center text-fore-secondary">
          Feel free to email me about anything or reach me around:{' '}
          <ExtLink link="https://github.com/phureewat29">GitHub</ExtLink>,{' '}
          <ExtLink link="https://twitter.com/phureewat29">Twitter</ExtLink>
        </p>
        <div className="flex justify-center pt-4 pb-2 mx-auto">
          <Button link="mailto:a.phureewat@gmail.com">
            Say hello
          </Button>
        </div>
      </div>
    </div>
  )
}

import { Fragment } from 'react'

function NotFoundPage() {
  return (
    <Fragment>
      <div className="flex justify-center">
        <h1 className="mx-auto mt-16 text-6xl font-bold text-center md:mt-20 lg:mt-24 text-back-primary">
          404
        </h1>
      </div>
      <p className="mt-24 font-medium text-center lg:mt-36 text-fore-secondary">
        Page not found. The page you’re looking for does not exist.
      </p>
    </Fragment>
  )
}

export default NotFoundPage

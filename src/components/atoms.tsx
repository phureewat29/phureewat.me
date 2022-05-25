import {
  AnchorHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export const NavLink = ({ to, title = 'Link', selected = false, ...props }) => {
  return (
    <Link {...props} href={to}>
      <a
        className={classNames(
          'font-semibold tracking-wide text-sm hover:text-accent transition duration-150 focus-visible:outline-accent',
          {
            'text-accent': selected,
            'text-fore-secondary': !selected,
          }
        )}
      >
        {title}
      </a>
    </Link>
  )
}

export const ExtLink = ({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) => {
  return (
    <a
      href={link}
      className="font-medium text-accent hover:underline focus-visible:outline-accent focus:text-accent"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

interface ButtonProps {
  children: React.ReactNode
  className?: string
  link?: string
}

export const Button = ({
  children,
  className,
  link,
  ...props
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      className={classNames(
        'px-20 py-2 rounded bg-gradient-to-r from-teal-500 to-blue-500 bg-200 bg-left hover:bg-right transition-all text-back-secondary duration-[0.5s] ease-out focus-visible:outline-accent focus:text-accent',
        className
      )}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export const Input = ({
  labelText,
  name,
  ...props
}: { labelText: string } & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="group">
      <label
        className="text-sm font-medium transition-colors duration-200 text-fore-secondary group-hover:text-accent"
        htmlFor={name}
      >
        {labelText}
      </label>
      <input
        className="block w-full p-3 mt-1 border rounded-md outline-none border-back-subtle bg-back-primary focus:border-accent text-primary disabled:opacity-50"
        name={name}
        {...props}
      />
    </div>
  )
}

export const TextArea = ({
  labelText,
  name,
  ...props
}: { labelText: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="group">
      <label
        className="text-sm font-medium transition-colors duration-200 text-fore-secondary group-hover:text-accent"
        htmlFor={name}
      >
        {labelText}
      </label>
      <textarea
        className="block w-full p-3 mt-1 border rounded-md outline-none border-back-subtle bg-back-primary focus:border-accent text-fore-primary disabled:opacity-50"
        style={{ minHeight: '80px' }}
        name={name}
        {...props}
      />
    </div>
  )
}

import React from 'react'
import { ButtonType } from '@/app/types/type'

const buttonClassName =
  "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800";

const innerClassName =
  "relative whitespace-nowrap px-3 py-2 sm:px-5 sm:py-2.5 transition-all ease-in duration-100 bg-background dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";

const Button = ({ children, onClick, href, target, rel }: ButtonType) => {
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={buttonClassName}>
        <span className={innerClassName}>{children}</span>
      </a>
    )
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
        <span className={innerClassName}>
            {children}
        </span>
    </button>
  )
}

export default Button

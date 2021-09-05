import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header({ cart }) {
  const [active, setActive] = useState(false)
  console.log(cart)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <nav className='container absolute top-0 z-50 flex flex-wrap items-center w-full px-4 py-3 mx-auto md:px-24 md:bg-transparent bg-secondary'>
        <div className='relative items-center w-24 h-24 p-2 mr-4 even:inline-flex '>
          <Link href='/'>
            <a>
              <Image
                src='/SFL.svg'
                alt='HeroBg'
                layout='fill'
                objectFit='contain'
              />
            </a>
          </Link>
        </div>

        <button
          className='inline-flex p-3 ml-auto rounded outline-none bg-primary hover:bg-secondary lg:hidden hover:text-primary'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div
          className={`${
            active ? '' : 'hidden '
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto items-center `}
        >
          <div className='flex flex-col items-start w-full font-semibold text-primary md:space-x-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/shop'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                Shop
              </a>
            </Link>

            <Link href='/components'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                Components
              </a>
            </Link>

            <Link href='/cart'>
              <a className='items-center justify-center w-full px-5 py-2 bg-beige text-secondary hover:font-bold lg:inline-flex lg:w-auto hover:text-secondary'>
                Cart {cart?.context?.items?.length}
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header

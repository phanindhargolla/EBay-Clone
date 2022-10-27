import React from 'react'
import { useMetamask, useAddress, useDisconnect } from "@thirdweb-dev/react";
import Link from 'next/link';
import { BellIcon, ShoppingCartIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';

type Props = {}

function Header({ }: Props) {
    const connectWithMetaMask = useMetamask();
    const disconnect = useDisconnect();
    const address = useAddress();

  return (
      <div className='max-w-6xl mx-auto p-2'>
          <nav className="flex items-center justify-between">
              <div className='flex items-center text-sm space-x-4'>
                  {
                      address ? (
                          <button onClick={disconnect}  className='connectWalletBtn'>Hi, {address.slice(0,4) + "..." + address.slice(-4)}</button>
                      ): (
                          <button onClick={connectWithMetaMask} className='connectWalletBtn'>Connect your wallet</button>           
                    )
                  }
                  <p className='hidden md:inline-flex cursor-pointer'>Daily Deals</p>
                  <p className='hidden md:inline-flex cursor-pointer'>Help & Contact</p>
              </div>
              <div className='flex items-center space-x-4 text-sm'>
                  <p className="hidden md:inline-flex cursor-pointer">Ship to</p>
                  <p className="hidden md:inline-flex cursor-pointer">Sell</p>
                  <p className="hidden md:inline-flex cursor-pointer">Watchlist</p>
                  <Link href='addItem' className='flex items-center hover:link'>Add to Inventory
                      <ChevronDownIcon className="h-4"/>
                  </Link>

                  <BellIcon className="h-6 w-6" />
                  <ShoppingCartIcon className='h-6 w-6' />
              </div>
          </nav>
          <section className='flex items-center py-5 space-x-2'>
              <div className='h-16 w-16 sm:w-28 md:w-44'>
                  <Link href='/'>
                      <Image className="w-full g-full object-contain" alt='Thirdweb-logo' src="https://links.papareact.com/bdb" width={100} height={100} />
                  </Link>
              </div>

              <button className="hidden lg:flex items-center space-x-2 w-20">
                  <p className='text-gray-600 text-sm'>Shop by Category</p>
                  <ChevronDownIcon className='h-4 flex-shrink-0'/>
              </button>

              <div className='flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1'>
                  <MagnifyingGlassIcon className='w-5 text-gray-400' />
                  <input className='outline-none flex-1' type="text" placeholder='Search for Anything' />
              </div>

              <button className='hidden sm:inline text-white bg-blue-600 px-5 md:px-10 py-2 border-2 border-blue-600'>
                  Search
              </button>

              <Link href='/create'>
                  <button className='px-5 md:px-10 py-2 border-2 border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 cursor-pointer'>
                      List Item
                  </button>
              </Link>
          </section>

          <hr />

          <section className='flex items-center space-x-6 text-xs md:text-sm whitespace-nowrap justify-center px-6'>
              <p className='link'>Home</p>
              <p className='link'>Electronics</p>
              <p className='link'>Computers</p>
              <p className='link hidden md:inline'>Video Games</p>
              <p className='link hidden md:inline'>Home & Garden</p>
              <p className='link hidden md:inline'>Health & Beauty</p>
              <p className='link hidden md:inline'>Collectibles and Art</p>
              <p className='link hidden md:inline'>Books</p>
              <p className='link hidden md:inline'>Music</p>
              <p className='link hidden md:inline'>Deals</p>
              <p className='link hidden md:inline'>Other</p>
              <p className='link'>More</p>
          </section>
    </div>
  )
}

export default Header
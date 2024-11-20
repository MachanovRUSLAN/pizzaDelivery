import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-12 md:h-24 lg:p-20 flex justify-between w-full text-red-500 text-center'>
      <Link href="/" className='font-bold text-xl'>Massimo</Link>
      <p>@ ALL RIGHTS PRESERVED</p>
    </div>
  )
}

export default Footer
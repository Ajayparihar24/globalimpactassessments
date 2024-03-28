import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
   <footer className='py-6'>
    <p className='text-center'>© {year} Global Impact Assessment | All Rights Reserved</p>
   </footer>
  )
}

export default Footer
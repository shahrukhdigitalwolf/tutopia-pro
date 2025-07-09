import Link from 'next/link'
import React from 'react'

function Breadcrumbs() {
  return (
    <div>
        <ul className='flex items-center gap-x-2 text-white'>
            <li>
                <Link className='text-[#c0c4fc]' href='#'>IT & Software</Link>
            </li>
            <li>
                <Link className='text-[#c0c4fc]' href='#'>IT Certifications</Link>
            </li>
            <li>
                <Link className='text-[#c0c4fc]' href='#'>Amazon AWS</Link>
            </li>
        </ul>
    </div>
  )
}

export default Breadcrumbs

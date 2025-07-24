import Link from 'next/link'
import React from 'react'

function Breadcrumbs() {
  return (
    <div>
        <ul className='flex items-center gap-x-2 text-white'>
            <li>
                <Link className='text-[#c0c4fc]' href='#'>Certification Course</Link>
            </li>
        </ul>
    </div>
  )
}

export default Breadcrumbs

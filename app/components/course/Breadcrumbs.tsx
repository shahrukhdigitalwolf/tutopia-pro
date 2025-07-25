import Link from 'next/link'
import React from 'react'

interface propsType { breadcrumb: string; }

function Breadcrumbs({breadcrumb}: propsType) {
  return (
    <div>
        <ul className='flex items-center gap-x-2 text-white'>
            <li>
                <Link className='text-[#c0c4fc]' href='#'>{breadcrumb}</Link>
            </li>
        </ul>
    </div>
  )
}

export default Breadcrumbs

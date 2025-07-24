import React from 'react'

interface textProps {
    text: string,
}

function HeadlineCourse({text}: textProps) {
  return (
    <div>
      <h1 className='text-white text-[22px] lg:text-[30px] leading-tight'>{text}</h1>
    </div>
  )
}

export default HeadlineCourse

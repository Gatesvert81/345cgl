import React from 'react'

function FaqCard({question, children}) {
  return (
    <div className='w-full rounded-md shadow-sm hover:shadow-md flex flex-col cursor-pointer' >
        <div className=' flex flex-row justify-between items-center p-5' >
            <p>{question}</p>
            <p>+</p>
        </div>
        <div className='hidden' >
            <p>
                {children}
            </p>
        </div>
    </div>
  )
}

export default FaqCard
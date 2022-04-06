import Link from 'next/link'
import React from 'react'

const Title = () => {
    return (
        <div className='bg-slate-900 flex justify-center'>
            <Link href = '/'><a className='text-3xl text-white my-5'>Waddle</a></Link>
        </div>
    )
}

export default Title
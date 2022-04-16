import React from 'react'

const HeaderForPlayerBox = () => {
    return (
        <>
            <div className='grid grid-cols-4 w-screen lg:w-[50rem]'>
                <div className='flex justify-center text-white'>position</div>
                <div className='flex justify-center text-white'>team</div>
                <div className='flex justify-center text-white'>age</div>
                <div className='flex justify-center text-white'>division</div>
            </div>
            {/* <div className='grid grid-cols-5 w-screen lg:w-[50rem]'>
                <div className='flex justify-center text-white'>draft class</div>
                <div className='flex justify-center text-white'>position</div>
                <div className='flex justify-center text-white'>team</div>
                <div className='flex justify-center text-white'>age</div>
                <div className='flex justify-center text-white'>division</div>
            </div> */}
        </>
        // <div>{player.name}</div>

    );
}

export default HeaderForPlayerBox
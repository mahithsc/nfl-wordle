import React from 'react'

const HeaderForPlayerBox = () => {
    return (
        // <div>{player.name}</div>
        <div className='grid grid-cols-5 w-screen lg:w-[50rem]'>
            <div className='flex justify-center text-white'>Name</div>
            <div className='flex justify-center text-white'>Position</div>
            <div className='flex justify-center text-white'>Team</div>
            <div className='flex justify-center text-white'>Age</div>
            <div className='flex justify-center text-white'>Division</div>
        </div>
      );
}

export default HeaderForPlayerBox
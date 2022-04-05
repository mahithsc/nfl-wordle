import React from 'react'

const HeaderForPlayerBox = () => {
    return (
        // <div>{player.name}</div>
        <div className='grid grid-cols-5 w-screen lg:w-[50rem]'>
            <div className='flex justify-center'>Name</div>
            <div className='flex justify-center'>Position</div>
            <div className='flex justify-center'>Team</div>
            <div className='flex justify-center'>Age</div>
            <div className='flex justify-center'>Division</div>
        </div>
      );
}

export default HeaderForPlayerBox
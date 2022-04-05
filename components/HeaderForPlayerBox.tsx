import React from 'react'

const HeaderForPlayerBox = () => {
    return (
        // <div>{player.name}</div>
        <div className='grid grid-cols-5 border-black border-t-4 bg-slate-200 w-screen lg:w-[50rem]'>
            <div>Name</div>
            <div>Position</div>
            <div>Team</div>
            <div>Age</div>
            <div>Division</div>
        </div>
      );
}

export default HeaderForPlayerBox
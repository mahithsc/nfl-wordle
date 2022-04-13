import React from 'react'
import Title from '../components/Title'

const HowToPlay = () => {
  return (
    <div className='min-h-screen bg-[rgb(25,25,25)]'>
      <Title />
      <div className='text-white'>
        <div className='h-16'></div>
        <div>
          <div className='text-center text-white text-5xl'>waddle <div className='text-xl mt-2'>how to play</div></div>
          {/* <div className='text-center flex-wrap text-white'>you can keep generating new players, and you have 7 tries to guesse each player. let&apos;s see if you can get it!</div> */}
        </div>

        <div className='h-12'></div>

        <div className='text-white ml-10 mr-10'>
          <div className='bg-black p-5 rounded-xl'>
            <div className='font-bold text-2xl'>objective of the game</div>
            <div className='mt-5'>the main idea of the game is to guesse the secret player in as little tries as possible. you have 7 tries to guesse each player. the game only includes first string offensive players. its that simple!</div>
          </div>

          <div className='bg-black p-5 rounded-xl mt-5'>
          <div className='font-bold text-2xl'>so how do I guess</div>
          <div className='mt-5'>click the search bar looking field, and a dropdown should apear. type in the player you are thinking about, find him, and click the </div>
          </div>


         
        </div>


      </div>
    </div>
  )
}

export default HowToPlay
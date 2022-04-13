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
            <div className='mt-5'>you want to guess the secret player in as little number of guesses as possible. it's that simple!</div>
          </div>

          {/* <div className='bg-black p-5 rounded-xl mt-5'>
            <div className='font-bold text-2xl'>so how do I guess</div>
            <div className='mt-5'>use the searchbar to find the player you are thinking about and select him. you will have 7 tried to guesse the secret player. </div>
          </div> */}

          <div className='bg-black p-5 rounded-xl mt-5'>
            <div className='font-bold text-2xl'>rules for waddle unlimited</div>
            <div className='mt-5'>
              <li className='mb-2'>you have 7 guesses to get the right player</li>
              <li className='mb-2'>use the search bar to find the player that you're thinking off</li>
              <li className='mb-2'> <span className='bg-green-500 p-1 text-black'>green</span> square means that that metric is exactly correct</li>
              <li> <span className='bg-yellow-500 p-1 text-black'>yellow</span> square means that that metric is close but not exactly ex. if you chose a player in the right confrence but not correct division the square will be yellow</li>
              <li className='mb-2'>once your 7 guesses are up or you get the correct player, click generate new player to play again!</li>
            </div>
          </div>



        </div>


      </div>
    </div>
  )
}

export default HowToPlay
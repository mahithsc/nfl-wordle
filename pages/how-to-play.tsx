import Link from 'next/link'
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
        </div>

        <div className='h-12'></div>

        <div className='text-white ml-10 mr-10'>
          <div className='bg-black p-5 rounded-xl'>
            <div className='font-bold text-2xl'>objective of the game</div>
            <div className='mt-5'>
              <li>you want to guess the secret player in as little number of guesses as possible. its that simple!</li>
              <li>the game only includes starting QB, WR, RB, and TE</li>
            </div>
          </div>

          <div className='bg-black p-5 rounded-xl mt-5'>
            <div className='font-bold text-2xl'>how to play waddle</div>
            <div className='mt-5'>
              <li className='mb-2'>you have 7 guesses to get the right player</li>
              <li className='mb-2'>use the search bar to find the player that youre thinking off</li>
              <li className='mb-2'> <span className='bg-green-500 p-1 text-black'>green</span> square means that that metric is exactly correct</li>
              <li> <span className='bg-yellow-500 p-1 text-black'>yellow</span> square means that that metric is close but not exactly ex. if you chose a player in the right confrence but not correct division the square will be yellow</li>
              <li className='mb-2'>once your 7 guesses are up or you get the correct player, click generate new player to play again!</li>
            </div>
          </div>

          <div className='bg-black p-5 rounded-xl mt-5'>
            <div className='font-bold text-2xl'>how to play waddle vs. friends</div>
            <div className='mt-5'>
              <li className='mb-2'>use the search bar to select the secret player you wish to share with your friend</li>
              <li className='mb-2'>once you have slected the player of your liking, click the copy link button</li>
              <li className='mb-2'>this button generates and copies to you device a unique link you can share with you friend</li>
              <li>share this link to you friend and have them guess who the player is!</li>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-7'>
        <div className='text-white text-center'>created by: <Link href={'https://www.linkedin.com/in/mchitrapu/'}><a className='underline'>Mahith Chitrapu</a></Link></div>
        <div className='text-white text-center'>inspired by the original: <Link href={'https://weddlegame.com'}><a className='underline'>Weddle</a></Link></div>
        <div className='text-white text-center'>link to code/github: <Link href={'https://github.com/mahithsc/nfl-wordle'}><a className='underline'>Mahith Chitrapu</a></Link></div>
      </div>



    </div>
  )
}

export default HowToPlay
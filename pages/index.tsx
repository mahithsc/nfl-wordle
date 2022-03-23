import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home:NextPage = () => {
  return (
    <div>
      <div className='bg-green-200 flex justify-center'>
        <div>NFL Wordle</div>
      </div>
      <div className='items-center flex flex-col relative'>
        <img src="https://a.espncdn.com/i/headshots/nfl/players/full/4241464.png" className='flex-1 brightness-0'/>
        <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0 opacity-100'></div>
      </div>
    </div>
  )
}

export default Home
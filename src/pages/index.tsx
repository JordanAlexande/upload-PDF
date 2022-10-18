import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { trpc } from '@/utils/trpc'
import { getOptionsForVote } from '@/utils/getRamdomPokemon'
import { useState } from 'react'

const Home: NextPage = () => {
  //const [firs, second] = getOptionsForVote()
  const [datos, setDatos] = useState([])
  console.log(datos)
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center' > Wich Pokemon is rounded</div >
      <div className='p-2' />
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
        <div className='w-16 h-16 bg-red-800'>1</div>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-800'>2</div>
      </div>
    </div >
  )
}

export default Home


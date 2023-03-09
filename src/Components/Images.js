import React from 'react'
import express from '../Images/express.png' 
import git from '../Images/git.png' 
import Mongo from '../Images/Mongo.png' 

function Images() {
  return (
    <div className='flex space-x-4'>
        <img src={git} alt=""  className='h-10 w-10'/> 
        <img src={express} alt="" className='h-10 w-10'/> 
        <img src={Mongo} alt="" className='h-10 w-10'/> 
    </div>
  )
}

export default Images

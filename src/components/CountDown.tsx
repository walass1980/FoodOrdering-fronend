"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endigDate = new Date("2024-05-11")

const CountDown = () => {
  return (
<Countdown className="font-bold text-5xl text-yellow-300" date={endigDate}/>
  )
}

export default CountDown
import React from 'react'

interface MarqueeProps {
  text: string
}

const Marquee = (props: MarqueeProps) => {
  return (
    <div
      id="marquee"
      className="flex overflow-hidden border-b-2 border-black bg-black py-[1.5rem] text-white"
    >
      <div
        id="looping-text-content"
        className="flex w-full animate-looptext whitespace-nowrap text-xl antialiased md:text-3xl lg:text-6xl"
      >
        <div className="flex pr-3">{props.text}</div>
        <div className="flex pr-3">{props.text}</div>
        <div className="flex pr-3">{props.text}</div>
        <div className="flex pr-3">{props.text}</div>
        <div className="flex pr-3">{props.text}</div>
        <div className="flex pr-3">{props.text}</div>
        <div className="flex pr-3">{props.text}</div>
        <div className="flex pr-3">{props.text}</div>
        <div className="flex pr-3">{props.text}</div>
      </div>
    </div>
  )
}

export default Marquee

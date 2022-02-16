import React from 'react'

interface CharacterCardProps {
  title: string
  subtitle: string
  description: string
  lottieSrc: string
}

const CharacterCard = React.forwardRef((props: CharacterCardProps, ref) => {
  return (
    <div>
      <div className="card-wrap">
        <div className="card-thumbnail">
          <lottie-player
            id="Lottie"
            className="border-l-2 border-r-2 border-black"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src={props.lottieSrc}
          ></lottie-player>
        </div>
        <div className="card-text">
          <h1 className="py-3 text-2xl md:text-3xl">{props.title}</h1>
          <p>{props.subtitle}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
})

export default CharacterCard

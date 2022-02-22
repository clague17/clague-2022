import react from 'react'

interface ProjectCardProps {
  img: string
  question: string
  title: string
}

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-card-thumbnail">
        <img
          src="/pokecandy-cap.gif"
          alt="pokecandy"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col p-4 text-left">
        <p className="text-lg font-light">how do solana NFTs work?</p>
        <p className="text-3xl font-bold">PokéCandy Drop</p>
        <div className="flex w-full py-2">
          <p className="border-2 border-black bg-info px-2">Typescript</p>
          <p className="border-t-2 border-b-2 border-r-2 border-black bg-yellow-300 px-2">
            ChakraUI
          </p>
          <p className="border-t-2 border-b-2 border-r-2 border-black bg-green px-2">
            Anchor
          </p>
        </div>
        <p>
          A CandyMachine v1 NFT minting site live on Solana devnet. Playground
          for integrating Phantom, using Anchor and solana/web3.js to create
          token accounts and mint to users.
        </p>
      </div>
    </div>
  )
}

export default ProjectCard

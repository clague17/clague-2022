import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Builder() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Luis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full justify-center border-t-2 border-b-2 border-black pl-2">
        <div
          id="navcontainer"
          className="align-center mx-5 flex w-full flex-row justify-between"
        >
          <Link href="/">
            <img src="/luis_banner.svg" alt="Luis Clague" className="w-64" />
          </Link>
          <div id="right-navbar" className="flex">
            <div className="navcontainer-content m-auto flex">Writing</div>
            <div className="navcontainer-content m-auto flex">About Me</div>
            <div className="flex border-black bg-black p-2 py-5 text-white hover:border-t-0 hover:border-b-0 hover:bg-accent hover:text-black sm:border-2">
              say hello
            </div>
          </div>
        </div>
      </main>
      <div className="flex w-full flex-col border-black">
        <div className="py-5 text-center">
          <p className="text-4xl">excellent choice—welcome to my garage!</p>
          <p>
            TLDR; I'm a software engineer interested in accessibility, crypto,
            and cool shiny things that solve tough difficult problems
          </p>
        </div>
        <div id="projects-list">
          <div className="z-5 flex flex-col py-3 md:m-auto lg:w-[60%]">
            <div id="project" className="project-card">
              <div className="project-card-thumbnail">
                <img
                  src="/new-poke-dex-cap.gif"
                  alt="poke-dex"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-4 text-left">
                <p className="text-lg font-light">
                  how do I get involved with blockchain?
                </p>
                <p className="text-3xl font-bold">pokéDEX</p>
                <div className="flex w-full py-2">
                  <p className="border-2 border-black bg-info px-2">
                    Typescript
                  </p>
                  <p className="border-t-2 border-b-2 border-r-2 border-black bg-yellow-300 px-2">
                    TailwindCSS
                  </p>
                  <p className="border-t-2 border-b-2 border-r-2 border-black bg-orange px-2">
                    Rust
                  </p>
                </div>
                <p>
                  A fully functional decentralized exchange live on Solana
                  devnet. Learned about token accounts, PDAs, CPIs, and Rust
                  basics to implement smart contract that regulates the escrow
                  program necessary for the DEX.
                </p>
              </div>
            </div>
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
                  <p className="border-2 border-black bg-info px-2">
                    Typescript
                  </p>
                  <p className="border-t-2 border-b-2 border-r-2 border-black bg-yellow-300 px-2">
                    ChakraUI
                  </p>
                  <p className="border-t-2 border-b-2 border-r-2 border-black bg-green px-2">
                    Anchor
                  </p>
                </div>
                <p>
                  A CandyMachine v1 NFT minting site live on Solana devnet.
                  Playground for integrating Phantom, using Anchor and
                  solana/web3.js to create token accounts and mint to users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:m-auto md:w-[80%] md:flex-row md:flex-row lg:w-[60%]">
          <div id="project" className="project-card">
            <div className="project-card-thumbnail">
              <div className="w-full border-black bg-white md:rounded-l-lg md:border-r-2">
                <img
                  src="/ricehouse.png"
                  alt="ricehouse"
                  className="w-full object-contain p-4"
                />
              </div>
            </div>
            <div className="flex flex-col p-4 text-left">
              <p className="text-lg font-light">
                What can I do during the pandemic?
              </p>
              <p className="text-3xl font-bold">RiceHouse</p>
              <div className="flex w-full py-2">
                <p className="border-2 border-black bg-pink px-2">HTML</p>
                <p className="border-t-2 border-b-2 border-r-2 border-black bg-yellow-300 px-2">
                  CSS
                </p>
              </div>
              <p>
                An ambitious project to escape to Hawaii and create content
                during the pandemic of 2020. I built out the website to garner
                interest and run the outreach to Rice students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

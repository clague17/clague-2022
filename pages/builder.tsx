import Head from 'next/head'
import Link from 'next/link'

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
          <Link href="/" as="button">
            <img src="/luis_banner.svg" alt="Luis Clague" className="w-64" />
          </Link>
          <div id="right-navbar" className="flex">
            <div className="navcontainer-content flex py-5 text-center">
              Writing
            </div>
            <div className="navcontainer-content flex py-5 text-center">
              About Me
            </div>
            <div className="align-center flex border-l-2 border-r-2 border-black bg-black p-2 py-5 text-white hover:bg-accent hover:text-black">
              say hello
            </div>
          </div>
        </div>
      </main>
      <div className="flex w-[90%] flex-col border-black pl-2 text-center">
        <div className="py-5">
          <p className="text-4xl">excellent choice—welcome to my garage!</p>
          <p>
            TLDR; I'm a software engineer interested in accessibility, crypto,
            and cool shiny things that solve tough difficult problems
          </p>
        </div>
        <div id="md:w-[80%] md:m-auto lg:w-[60%] justify-start">
          <p className="text-7xl">January 2021</p>
          <p className="text-left text-7xl">--</p>
        </div>
        <div className="flex flex-col py-3 md:m-auto md:w-[80%] md:flex-row md:flex-row lg:w-[60%]">
          <div id="project" className="project-card">
            <div className="flex justify-center border-b-2 border-black md:border-transparent">
              <img
                src="/poke-dex.gif"
                alt="ricehouse"
                className="flex h-64 object-cover md:max-w-[30vw]"
              />
            </div>
            <div className="flex flex-col p-4 text-left">
              <p className="text-lg font-light">
                how do I get involved with blockchain?
              </p>
              <p className="text-3xl font-bold">pokéDEX</p>
              <div className="flex w-full py-2">
                <p className="border-2 border-black bg-info px-2">Typescript</p>
                <p className="border-t-2 border-b-2 border-r-2 border-black bg-yellow-300 px-2">
                  TailwindCSS
                </p>
                <p className="border-t-2 border-b-2 border-r-2 border-black bg-orange px-2">
                  Rust
                </p>
              </div>
              <p>
                A fully functional decentralized exchange live on Solana devnet.
                Playground for learning about token accounts, PDAs, CPIs, and
                all things Solana development. Learned Rust basics to implement
                smart contract that regulates the escrow program necessary for
                the DEX.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:m-auto md:w-[80%] md:flex-row md:flex-row lg:w-[60%]">
          <div id="project" className="project-card">
            <div className="flex justify-center border-b-2 border-black md:border-transparent">
              <img
                src="/ricehouse.png"
                alt="ricehouse"
                className="flex h-64 object-cover md:max-w-[40vw]"
              />
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
                during the pandemic of 2021. I built out the website to garner
                interest and run the outreach to Rice students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

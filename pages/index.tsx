import Head from 'next/head'
import { useRef, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaSpotify, FaInstagram } from 'react-icons/fa'

export default function Home() {
  const ref = useRef(null)
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  })
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-05 flex w-full flex-1 flex-col items-center justify-center text-center">
        <img src="/luis_banner.svg" alt="Luis Clague" className="mx- w-full" />
        <div className="flex w-full justify-center border-t-2 border-b-2 border-black pl-2">
          <div id="navcontainer" className="align-center flex py-5">
            <div className="navcontainer-content">Writing</div>
            <div className="navcontainer-content">About Me</div>
          </div>
          <div className="align-center flex border-l-2 border-r-2 border-black bg-black p-2 py-5 text-white hover:bg-accent hover:text-black">
            say hello
          </div>
        </div>
        <div className="flex w-full justify-center border-b-2 border-black ">
          <div id="navcontainer" className="align-center flex py-1">
            <a href="https://github.com/clague17" target="_blank">
              <div className="hover:border-r-1 align-center flex flex-col px-5 hover:border-black hover:bg-green">
                <FaGithub />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/luisclague/" target="_blank">
              <div className="hover:border-r-1 align-center flex flex-col px-5 hover:border-black hover:bg-pink">
                <FaLinkedin className="" />
              </div>
            </a>
            <a href="https://open.spotify.com/user/1243374848" target="_blank">
              <div className="hover:border-r-1 align-center flex flex-col px-5 hover:border-black hover:bg-yellow-400">
                <FaSpotify />
              </div>
            </a>
            <div className="hover:border-1 border-black px-5 hover:bg-purple">
              <a href="https://www.instagram.com/luisclague" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-[90vh] flex-col bg-red sm:w-full">
          <div
            id="character"
            className="flex h-[100%] flex-col justify-between sm:flex-row"
          >
            <div id="builder" className="character-thirds w-[33%] bg-green">
              <div id="builder-card" className="card-wrap">
                <div className="card-thumbnail">
                  <lottie-player
                    id="firstLottie"
                    className="border-l-2 border-r-2 border-black"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets10.lottiefiles.com/packages/lf20_tfqocvhu.json"
                  ></lottie-player>
                </div>
                <div className="card-text">
                  <h1 className="py-3 text-3xl">The Builder</h1>
                  <p>
                    Choose me for info on what I've worked on and what I can
                    bring to the table. If you're a recruiter or interested in
                    Luis the engineer, pick me!
                  </p>
                </div>
              </div>
            </div>
            <div id="person" className="character-thirds w-[34%] bg-pink">
              <div id="builder-card" className="card-wrap">
                <div className="card-thumbnail">
                  <lottie-player
                    id="firstLottie"
                    className="border-l-2 border-r-2 border-black"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets7.lottiefiles.com/private_files/lf30_lh5nbalk.json"
                  ></lottie-player>
                </div>
                <div className="card-text">
                  <h1 className="py-3 text-3xl">The Person</h1>
                  <p>This is the more personal side of me.</p>
                  <p>
                    Maybe you're curious about the time I jumped out of an
                    airplane, or the time I lived in a different country for
                    four months.
                  </p>
                  <p>Pick me and pull up a chair for story time!</p>
                </div>
              </div>
            </div>
            <div id="curious" className="character-thirds w-[33%] bg-purple">
              <div className="card-wrap">
                <div className="card-thumbnail">
                  <lottie-player
                    id="curiousLottie"
                    className="border-l-2 border-r-2 border-black"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets10.lottiefiles.com/packages/lf20_xk2hb3ks.json "
                  ></lottie-player>
                </div>
                <div className="card-text">
                  <h1 className="py-3 text-3xl">The Curious</h1>
                  <p>
                    This is what I'm currently curious about and trying to
                    learn.
                  </p>
                  <p>
                    Pick me and let's indulge in an exploratory chat about
                    everything and nothing.
                  </p>
                </div>
              </div>
            </div>
            <div id="choose-your-character"></div>
          </div>
          <div
            id="looping-text-track"
            className="flex overflow-hidden border-b-2 border-black bg-black py-[1.5rem] text-white"
          >
            <div
              id="looping-text-content"
              className="flex h-[10vh] w-full animate-looptext whitespace-nowrap text-6xl antialiased"
            >
              <div className="flex pr-3">• Choose your own adventure!</div>
              <div className="flex pr-3">• Choose your own adventure!</div>
              <div className="flex pr-3">• Choose your own adventure!</div>
              <div className="flex pr-3">• Choose your own adventure!</div>
              <div className="flex pr-3">• Choose your own adventure!</div>
              <div className="flex pr-3">• Choose your own adventure!</div>
              <div className="flex pr-3">• Choose your own adventure!</div>
              <div className="flex pr-3">• Choose your own adventure!</div>
              <div className="flex pr-3">• Choose your own adventure!</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

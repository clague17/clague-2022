import Head from 'next/head'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaSpotify, FaInstagram } from 'react-icons/fa'
import Marquee from '../components/Marquee'
import CharacterCard from '../components/CharacterCard'

export default function Home() {
  const ref = useRef(null)
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  })
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Luis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <img src="/luis_banner.svg" alt="Luis Clague" className="w-full" />
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
                <FaLinkedin />
              </div>
            </a>
            <a href="https://open.spotify.com/user/1243374848" target="_blank">
              <div className="hover:border-r-1 align-center flex flex-col px-5 hover:border-black hover:bg-yellow-400">
                <FaSpotify />
              </div>
            </a>
            <a href="https://www.instagram.com/luisclague" target="_blank">
              <div className="hover:border-1 border-black px-5 hover:bg-purple">
                <FaInstagram />
              </div>
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col bg-red md:h-[100vh]">
          <Marquee text={'• Choose your own adventure!'} />
          <div
            id="character-desktop"
            className="flex h-[100%] flex-col justify-between md:flex-row"
          >
            <div className="character-thirds bg-green md:w-[33%]">
              <Link href="/builder">
                <div className="">
                  <CharacterCard
                    title={'The Builder'}
                    subtitle={
                      "Choose me for info on what I've worked on and what I can bring to the table."
                    }
                    description={
                      "If you're a recruiter or interested in Luis the engineer, pick me!"
                    }
                    lottieSrc={
                      'https://assets10.lottiefiles.com/packages/lf20_tfqocvhu.json'
                    }
                  />
                </div>
              </Link>
            </div>
            <div id="person" className="character-thirds bg-pink md:w-[34%]">
              <Link href="/person">
                <div>
                  <CharacterCard
                    title={'The Person'}
                    subtitle={
                      "Maybe you're curious about the time I jumped out of an airplane, or the time I lived in a different country for four months"
                    }
                    description={'Pick me and pull up a chair for story time!'}
                    lottieSrc={
                      'https://assets7.lottiefiles.com/packages/lf20_QIvVpl.json'
                    }
                  />
                </div>
              </Link>
            </div>
            <div id="curious" className="character-thirds bg-purple md:w-[33%]">
              <Link href="/curious">
                <div>
                  <CharacterCard
                    title={'The Curious'}
                    subtitle={
                      "This is what I'm currently curious about and trying to learn"
                    }
                    description={
                      "Pick  me and let's indulge in an exploratory chat about everything and nothing"
                    }
                    lottieSrc={
                      'https://assets10.lottiefiles.com/packages/lf20_xk2hb3ks.json'
                    }
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

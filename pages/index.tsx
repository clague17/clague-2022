import Head from 'next/head'
import { FaGithub, FaLinkedin, FaSpotify, FaInstagram } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-05 flex w-full flex-1 flex-col items-center justify-center text-center">
        <img src="/luis_banner.svg" alt="Luis Clague" className="mx- w-full" />
        <div className="flex w-full justify-center border-t-2 border-b-2 border-black pl-2">
          <div id="navcontainer" className="align-center flex py-5">
            <div className="mx-5">Hello</div>
            <div className="mx-5 border-transparent transition duration-150 hover:border-black">
              Hello
            </div>
          </div>
          <div className="align-center flex border-l-2 border-r-2 border-black bg-black p-2 py-5 text-white hover:bg-accent hover:text-black">
            say hello
          </div>
        </div>
        <div className="flex w-full justify-center border-b-2 border-black ">
          <div id="navcontainer" className="align-center flex py-1">
            <div className="hover:border-r-1 align-center flex flex-col px-5 hover:border-black hover:bg-green">
              <FaGithub />
            </div>
            <div className="hover:border-r-1 align-center flex flex-col px-5 hover:border-black hover:bg-red">
              <FaLinkedin className="" />
            </div>
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
        <div id="character" className="flex flex-col md:w-full md:flex-row">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="text-6xl font-bold">
          welcome to my corner of the internet
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}

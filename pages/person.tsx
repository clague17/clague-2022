import Head from 'next/head'
import Link from 'next/link'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

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
          <p className="text-4xl">glad you're here :)</p>
          <p>
            TLDR; here's an amalgam of things I've chosen to spend my silly
            little life doing
          </p>
        </div>
        <div className="main-content">
          <div className="rounded-xl bg-black">
            <div className="p-1">
              <LiteYouTubeEmbed
                id="hRySxLdrRZQ"
                title="Soccer across europe"
                poster="maxresdefault"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
      <div className="flex w-full flex-col border-black">
        <div className="py-5 text-center">
          <p className="text-4xl">glad you're here :)</p>
          <p>
            TLDR; i enjoy doing scary things and proving to myself that they're
            not scary after all
          </p>
        </div>
      </div>
    </div>
  )
}

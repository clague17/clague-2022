import Head from 'next/head'

export default function Builder() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Luis Clague</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full justify-center border-t-2 border-b-2 border-black pl-2">
        <div
          id="navcontainer"
          className="align-center mx-5 flex w-full flex-row justify-between"
        >
          <img src="/luis_banner.svg" alt="Luis Clague" className="w-64" />
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
      <div className="align-center flex w-[80%] justify-center border-black pl-2 text-center">
        <p className="py- text-4xl">
          welcome to my garage! here's what I like to work on
        </p>
      </div>
    </div>
  )
}

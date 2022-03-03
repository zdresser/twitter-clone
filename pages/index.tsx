import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Login from '../components/Login'
import { getProviders, getSession, useSession } from 'next-auth/react'
import { IHome } from '../types/types'

export default function Home<IHome>({
  trendingResults,
  followResults,
  providers,
}) {
  const { data: session } = useSession()

  if (!session) return <Login providers={providers} />

  console.log(session.user)
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black">
        <Sidebar />
        <Feed />

        {/*Widgets*/}

        {/*Modal*/}
      </main>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  )
  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  )
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  }
}

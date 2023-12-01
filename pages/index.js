import Head from 'next/head'
import { HomePage } from '../src/components/home/home-page'
// export async function getServerSideProps(){
//   const {events_categories} = await import ('/tmp/data/data.json');
//   return {
//       props:{
//           data: events_categories
//       }
//   }
// }
export default function Home() {
  return (
    <>
      <Head>
        <title>Juandalovo - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-lovo.webp" />
      </Head>
      <HomePage/>
    </>
  )
}


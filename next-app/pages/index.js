import Head from 'next/head'
import styled from '@emotion/styled'
import Landing from '../components/Landing'
import WhyHiveCapital from '../components/WhyHiveCapital'
import HighlightGrid from '../components/HighlightGrid'
import ExploreWhitepaper from '../components/ExploreWhitepaper'
import Tokenomics from '../components/Tokenomics'
import FAQ from '../components/FAQ'
import HomePageFooter from '../components/HomePageFooter'
import dynamic from 'next/dynamic'
const NFTCard = dynamic(() => import('../components/NFT'), {
  ssr: false,
  loading: () => <div>loading...</div>,
})
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Hive Capital</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="theme-color"
          content="#222222"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <Landing />
      <WhyHiveCapital />
      <ExploreWhitepaper />
      <Tokenomics />
      <FAQ />
      <HomePageFooter />
    </Container>
  )
}

const Container = styled.div`
  background-image: url('hivebackground.jpeg');
  background-size: cover;
  /* background-repeat: no-repeat; */
`

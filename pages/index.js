import Landing from '../components/landing';
import Projects from '../components/projects';
import Head from 'next/head';
import Header from '../components/header';

export default function Home() {
  return (
    <div className="root">
      <Head>
        <title>Portofolio</title>
      </Head>
      <Header />
      <div className="content">
        <Landing />
        <Projects />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

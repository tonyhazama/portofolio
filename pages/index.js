import Landing from '../components/landing';
import Projects from '../components/projects';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="root">
      <Head>
        <title>Portofolio</title>
      </Head>
      <Landing />
      <Projects />
      {/* <Footer /> */}
    </div>
  )
}

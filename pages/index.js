/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */

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

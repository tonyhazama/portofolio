/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */

import Landing from '../components/landing';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Head from 'next/head';
import Contact from '../components/contact';
import { useEffect, useState } from 'react';
import About from '../components/about';
import { NextSeo } from 'next-seo';

export default function Home() {
  const [bgPos, setBgPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', val => {
      setBgPos(window.pageYOffset / 4);
    });
  }, []);

  return (
    <div className="root" style={{'--bgpos': `${-bgPos}px`}}>
      <Head>
        <title>Muhammad Sultoni</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Muhammad Sultoni's Portofolio"
        description="I'm a Professional Web Developer. Currently working at PT. Padepokan Tujuh Sembilan"
      />
      <Landing />
      <div className="content">
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

import React, { useEffect} from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#home') {
      const element = document.getElementById('home-')
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
    }
  }, [])
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner
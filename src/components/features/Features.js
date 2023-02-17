import React, { useEffect} from 'react'
import { GiArtificialIntelligence, GiMiner } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import {TbSatellite, TbCloudComputing} from "react-icons/tb"; 
import { MdGpsFixed } from "react-icons/md";
import Title from '../layouts/Title';
import Card from './Card';



const Features = () => {

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#features') {
      const element = document.getElementById('features-')
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
    }
  }, [])

  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Geographic Information System (GIS)"
          des="Raster and Vector Data Processing - Spatial Analysis and Digital Mapping"
          icon={<FaMapMarkedAlt />}
        />
        <Card
          title="Remote Sensing"
          des=" Processing of satellite and drone images - 
          Extraction of indices - 
          Image classification"
          icon={<TbSatellite />}
        />
        <Card
          title="Machine and Deep Learning"
          des="Image classification using ML and DL algorithms"
          icon={<GiArtificialIntelligence />}
        />
        <Card
          title=" Cloud Computing"
          des="Time series analysis of satellite images via the Google Earth Engine platform"
          icon={<TbCloudComputing />}
        />
        <Card
          title="Surveying activities"
          des="All activities related to the topographic field"
          icon={<MdGpsFixed />}
        />
        <Card
          title="Geology"
          des="Mining prospecting -
          Realization of lithology and lineament maps - 
          Geochemical and geophysical studies ."
          icon={<GiMiner />}
        />
      </div>
    </section>
  );
}

export default Features
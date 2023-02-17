import React, { useEffect} from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';


const Projects = () => {

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#projects') {
      const element = document.getElementById('projects-')
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
    }
  }, [])


  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Fusarium detection using Sentinel-2 imagery and ML algorithms"
          des=" In my end-of-study project, I aimed to detect and map Fusarium in maize fields using Sentinel-2 time series data. 
          To accomplish this task, I first calculated several spectral indices from the satellite imagery. However, not all of these indices were 
          relevant to my target, so I used a Random Forest (RF) algorithm to select the most sensible indices.
          Once I had identified the relevant indices, I combined them with some optimal bands based on a literature review. This set was then used
          as the input features for a Support Vector Machine (SVM) algorithm.          
          SVM is a powerful machine learning tool that can be used to classify remote sensing data. In my project, the SVM algorithm was trained
          to classify the maize fields into two categories: Fusarium-infected and healthy. The classification was based on the selected spectral 
          indices and bands.
          After training the SVM classifier, I applied it to the Sentinel-2 time series data to generate a map of the maize fields, with areas 
          affected by Fusarium highlighted. The resulting map can be used by farmers and agricultural organizations to make informed decisions 
          about disease management and prevention."
          src={projectOne}
        />
        <ProjectsCard
          title="Ground water potential zones using GIS, Remote Sensing and AHP method"
          des=" Groundwater is a vital resource for many communities and industries, but it can be difficult to locate and assess. 
          In this project, I used a combination of GIS (Geographic Information System), remote sensing, and AHP (Analytic Hierarchy Process) 
          to evaluate the groundwater potential of a specific area.
          First, I gathered data on factors that can influence groundwater, such as topography, geology, soil type, and land use. 
          Using GIS software, I created various maps to visualize these data and identify areas with high potential for groundwater.
          Finally, I used the AHP method to integrate and prioritize the different factors affecting groundwater potential. By using AHP, I was able to weigh and 
          rank the importance of different variables and produce a final groundwater potential map.
          Overall, this project demonstrates the power of combining different techniques to assess a complex problem. By integrating GIS, 
          remote sensing, and AHP, I was able to produce a comprehensive map of groundwater potential that can inform future decision-making 
          and resource management."
          src={projectTwo}
        />
        <ProjectsCard
          title="Lithological map in the Bou Azzer region"
          des=" In this project, I aimed to generate a lithological map using remote sensing data and machine learning algorithms. I first used 
          directional filters to extract fractures from the satellite imagery data.
          After that, I used a Maximum Likelihood algorithm to classify the remote sensing data and generate a lithological map.      
          To evaluate the accuracy of the Maximum Likelihood algorithm, I compared the resulting lithological map with a digitalized version of an 
          existing geological map. The comparison allowed me to identify any 
          discrepancies between the two maps.   
          Next, we used the coefficients of each facies from the lithological map to estimate the permeability and coherence of the subsurface. 
          The permeability and coherence maps are important for understanding the properties of the subsurface and predicting the behavior of 
          fluids, such as groundwater.      
          Overall, this project demonstrates the potential of using remote sensing data and machine learning algorithms to generate lithological,
          permeability and coherence maps that can be used for a variety of applications, such as groundwater management and mineral exploration.
         "
         src={projectThree}
        />
        
        
      </div>
    </section>
  );
}

export default Projects
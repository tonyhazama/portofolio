import { useState } from "react";
import Link from 'next/link';

export const projects = [
  {
    title: "Kolese Loyola", 
    type: "Web Application",
    thumbnail: '/static/loyola.jpg',
    scope: [
      'UI/UX',
      'Web Development',
    ],
    tags: [1, 3],
    description: `Kolese Loyola is a group of Projects that consist of New Student Admissions Applicaiton`,
  },
  {
    title: "C-Smart", 
    type: "Web Application",
    thumbnail: '/static/csmart.jpg',
    scope: [
      'UI/UX',
      'Web Development',
    ],
    tags: [2],
    description: `CSMART is a web application that functions as a Swift Message Investigation Tool. The main function of the application is to investigate problematic Swift Message Case and repair it through a specific set of processes depending on the type of case and the problem it encounters. CSMART consume Spring Boot API as the main backend system.
    \nOn the front-end side, CSMART Utilize Angular 6 and bootstrap 4 CSS framework as the main foundation. With a combination of RxJS and a modular nature of Angular 6, making this application excels in term of speed performance, effectiveness, and accessibility.
    `,
  },
  {
    title: "Marketplace Auction Price", 
    type: "Web Application",
    thumbnail: '/static/map.jpg',
    tags: [1, 3],
    scope: [
      'UI/UX',
      'Web Development',
    ],
    snapshot: [
      '/static/map1.jpg',
      '/static/map2.jpg'
    ],
    description: `Market Auction Price is a service from IBID, the largest automotive auction center in Indonesia, which presents the market price statistics of auction cars in various graphic formats and details according to user needs. MAP is integrated with ACV (Astra Car Valuation) as a reliable and comprehensive standard for car valuation so that the analysis and price trends presented are more precise and accurate.
    \nMAP helped the decision to buy a dream car with a sense of comfort within the budget. Know the market price of the car to be purchased in detail according to the conditions, location and within a certain time so that it can know the price trend.
    `,
  },
  {
    title: "Trav", 
    type: "Mobile Design",
    thumbnail: '/static/trav2.jpg',
    tags: [3],
    description: 'We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.',
  },
  {
    title: "Volimond Lab", 
    type: "Website",
    thumbnail: '/static/vmdlab1.jpg',
    tags: [3],
    snapshot: [
      '/static/vmdlab2.jpg',
    ],
    description: 'We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.',
  },
];
export const tagList = ['All Tags', 'React JS', 'Angular', 'UI/UX', 'Node JS',  'ExpressJS'];

export default function Projects() {
  const [activeTags, setActiveTags] = useState('');

  const activeProjects = activeTags ? projects.map(e => ({
    ...e,
    isHidden: !e.tags.includes(activeTags)
  })) : projects;
  const activeProjectsLength = activeProjects.filter(e => !e.isHidden);
  
  return (
    <div className="section padded full-height" style={{paddingTop: '80px'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '4em'}}>
          <h2 className="title">This is what i've worked on</h2>
          <h4 className="subtitle">A curated list of professional work i did over the years.</h4>
        </div>
        <div>
          <div className="projects">
            {activeProjects.map((project, projectId) => (
              <Link href={`/projects/${projectId}`} key={`projectItem${projectId}`}>
                <div className={`project ${project.isHidden ? 'hidden' : ''}`}>
                  <MyProject {...project} />
                </div>
              </Link>
            ))}
          </div>
          <div className={`no-data ${activeProjectsLength.length > 0 ? 'hidden' : ''}`}>
            I'm still working on it
          </div>
        </div>
      </div>
    </div>
  )
}

const MyProject = (props) => {
  const {title = '', type = '', tags = [], thumbnail} = props;
  return (
    <>
      <div className="project-picture">
      <img src={thumbnail} />
      </div>
      <div className="project-desc">
        <div className="project-title">{title}</div>
        <div className="project-type">{type}</div>
        <div className="project-tags">{tags.map((tag, i) => (
          <span key={`projectItem${i}`}>{tagList[tag]}</span>
        ))}</div>
      </div>
    </>
  )
}
/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */

 import { useState } from "react";
import Link from 'next/link';

export default function Projects(props) {
  const {title, description, projects = [], type = 'work'} = props;
  
  
  return (
    <div className="section padded full-height">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '4em'}}>
          <h2 className="title">{title}</h2>
          <h4 className="subtitle">{description}</h4>
        </div>
        <div>
          <div className="projects">
            {projects.map((project, projectId) => (
              <Link href={`/projects/${type}?projectId=${projectId}`} key={`projectItem${projectId}`}>
                <div className={`project ${project.isHidden ? 'hidden' : ''}`}>
                  <MyProject {...project} />
                </div>
              </Link>
            ))}
          </div>
          <div className={`no-data ${projects.length > 0 ? 'hidden' : ''}`}>
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
        <img src={require('../public'+thumbnail)} />
      </div>
      <div className="project-desc">
        <div className="project-title">{title}</div>
        <div className="project-type">{type}</div>
      </div>
    </>
  )
}
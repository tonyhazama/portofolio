import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { projects, tagList } from '../../components/projects';
import { ArrowLeftOutlined } from '@ant-design/icons';

const labels = {
  id: {
    scope: 'Scope',
    summary: 'Summary',
    tags: 'Tags #',
    goBack: 'Go Back',
  },
  en: {
    scope: 'Scope',
    summary: 'Summary',
    tags: 'Tags #',
    goBack: 'Go Back',
  },
} 

export default function ProjectDetail(props) {
  const router = useRouter()
  const { projectId } = router.query;
  const project = projects[projectId] || {};
  const label = labels.en;

  return (
    <div className="root project-detail">
      <div className="container" style={{height: '100%'}}>

        <div className="project-desc">
          <div>
            <Link href={`/`}>
              <div className="custom-link">
                <ArrowLeftOutlined style={{marginRight: '1em'}} />
                <span>{label.goBack}</span>  
              </div>
            </Link>
          </div>
          <div className="heading">
            <h1 className="title">{project.title}</h1>
            <span className="label" style={{marginBottom: '0px'}}>{project.type || 'Project Type'}</span>
            <p className="text">{project.year || '-'}</p>
          </div>
          <div className="scope">
            <span className="label">{label.scope}</span>
            {project.scope && project.scope.map((scope, i) => {
              return (
                <p className="text" key={`scopeItem${i}`}>{scope}</p>
              )
            })}
          </div>
          <div className="summary">
            <span className="label">{label.summary}</span>
            <p className="text">{project.description}</p>
          </div>
          <div>
            <span className="label">{label.tags}</span>
            <div className="tags">
              {project.tags && project.tags.map((tag, i) => {
                return <span key={`tagItem${i}`}>{tagList[tag]}</span>
              })}
            </div>
          </div>
        </div>
        <div className="project-picture">
          <img src={project.thumbnail} />
        </div>
        <div className="project-snapshot">
          {project.snapshot && project.snapshot.map((sPic, i) => {
            return (
              <div className="snapshot-item" key={`snapshotItem${i}`}>
                <img src={sPic} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

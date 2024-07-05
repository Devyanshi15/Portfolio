import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      
      <div className='title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern}></img>
      </div>
      
      <div className='mywork-c'>
        {mywork_data.map((work,index)=>{
            return(
            <div key={index} className='work-item'>
            <h3 className='work-heading'>{work.heading}<a href={work.sourceCodeLink} target="_blank" rel="noopener noreferrer" className='source-code-link'>Source Code</a></h3>
            <a key={index} href={work.link} target="_blank" rel="noopener noreferrer"> 
            <img key={index} src={work.w_img} title={work.title}></img></a>
            </div>
            );
        })}
      </div>
{/* 
      <div className='showmore'>
        <p>Show More</p>
        <img src={arrow_icon}></img>
      </div> */}
      
    </div>
  )
}

export default MyWork



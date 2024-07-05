import React from 'react'
import './Services.css'
import theme from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

    const Services = () => {
    return (
        <div id='services' className='services'>
            <div className='service-title'>
                <h1>My Skills</h1>
                <img src={theme}></img>
            </div>
            <div className='service-container'>
                {Services_data.map((service,index)=>{
                    return <div key={index}className='service-format'>
                        <h3>{service.s_no}.{service.s_name}</h3>
                        <p>{service.s_desc1}</p>
                        <p>{service.s_desc2}</p>
                    </div>
                })}
            </div>      
        </div>
    )
    }

export default Services

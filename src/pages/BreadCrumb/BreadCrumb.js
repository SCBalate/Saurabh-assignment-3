import React from 'react'
import './BreadCrumb.scss'

const BreadCrumb = () => {
    const staticData = [
        {
            arrow: "→",
            name: 'Client'
        },
        {
            arrow: "→",
            name: 'Project'
        },
        {
            arrow: "→",
            name: 'Emails'
        },
    ]
    return (
        <div className='breadcrumb'>
            <div>
                <i className="icon-house" style={{fontSize:"25px"}}></i>
            </div>
            {
                staticData.map((item) => (
                    <>
                        <div><span className='breadcrumb-arrow'>{item.arrow}</span></div>
                        <div><span className='breadcrumb-text'>{item.name}</span></div>
                    </>
                ))
            }




        </div>
    )
}

export default BreadCrumb

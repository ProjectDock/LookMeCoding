import React from 'react'
import './Card.css'

const Card = ({name, title, image, github}) => {
    return(
        <div className="card--container">

            <div className="card--image"
                 style={{backgroundImage: `url(${image})`}}
            ></div>

            <div className="card--description">
                <h2>{name}</h2>
                <h4>{title}</h4>
            </div>
            <a href={github}>
                <div className="card--github"></div>
            </a>

        </div>
    )
}

export default Card
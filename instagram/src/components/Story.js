import React, { Component } from 'react'
import './story.css'

class Story extends Component {
    render() {
        return (
            <div className='container-fluid' style={{background:'#eeeeee'}}>
                <div className="carousel" data-flickity='{ "groupCells": true }'>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                    <div className="carousel-cell"></div>
                </div>
            </div>
        )
    }
}

export default Story
